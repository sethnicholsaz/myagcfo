import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: "Cash Flow Management",
      description: "Navigate commodity price volatility with sophisticated cash flow projections and working capital strategies.",
      icon: "💰"
    },
    {
      title: "Cost of Production Analysis",
      description: "Know your true break-even costs with detailed analysis and monthly trend tracking.",
      icon: "📊"
    },
    {
      title: "Risk Management",
      description: "Implement hedging strategies for commodity prices and input costs to stabilize your margins.",
      icon: "🛡️"
    },
    {
      title: "Capital Planning",
      description: "Make confident decisions on equipment purchases, facility upgrades, and operation expansion.",
      icon: "🏗️"
    },
    {
      title: "Performance Dashboards",
      description: "Real-time visibility into KPIs that matter: profit per acre, cost per head, and operational efficiency.",
      icon: "📈"
    },
    {
      title: "Strategic Planning",
      description: "Develop 1, 3, and 10-year plans that align your farming goals with financial reality.",
      icon: "🎯"
    }
  ]

  const segments = [
    {
      title: "Dairy Operations",
      description: "Specialized CFO services for dairy farms, milk pricing, and herd management financial optimization.",
      href: "/dairy",
      icon: "🐄",
      features: ["Milk price hedging", "Feed cost optimization", "Herd profitability analysis"]
    },
    {
      title: "Cattle Operations", 
      description: "Expert financial guidance for cattle ranching, beef production, and livestock trading operations.",
      href: "/cattle",
      icon: "🐂",
      features: ["Cattle futures management", "Pasture ROI analysis", "Market timing strategies"]
    },
    {
      title: "Ranch Management",
      description: "Comprehensive financial services for diversified ranch operations and land management.",
      href: "/ranch", 
      icon: "🌾",
      features: ["Land valuation", "Multi-enterprise budgeting", "Succession planning"]
    }
  ]

  const problems = [
    {
      title: "Commodity Price Volatility",
      description: "Unpredictable market swings keep you awake at night, making it impossible to plan ahead with confidence."
    },
    {
      title: "Rising Input Costs",
      description: "Feed, fuel, fertilizer, and labor costs seem to increase faster than your revenue - squeezing margins thin."
    },
    {
      title: "Cash Flow Unpredictability",
      description: "Seasonal revenue cycles and unexpected expenses create constant cash flow challenges."
    },
    {
      title: "Equipment Investment Decisions",
      description: "Should you buy, lease, or wait? Without clear ROI analysis, major purchases feel like gambling."
    },
    {
      title: "Expansion Uncertainty",
      description: "You want to grow your operation but can't model the financial impact of adding acres, animals, or facilities."
    },
    {
      title: "Succession Planning Complexity",
      description: "The next generation wants to take over, but you need a clear financial transition strategy."
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Hero 
        title="Agriculture CFO Services"
        subtitle="Expert Financial Leadership for Progressive Farming Operations"
        description="Transform your agricultural operation's financial future with specialized CFO services. From dairy and cattle to diverse ranch operations - we understand agriculture."
      />

      {/* Problem Section */}
      <section id="problems" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Operation Grew. Your Revenue Grew. <span className="text-gradient">Your Profits Didn't.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Expansion was supposed to solve your financial challenges - but instead, it multiplied them. 
              Now you're managing more complexity with the same unclear financial picture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-ag-green-500 card-hover">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-gradient-to-br from-ag-green-600 to-ag-green-800 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transform Your Agricultural Operation's Financial Future</h2>
            <p className="text-xl text-ag-green-100 max-w-4xl mx-auto">
              Imagine having complete clarity on your operation's finances, confident decision-making during market volatility, 
              and a clear path to sustainable profitability. This is what we deliver for progressive agricultural operators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💰", title: "Stabilized Cash Flow", desc: "Navigate commodity price volatility with confidence through better hedging strategies and cash reserves management." },
              { icon: "📊", title: "Real-Time Profitability", desc: "Know your exact cost of production and profit margins per unit, updated monthly with actionable insights." },
              { icon: "🎯", title: "Smart Growth Planning", desc: "Model expansion scenarios with confidence, knowing exactly how growth will impact your bottom line." },
              { icon: "📈", title: "Cost Optimization", desc: "Optimize input costs through better purchasing strategies, efficiency tracking, and waste reduction." },
              { icon: "🛡️", title: "Risk Management", desc: "Protect your operation with sophisticated hedging strategies and insurance optimization." }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover border border-white/20">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-ag-green-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section id="segments" className="section-padding bg-gray-50">
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
                <p className="text-gray-600 mb-6 text-center">{segment.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {segment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-ag-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
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

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Exactly is an Agriculture-Focused Fractional CFO?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Your accountant looks at last year's numbers. Your banker looks at your debt. 
              An AgCFO looks at your future - helping you make strategic decisions that drive profitability in agriculture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 border-2 border-gray-200 rounded-xl card-hover hover:border-ag-green-500 transition-colors duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process gets you from financial uncertainty to complete clarity in just a few steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery Call", desc: "We learn about your operation, challenges, and goals in a no-pressure conversation." },
              { step: "2", title: "Financial Assessment", desc: "We analyze your current financials and identify immediate opportunities for improvement." },
              { step: "3", title: "Strategic Roadmap", desc: "Together, we create a customized plan to achieve your financial and operational goals." },
              { step: "4", title: "Ongoing Partnership", desc: "Monthly meetings, real-time support, and continuous optimization of your operation." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-ag-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-ag-green-600 to-ag-green-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Financial Clarity and Control?</h2>
          <p className="text-xl text-ag-green-100 mb-10 max-w-3xl mx-auto">
            Discover if partnering with an Agriculture-Focused Fractional CFO is the right step for your operation. 
            Let's start with a simple conversation - no pressure, just clarity.
          </p>
          <Link
            href="https://calendly.com/myagcfo/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-ag-green-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 inline-block shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Schedule Your Free Discovery Call
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}