import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Seth Nichols - Agriculture CFO Expert | MyAgCFO',
  description: 'Learn about Seth Nichols, founder of SHN Solutions and MyAgCFO. Expert fractional CFO services for dairy, cattle, and diversified agriculture operations with deep industry knowledge.',
  keywords: ['Seth Nichols', 'agriculture CFO', 'SHN Solutions', 'dairy CFO expert', 'cattle CFO', 'agriculture financial consultant', 'fractional CFO biography'],
  openGraph: {
    title: 'About Seth Nichols - Agriculture CFO Expert',
    description: 'Expert fractional CFO services for agriculture operations. Deep experience across dairy, beef, and row crop sectors with CFO-level insight.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-ag-green-50 to-white overflow-hidden pt-20">
        <div className="container-max relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">About Seth Nichols</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Founder & Agriculture CFO Expert
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Combining CFO-level insight with hands-on agriculture knowledge to deliver 
              financial clarity for modern farming operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  Seth Nichols is the founder of <strong>SHN Solutions</strong>, a strategic finance and technology firm 
                  helping modern agriculture operations gain clarity, control, and confidence in their financial future.
                </p>
                
                <p className="mb-6">
                  With deep experience across dairy, beef, and row crop sectors, Seth combines CFO-level insight 
                  with hands-on ag knowledge to deliver customized solutions in financial modeling, data automation, 
                  and operational strategy.
                </p>
                
                <p className="mb-6">
                  He is passionate about building tools that empower producers — from dynamic cost tracking to 
                  SaaS platforms — and believes the next generation of ag success will be led by those who 
                  harness both soil and software.
                </p>
                
                <div className="bg-ag-green-50 border border-ag-green-200 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-ag-green-800 mb-3">Why Agriculture-Focused CFO Services?</h3>
                  <p className="text-ag-green-700 mb-0">
                    "Agriculture is unique. Generic financial advice doesn't account for commodity cycles, weather risks, 
                    or the capital-intensive nature of farming. That's why I focus exclusively on ag operations — 
                    because your business deserves financial expertise as specialized as your farming knowledge."
                  </p>
                  <p className="text-ag-green-700 font-medium mt-3 mb-0">— Seth Nichols, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge across multiple agriculture sectors with proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
              <div className="text-4xl mb-4">🐄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dairy Operations</h3>
              <p className="text-gray-600">
                Deep expertise in milk price hedging, feed cost optimization, and per-cow profitability analysis 
                for dairy operations of all sizes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
              <div className="text-4xl mb-4">🐂</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cattle Operations</h3>
              <p className="text-gray-600">
                Strategic financial guidance for cattle futures, pasture ROI analysis, and market timing 
                strategies for cow-calf and feedlot operations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Row Crops</h3>
              <p className="text-gray-600">
                Comprehensive financial planning for crop operations including land valuation, 
                commodity hedging, and multi-enterprise budgeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Philosophy & Approach</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Soil & Software</h3>
                <p className="text-gray-700 mb-6">
                  The future of agriculture lies at the intersection of traditional farming wisdom and modern technology. 
                  Seth believes that successful producers will be those who can harness both soil science and software solutions.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Decisions</h3>
                <p className="text-gray-700 mb-6">
                  Every recommendation is backed by data and tailored to your specific operation. No generic advice — 
                  only solutions that fit your land, your livestock, and your goals.
                </p>
              </div>
              
              <div className="bg-ag-green-50 p-8 rounded-xl border border-ag-green-200">
                <h3 className="text-xl font-semibold text-ag-green-800 mb-4">Core Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ag-green-700"><strong>Clarity:</strong> Making complex financials simple to understand</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ag-green-700"><strong>Control:</strong> Giving you command over your financial future</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ag-green-700"><strong>Confidence:</strong> Making decisions backed by solid data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ag-green-600 to-ag-green-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-ag-green-100 mb-10 max-w-3xl mx-auto">
            Discover how agriculture-focused CFO services can transform your operation's financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/myagcfo/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ag-green-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 inline-block shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              Schedule Your Free Consultation
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