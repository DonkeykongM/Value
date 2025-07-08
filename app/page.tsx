'use client';

import { useState } from 'react';
import { ChevronDown, Play, Shield, Camera, Users, Star, CheckCircle, Mail, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SocialProofSection />
      <PainAgitateSection />
      <FeatureSection />
      <ExplainerVideoSection />
      <PricingSection />
      <FAQSection />
      <CredibilitySection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative hero text-center py-24 bg-gradient-to-b from-[#0B5FFF] to-[#001A66] overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Snap. Know. Decide.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-white/90 leading-relaxed">
          Your stuff is a hidden treasure chest—open it with three quick photos. Our AI returns a price estimate in seconds, like having an expert on speed dial.
        </p>
        <p className="mt-4 text-lg text-white/80">
          Ready to see what it's worth?
        </p>
        <button className="mt-8 px-10 py-4 bg-white text-[#0B5FFF] font-semibold rounded-full shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 text-lg" aria-label="Start valuation">
          Start Valuation
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

function SocialProofSection() {
  const testimonials = [
    {
      name: "Emma",
      text: "Got a better quote than the pawn shop!",
      rating: 5
    },
    {
      name: "Marcus",
      text: "Incredibly accurate. Saved me from underselling my watch.",
      rating: 5
    },
    {
      name: "Sarah",
      text: "Like having an expert in my pocket. Amazing!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-label="Social proof">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Accuracy Users Brag About
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Over 25,000 items valued, 97% satisfied. As addictive as reading game reviews—you want to try too.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>
        
        <a href="#reviews" className="text-[#0B5FFF] hover:text-[#001A66] font-semibold inline-flex items-center gap-2 transition-colors">
          See more stories <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

function PainAgitateSection() {
  return (
    <section className="py-20" aria-label="Problem and solution">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900 p-8 rounded-2xl text-white">
            <h2 className="text-3xl font-bold mb-6">Dust Holds No Value</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
            Jewelry in a drawer, cards in the attic—like forgotten stocks growing in silence. 
            Not knowing the price keeps you stuck, wondering if that watch is worth $50 or $5,000.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">AssetAlyze Shows Instant Value</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              So you can act with confidence. Three photos, one estimate, endless possibilities.
            </p>
            <p className="text-orange-600 font-semibold text-lg">
              Curious what you're missing?
            </p>
            <button className="mt-6 px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">
              Get My Value
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  const features = [
    {
      icon: Camera,
      title: "AI Camera Magic",
      description: "Upload multi-angle photos; our vision model reads shape, metal, and wear faster than you blink.",
      cta: "Test it on your favorite watch!",
      color: "orange"
    },
    {
      icon: Shield,
      title: "EU-Grade Data Safety",
      description: "Images live on encrypted servers in Stockholm, never leaving the EU. As secure as a bank vault, yet digital.",
      cta: "Learn the details →",
      color: "blue"
    },
    {
      icon: Users,
      title: "Experts × Algorithm",
      description: "AI trained by jewelers, numismatists, and collectors delivers the planet's most trusted estimates.",
      cta: "See our method →",
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-label="Features">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How AssetAlyze Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Three powerful features working in harmony to give you the most accurate valuations possible.
          </p>
        </div>
        
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  feature.color === 'orange' ? 'bg-orange-100' :
                  feature.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <feature.icon className={`w-8 h-8 ${
                    feature.color === 'orange' ? 'text-orange-600' :
                    feature.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {feature.description}
                </p>
                <p className={`font-semibold ${
                  feature.color === 'orange' ? 'text-orange-600' :
                  feature.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                }`}>
                  {feature.cta}
                </p>
              </div>
              
              <div className="flex-1">
                <div className={`h-64 rounded-2xl ${
                  feature.color === 'orange' ? 'bg-gradient-to-br from-orange-200 to-orange-300' :
                  feature.color === 'blue' ? 'bg-gradient-to-br from-blue-200 to-blue-300' : 'bg-gradient-to-br from-green-200 to-green-300'
                } flex items-center justify-center`}>
                  <feature.icon className={`w-24 h-24 ${
                    feature.color === 'orange' ? 'text-orange-600' :
                    feature.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                  } opacity-50`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExplainerVideoSection() {
  return (
    <section className="py-20" aria-label="Explainer video">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Watch 30-Second Magic
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Martin snaps his ring, gets a price, and smiles like a kid finding an Easter egg. Tap to watch!
        </p>
        
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video max-w-3xl mx-auto mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 text-white/80 text-sm">
            30 seconds • HD Quality
          </div>
        </div>
        
        <button className="px-8 py-4 bg-[#0B5FFF] text-white font-semibold rounded-full hover:bg-[#001A66] transition-colors text-lg">
          Try It Now
        </button>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-20 bg-gray-50" aria-label="Pricing">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Free To Start
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          First valuation: $0. Need a PDF report with charts? $9. Cheaper than one movie ticket. No subscriptions, no hidden fees.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free</h3>
            <div className="text-4xl font-bold text-gray-900 mb-6">$0</div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>First valuation</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Basic price estimate</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Instant results</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border-2 border-[#0B5FFF] text-[#0B5FFF] font-semibold rounded-full hover:bg-[#0B5FFF] hover:text-white transition-colors">
              Start Free
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-[#0B5FFF] to-[#001A66] p-8 rounded-2xl shadow-xl text-white relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-2">Detailed Report</h3>
            <div className="text-4xl font-bold mb-6">$9</div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>PDF report with charts</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Market analysis</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Expert insights</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white text-[#0B5FFF] font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Get Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How accurate is the AI?",
      answer: "±5% vs market price, tested on 5M+ valuations. Our AI is continuously trained by professional jewelers and collectors."
    },
    {
      question: "Do real experts verify results?",
      answer: "Yes, jewelers and collectors re-check the model each quarter to ensure accuracy and keep up with market trends."
    },
    {
      question: "What items can I scan?",
      answer: "Anything you can photograph: watches, coins, jewelry, tech gadgets, collectibles, art, and more."
    },
    {
      question: "Are my photos safe?",
      answer: "Absolutely. Images are encrypted and stored on EU servers in Stockholm, never leaving European borders. GDPR compliant."
    },
    {
      question: "How long does it take?",
      answer: "Instant results in seconds. Upload photos, get your estimate immediately."
    },
    {
      question: "Must I sell after getting a valuation?",
      answer: "No obligation whatsoever. Use our service to know the value, then decide what to do with that information."
    }
  ];

  return (
    <section className="py-20" aria-label="Frequently asked questions">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quick Answers
          </h2>
          <p className="text-lg text-gray-600">
            We reply in short, no-lawyer sentences. More questions? Hit us up.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="mailto:support@assetalyze.com" className="text-[#0B5FFF] hover:text-[#001A66] font-semibold inline-flex items-center gap-2 transition-colors">
            <Mail size={16} />
            Email Support
          </a>
        </div>
      </div>
    </section>
  );
}

function CredibilitySection() {
  const badges = [
    { text: "GDPR ✔", description: "EU Data Protection" },
    { text: "EU AI Act ✔", description: "Compliant Logging" },
    { text: "99.9% Uptime ✔", description: "Reliable Service" },
    { text: "TLS 1.3 ✔", description: "Secure Connection" }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" aria-label="Trust and credibility">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Trust Built-In</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Like passport stamps that open every border. Enterprise-grade security and compliance.
        </p>
        
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {badges.map((badge, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
              <div className="text-2xl font-bold text-green-400 mb-2">{badge.text}</div>
              <p className="text-gray-300 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
        
        <a href="#certificates" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2 transition-colors">
          See Certificates <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16" aria-label="Footer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">All In One Place</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#press" className="hover:text-white transition-colors">Press</a></li>
                  <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#api" className="hover:text-white transition-colors">API Docs</a></li>
                  <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#terms" className="hover:text-white transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Subscribe for Valuation Tips</h4>
            <p className="text-gray-300 mb-4">Get weekly insights on market trends and valuation tips.</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button className="px-6 py-2 bg-[#0B5FFF] text-white font-semibold rounded-lg hover:bg-[#001A66] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AssetAlyze. All rights reserved. Made with precision in Stockholm.</p>
        </div>
      </div>
    </footer>
  );
}