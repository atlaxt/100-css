'use client'
import './style.css'
import HundredLayout from '../hundred-layout'
import { useState } from 'react'
import { Pause, Play } from 'lucide-react'

export default function Cube() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <HundredLayout
      header={
        <label> cube </label>
      }
      footer={
        <button className='text-hover' onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <Pause className='buttons' />
          ) : (
            <Play className='buttons' />
          )}
        </button>
      }
    >

      <div className='wrapper'>
        <div className='scene'>
          <div className={`cube ${isPlaying ? 'running' : 'paused'}`}>
            <div className="cube-front"></div>
            <div className="cube-left"></div>
            <div className="cube-back"></div>
            <div className="cube-bottom"></div>
            <div className="cube-top"></div>
            <div className="cube-right"></div>
          </div>
        </div>
      </div>
    </HundredLayout>
  )
}
