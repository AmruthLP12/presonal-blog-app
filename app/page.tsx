"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "./types/blog"
import SearchBar from "./components/SearchBar"
import CategoryFilter from "./components/CategoryFilter"

// This would typically come from a database or API
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Install and Use Node.js for the First Time",
    excerpt: "Learn how to install and use Node.js on Windows with this easy-to-follow step-by-step tutorial!",
    content: "...",
    date: "2023-05-15",
    youtubeId: "mEsXcYUVw_c",
    thumbnailUrl: "https://img.youtube.com/vi/mEsXcYUVw_c/maxresdefault.jpg",
    images: ["https://img.youtube.com/vi/mEsXcYUVw_c/maxresdefault.jpg"],
    categories: ["Next.js", "React", "Web Development"],
    codeSnippets: [
      {
        language: "jsx",
        code: `
export default function Home() {
  return <h1>Welcome to Next.js!</h1>
}
        `,
      },
      {
        language: "jsx",
        code: `
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
        `,
      },
    ],
  },
  {
    id: 2,
    title: "Mastering CSS Grid",
    excerpt: "Unlock the power of CSS Grid to create complex layouts with ease",
    content: "...",
    date: "2023-05-10",
    youtubeId: "7kVeCqQCxlk",
    thumbnailUrl: "https://img.youtube.com/vi/7kVeCqQCxlk/0.jpg",
    images: [],
    categories: ["CSS", "Web Design", "Layout"],
    codeSnippets: [],
  },
  {
    id: 3,
    title: "JavaScript Tips and Tricks",
    excerpt: "Improve your JavaScript skills with these handy tips and tricks",
    content: "...",
    date: "2023-05-05",
    youtubeId: "Mus_vwhTCq0",
    thumbnailUrl: "https://img.youtube.com/vi/Mus_vwhTCq0/0.jpg",
    images: [],
    categories: ["JavaScript", "Programming", "Web Development"],
    codeSnippets: [],
  },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const allCategories = useMemo(() => {
    const categories = new Set<string>()
    blogPosts.forEach((post) => post.categories.forEach((category) => categories.add(category)))
    return Array.from(categories)
  }, [])

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategories =
        selectedCategories.length === 0 || selectedCategories.some((category) => post.categories.includes(category))
      return matchesSearch && matchesCategories
    })
  }, [searchQuery, selectedCategories])

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
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Your YouTube Blog</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          categories={allCategories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={post.images[0] || post.thumbnailUrl || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

