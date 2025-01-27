import Image from "next/image"
import { Play } from "lucide-react"
import type { Video } from "../types/project"

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="relative h-48">
        <Image src={video.thumbnailUrl || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-80" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{video.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{video.description}</p>
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full">
          {video.category}
        </span>
      </div>
    </div>
  )
}

