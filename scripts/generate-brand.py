# Regenerates public/brand/* from the official public/logo.png.
# Usage: python scripts/generate-brand.py .   (requires Pillow)
import os, sys
from PIL import Image, ImageDraw

ROOT = sys.argv[1]
SRC = os.path.join(ROOT, 'public/logo.png')
OUT = os.path.join(ROOT, 'public/brand') + '/'
GREEN, NAVY = (31, 122, 99), (8, 28, 45)        # #1f7a63, #081c2d
MINT, WHITE = (63, 184, 147), (255, 255, 255)
SCALE = 4

im = Image.open(SRC).convert('RGBA')
im = im.crop(im.getchannel('A').getbbox())
w, h = im.size
px = im.load()

# Split into the green "A" mark and the navy wordmark. The mark occupies the left ~112px of the
# trimmed source; colour decides only where the "A" and "v" columns overlap.
mark = Image.new('L', (w, h), 0); text = Image.new('L', (w, h), 0)
mp, tp = mark.load(), text.load()
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a == 0: continue
        if x < 112 and g - r > 30: mp[x, y] = a
        else: tp[x, y] = a

def up(mask):
    big = mask.resize((w * SCALE, h * SCALE), Image.LANCZOS)
    return big.point(lambda v: max(0, min(255, int((v - 128) * 2.2 + 128))))

M, T = up(mark), up(text)
W, H = M.size

def compose(mark_col, text_col, with_text=True):
    out = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    if with_text: out.paste(Image.new('RGBA', (W, H), text_col + (255,)), (0, 0), T)
    out.paste(Image.new('RGBA', (W, H), mark_col + (255,)), (0, 0), M)
    return out.crop(out.getchannel('A').getbbox())

logo = compose(GREEN, NAVY); logo.save(OUT + 'logo.png', optimize=True)
compose(MINT, WHITE).save(OUT + 'logo-light.png', optimize=True)
compose(GREEN, NAVY, False).save(OUT + 'logo-mark.png', optimize=True)
compose(MINT, NAVY, False).save(OUT + 'logo-mark-light.png', optimize=True)

def icon(size, bg=NAVY, col=MINT, radius=0.22, inset=0.22):
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    ImageDraw.Draw(canvas).rounded_rectangle([0, 0, size - 1, size - 1], int(size * radius), fill=bg + (255,))
    mk = compose(col, col, False)
    box = int(size * (1 - 2 * inset))
    mk.thumbnail((box, box), Image.LANCZOS)
    canvas.alpha_composite(mk, ((size - mk.width) // 2, (size - mk.height) // 2))
    return canvas

icon(32, inset=0.16).save(OUT + 'favicon-32.png', optimize=True)
icon(180, radius=0, inset=0.2).save(OUT + 'apple-touch-icon.png', optimize=True)
icon(512).save(OUT + 'icon-512.png', optimize=True)

og = Image.new('RGBA', (1200, 630), (245, 247, 250, 255))
lg = logo.copy(); lg.thumbnail((760, 300), Image.LANCZOS)
og.alpha_composite(lg, ((1200 - lg.width) // 2, (630 - lg.height) // 2))
og.convert('RGB').save(OUT + 'og-image.png', optimize=True)

for f in sorted(os.listdir(OUT)):
    i = Image.open(OUT + f); print(f, i.size, os.path.getsize(OUT + f) // 1024, 'KB')
