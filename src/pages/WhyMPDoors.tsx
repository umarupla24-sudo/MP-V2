import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function WhyMPDoors() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="pt-20">
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Why MP Doors Composite Technology Outperforms</h1>
          <p className="text-xl text-gray-700">
            Understanding the material science behind doors that resist rot, warping, and weather damage for decades.
          </p>
        </div>
      </section>

      <section id="hydroshield" className="bg-[#f5f5f5] py-20 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">HYDROSHIELD PROTECTION SYSTEM</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">What It Is:</h3>
            <p className="text-lg text-gray-700 mb-6">
              MP Doors' proprietary Hydroshield system provides comprehensive water protection through engineered composite
              frame construction. The non-porous composite material cannot absorb moisture—eliminating the primary cause of
              door failure in exterior applications.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">How It Works:</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                <strong>Non-Porous Composite:</strong> Unlike wood (cellular structure that absorbs water), composite
                materials are dense and impermeable
              </li>
              <li>
                <strong>Integrated Drainage:</strong> Threshold design with built-in channels directs water away from structure
              </li>
              <li>
                <strong>Multi-Layer Weatherstripping:</strong> Compression seals maintain contact across temperature changes
              </li>
              <li>
                <strong>Full-Frame Coverage:</strong> Every component—jambs, sill, header—uses composite, not wood
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Why It Matters:</h3>
            <p className="text-lg text-gray-700 mb-6">
              Wood patio doors commonly fail within 5-10 years in high-moisture environments due to bottom rail rot. Vinyl
              doors may resist surface moisture but warp under temperature cycling. Hydroshield composite frames maintain
              structural integrity in coastal regions, humid subtropical climates, and areas with heavy rainfall.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Testing & Performance:</h3>
            <p className="text-lg text-gray-700">
              Tested to industry moisture resistance standards. Installed doors in coastal Florida and Pacific Northwest
              show zero frame degradation after 10+ years of exposure to salt air and constant rain—conditions that typically
              destroy wood doors within 3-5 years.
            </p>
          </div>
        </div>
      </section>

      <section id="energy" className="bg-white py-20 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">ENERGY PERFORMANCE & COST SAVINGS</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Insulation Performance:</h3>
            <p className="text-lg text-gray-700 mb-6">
              MP Doors composite doors with CFC-free polyurethane foam core achieve R-value 5.8 compared to solid wood
              doors at R-value 1.0. This represents 6x better thermal resistance—meaning heat transfer through the door
              is reduced by approximately 80%.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Glass Technology:</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                <strong>Low-E Coating:</strong> Microscopic metallic layer reflects heat while allowing light transmission
              </li>
              <li>
                <strong>Argon Gas Fill:</strong> Denser than air, reduces convective heat transfer between panes
              </li>
              <li>
                <strong>Dual-Pane Construction:</strong> Creates thermal barrier with sealed air space
              </li>
              <li>
                <strong>Result:</strong> Approximately 40% reduction in heat loss/gain vs. standard glass
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Energy Cost Impact:</h3>
            <p className="text-lg text-gray-700 mb-4">
              A standard patio door can account for 10-25% of total home heating/cooling loss due to large glass surface
              area. Upgrading to MP Doors with Low-E glass and composite frame construction reduces this loss significantly:
            </p>
            <ul className="space-y-2 text-lg text-gray-700 mb-6">
              <li>• Moderate climates: Approximately $150-300 annual savings</li>
              <li>• Extreme climates (Phoenix, Minneapolis): Approximately $300-500 annual savings</li>
              <li>• Over door's lifetime: $3,000-10,000 cumulative savings</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">ENERGY STAR Certification:</h3>
            <p className="text-lg text-gray-700">
              MP Doors entry and patio doors meet or exceed ENERGY STAR requirements for all U.S. climate zones (Northern,
              North-Central, South-Central, and Southern), qualifying for potential tax credits where applicable.
            </p>
          </div>
        </div>
      </section>

      <section id="certifications" className="bg-[#f5f5f5] py-20 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">TESTING STANDARDS & CERTIFICATIONS</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Industry Testing Standards:</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                <strong>ASTM Standards:</strong> Door materials and construction tested to relevant ASTM specifications
              </li>
              <li>
                <strong>Moisture Resistance:</strong> Composite frames show minimal moisture absorption in standardized testing
              </li>
              <li>
                <strong>Dimensional Stability:</strong> Materials maintain shape across temperature extremes (-20°F to 140°F)
              </li>
              <li>
                <strong>Impact Resistance:</strong> Fiberglass skins demonstrate superior impact performance vs. steel
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Florida Building Code Compliance:</h3>
            <p className="text-lg text-gray-700 mb-4">
              MP Doors impact-rated patio doors are certified for coastal applications and meet Florida Building Code
              standards for high-velocity hurricane zones:
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• <strong>Product Approval:</strong> FL# FL-29714</li>
              <li>• <strong>Performance Grade:</strong> PG50 (50 PSF design pressure)</li>
              <li>• <strong>Impact Rating:</strong> Tested for large missile impact resistance</li>
              <li>• <strong>Coastal:</strong> Approved for use in wind-borne debris regions</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Texas Department of Insurance:</h3>
            <p className="text-lg text-gray-700 mb-6">
              Certified for high-wind applications in Texas coastal regions.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Quality Assurance:</h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• Factory assembly in controlled environment</li>
              <li>• Multi-point inspection process</li>
              <li>• Pre-installation testing of hardware and seals</li>
              <li>• Compliance with local building codes nationwide</li>
            </ul>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <a
              href="https://www.homedepot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-orange"
            >
              Find Home Depot Location →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
