import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown } from 'lucide-react';

export default function Homepage() {
  const [activeFeature, setActiveFeature] = useState('hydroshield');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="pt-20">
      <HeroSection />
      <SocialProofSection />
      <ValuePropositionsSection />
      <InteractiveShowcase activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
      <DoorCategoryNavigator />
      <BestSellersPreview />
      <HelpCenterPreview />
      <FAQPreview openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} />
      <TrustFooter />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Fiberglass & Composite Doors Built for Long-Term Performance
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Composite frame technology that resists rot, warping, and weather damage.
            Engineered for American homes since 1999.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link to="/products/patio-doors" className="cta-button-orange">
              Shop Patio Doors
            </Link>
            <Link to="/products/entry-doors" className="cta-button-outline">
              Shop Entry Doors
            </Link>
          </div>
          <p className="text-sm text-gray-600">
            Available in 24 hours at The Home Depot • Lifetime Limited Warranty
          </p>
        </div>
        <div className="relative">
          <img
            src="/Hero_door_image.png"
            alt="MP Doors Product"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const reviews = [
    {
      rating: 5,
      text: "Six Florida summers, still slides perfectly. Replaced our rotted wood door in 2019.",
      author: "Sarah K., Fort Myers FL",
      verified: true
    },
    {
      rating: 5,
      text: "We install a lot of doors. MP Doors mean zero callbacks. Homeowners are happy, we're happy.",
      author: "Mike R., Licensed Contractor",
      verified: true
    },
    {
      rating: 5,
      text: "Coastal home with constant salt air. This door looks brand new after 8 years.",
      author: "Tom B., Charleston SC",
      verified: true
    },
    {
      rating: 5,
      text: "Installation took 4 hours. Door was perfectly squared at factory. Made my job easy.",
      author: "Rodriguez Bros. Construction",
      verified: true
    }
  ];

  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trusted by Homeowners Nationwide</h2>
          <p className="text-lg text-gray-600 mb-6">
            Based on 2,000+ verified reviews at The Home Depot
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={32} fill="#f68428" stroke="#f68428" />
            ))}
            <span className="text-3xl font-bold ml-2">4.6 Average Rating</span>
          </div>
        </div>

        <div className="mb-12">
          <img
            src="/Composite-sliding-patio-door.png"
            alt="Professional composite sliding door"
            className="w-full h-[600px] object-cover rounded-lg shadow-xl"
          />
        </div>

        <h3 className="text-3xl font-bold text-center mb-8">What Customers Say</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="#f68428" stroke="#f68428" />
                ))}
              </div>
              <p className="text-gray-800 mb-4">{review.text}</p>
              <p className="font-semibold text-gray-900">{review.author}</p>
              {review.verified && (
                <p className="text-sm text-gray-500">Verified Purchase</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.homedepot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-orange"
          >
            Find Home Depot Location →
          </a>
          <Link to="/installation-gallery/climate" className="cta-button-outline">
            See Installation Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ValuePropositionsSection() {
  const propositions = [
    {
      title: "Select Models Available in 24 Hours at The Home Depot",
      description: "Top-selling models stocked at most locations for same-day or next-day pickup"
    },
    {
      title: "Lifetime Limited Warranty on Frame Materials",
      description: "Composite frames guaranteed against rot and warping for as long as you own your home"
    },
    {
      title: "25+ Years Engineering Doors for American Homes",
      description: "Trusted by homeowners and contractors since 1999"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {propositions.map((prop, idx) => (
          <div key={idx} className="bg-[#f5f5f5] p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
            <p className="text-gray-700">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface InteractiveShowcaseProps {
  activeFeature: string;
  setActiveFeature: (feature: string) => void;
}

function InteractiveShowcase({ activeFeature, setActiveFeature }: InteractiveShowcaseProps) {
  const features = [
    {
      id: 'hydroshield',
      number: '01',
      name: 'Hydroshield Protection',
      title: 'HYDROSHIELD PROTECTION',
      description: 'Moisture-resistant composite frame helps prevent the rot and swelling that causes wood door failure.',
      points: [
        'Non-porous composite material',
        'Tested to industry standards',
        'Lifetime warranty on frame materials'
      ]
    },
    {
      id: 'energy',
      number: '02',
      name: 'Energy Efficiency',
      title: 'ENERGY EFFICIENCY',
      description: '6x better insulation than wood doors. ENERGY STAR certified for all U.S. climate zones.',
      points: [
        'CFC-free polyurethane foam core',
        'Low-E glass with argon fill',
        'Reduces heating and cooling costs'
      ]
    },
    {
      id: 'maintenance',
      number: '03',
      name: 'Low Maintenance',
      title: 'LOW MAINTENANCE PERFORMANCE',
      description: 'No painting or sealing required. Occasional cleaning maintains appearance.',
      points: [
        'Fiberglass won\'t rot or delaminate',
        'Composite frames stay dimensionally stable',
        'Factory finish lasts for years'
      ]
    }
  ];

  const activeFeatureData = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="interactive-showcase dark-section">
      <div className="ambient-blob blob-orange-1"></div>
      <div className="ambient-blob blob-orange-2"></div>
      <div className="showcase-container relative z-10">
        <h2 className="showcase-title">The Engineering Behind Long-Term Performance</h2>
        <p className="showcase-subtitle">
          Three material innovations that solve common door failure problems
        </p>

        <div className="showcase-grid">
          <div className="feature-buttons">
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`feature-btn ${activeFeature === feature.id ? 'active' : ''}`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <span className="feature-number">{feature.number}</span>
                <span className="feature-name">{feature.name}</span>
              </button>
            ))}
          </div>

          <div className="content-display">
            <div className="content-inner">
              <h3>{activeFeatureData.title}</h3>
              <p className="feature-description">{activeFeatureData.description}</p>
              <ul className="feature-list">
                {activeFeatureData.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoorCategoryNavigator() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Find Your Door</h2>
          <p className="text-lg text-gray-600">
            Choose by application and explore our complete selection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/Sliding_Patio_Door.png"
              alt="Patio Door"
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">PATIO DOORS</h3>
              <p className="text-gray-700 mb-6">
                Smooth sliding operation<br />
                Built to resist sticking and warping in any climate
              </p>
              <Link to="/products/patio-doors" className="cta-button-orange">
                Explore Patio Doors →
              </Link>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/‎Entry_door.‎001.png"
              alt="Entry Door"
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">ENTRY DOORS</h3>
              <p className="text-gray-700 mb-6">
                Beautiful and secure<br />
                Wood appearance without wood's maintenance demands
              </p>
              <Link to="/products/entry-doors" className="cta-button-orange">
                Explore Entry Doors →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BestSellersPreview() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Most Popular Choices</h2>
          <p className="text-lg text-gray-600">
            These three models account for the majority of MP Doors sales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            { title: '72" Patio Door', subtitle: 'Smooth White', reason: 'Universal fit, works in any climate', available: 'Available in 24 hours' },
            { title: '36" Entry Door', subtitle: 'Craftsman 3-Lite', reason: 'Classic style, high security', available: 'Available in 24 hours' },
            { title: '96" Patio Door', subtitle: 'Woodgrain Interior', reason: 'Large openings, premium finish', available: 'Special order' }
          ].map((product, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gray-200 h-48 mb-4 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-700 mb-4">{product.subtitle}</p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Why it's popular:</strong> {product.reason}
              </p>
              <p className="text-sm font-semibold text-[#f68428] mb-4">{product.available}</p>
              <Link to="/products/best-sellers" className="text-[#f68428] hover:underline">
                View Details →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products/best-sellers" className="cta-button-orange">
            See All Best-Sellers →
          </Link>
        </div>
      </div>
    </section>
  );
}

function HelpCenterPreview() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Expert Guides & Resources</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">How to Choose Your Door</h3>
            <p className="text-gray-700 mb-4">
              Step-by-step guide for selecting the right door for your home and climate
            </p>
            <Link to="/help-center/how-to-choose" className="text-[#f68428] hover:underline">
              Read Guide →
            </Link>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Installation Resources</h3>
            <p className="text-gray-700 mb-4">
              Specs, measurements, and professional installation support
            </p>
            <Link to="/resources/installation-guide" className="text-[#f68428] hover:underline">
              Get Resources →
            </Link>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Material Comparison Guide</h3>
            <p className="text-gray-700 mb-4">
              Composite vs. wood vs. vinyl vs. steel performance data
            </p>
            <Link to="/help-center/material-comparison" className="text-[#f68428] hover:underline">
              Compare Materials →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link to="/help-center/faq" className="cta-button-outline">
            Visit Help Center →
          </Link>
        </div>
      </div>
    </section>
  );
}

interface FAQPreviewProps {
  openFAQ: number | null;
  setOpenFAQ: (idx: number | null) => void;
}

function FAQPreview({ openFAQ, setOpenFAQ }: FAQPreviewProps) {
  const faqs = [
    {
      question: "What makes MP Doors different from other brands?",
      answer: "MP Doors uses full composite frame systems—not just the panel. Most brands use wood or vinyl frames where moisture damage occurs. Our composite frames are non-porous and dimensionally stable, backed by a lifetime warranty."
    },
    {
      question: "How long do composite doors actually last?",
      answer: "Composite doors are engineered for long-term durability. The materials are non-porous, won't rot, and have minimal UV degradation. Our lifetime warranty on composite frames reflects the durability of these materials."
    },
    {
      question: "Where can I buy MP Doors?",
      answer: "MP Doors are sold exclusively through The Home Depot nationwide. Shop in-store or online at HomeDepot.com. Popular models are stocked for quick pickup at most locations."
    },
    {
      question: "What warranty coverage comes with MP Doors?",
      answer: "Lifetime warranty on fiberglass panels and composite frames against delamination, rot, and warping. Limited period coverage on glass seals (10 years), factory finish (5 years), and hardware (1 year)."
    },
    {
      question: "Can I install myself or need professional installation?",
      answer: "Professional installation is recommended. Doors require precise leveling, proper flashing, and structural anchoring. Installation quality directly determines long-term performance. The Home Depot offers professional installation services."
    },
    {
      question: "How much do MP Doors cost?",
      answer: "Pricing varies by model, size, and features. Visit The Home Depot for current pricing. MP Doors are price-competitive with quality vinyl doors while offering superior composite frame technology."
    }
  ];

  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4 mb-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {openFAQ === idx && (
                <div className="px-6 pb-6 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/help-center/faq" className="cta-button-orange">
            See All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustFooter() {
  return (
    <section className="bg-[#2a2a2a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <img src="/MPDoors_Logo.png" alt="MP Doors" className="h-16 mx-auto mb-6" />
          <p className="text-lg text-gray-300">
            Engineering doors for American homes since 1999
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-4">25+ Years Experience</h3>
            <p className="text-gray-300">
              Trusted by homeowners and contractors nationwide
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Certified for Coastal & High-Wind Applications</h3>
            <p className="text-gray-300">
              FL# FL-29714, PG50<br />
              Impact-rated, meets Florida Building Code standards
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Exclusive at The Home Depot</h3>
            <p className="text-gray-300 mb-4">Find your nearest location</p>
            <a
              href="https://www.homedepot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-orange"
            >
              Find Store →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-white font-bold mb-4">PRODUCTS</h4>
          <ul className="space-y-2">
            <li><Link to="/products/patio-doors" className="hover:text-[#f68428]">Patio Doors</Link></li>
            <li><Link to="/products/entry-doors" className="hover:text-[#f68428]">Entry Doors</Link></li>
            <li><Link to="/products/best-sellers" className="hover:text-[#f68428]">Top 3 Best-Sellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">WHY MP DOORS</h4>
          <ul className="space-y-2">
            <li><Link to="/why-mp-doors#hydroshield" className="hover:text-[#f68428]">Hydroshield Technology</Link></li>
            <li><Link to="/why-mp-doors#energy" className="hover:text-[#f68428]">Energy Efficiency</Link></li>
            <li><Link to="/why-mp-doors#certifications" className="hover:text-[#f68428]">Testing & Certifications</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">HELP CENTER</h4>
          <ul className="space-y-2">
            <li><Link to="/help-center/how-to-choose" className="hover:text-[#f68428]">How to Choose</Link></li>
            <li><Link to="/help-center/faq" className="hover:text-[#f68428]">FAQ</Link></li>
            <li><Link to="/help-center/warranty" className="hover:text-[#f68428]">Warranty</Link></li>
            <li><Link to="/help-center/care-maintenance" className="hover:text-[#f68428]">Care Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:text-[#f68428]">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 text-center text-sm">
        <p>© 2024 MP Doors. All rights reserved. | Privacy Policy | Terms of Use</p>
        <p className="mt-2">Made in USA • Exclusive Partner: The Home Depot</p>
      </div>
    </footer>
  );
}
