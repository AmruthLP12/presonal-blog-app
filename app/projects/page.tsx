"use client"

import { useState, useMemo } from "react"
import ProjectCard from "../components/ProjectCard"
import VideoCard from "../components/VideoCard"
import SearchBar from "../components/SearchBar"
import CategoryFilter from "../components/CategoryFilter"
import type { Project, Video } from "../types/project"

const projects: Project[] = [
  {
    id: 1,
    title: "YouTube Blog App",
    description: "A blog app that showcases YouTube videos and related content.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/youtube-blog-app",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A simple task management application with drag-and-drop functionality.",
    image: "/placeholder.svg",
    technologies: ["React", "Redux", "Material-UI"],
    githubUrl: "https://github.com/yourusername/task-manager",
    category: "Productivity",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current conditions and forecasts.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "OpenWeatherMap API", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    category: "Data Visualization",
  },
  // Add more projects here...
]

const videos: Video[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js in this comprehensive tutorial.",
    thumbnailUrl: "https://img.youtube.com/vi/mEsXcYUVw_c/maxresdefault.jpg",
    youtubeId: "mEsXcYUVw_c",
    category: "Web Development",
  },
  {
    id: 2,
    title: "React Hooks Explained",
    description: "Dive deep into React Hooks and learn how to use them effectively in your projects.",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ",
    category: "React",
  },
  {
    id: 3,
    title: "Building a REST API with Node.js",
    description: "Step-by-step guide to creating a robust REST API using Node.js and Express.",
    thumbnailUrl: "https://img.youtube.com/vi/pKd0Rpw7O48/maxresdefault.jpg",
    youtubeId: "pKd0Rpw7O48",
    category: "Backend",
  },
  // Add more videos here...
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllVideos, setShowAllVideos] = useState(false)

  const allCategories = useMemo(() => {
    const categories = new Set<string>()
    projects.forEach((project) => categories.add(project.category))
    videos.forEach((video) => categories.add(video.category))
    return Array.from(categories)
  }, [])

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) =>
        (project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedCategories.length === 0 || selectedCategories.includes(project.category)),
    )
  }, [searchQuery, selectedCategories])

  const filteredVideos = useMemo(() => {
    return videos.filter(
      (video) =>
        (video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedCategories.length === 0 || selectedCategories.includes(video.category)),
    )
  }, [searchQuery, selectedCategories])

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6)
  const displayedVideos = showAllVideos ? filteredVideos : filteredVideos.slice(0, 6)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects and Videos</h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          categories={allCategories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              {showAllProjects ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Videos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        {filteredVideos.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllVideos(!showAllVideos)}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              {showAllVideos ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

