import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  description?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
  gradient?: string
}

const Hero = ({ 
  title, 
  subtitle, 
  description,
  ctaText = "Schedule Your Free Consultation",
  ctaHref = "https://calendly.com/myagcfo/consultation",
  backgroundImage,
  gradient = "from-ag-green-50 to-white"
}: HeroProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${gradient} overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-ag-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-earth-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
      
      <div className="container-max relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">{title}</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 font-medium">
            {subtitle}
          </h2>
          
          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              {ctaText}
            </Link>
            <Link
              href="#services"
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn More
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-ag-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No Long-term Contracts
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-ag-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Agriculture-Focused Expertise
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-ag-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Proven Results
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-ag-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero