import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dairy CFO Services - Fractional CFO for Dairy Operations',
  description: 'Expert fractional CFO services exclusively for dairy farms. Improve cash flow, reduce feed costs, and increase profitability. Serving progressive dairy operations nationwide.',
  keywords: ['dairy CFO', 'fractional CFO', 'dairy farm financial management', 'milk price hedging', 'feed cost optimization', 'dairy consulting'],
}

export default function DairyPage() {
  const dairyProblems = [
    {
      title: "Milk Price Volatility",
      description: "Unpredictable milk check amounts make it impossible to budget accurately or plan for the future with confidence."
    },
    {
      title: "Feed Cost Mysteries", 
      description: "Feed represents 50%+ of your costs, but you lack real-time visibility into cost per hundredweight and feed efficiency."
    },
    {
      title: "Cash Flow Chaos",
      description: "Monthly milk checks don't align with daily expenses, creating constant cash flow management challenges."
    },
    {
      title: "Profitability Per Cow",
      description: "You know your production numbers, but have no idea which cows are actually profitable or costing you money."
    },
    {
      title: "Equipment ROI Analysis",
      description: "Should you lease or buy that new milking system? Without clear ROI analysis, major purchases feel like gambling."
    },
    {
      title: "Expansion Decision Paralysis",
      description: "You want to add more cows or upgrade facilities, but can't model the financial impact with confidence."
    }
  ]

  const dairyServices = [
    {
      title: "Milk Price Risk Management",
      description: "Implement sophisticated hedging strategies using dairy futures and options to stabilize your milk income.",
      icon: "📈"
    },
    {
      title: "Feed Cost Optimization",
      description: "Real-time feed cost tracking, ration optimization analysis, and procurement strategy development.",
      icon: "🌾"
    },
    {
      title: "Per-Cow Profitability Analysis",
      description: "Detailed analysis of which cows are most profitable, helping optimize culling and breeding decisions.",
      icon: "🐄"
    },
    {
      title: "Cash Flow Forecasting",
      description: "Monthly cash flow projections accounting for milk price cycles, seasonal patterns, and operational expenses.",
      icon: "💰"
    },
    {
      title: "Milking System ROI Analysis",
      description: "Comprehensive analysis of equipment purchases, lease vs buy decisions, and automation investments.",
      icon: "🏭"
    },
    {
      title: "Herd Expansion Modeling",
      description: "Financial modeling for herd size increases, facility expansions, and operational scaling decisions.",
      icon: "📊"
    }
  ]

  const dairyKPIs = [
    { metric: "Income Over Feed Cost (IOFC)", description: "Track profitability after your largest expense" },
    { metric: "Milk Price per CWT", description: "Monitor and forecast milk pricing trends" },
    { metric: "Feed Cost per CWT Produced", description: "Optimize your feed conversion efficiency" },
    { metric: "Cash Flow per Cow", description: "Understand your per-cow cash generation" },
    { metric: "Debt Service Coverage", description: "Ensure healthy debt management ratios" },
    { metric: "Working Capital Ratio", description: "Maintain optimal liquidity for operations" }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Hero 
        title="Dairy CFO Services"
        subtitle="Fractional CFO Services Exclusively for Dairy Operations"
        description="Expert financial leadership for progressive dairy farms. Navigate milk price volatility, optimize feed costs, and maximize per-cow profitability with data-driven insights."
        backgroundImage="/images/dairy-background.webp"
        gradient="from-blue-50 to-white"
      />

      {/* Dairy-Specific Problems */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Herd Grew. Your Milk Production Grew. <span className="text-gradient">Your Profits Didn't.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Adding more cows was supposed to solve your financial challenges - but instead, it multiplied them. 
              Now you're managing more complexity with the same unclear financial picture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dairyProblems.map((problem, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 card-hover">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dairy-Specific Solutions */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transform Your Dairy's Financial Future</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Imagine having complete clarity on your dairy's finances, confident decision-making during milk price volatility, 
              and a clear path to sustainable profitability. This is what we deliver for progressive dairy operators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💰", title: "Stabilized Cash Flow", desc: "Navigate milk price volatility with confidence through better hedging strategies and cash reserves management." },
              { icon: "📊", title: "Real-Time Profitability", desc: "Know your exact cost of production and profit margins per hundredweight, updated monthly." },
              { icon: "🐄", title: "Per-Cow Analytics", desc: "Identify your most and least profitable animals with comprehensive performance tracking." },
              { icon: "🌾", title: "Feed Cost Optimization", desc: "Optimize feed costs through better purchasing strategies and efficiency tracking." },
              { icon: "📈", title: "Smart Growth Planning", desc: "Model herd expansion scenarios with confidence, knowing exactly how growth impacts your bottom line." }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover border border-white/20">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dairy-Specific Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Dairy CFO Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Unlike generic financial consultants, we focus exclusively on dairy operations. We understand your unique 
              challenges from milk price volatility to feed cost management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dairyServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dairy KPIs Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Dairy Financial Metrics We Track</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We monitor the financial indicators that matter most to dairy profitability and long-term sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dairyKPIs.map((kpi, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{kpi.metric}</h3>
                  <p className="text-gray-600">{kpi.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Review Timeline */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Your Dairy Financial Review Calendar</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              End the quarterly scramble. We streamline your financial reporting with organized, 
              GAAP-compliant packages that accelerate reviews.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { period: "Monthly", tasks: "Milk income analysis, feed cost tracking, cash flow projections, IOFC calculations" },
              { period: "Quarterly", tasks: "Comprehensive profitability review, herd inventory valuation, depreciation schedules" },
              { period: "Semi-Annual", tasks: "Strategic planning review, expansion scenario modeling, risk management assessment" },
              { period: "Annual", tasks: "Complete GAAP-compliant package, tax planning, succession planning updates" }
            ].map((timeline, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-semibold mb-3">{timeline.period}</h3>
                <p className="text-blue-100 text-sm">{timeline.tasks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Dairy's Financial Future?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Discover if partnering with a Dairy-Focused Fractional CFO is the right step for your operation. 
            Let's start with a simple conversation about your specific challenges and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/myagcfo/dairy-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule Your Free Dairy CFO Consultation
            </Link>
            <Link href="/" className="btn-secondary text-lg px-8 py-4">
              Explore Other Segments
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}