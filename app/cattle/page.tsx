import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cattle CFO Services - Fractional CFO for Cattle Operations',
  description: 'Expert fractional CFO services for cattle ranching and beef operations. Optimize cattle futures, manage feed costs, and maximize profit per head with data-driven insights.',
  keywords: ['cattle CFO', 'fractional CFO', 'cattle ranch financial management', 'beef cattle consulting', 'cattle futures', 'ranch profitability'],
}

export default function CattlePage() {
  const cattleProblems = [
    {
      title: "Cattle Price Volatility",
      description: "Unpredictable cattle market prices make it impossible to plan sales timing or budget for future revenue cycles."
    },
    {
      title: "Feed Cost Management", 
      description: "Feed represents 60%+ of production costs, but you lack visibility into cost per pound of gain and feed efficiency optimization."
    },
    {
      title: "Market Timing Decisions",
      description: "When to sell, when to hold, when to buy feeders - without market analysis, these critical decisions feel like guesswork."
    },
    {
      title: "Cost Per Head Analysis",
      description: "You know your herd size, but have no clear picture of profitability per animal or which cattle are your best performers."
    },
    {
      title: "Pasture ROI Uncertainty",
      description: "Is that additional pasture lease worth it? Without clear land cost analysis, expansion decisions are challenging."
    },
    {
      title: "Equipment vs Labor Trade-offs",
      description: "Should you invest in that new handling system or hire more help? ROI analysis is critical but often missing."
    }
  ]

  const cattleServices = [
    {
      title: "Cattle Futures & Options Strategy",
      description: "Implement sophisticated hedging strategies using cattle futures and options to lock in profitable margins.",
      icon: "📈"
    },
    {
      title: "Feed Cost & Efficiency Analysis",
      description: "Track feed conversion ratios, cost per pound of gain, and optimize ration strategies for maximum profitability.",
      icon: "🌾"
    },
    {
      title: "Market Timing Analytics",
      description: "Data-driven analysis of cattle markets, seasonal patterns, and optimal marketing windows for your operation.",
      icon: "⏰"
    },
    {
      title: "Per-Head Profitability Tracking",
      description: "Detailed cost analysis and profit tracking for different cattle classes and management groups.",
      icon: "🐂"
    },
    {
      title: "Pasture & Land Investment Analysis",
      description: "ROI analysis for land purchases, lease agreements, and pasture improvement investments.",
      icon: "🌱"
    },
    {
      title: "Equipment & Infrastructure Planning",
      description: "Cost-benefit analysis for handling facilities, equipment purchases, and operational improvements.",
      icon: "🏗️"
    }
  ]

  const cattleKPIs = [
    { metric: "Cost Per Pound of Gain", description: "Track efficiency of feed conversion and growth rates" },
    { metric: "Break-even Price Analysis", description: "Know your minimum profitable selling price for different cattle classes" },
    { metric: "Pasture Cost Per Head", description: "Optimize land use and grazing management costs" },
    { metric: "Market Margin Analysis", description: "Monitor spread between feeder and fat cattle prices" },
    { metric: "Feed Cost Per CWT Gain", description: "Measure and optimize feed efficiency across your operation" },
    { metric: "Working Capital Per Head", description: "Ensure adequate liquidity for cattle purchases and operations" }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Hero 
        title="Cattle CFO Services"
        subtitle="Fractional CFO Services for Cattle Operations"
        description="Expert financial leadership for cattle ranchers and beef producers. Navigate market volatility, optimize feed costs, and maximize profit per head with strategic financial management."
        backgroundImage="/images/cattle-background.jpg"
        gradient="from-amber-50 to-white"
      />

      {/* Cattle-Specific Problems */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Herd Grew. Your Revenue Grew. <span className="text-gradient">Your Profits Didn't.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Adding more cattle was supposed to improve your bottom line - but instead, it added complexity. 
              Now you're managing more head with the same unclear financial picture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cattleProblems.map((problem, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 card-hover">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cattle-Specific Solutions */}
      <section className="section-padding bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transform Your Cattle Operation's Financial Future</h2>
            <p className="text-xl text-amber-100 max-w-4xl mx-auto">
              Imagine having complete clarity on your cattle operation's finances, confident decision-making during market volatility, 
              and a clear path to sustainable profitability. This is what we deliver for progressive cattle operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💰", title: "Stabilized Cash Flow", desc: "Navigate cattle price volatility with confidence through better hedging strategies and market timing." },
              { icon: "📊", title: "Real-Time Profitability", desc: "Know your exact cost per pound of gain and profit margins per head, updated regularly." },
              { icon: "🐂", title: "Per-Head Analytics", desc: "Identify your most profitable cattle classes and optimize your herd composition." },
              { icon: "🌾", title: "Feed Cost Optimization", desc: "Optimize feed costs through better purchasing strategies and efficiency tracking." },
              { icon: "📈", title: "Smart Growth Planning", desc: "Model herd expansion scenarios with confidence, knowing exactly how growth impacts profitability." }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover border border-white/20">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-amber-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cattle-Specific Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Cattle CFO Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Unlike generic financial consultants, we focus on cattle operations. We understand your unique 
              challenges from market timing to feed cost management and pasture optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cattleServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cattle KPIs Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Cattle Financial Metrics We Track</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We monitor the financial indicators that matter most to cattle profitability and operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cattleKPIs.map((kpi, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
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
      <section className="section-padding bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Your Cattle Financial Review Calendar</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Stay ahead of market cycles. We provide regular financial reviews tailored to 
              cattle operation timing and seasonal patterns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { period: "Monthly", tasks: "Market analysis, feed cost tracking, cash flow projections, performance metrics" },
              { period: "Quarterly", tasks: "Comprehensive profitability review, herd inventory valuation, cost per head analysis" },
              { period: "Semi-Annual", tasks: "Strategic planning review, expansion modeling, pasture investment analysis" },
              { period: "Annual", tasks: "Complete financial package, tax planning, long-term strategic planning" }
            ].map((timeline, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-semibold mb-3">{timeline.period}</h3>
                <p className="text-amber-100 text-sm">{timeline.tasks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cattle Market Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide ongoing market analysis and insights to help you make informed decisions 
              about cattle marketing, purchasing, and risk management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Seasonal Market Patterns", 
                description: "Historical analysis and forecasting of seasonal cattle price trends to optimize marketing timing.",
                icon: "📅"
              },
              { 
                title: "Feed vs Cattle Price Spreads", 
                description: "Monitor corn-to-cattle ratios and feed cost relationships to optimize feeding strategies.",
                icon: "⚖️"
              },
              { 
                title: "Futures Market Analysis", 
                description: "Professional analysis of cattle futures curves and hedging opportunities for your operation.",
                icon: "📊"
              }
            ].map((insight, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{insight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-600">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Cattle Operation's Profitability?</h2>
          <p className="text-xl text-amber-100 mb-10 max-w-3xl mx-auto">
            Discover if partnering with a Cattle-Focused Fractional CFO is the right step for your operation. 
            Let's discuss your specific challenges and growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/myagcfo/cattle-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule Your Free Cattle CFO Consultation
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