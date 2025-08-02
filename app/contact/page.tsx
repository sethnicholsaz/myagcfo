import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us - Get Agriculture CFO Services | MyAgCFO',
  description: 'Contact MyAgCFO for expert fractional CFO services for your agriculture operation. Schedule a free consultation or get in touch to discuss your farm\'s financial needs.',
  keywords: ['contact agriculture CFO', 'agriculture financial consulting contact', 'farm CFO consultation', 'MyAgCFO contact', 'agriculture financial services inquiry'],
  openGraph: {
    title: 'Contact MyAgCFO - Agriculture CFO Services',
    description: 'Get in touch with MyAgCFO for expert fractional CFO services tailored to your agriculture operation. Free consultation available.',
    type: 'website',
  },
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "Send us a message anytime",
      contact: "info@myagcfo.com",
      action: "mailto:info@myagcfo.com"
    },
    {
      icon: "📞",
      title: "Phone",
      description: "Call us directly",
      contact: "520-689-7000",
      action: "tel:520-689-7000"
    },
    {
      icon: "📅",
      title: "Schedule a Call",
      description: "Book a free consultation",
      contact: "calendly.com/myagcfo",
      action: "https://calendly.com/myagcfo/consultation"
    }
  ]

  const faqs = [
    {
      question: "What types of agriculture operations do you work with?",
      answer: "We specialize in dairy operations, cattle ranching (cow-calf and feedlot), and diversified agriculture operations. Our expertise covers operations ranging from family farms to large commercial enterprises."
    },
    {
      question: "How is this different from working with an accountant?",
      answer: "Accountants focus on historical financial reporting and tax compliance. As fractional CFOs, we focus on forward-looking financial strategy, cash flow planning, and helping you make strategic business decisions for growth and profitability."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No, we believe in flexible partnerships. You can engage us on a monthly retainer, quarterly basis, or for specific projects. We want you to stay because we provide value, not because of a contract."
    },
    {
      question: "What size operation do you typically work with?",
      answer: "We work with operations of all sizes, from small family farms to large commercial enterprises. Our services are scalable and can be customized to fit your operation's size and complexity."
    },
    {
      question: "How quickly can we get started?",
      answer: "After our initial discovery call, we can typically begin the financial assessment process within a week. Our goal is to provide value and insights as quickly as possible while being thorough in our analysis."
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
              <span className="text-gradient">Get In Touch</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Ready to Transform Your Operation's Financial Future?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your agricultural operation's financial needs and explore how our 
              specialized CFO services can provide the clarity, control, and confidence you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We typically respond within 24 hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200 card-hover">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a 
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-ag-green-600 font-semibold hover:text-ag-green-700 transition-colors duration-200"
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with next steps.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <iframe 
                className="clickup-embed clickup-dynamic-height" 
                src="https://forms.clickup.com/90131764416/f/2ky4b560-533/8K37VD9Q2HTEV51OAV" 
                width="100%" 
                height="100%" 
                style={{
                  background: 'transparent', 
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  minHeight: '600px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are answers to some common questions about our agriculture CFO services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your question answered here?
            </p>
            <Link
              href="https://calendly.com/myagcfo/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve progressive agriculture operations nationwide with specialized expertise in key agricultural regions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🌵</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Southwest</h3>
              <p className="text-gray-600">
                Arizona, New Mexico, Nevada, and Southern California agriculture operations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Midwest</h3>
              <p className="text-gray-600">
                Traditional dairy and crop operations across the corn belt and dairy states.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nationwide</h3>
              <p className="text-gray-600">
                Remote CFO services available for agriculture operations across the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ag-green-600 to-ag-green-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Start the Conversation</h2>
          <p className="text-xl text-ag-green-100 mb-10 max-w-3xl mx-auto">
            Every successful partnership starts with a simple conversation. Let's discuss your operation's 
            unique challenges and explore how we can help you achieve your financial goals.
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
            <a
              href="mailto:info@myagcfo.com"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-ag-green-600 transition-colors duration-300 inline-block"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}