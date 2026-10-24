import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PieChart, Pie, Cell,
} from 'recharts'
import { launchSpeed, growthCurve, deliveryDNA, sprintVelocity, teamMix } from '../data/content'

const C = {
  green: '#1f7a63',
  mint: '#3fb893',
  navy: '#081c2d',
  grey: '#c9d2dc',
  grid: '#e6ebf0',
  text: '#5b6b7a',
}
const axis = { fontSize: 12, fill: C.text, fontFamily: 'Plus Jakarta Sans' }

// Recharts animates on mount, so mount each chart only once it scrolls into view.
function InView({ height, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <div ref={ref} style={{ width: '100%', height }}>
      {inView && <ResponsiveContainer width="100%" height="100%">{children}</ResponsiveContainer>}
    </div>
  )
}

function Tip({ active, payload, label, unit = '' }) {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tip">
      {label && <div className="chart-tip__label">{label}</div>}
      {payload.map((p) => (
        <div key={p.dataKey} className="chart-tip__row">
          <span className="chart-tip__sw" style={{ background: p.color || p.payload.fill }} />
          {p.name}: <b>{p.value}{unit}</b>
        </div>
      ))}
    </div>
  )
}

export function LaunchSpeedChart({ height = 300 }) {
  return (
    <InView height={height}>
      <BarChart data={launchSpeed} barGap={6} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke={C.grid} />
        <XAxis dataKey="name" tick={axis} axisLine={false} tickLine={false} />
        <YAxis tick={axis} axisLine={false} tickLine={false} />
        <Tooltip content={<Tip unit=" wks" />} cursor={{ fill: 'rgba(31,122,99,0.06)' }} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 13, paddingTop: 8 }} />
        <Bar name="Traditional agency" dataKey="traditional" fill={C.grey} radius={[8, 8, 0, 0]} animationDuration={1400} />
        <Bar name="AvenSofts" dataKey="aven" fill={C.green} radius={[8, 8, 0, 0]} animationDuration={1400} animationBegin={300} />
      </BarChart>
    </InView>
  )
}

export function GrowthChart({ height = 280 }) {
  return (
    <InView height={height}>
      <AreaChart data={growthCurve} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <defs>
          <linearGradient id="gAuto" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={C.green} stopOpacity={0.35} />
            <stop offset="100%" stopColor={C.green} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gManual" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={C.navy} stopOpacity={0.12} />
            <stop offset="100%" stopColor={C.navy} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke={C.grid} />
        <XAxis dataKey="m" tick={axis} axisLine={false} tickLine={false} />
        <YAxis tick={axis} axisLine={false} tickLine={false} />
        <Tooltip content={<Tip />} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 13, paddingTop: 8 }} />
        <Area name="Manual operations" type="monotone" dataKey="manual" stroke={C.navy} strokeWidth={2} strokeDasharray="5 5" fill="url(#gManual)" animationDuration={1600} />
        <Area name="With AvenSofts systems" type="monotone" dataKey="automated" stroke={C.green} strokeWidth={3} fill="url(#gAuto)" animationDuration={1800} />
      </AreaChart>
    </InView>
  )
}

export function DNARadar({ height = 320 }) {
  return (
    <InView height={height}>
      <RadarChart data={deliveryDNA} outerRadius="72%">
        <PolarGrid stroke={C.grid} />
        <PolarAngleAxis dataKey="k" tick={{ ...axis, fontSize: 12 }} />
        <Tooltip content={<Tip />} />
        <Radar name="Industry average" dataKey="avg" stroke={C.grey} fill={C.grey} fillOpacity={0.35} animationDuration={1400} />
        <Radar name="AvenSofts" dataKey="aven" stroke={C.green} strokeWidth={2} fill={C.green} fillOpacity={0.28} animationDuration={1600} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 13 }} />
      </RadarChart>
    </InView>
  )
}

export function VelocityChart({ height = 260 }) {
  return (
    <InView height={height}>
      <BarChart data={sprintVelocity} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <defs>
          <linearGradient id="gVel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={C.mint} />
            <stop offset="100%" stopColor={C.green} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke={C.grid} />
        <XAxis dataKey="s" tick={axis} axisLine={false} tickLine={false} />
        <YAxis tick={axis} axisLine={false} tickLine={false} />
        <Tooltip content={<Tip />} cursor={{ fill: 'rgba(31,122,99,0.06)' }} />
        <Bar name="Features shipped" dataKey="features" fill="url(#gVel)" radius={[8, 8, 0, 0]} animationDuration={1400} />
      </BarChart>
    </InView>
  )
}

export function CompareBars({ data, height = 300 }) {
  return (
    <InView height={height}>
      <BarChart data={data} layout="vertical" barGap={4} margin={{ top: 0, right: 16, left: 8, bottom: 0 }}>
        <CartesianGrid horizontal={false} stroke={C.grid} />
        <XAxis type="number" tick={axis} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="k" tick={axis} axisLine={false} tickLine={false} width={150} />
        <Tooltip content={<Tip />} cursor={{ fill: 'rgba(31,122,99,0.06)' }} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 13, paddingTop: 8 }} />
        <Bar name="Before" dataKey="before" fill={C.grey} radius={[0, 6, 6, 0]} barSize={12} animationDuration={1300} />
        <Bar name="After AvenSofts" dataKey="after" fill={C.green} radius={[0, 6, 6, 0]} barSize={12} animationDuration={1300} animationBegin={250} />
      </BarChart>
    </InView>
  )
}

export function TrendArea({ data, name = 'Value', height = 220, dark = false }) {
  const stroke = dark ? C.mint : C.green
  return (
    <InView height={height}>
      <AreaChart data={data} margin={{ top: 10, right: 6, left: -18, bottom: 0 }}>
        <defs>
          <linearGradient id={`gTrend${dark ? 'D' : 'L'}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity={0.4} />
            <stop offset="100%" stopColor={stroke} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke={dark ? 'rgba(255,255,255,0.07)' : C.grid} />
        <XAxis dataKey="m" tick={{ ...axis, fill: dark ? '#8ea3b5' : C.text }} axisLine={false} tickLine={false} />
        <YAxis tick={{ ...axis, fill: dark ? '#8ea3b5' : C.text }} axisLine={false} tickLine={false} />
        <Tooltip content={<Tip />} />
        <Area name={name} type="monotone" dataKey="v" stroke={stroke} strokeWidth={3} fill={`url(#gTrend${dark ? 'D' : 'L'})`} animationDuration={1700} />
      </AreaChart>
    </InView>
  )
}

const pieColors = [C.green, C.navy, C.mint, '#7aa6c2', '#c9d2dc']

export function TeamPie({ height = 280 }) {
  return (
    <div className="team-pie">
      <InView height={height}>
        <PieChart>
          <Tooltip content={<Tip unit="%" />} />
          <Pie data={teamMix} dataKey="value" nameKey="name" innerRadius="58%" outerRadius="88%"
            paddingAngle={3} cornerRadius={6} stroke="none" animationDuration={1500}>
            {teamMix.map((_, i) => <Cell key={i} fill={pieColors[i]} />)}
          </Pie>
        </PieChart>
      </InView>
      <ul className="team-pie__legend">
        {teamMix.map((t, i) => (
          <li key={t.name}><span style={{ background: pieColors[i] }} />{t.name}<b>{t.value}%</b></li>
        ))}
      </ul>
    </div>
  )
}
