'use client'

import { useState, useRef } from 'react'

export default function ListenPage() {
  const [isPlaying, setIsPlaying] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const songs = [
    {
      title: "Give Me The Time To Change",
      file: "/music/give-me-the-time-to-change.mp3"
    },
    {
      title: "Hollywood",
      file: "/music/hollywood.mp3"
    },
    {
      title: "Living In Fear",
      file: "/music/living-in-fear.mp3"
    },
    {
      title: "No Cash",
      file: "/music/no-cash.mp3"
    }
  ]

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Listen to Alecstar</h1>
      
      <div className="space-y-4">
        {songs.map((song) => (
          <div key={song.file} className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
            <div className="flex items-center justify-between">
              <h2 className="text-xl">{song.title}</h2>
              <button
                onClick={() => {
                  if (isPlaying === song.file) {
                    audioRef.current?.pause()
                    setIsPlaying(null)
                  } else {
                    if (audioRef.current) {
                      audioRef.current.src = song.file
                      audioRef.current.play()
                      setIsPlaying(song.file)
                    }
                  }
                }}
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                {isPlaying === song.file ? 'Pause' : 'Play'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <audio ref={audioRef} className="hidden" />
    </div>
  )
} 