import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQHub() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqCategories = [
    {
      category: "Product Questions",
      faqs: [
        {
          id: "prod-1",
          question: "What makes MP Doors different from other brands?",
          answer: "MP Doors uses full composite frame systems—not just the panel. Most brands use wood or vinyl frames where moisture damage occurs. Our composite frames are non-porous and dimensionally stable, with Hydroshield technology specifically targeting water infiltration points. Backed by lifetime warranty on frame materials."
        },
        {
          id: "prod-2",
          question: "How long do composite doors last?",
          answer: "Composite doors are engineered for long-term durability. The materials are non-porous, won't rot, and have minimal UV degradation. Fiberglass used in boats remains structurally sound for 30-40 years in saltwater (more aggressive than atmospheric exposure). Our lifetime warranty on composite frames reflects this durability."
        },
        {
          id: "prod-3",
          question: "What is Hydroshield technology?",
          answer: "Hydroshield is our proprietary water protection system using engineered composite frame construction. The non-porous composite material cannot absorb moisture—eliminating the primary cause of door failure. Includes integrated drainage, multi-layer weatherstripping, and full composite coverage on all frame components."
        },
        {
          id: "prod-4",
          question: "Are MP Doors energy efficient?",
          answer: "Yes. Our doors achieve R-value 5.8 compared to solid wood at R-1.0 (6x better). Low-E glass with argon fill reduces heat transfer by approximately 40%. ENERGY STAR certified for all U.S. climate zones. Can save $150-500 annually depending on climate."
        }
      ]
    },
    {
      category: "Purchasing & Availability",
      faqs: [
        {
          id: "purch-1",
          question: "Where can I buy MP Doors?",
          answer: "MP Doors are sold exclusively through The Home Depot nationwide. You can shop in-store to view displays or online at HomeDepot.com for the complete selection. The Home Depot offers measurement services, professional installation, and financing options."
        },
        {
          id: "purch-2",
          question: "Are MP Doors available in 24 hours?",
          answer: "Top-selling models are stocked at most Home Depot locations for same-day or next-day pickup. This includes popular patio door (72 x 80) and entry door (36 x 80) sizes. Specialty sizes and configurations may require special order (typically 2-3 weeks)."
        },
        {
          id: "purch-3",
          question: "How much do MP Doors cost?",
          answer: "Pricing varies by model, size, and features. Visit The Home Depot for current pricing. MP Doors are price-competitive with quality vinyl doors while offering superior composite frame technology. Consider long-term energy savings and lifetime warranty value."
        }
      ]
    },
    {
      category: "Installation",
      faqs: [
        {
          id: "install-1",
          question: "Can I install MP Doors myself?",
          answer: "Professional installation is strongly recommended. Patio doors weigh 250-350 lbs, require precise leveling (within 1/16 inch), proper flashing, and structural anchoring. Installation quality directly determines long-term performance. The Home Depot offers professional installation ($300-600) with trained installers."
        },
        {
          id: "install-2",
          question: "How long does professional installation take?",
          answer: "Standard patio door replacements: 4-6 hours. Entry door replacements: 3-4 hours. Time varies based on existing opening condition, structural repairs needed, and site accessibility. MP Doors' factory pre-hung system significantly reduces installation time vs. field-assembled doors."
        },
        {
          id: "install-3",
          question: "What preparation is needed before installation?",
          answer: "Clear area around door (inside and out). Remove furniture, decorations, and obstacles. Cover nearby flooring if concerned about dust. Arrange for pets/children to be away during installation. Professional installers will assess structural condition and identify any repairs needed."
        }
      ]
    },
    {
      category: "Care & Maintenance",
      faqs: [
        {
          id: "care-1",
          question: "How do I clean my MP Doors?",
          answer: "Clean with mild soap and water solution. Use soft cloth or sponge—avoid abrasive materials. For stubborn dirt: non-abrasive cleaner (Simple Green, Windex). Rinse thoroughly. Clean glass with standard glass cleaner. Frequency: as needed, typically 2-4 times per year."
        },
        {
          id: "care-2",
          question: "Do composite doors require sealing or painting?",
          answer: "No sealing required—composite is non-porous. Factory finishes are designed to last for years. Repainting possible if desired (for smooth doors). Woodgrain stained doors: restaining more complex, professional recommended. Regular painting/sealing NOT needed like wood doors."
        }
      ]
    },
    {
      category: "Technical & Warranty",
      faqs: [
        {
          id: "tech-1",
          question: "What is the R-value of MP Doors?",
          answer: "MP Doors with polyurethane foam core achieve R-value 5.8, compared to solid wood doors at R-1.0. This represents 6x better thermal resistance, meaning approximately 80% reduction in heat transfer through the door."
        },
        {
          id: "tech-2",
          question: "What does the lifetime warranty cover?",
          answer: "Lifetime warranty (as long as you own home): Fiberglass panel delamination/structural failure, composite frame rot/warping/degradation, material defects. Limited period: Glass seal (10 years), factory finish (5 years), hardware (1 year). Not covered: Improper installation, normal wear, acts of nature, glass breakage from impact."
        },
        {
          id: "tech-3",
          question: "How do I file a warranty claim?",
          answer: "Register your door within 30 days of installation. Document issue with clear photos. Contact MP Doors customer service at 1-888-366-7717 or warranty@mpdoors.com. Provide proof of purchase, installation date, and description of issue. Professional installation strongly recommended for warranty coverage."
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Find answers to common questions about MP Doors products, installation, and warranty
          </p>

          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#f68428]">{category.category}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq) => (
                  <div key={faq.id} className="bg-[#f5f5f5] rounded-lg overflow-hidden">
                    <button
                      className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-200 transition-colors"
                      onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                    >
                      <span className="font-bold text-lg pr-4">{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={`flex-shrink-0 transform transition-transform ${
                          openFAQ === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-6 text-gray-700">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 bg-[#f5f5f5] p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-700 mb-6">
              Contact our customer service team for personalized assistance
            </p>
            <a
              href="https://www.homedepot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-orange"
            >
              Contact Support →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
