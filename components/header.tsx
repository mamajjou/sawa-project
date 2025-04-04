"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    closeMenu()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-purple-800">
              SAWA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("wer-wir-sind")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Wer wir sind
            </button>
            <button
              onClick={() => scrollToSection("was-wir-tun")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Was wir tun
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("wer-wir-sind")}
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                Wer wir sind
              </button>
              <button
                onClick={() => scrollToSection("was-wir-tun")}
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                Was wir tun
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

