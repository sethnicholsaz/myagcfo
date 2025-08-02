import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' },
  ]

  const segments = [
    { name: 'Dairy CFO', href: '/dairy' },
    { name: 'Cattle CFO', href: '/cattle' },
    { name: 'Ranch CFO', href: '/ranch' },
  ]

  return (
    <footer className="bg-ag-green-800 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-ag-green-400 to-ag-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AG</span>
              </div>
              <span className="text-2xl font-bold text-white">MyAgCFO</span>
            </div>
            <p className="text-ag-green-100 mb-6 max-w-md">
              Expert fractional CFO services exclusively for agriculture operations. 
              Transform your farm's financial future with data-driven insights and strategic guidance.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-ag-green-100">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@myagcfo.com" className="hover:text-white transition-colors duration-200">
                  info@myagcfo.com
                </a>
              </p>
              <p className="flex items-center text-ag-green-100">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:520-689-7000" className="hover:text-white transition-colors duration-200">
                  520-689-7000
                </a>
              </p>
              <p className="flex items-center text-ag-green-100">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Serving Agriculture Operations Nationwide
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-ag-green-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Segments</h3>
            <ul className="space-y-2">
              {segments.map((segment) => (
                <li key={segment.name}>
                  <Link
                    href={segment.href}
                    className="text-ag-green-100 hover:text-white transition-colors duration-200"
                  >
                    {segment.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="https://calendly.com/myagcfo/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ag-green-600 hover:bg-ag-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ag-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ag-green-100 text-sm">
            © {currentYear} MyAgCFO. All rights reserved. Exclusively serving progressive agriculture operations.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-ag-green-100 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-ag-green-100 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer