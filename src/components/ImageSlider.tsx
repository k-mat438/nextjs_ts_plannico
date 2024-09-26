import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            crossOrigin="anonymous"
          />
        </div>
      ))}
    </div>
  )
}