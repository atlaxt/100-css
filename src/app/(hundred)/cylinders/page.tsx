'use client'
import './style.css'
import HundredLayout from '../hundred-layout'
import { useEffect, useState } from 'react'

export default function Cylinders() {
type Cylinder = {
  left: number
  bottom: number
}

const [cylinders, setCylinders] = useState<Cylinder[][]>()

useEffect(() => {
  const rows = 4
  const cols = 10
  const temp: Cylinder[][] = []

  const leftStart = -30

  for (let y = 0; y < rows; y++) {
    const row: Cylinder[] = []
    for (let x = 0; x < cols; x++) {
      const randomX = Math.floor(Math.random() * 20) - 10 
      const randomY = Math.floor(Math.random() * 10) - 5

      row.push({
        left: leftStart + x * 120 + (y % 2 === 1 ? 50 : 0) + randomX,
        bottom: -300 + y * 40 + randomY
      })
    }
    temp.push(row)
  }

  setCylinders(temp)
}, [])

return (
  <HundredLayout
    header={
      <label> cylinders </label>
    }
    footer={
      <div></div>
    }
  >

    <div className="wrapper">

      {cylinders?.map((row, rowIndex) =>
        row.map((cylinder, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="cylinder"
            style={{
              left: cylinder.left,
              bottom: cylinder.bottom,
              zIndex: -cylinder.bottom
            }}
            
          >
            <div className="cylinder-cap top"></div>
            <div className="cylinder-cap bottom"></div>
          </div>
        ))
      )}

    </div>

  </HundredLayout>
)
}
