'use client'
import './style.css'
import HundredLayout from '../hundred-layout'
import { useEffect, useState } from 'react'

export default function BlackHole() {

  interface Planet {
    x: number 
    y: number 
    size: number
    delay: number
  }

  const [planets, setPlanets] = useState<Planet[]>([])

  useEffect(() => {
    const newPlanets: Planet[] = Array.from({ length: 50 }).map(() => {
      const direction = ['top', 'bottom', 'left', 'right'][Math.floor(Math.random() * 4)]
      let x = 0
      let y = 0
  
      if (direction === 'top') {
        y = -10
        x = Math.random() * 100
      } else if (direction === 'bottom') {
        y = 110
        x = Math.random() * 100
      } else if (direction === 'left') {
        x = -10
        y = Math.random() * 100
      } else if (direction === 'right') {
        x = 110
        y = Math.random() * 100
      }
  
      return {
        x,
        y,
        size: Math.random() * 6 + 4,
        delay: Math.random() * 2,
      }
    })
  
    setPlanets(newPlanets)
  }, [])

  return (
    <HundredLayout
      header={
        <label> black_hole </label>
      }
      footer={
        <div></div>
      }
    >

      <div className="wrapper">
        <div className="black_hole"></div>
        {planets.map((p, i) => {
          const style = {
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.y}%`,
            left: `${p.x}%`,
            transform: 'translate(-50%, -50%)',
            animation: 'pull-to-center 2s ease-in infinite',
            animationDelay: `${p.delay}s`,
          }

          return <div key={i} className="planet" style={style} />
        })}

      </div>

    </HundredLayout>
  )
}
