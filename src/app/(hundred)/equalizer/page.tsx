'use client'
import './style.css'
import HundredLayout from '../hundred-layout'
import { useEffect, useState } from 'react'
import { Wifi, WifiHigh, WifiLow } from 'lucide-react'

export default function Equalizer() {
  type Bar = {
    height: string
    animationDuration: string
    left: string
  }

  const [violence, setViolence] = useState<1 | 2 | 3>(1)
  const [bars, setBars] = useState<Bar[]>([])

  useEffect(() => {
    const temp: Bar[] = Array.from({ length: 20 }).map((_, i) => ({
      height: `${Math.random() * violence * (20 * i / 10) + 5}%`,
      animationDuration: `${1 / violence}s`,
      left: `${i * 5}px`
    }))
    setBars(temp)
  }, [violence])
  
  return (
    <HundredLayout
      header={
        <label> equalizer </label>
      }
      footer={
        <div>
          <button onClick={() => setViolence(2)}> { violence === 1 ? <WifiLow className='buttons text-hover' /> : ''}  </button>
          <button onClick={() => setViolence(3)}> { violence === 2 ? <WifiHigh className='buttons text-hover' /> : ''}  </button>
          <button onClick={() => setViolence(1)}> { violence === 3 ? <Wifi className='buttons text-hover' /> : ''}  </button>
        </div>
      }
    >
      <div className="wrapper">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="bar"
            style={{
              height: bar.height,
              animationDuration: `${(1 / violence) + Math.random() * (0.3)}s`,
              left: `${(i * 40)}px`
            }}
          ></div>
        ))}
      </div>
    </HundredLayout>
  )
}
