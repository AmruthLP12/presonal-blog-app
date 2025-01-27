import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Project } from "../types/project"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={project.githubUrl}
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View on GitHub
          </Link>
          <ArrowRight className="w-5 h-5 text-blue-500" />
        </div>
      </div>
    </div>
  )
}

