"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import YouTubeEmbed from "@/app/components/YouTubeEmbed"
import CodeSnippet from "@/app/components/CodeSnippet"
import type { BlogPost } from "@/app/types/blog"

// This would typically come from a database or API
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    content:
      "Next.js is a powerful framework for building React applications. It provides features like server-side rendering and static site generation out of the box.\n\nHere's a simple example of a Next.js page:\n\nNext.js makes it easy to create fast, SEO-friendly web applications.",
    date: "2023-05-15",
    youtubeId: "mEsXcYUVw_c",
    thumbnailUrl: "https://img.youtube.com/vi/mEsXcYUVw_c/maxresdefault.jpg",
    images: [
      'https://img.youtube.com/vi/mEsXcYUVw_c/maxresdefault.jpg'
    ],
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
  // ... other blog posts
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === Number.parseInt(params.id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!post) {
    notFound()
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % post.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + post.images.length) % post.images.length)
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
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
      <p className="text-gray-500 dark:text-gray-400 mb-8">{post.date}</p>

      <div className="mb-8 relative">
        <Image
          src={post.images[0] || post.thumbnailUrl || "/placeholder.svg"}
          alt={`Image for ${post.title}`}
          width={800}
          height={450}
          className="rounded-lg object-cover w-full"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <YouTubeEmbed videoId={post.youtubeId} />

      {post.codeSnippets && post.codeSnippets.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Code Snippets</h2>
          {post.codeSnippets.map((snippet, index) => (
            <div key={index} className="mb-4">
              <CodeSnippet language={snippet.language} code={snippet.code} />
            </div>
          ))}
        </div>
      )}
    </article>
  )
}

