'use client'
import './style.css'
import HundredLayout from '../hundred-layout'
import { useEffect, useState } from 'react'

export default function Horizon() {
  const [points, setPoints] = useState<{ x: number, y: number }[]>([])
  const [ticks, setTicks] = useState<{ x: number[], y: number[] }>({ x: [], y: [] })

  const [a, setA] = useState(0.01)
  const [b, setB] = useState(0.2)
  const [c, setC] = useState(0)

  const generateRandomParabola = () => {
    setA((Math.random() - 0.5) * 0.05)
    setB((Math.random() - 0.5) * 0.9)
    setC((Math.random() - 0.5) * 200)
  }

  useEffect(() => {
    const width = window.innerWidth
    const height = 500
    const xRange = Math.ceil(width / 10)
    const yRange = Math.ceil(height / 10)

    const xTicks = []
    for (let i = -xRange; i <= xRange; i++) xTicks.push(i * 10)

    const yTicks = []
    for (let i = -yRange; i <= yRange; i++) yTicks.push(i * 10)

    setTicks({ x: xTicks, y: yTicks })
  }, [])

  useEffect(() => {
    const parabolaPoints = []
    for (let x = -100; x <= 100; x += 5) {
      const y = a * x * x + b * x + c
      parabolaPoints.push({ x, y })
    }
    setPoints(parabolaPoints)
  }, [a, b, c])

  const format = (num: number) => num.toFixed(2).replace(/^-/, '−') 

  return (
    <HundredLayout
      header={<label>parabola</label>}
      footer={
        <div className="equation" onClick={generateRandomParabola}>
          y = {format(a)}x² {b >= 0 ? '+ ' : '− '}{format(Math.abs(b))}x {c >= 0 ? '+ ' : '− '}{format(Math.abs(c))}
        </div>
      }
    >
      <div className="wrapper">
        <div className="axis x-axis" />
        <div className="axis y-axis" />

        {ticks.x.map(x => (
          <div
            key={`x-${x}`}
            className="tick"
            style={{
              left: `calc(50% + ${x}px)`,
              top: '50%',
            }}
          >
            <span className="coord">({x}, 0)</span>
          </div>
        ))}

        {ticks.y.map(y => (
          <div
            key={`y-${y}`}
            className="tick"
            style={{
              top: `calc(50% - ${y}px)`,
              left: '50%',
            }}
          >
            <span className="coord">(0, {y})</span>
          </div>
        ))}

        {points.map((point, idx) => (
          <div
            key={idx}
            className="dot"
            style={{
              left: `calc(50% + ${point.x}px)`,
              top: `calc(50% - ${point.y}px)`,
            }}
          >
            <span className="coord">({point.x}, {Math.round(point.y)})</span>
          </div>
        ))}
      </div>
    </HundredLayout>
  )
}
