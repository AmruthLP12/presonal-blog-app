export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Your YouTube Blog. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

