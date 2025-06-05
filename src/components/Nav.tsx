import { useEffect, useState } from "react"

const Nav = () => {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const isCurrentlyDark = html.classList.contains("dark")

    if (isCurrentlyDark) {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    alert(`Searching for: ${searchQuery}`)
  }

  return (
    <header className="bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">MySite</div>

        {/* Main navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
        </nav>

        {/* Right side: search, download, theme, menu */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm text-black dark:text-white focus:outline-none"
            />
          </form>

          {/* Download Button */}
          <a
            href="#"
            className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
          >
            Download
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center transition-colors"
          >
            {isDark ? "🌙" : "🌞"}
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-zinc-900 py-4 space-y-4 transition-all duration-300">
          <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>

          {/* Mobile search bar */}
          <form onSubmit={handleSearch} className="w-full px-6">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"
            />
          </form>

          {/* Mobile download button */}
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
          >
            Download
          </a>
        </div>
      )}
    </header>
  )
}

export default Nav
