import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Process - How Agriculture CFO Services Work | MyAgCFO',
  description: 'Learn about our proven 4-step process for agriculture CFO services. From discovery call to ongoing partnership, see how we transform your farm\'s financial management.',
  keywords: ['agriculture CFO process', 'fractional CFO methodology', 'farm financial consulting process', 'agriculture financial planning steps', 'CFO services workflow'],
  openGraph: {
    title: 'Our Agriculture CFO Process - From Discovery to Partnership',
    description: 'Discover our proven methodology for transforming agricultural operations through expert CFO services and strategic financial planning.',
    type: 'website',
  },
}

export default function ProcessPage() {
  const processSteps = [
    {
      step: "1",
      title: "Discovery Call",
      description: "We learn about your operation, challenges, and goals in a no-pressure conversation.",
      details: [
        "Understanding your current operation structure",
        "Identifying key financial challenges and pain points",
        "Discussing your short and long-term goals",
        "Assessing your current financial management systems",
        "Determining if we're a good fit to work together"
      ],
      duration: "45-60 minutes",
      outcome: "Clear understanding of your needs and our potential to help"
    },
    {
      step: "2", 
      title: "Financial Assessment",
      description: "We analyze your current financials and identify immediate opportunities for improvement.",
      details: [
        "Comprehensive review of financial statements",
        "Analysis of cash flow patterns and seasonality",
        "Cost structure evaluation and benchmarking",
        "Risk assessment and exposure analysis", 
        "Identification of quick wins and priority areas"
      ],
      duration: "1-2 weeks",
      outcome: "Detailed financial health report with actionable recommendations"
    },
    {
      step: "3",
      title: "Strategic Roadmap",
      description: "Together, we create a customized plan to achieve your financial and operational goals.",
      details: [
        "Development of 1, 3, and 10-year financial projections",
        "Strategic planning for growth and expansion",
        "Risk management strategy implementation",
        "KPI dashboard design and setup",
        "Implementation timeline and milestones"
      ],
      duration: "2-3 weeks",
      outcome: "Comprehensive strategic plan with clear action steps and timelines"
    },
    {
      step: "4",
      title: "Ongoing Partnership",
      description: "Monthly meetings, real-time support, and continuous optimization of your operation.",
      details: [
        "Monthly financial review meetings",
        "Ongoing strategic guidance and decision support",
        "Real-time financial monitoring and alerts",
        "Quarterly strategic plan updates",
        "Unlimited email and phone support"
      ],
      duration: "Ongoing",
      outcome: "Continuous financial optimization and strategic guidance"
    }
  ]

  const whatToExpect = [
    {
      phase: "First 30 Days",
      title: "Foundation Building",
      activities: [
        "Complete financial assessment",
        "Set up monitoring systems",
        "Establish baseline KPIs",
        "Begin strategic planning process"
      ],
      icon: "🏗️"
    },
    {
      phase: "Days 31-90",
      title: "Implementation",
      activities: [
        "Deploy strategic initiatives",
        "Implement risk management strategies",
        "Launch performance dashboards",
        "Begin regular reporting cadence"
      ],
      icon: "🚀"
    },
    {
      phase: "90+ Days",
      title: "Optimization",
      activities: [
        "Continuous performance monitoring",
        "Strategy refinement and adjustment",
        "Advanced planning and modeling",
        "Long-term growth planning"
      ],
      icon: "📈"
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
              <span className="text-gradient">Our Process</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              From Discovery to Long-Term Partnership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 4-step methodology transforms agricultural operations from financial uncertainty 
              to complete clarity and control. Here's exactly how we work together.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures you get maximum value at every stage of our partnership.
            </p>
          </div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-ag-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0 hover:scale-110 transition-transform duration-300 shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <div className="text-sm text-ag-green-600 font-medium bg-ag-green-50 px-3 py-1 rounded-full">
                        {step.duration}
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What We'll Do:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-gray-700">
                              <svg className="w-5 h-5 mr-2 text-ag-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Expected Outcome:</h4>
                        <div className="bg-ag-green-50 border border-ag-green-200 rounded-lg p-4">
                          <p className="text-ag-green-800">{step.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's a realistic timeline of what you can expect during our partnership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatToExpect.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
                <div className="text-4xl mb-4">{phase.icon}</div>
                <div className="text-sm font-medium text-ag-green-600 bg-ag-green-50 px-3 py-1 rounded-full inline-block mb-4">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <ul className="space-y-2 text-left">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-ag-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Engagement */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment & Engagement</h2>
              <p className="text-xl text-gray-600">
                Transparent pricing and flexible engagement options designed for agriculture operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Engagement</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">No long-term contracts required</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Scale services up or down seasonally</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Project-based work available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Monthly or quarterly retainer options</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-ag-green-50 rounded-xl p-8 border border-ag-green-200">
                <h3 className="text-xl font-bold text-ag-green-800 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ag-green-700">Unlimited email and phone support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ag-green-700">Custom financial dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ag-green-700">Monthly financial reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-ag-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ag-green-700">Strategic planning sessions</span>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-ag-green-100 mb-10 max-w-3xl mx-auto">
            The first step is always a no-pressure discovery call. Let's discuss your operation 
            and see if we're a good fit to work together.
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
              Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}