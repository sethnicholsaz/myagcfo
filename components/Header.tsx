'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Tools', href: '/tools' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ]

  const segmentItems = [
    { name: 'Dairy Operations', href: '/dairy' },
    { name: 'Stocker/Feedlot Operations', href: '/cattle' },
    { name: 'Cow Calf Producers', href: '/ranch' },
  ]

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
      <nav className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-ag-green-500 to-ag-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AG</span>
            </div>
            <span className="text-2xl font-bold text-ag-green-600">MyAgCFO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-ag-green-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ag-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Segments Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-ag-green-600 font-medium transition-colors duration-200 flex items-center">
                Segments
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {segmentItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-ag-green-50 hover:text-ag-green-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="https://calendly.com/myagcfo/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-ag-green-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-ag-green-600 hover:bg-ag-green-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-3 py-2">
              <div className="text-sm font-medium text-gray-500 mb-2">Segments</div>
              {segmentItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-1 text-gray-600 hover:text-ag-green-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="px-3 py-2">
              <Link
                href="https://calendly.com/myagcfo/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header