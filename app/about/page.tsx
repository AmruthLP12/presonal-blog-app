"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Youtube, Package, Code, Smartphone, Server, Globe, Linkedin } from "lucide-react"
import SearchBar from "../components/SearchBar"
import CategoryFilter from "../components/CategoryFilter"

const skills = [
  "MERN Stack",
  "Next.js",
  "Java",
  "React Native",
  "Redux",
  "React Hook Form",
  "Appwrite",
  "MongoDB",
  "Cloud Services",
]

export default function AboutPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const allCategories = useMemo(() => {
    return Array.from(new Set(skills))
  }, [])

  const filteredSkills = useMemo(() => {
    return skills.filter(
      (skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategories.length === 0 || selectedCategories.includes(skill)),
    )
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

      <div className="flex flex-col md:flex-row items-center mb-8">
        <Image
          src="/placeholder.svg"
          alt="Amruth"
          width={200}
          height={200}
          className="rounded-full mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Full-Stack Developer</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I am a passionate Full-Stack Developer with over 2 years of experience specializing in the MERN stack and
            Next.js. My expertise extends to Java and React Native, enabling me to craft scalable and efficient web and
            mobile solutions.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/yourusername"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://youtube.com/@CodeWithAmruth"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Youtube className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Highlights</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Globe className="w-5 h-5 mr-2 text-blue-500" />
            <span>Web Development: Proficient in creating interactive, responsive user interfaces</span>
          </li>
          <li className="flex items-center">
            <Smartphone className="w-5 h-5 mr-2 text-green-500" />
            <span>Mobile Development: Leveraging React Native for cross-platform apps</span>
          </li>
          <li className="flex items-center">
            <Server className="w-5 h-5 mr-2 text-purple-500" />
            <span>Backend Solutions: Expertise in Appwrite, MongoDB, and cloud services</span>
          </li>
          <li className="flex items-center">
            <Code className="w-5 h-5 mr-2 text-yellow-500" />
            <span>Projects: Developed MediConnect and Trezar, among others</span>
          </li>
          <li className="flex items-center">
            <Package className="w-5 h-5 mr-2 text-red-500" />
            <span>Published Work: Authored npm packages, including shadcn-addon</span>
          </li>
          <li className="flex items-center">
            <Youtube className="w-5 h-5 mr-2 text-red-600" />
            <span>Content Creation: YouTube channel CodeWithAmruth with developer tutorials</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="mb-4">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="mb-4">
          <CategoryFilter
            categories={allCategories}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filteredSkills.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I'm always excited to collaborate on meaningful projects and push the boundaries of innovation. Whether you're
          looking to solve complex problems, lead projects, or work with a diverse team, I'm here to deliver impactful
          results.
        </p>
        <Link
          href="https://yourportfolio.com"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          View My Portfolio
        </Link>
      </section>
    </div>
  )
}

