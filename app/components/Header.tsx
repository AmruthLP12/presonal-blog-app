import Link from "next/link"
import { Youtube, Github } from "lucide-react"

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white">
            <Youtube className="w-8 h-8 text-red-600" />
            <span>Your YouTube Blog</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out"
            >
              About
            </Link>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out"
            >
              <Github className="w-6 h-6" />
            </a>
            {children}
          </div>
        </div>
      </nav>
    </header>
  )
}

