'use client'
import './style.css'
import HundredLayout from '../hundred-layout'
import { useEffect, useState } from 'react'

export default function Rain() {
  type Drop = {
    left: string
    delay: string
    duration: string
    opacity: number
  }

  const [drops, setDrops] = useState<Drop[]>([])

  useEffect(() => {
    const temp = Array.from({ length: 100 }).map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${1 + Math.random()}s`,
      opacity: Math.random() * 0.5,
    }))
    setDrops(temp)
  }, [])
  
  return (
    <HundredLayout
      header={
        <label> rain </label>
      }
    >
      <div className="wrapper">
        {drops.map((drop, i) => (
          <div
            key={i}
            className="drop"
            style={{
              left: drop.left,
              animationDelay: drop.delay,
              animationDuration: drop.duration,
              opacity: drop.opacity,
            }}
          ></div>
        ))}
      </div>

    </HundredLayout>
  )
}
