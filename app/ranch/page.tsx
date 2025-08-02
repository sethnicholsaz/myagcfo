import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'  
import Hero from '@/components/Hero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cow Calf CFO Services - Fractional CFO for Cow Calf Operations',
  description: 'Expert fractional CFO services for cow calf operations. Optimize breeding programs, manage pasture costs, and maximize calf profitability with strategic financial management.',
  keywords: ['cow calf CFO', 'fractional CFO', 'cow calf financial management', 'cattle breeding', 'pasture management', 'calf profitability'],
}

export default function CowCalfPage() {
  const cowCalfProblems = [
    {
      title: "Breeding Program ROI",
      description: "You invest heavily in bulls and breeding programs but lack clear analysis of which genetics generate the best returns."
    },
    {
      title: "Pasture Cost Management", 
      description: "With land being your largest expense, you need to optimize carrying capacity and grazing costs per head."
    },
    {
      title: "Seasonal Cash Flow Gaps",
      description: "Income comes once or twice a year at weaning, but expenses are year-round, creating challenging cash flow management."
    },
    {
      title: "Calf Marketing Timing",
      description: "When to sell calves, retain ownership, or background them - these decisions significantly impact profitability."
    },
    {
      title: "Feed Cost Volatility",
      description: "Supplemental feed, hay, and mineral costs fluctuate wildly, making it difficult to budget and maintain margins."
    },
    {
      title: "Herd Expansion Decisions",
      description: "Should you retain heifers, buy more cows, or lease more land? These capital-intensive decisions need clear analysis."
    }
  ]

  const cowCalfServices = [
    {
      title: "Breeding Program Analysis",
      description: "Comprehensive ROI analysis of bull investments, AI programs, and genetic improvements to optimize breeding decisions.",
      icon: "🐂"
    },
    {
      title: "Pasture Cost & Carrying Capacity",
      description: "Optimize land use, grazing management, and cost per acre to maximize carrying capacity and profitability.",
      icon: "🌱"
    },
    {
      title: "Calf Marketing Strategy",
      description: "Strategic analysis of marketing timing, retained ownership opportunities, and backgrounding program profitability.",
      icon: "📈"
    },
    {
      title: "Cash Flow Management",
      description: "Navigate seasonal income patterns with sophisticated cash flow planning and working capital strategies.",
      icon: "💰"
    },
    {
      title: "Feed Cost Optimization",
      description: "Strategic planning for supplemental feeding, hay procurement, and mineral programs to optimize nutrition costs.",
      icon: "🌾"
    },
    {
      title: "Herd Expansion Planning",
      description: "Financial modeling for herd growth, heifer retention decisions, and land acquisition or lease strategies.",
      icon: "📊"
    }
  ]

  const cowCalfKPIs = [
    { metric: "Cost Per Cow Per Year", description: "Track total annual cost of maintaining each cow in your herd" },
    { metric: "Weaning Weight & Price Analysis", description: "Optimize weaning weights and marketing timing for maximum returns" },
    { metric: "Pasture Cost Per AUM", description: "Measure and optimize your cost per Animal Unit Month for grazing" },
    { metric: "Breeding Program ROI", description: "Track return on investment for bulls, AI, and genetic improvements" },
    { metric: "Calf Crop Percentage", description: "Monitor reproductive efficiency and its financial impact" },
    { metric: "Break-even Calf Price", description: "Know your minimum profitable selling price for different weight classes" }
  ]

  const ranchEnterprises = [
    {
      title: "Cattle Operations",
      description: "Cow-calf, stocker, or feedlot operations with integrated grazing management and market analysis.",
      metrics: ["Cost per head", "Pasture carrying capacity", "Market timing optimization"]
    },
    {
      title: "Crop Production", 
      description: "Row crops, hay production, or specialty crops with yield optimization and market risk management.",
      metrics: ["Cost per acre", "Yield optimization", "Commodity price hedging"]
    },
    {
      title: "Hunting & Recreation",
      description: "Hunting leases, outfitting services, and recreational land use for additional revenue streams.",
      metrics: ["Revenue per acre", "Lease rate optimization", "Seasonal cash flow"]
    },
    {
      title: "Agritourism & Events",
      description: "Wedding venues, farm tours, educational programs, and other visitor-based revenue opportunities.",
      metrics: ["Event profitability", "Marketing ROI", "Capacity optimization"]
    }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Hero 
        title="Cow Calf CFO Services"
        subtitle="Fractional CFO Services for Cow Calf Operations"
        description="Expert financial leadership for cow calf producers. Optimize breeding programs, manage pasture costs, and maximize calf profitability with strategic financial management."
        backgroundImage="/images/cowcalf-background.jpg"
        gradient="from-green-50 to-white"
      />

      {/* Ranch-Specific Problems */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Herd Grew. Your Land Costs Grew. <span className="text-gradient">Your Profit Per Cow Didn't.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Adding more cows was supposed to improve efficiency and profitability - but instead, 
              costs per head increased while calf prices stayed volatile, squeezing your margins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cowCalfProblems.map((problem, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 card-hover">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranch-Specific Solutions */}
      <section className="section-padding bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transform Your Cow Calf Operation's Financial Future</h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto">
              Imagine having complete clarity on your cost per cow, confident decision-making on breeding and marketing strategies, 
              and optimized pasture management that maximizes profitability. This is what we deliver for progressive cow calf producers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💰", title: "Optimized Cash Flow", desc: "Navigate seasonal income patterns with strategic cash management and working capital planning." },
              { icon: "📊", title: "Per-Cow Profitability", desc: "Clear visibility into cost per cow and profit per calf to optimize your herd composition." },
              { icon: "🌱", title: "Pasture Optimization", desc: "Maximize carrying capacity and minimize cost per AUM through strategic grazing management." },
              { icon: "🐄", title: "Breeding ROI Analysis", desc: "Optimize bull investments and genetic programs for maximum genetic improvement returns." },
              { icon: "📈", title: "Smart Herd Growth", desc: "Model herd expansion scenarios with confidence, knowing exactly how growth impacts profitability." }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover border border-white/20">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-green-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranch Enterprises Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Multi-Enterprise Financial Management</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We understand the complexity of managing multiple ranch enterprises. Our approach provides clarity 
              on each activity while optimizing the whole operation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ranchEnterprises.map((enterprise, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{enterprise.title}</h3>
                <p className="text-gray-600 mb-6">{enterprise.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Metrics We Track:</h4>
                  {enterprise.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranch-Specific Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Cow Calf CFO Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Unlike generic financial consultants, we specialize in cow calf operations. 
              We understand breeding programs, pasture management, and calf marketing strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cowCalfServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl card-hover border-2 border-gray-200 hover:border-green-500 transition-colors duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranch KPIs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Cow Calf Financial Metrics We Track</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We monitor the financial indicators that matter most to cow calf profitability and operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cowCalfKPIs.map((kpi, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
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

      {/* Succession Planning Focus */}
      <section className="section-padding bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ranch Succession Planning</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Preserve your ranch legacy with comprehensive succession planning that addresses family dynamics, 
              tax implications, and operational continuity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Family Transition Strategy", 
                description: "Develop clear plans for family member involvement, responsibilities, and compensation structures."
              },
              { 
                title: "Tax Optimization", 
                description: "Minimize estate taxes and maximize wealth transfer through strategic planning and timing."
              },
              { 
                title: "Asset Valuation", 
                description: "Accurate valuation of land, livestock, equipment, and business interests for planning purposes."
              },
              { 
                title: "Operational Continuity", 
                description: "Ensure smooth business operations during leadership transitions and ownership changes."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-green-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Review Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Cow Calf Financial Review Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of seasonal breeding and marketing cycles. We provide regular financial reviews 
              tailored to cow calf operation timing and cash flow patterns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { period: "Monthly", tasks: "Cow cost analysis, cash flow management, pasture and feed cost tracking" },
              { period: "Quarterly", tasks: "Breeding program ROI review, calf marketing analysis, seasonal planning" },
              { period: "Semi-Annual", tasks: "Herd performance evaluation, pasture utilization review, expansion planning" },
              { period: "Annual", tasks: "Complete financial package, tax planning, long-term herd and land strategy" }
            ].map((timeline, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{timeline.period}</h3>
                <p className="text-gray-600 text-sm">{timeline.tasks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Cow Calf Operation's Profitability?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Discover if partnering with a Cow Calf-Focused Fractional CFO is the right step for your operation. 
            Let's discuss your breeding programs, pasture management, and calf marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/myagcfo/ranch-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule Your Free Cow Calf CFO Consultation
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