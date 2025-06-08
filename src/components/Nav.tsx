import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const Nav = () => {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const logoRef = useRef(null)
  const linksRef = useRef(null)
  const buttonsRef = useRef(null)
  const mobileMenuRef = useRef(null)

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

    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    )

    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
    )

    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
    )
  }, [])

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      )
    }
  }, [menuOpen])

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

  return (
    <header className="relative z-50 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="text-2xl font-bold">MySite</div>

        {/* Main navigation */}
        <nav ref={linksRef} className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
        </nav>

        {/* Right side: theme, menu, download */}
        <div ref={buttonsRef} className="flex items-center space-x-4">
          {/* Download Button */}
          <a
            href="#"
            className="hidden md:inline-block bg-zinc-500 hover:bg-zinc-600 text-white px-4 py-2 rounded-xl text-sm transition-colors"
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
        <div
          ref={mobileMenuRef}
          className="md:hidden flex flex-col items-center bg-white dark:bg-zinc-900 py-4 space-y-4 transition-all duration-300"
        >
          <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>

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
