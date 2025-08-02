import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agriculture CFO Services - Fractional CFO for Farming Operations | MyAgCFO',
  description: 'Comprehensive fractional CFO services for agriculture operations. Cash flow management, cost analysis, risk management, and strategic planning for dairy, cattle, and crop operations.',
  keywords: ['agriculture CFO services', 'fractional CFO', 'farm financial services', 'dairy CFO', 'cattle CFO', 'agricultural financial consulting', 'farm cash flow management'],
  openGraph: {
    title: 'Agriculture CFO Services - Expert Financial Leadership for Farms',
    description: 'Transform your agricultural operation with expert CFO services. Specialized in dairy, cattle, and crop financial management.',
    type: 'website',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: "Cash Flow Management",
      description: "Navigate commodity price volatility with sophisticated cash flow projections and working capital strategies.",
      icon: "💰",
      features: [
        "Seasonal cash flow planning",
        "Working capital optimization", 
        "Commodity price hedging strategies",
        "Emergency fund management"
      ]
    },
    {
      title: "Cost of Production Analysis",
      description: "Know your true break-even costs with detailed analysis and monthly trend tracking.",
      icon: "📊",
      features: [
        "Per-unit cost analysis",
        "Break-even price calculations",
        "Cost trend monitoring",
        "Efficiency benchmarking"
      ]
    },
    {
      title: "Risk Management",
      description: "Implement hedging strategies for commodity prices and input costs to stabilize your margins.",
      icon: "🛡️",
      features: [
        "Commodity futures hedging",
        "Insurance optimization",
        "Weather risk mitigation",
        "Market timing strategies"
      ]
    },
    {
      title: "Capital Planning",
      description: "Make confident decisions on equipment purchases, facility upgrades, and operation expansion.",
      icon: "🏗️",
      features: [
        "Equipment ROI analysis",
        "Lease vs. buy decisions",
        "Facility expansion modeling",
        "Technology investment planning"
      ]
    },
    {
      title: "Performance Dashboards",
      description: "Real-time visibility into KPIs that matter: profit per acre, cost per head, and operational efficiency.",
      icon: "📈",
      features: [
        "Custom KPI tracking",
        "Real-time reporting",
        "Benchmark comparisons",
        "Automated alerts"
      ]
    },
    {
      title: "Strategic Planning",
      description: "Develop 1, 3, and 10-year plans that align your farming goals with financial reality.",
      icon: "🎯",
      features: [
        "Long-term financial modeling",
        "Growth strategy development",
        "Succession planning",
        "Market opportunity analysis"
      ]
    }
  ]

  const segments = [
    {
      title: "Dairy Operations",
      description: "Specialized CFO services for dairy farms, milk pricing, and herd management financial optimization.",
      href: "/dairy",
      icon: "🐄",
      color: "blue"
    },
    {
      title: "Stocker/Feedlot Operations", 
      description: "Expert financial guidance for cattle finishing operations and livestock trading.",
      href: "/cattle",
      icon: "🐂",
      color: "amber"
    },
    {
      title: "Cow Calf Producers",
      description: "Financial services for breeding operations, pasture management, and calf marketing strategies.",
      href: "/ranch", 
      icon: "🌾",
      color: "green"
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-ag-green-50 to-white overflow-hidden pt-20">
        <div className="container-max relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Agriculture CFO Services</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Expert Financial Leadership for Progressive Farming Operations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your accountant looks at last year's numbers. Your banker looks at your debt. 
              An AgCFO looks at your future — helping you make strategic decisions that drive profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core CFO Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive financial leadership tailored specifically for agriculture operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 border-2 border-gray-200 rounded-xl card-hover hover:border-ag-green-500 transition-colors duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-ag-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized by Segment */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized by Agricultural Segment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each agricultural sector has unique financial challenges. Our specialized approach ensures 
              you get industry-specific expertise tailored to your operation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-200">
                <div className="text-5xl mb-4 text-center">{segment.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{segment.title}</h3>
                <p className="text-gray-600 mb-8 text-center">{segment.description}</p>
                
                <div className="text-center">
                  <Link href={segment.href} className="btn-primary w-full block text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike generic financial consultants, we focus exclusively on agriculture operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ag-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-ag-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Agriculture Focused</h3>
                  <p className="text-gray-600">We don't dilute our expertise across industries. Every solution is designed specifically for farming operations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ag-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-ag-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Dashboards</h3>
                  <p className="text-gray-600">Custom financial dashboards built specifically for agricultural metrics and seasonal patterns.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ag-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-ag-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Farm Visits</h3>
                  <p className="text-gray-600">We come to your operation to understand your unique challenges, assets, and opportunities firsthand.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ag-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-ag-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Intelligence</h3>
                  <p className="text-gray-600">Deep understanding of commodity markets, seasonal patterns, and agricultural economics.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ag-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-ag-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration Ready</h3>
                  <p className="text-gray-600">Seamless integration with your existing farm management software and accounting systems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ag-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-ag-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Engagement</h3>
                  <p className="text-gray-600">No long-term contracts. Scale services up or down based on your operation's needs and seasons.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ag-green-600 to-ag-green-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operation's Finances?</h2>
          <p className="text-xl text-ag-green-100 mb-10 max-w-3xl mx-auto">
            Discover how specialized agriculture CFO services can provide the clarity, control, 
            and confidence you need to make strategic decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/myagcfo/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ag-green-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 inline-block shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              Schedule Your Free Discovery Call
            </Link>
            <Link href="/contact" className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-ag-green-600 transition-colors duration-300 inline-block">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}