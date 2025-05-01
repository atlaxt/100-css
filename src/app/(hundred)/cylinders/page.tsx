'use client'
import './style.css'
import HundredLayout from '../hundred-layout'
import { useCallback, useEffect, useState } from 'react'
import { RefreshCcw } from 'lucide-react'

export default function Cylinders() {
type Cylinder = {
  left: number
  bottom: number
}

const [cylinders, setCylinders] = useState<Cylinder[][]>()
const [collapsed, setCollapsed] = useState<{ row: number, col: number }[]>([])

const setSylinderList = useCallback(() => {
  setCollapsed([])
  const rows = 12
  const cols = 10
  const temp: Cylinder[][] = []

  const leftStart = -20

  for (let y = 0; y < rows; y++) {
    const row: Cylinder[] = []
    for (let x = 0; x < cols; x++) {

      row.push({
        left: leftStart + x * 100 + (y % 2 === 1 ? 50 : 0),
        bottom: -550 + y * 40
      })
    }
    temp.push(row)
  }

  setCylinders(temp)
}, [])

useEffect(() => {
  setSylinderList()
}, [setSylinderList])

return (
  <HundredLayout
    header={
      <label> cylinders </label>
    }
    footer={
      <button className='text-hover' onClick={setSylinderList}> <RefreshCcw className='buttons' /> </button>
    }
  >

    <div className="wrapper">

      {cylinders?.map((row, rowIndex) =>
        row.map((cylinder, colIndex) => (
          <div
            onClick={() =>
              setCollapsed(prev => [...prev, { row: rowIndex, col: colIndex }])
            }
            key={`${rowIndex}-${colIndex}`}
            className={`cylinder ${
              collapsed.some(c => c.row === rowIndex && c.col === colIndex)
                ? 'collapsed'
                : ''
            }`}
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
