"use client"

import { useEffect } from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ThemeToggle from "./components/ThemeToggle"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <div className="flex flex-col min-h-screen">
          <Header>
            <ThemeToggle />
          </Header>
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

