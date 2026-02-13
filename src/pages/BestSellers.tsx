import { Link } from 'react-router-dom';

export default function BestSellers() {
  return (
    <div className="pt-20">
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">America's Most Popular Door Choices</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            These three models account for the majority of MP Doors sales. Trusted by hundreds of thousands of homeowners and contractors.
          </p>

          <div className="bg-[#f5f5f5] p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Why These Are Best-Sellers</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <ul className="space-y-3">
                <li>• <strong>Available in 24 Hours:</strong> Stocked at most Home Depot locations for immediate pickup</li>
                <li>• <strong>Proven Performance:</strong> Thousands of installations with consistently high ratings</li>
              </ul>
              <ul className="space-y-3">
                <li>• <strong>Versatile Application:</strong> Suitable for wide range of climates and home styles</li>
                <li>• <strong>Professional Recommendation:</strong> Contractors choose these for reliability and zero callbacks</li>
              </ul>
            </div>
          </div>

          <div className="space-y-16">
            <div className="bg-white border-2 border-[#f68428] rounded-lg overflow-hidden shadow-xl">
              <div className="bg-[#f68428] text-white p-4 text-center">
                <span className="text-2xl font-bold">#1 BEST-SELLER</span>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">72 in. x 80 in. Smooth White Composite Sliding Patio Door</h2>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Why #1 Best-Seller:</strong> Universal fit for standard 6' openings, works in any climate, competitive pricing.
                  The default choice for patio door replacements.
                </p>

                <h3 className="text-xl font-bold mb-4">Key Features:</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Full composite frame with Hydroshield protection</li>
                  <li>• Low-E dual-pane glass with argon fill</li>
                  <li>• Smooth-glide stainless steel rollers (50,000+ cycle rating)</li>
                  <li>• Factory pre-hung and assembled</li>
                  <li>• Smooth white finish (interior and exterior)</li>
                  <li>• ENERGY STAR certified</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Best For:</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Standard patio door replacements</li>
                  <li>• Moderate to high-moisture climates</li>
                  <li>• Homeowners seeking long-term value</li>
                  <li>• Contractors who need reliable, zero-callback products</li>
                </ul>

                <p className="font-semibold text-lg mb-2 text-[#f68428]">Available in stock at most Home Depot locations (24-hour pickup)</p>
                <p className="text-gray-600 mb-6">Installation Time: Professional installation typically 4-6 hours</p>

                <div className="flex gap-4">
                  <a href="https://www.homedepot.com" target="_blank" rel="noopener noreferrer" className="cta-button-orange">
                    Shop at Home Depot →
                  </a>
                  <Link to="/products/patio-doors" className="cta-button-outline">
                    See Technical Specs →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-bold">#2 TOP SELLER</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">36 in. x 80 in. Fiberglass 3-Lite Craftsman Entry Door</h2>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Why Top Seller:</strong> Classic craftsman style appeals to traditional home architecture.
                  High security multi-point locking. Proven durability in all climates.
                </p>

                <h3 className="text-xl font-bold mb-4">Key Features:</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Fiberglass panel with deep woodgrain embossing</li>
                  <li>• Complete composite frame system</li>
                  <li>• Three-panel Low-E glass configuration</li>
                  <li>• Multi-point locking system included</li>
                  <li>• Available in smooth white, dark walnut, or medium oak finishes</li>
                  <li>• Factory prefinished and pre-hung</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Best For:</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Craftsman, traditional, or colonial home styles</li>
                  <li>• Front door replacements prioritizing security</li>
                  <li>• Homeowners wanting wood appearance without maintenance</li>
                  <li>• All climate zones</li>
                </ul>

                <p className="font-semibold text-lg mb-2 text-[#f68428]">Available in stock at most Home Depot locations (24-hour pickup)</p>
                <p className="text-gray-600 mb-6">Installation Time: Professional installation typically 3-4 hours</p>

                <div className="flex gap-4">
                  <a href="https://www.homedepot.com" target="_blank" rel="noopener noreferrer" className="cta-button-orange">
                    Shop at Home Depot →
                  </a>
                  <Link to="/products/entry-doors" className="cta-button-outline">
                    See Technical Specs →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-bold">#3 CONTRACTOR CHOICE</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">96 in. x 80 in. Woodgrain Interior Composite Sliding Patio Door</h2>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Why Contractors Choose This:</strong> Large 8' opening, smooth operation with heavy glass panels,
                  premium woodgrain finish for upscale homes. Zero callback rate.
                </p>

                <h3 className="text-xl font-bold mb-4">Key Features:</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Extra-wide 96" configuration for large openings</li>
                  <li>• Heavy-duty stainless steel roller system</li>
                  <li>• Woodgrain interior finish / white exterior</li>
                  <li>• Low-E glass with argon fill</li>
                  <li>• Reinforced frame for large panel weight</li>
                  <li>• ENERGY STAR certified</li>
                </ul>

                <h3 className="text-xl font-bold mb-4">Best For:</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Large openings (8' wide)</li>
                  <li>• Upscale homes requiring premium appearance</li>
                  <li>• New construction or major renovations</li>
                  <li>• Professional installations</li>
                </ul>

                <p className="font-semibold text-lg mb-2 text-gray-600">Special order (2-3 week lead time at most locations)</p>
                <p className="text-gray-600 mb-6">Installation Time: Professional installation recommended, 6-8 hours</p>

                <div className="flex gap-4">
                  <a href="https://www.homedepot.com" target="_blank" rel="noopener noreferrer" className="cta-button-orange">
                    Shop at Home Depot →
                  </a>
                  <Link to="/products/patio-doors" className="cta-button-outline">
                    See Technical Specs →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#2a2a2a] text-white p-12 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Choose Your Door?</h3>
            <p className="text-lg mb-6">Visit The Home Depot to see these models in person and get expert advice</p>
            <a href="https://www.homedepot.com" target="_blank" rel="noopener noreferrer" className="cta-button-orange">
              Find Your Nearest Location →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
