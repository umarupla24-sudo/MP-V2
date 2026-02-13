import { Link } from 'react-router-dom';

export default function EntryDoors() {
  return (
    <div className="pt-20">
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Entry Doors</h1>

          <div className="bg-[#f5f5f5] p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Does your front door fit differently in summer than winter?</h2>
            <p className="text-lg text-gray-700 mb-4">
              An entry door opens 5-10 times daily, faces direct sun and rain, bridges indoor/outdoor temperature extremes.
              Most doors fail slowly: first a draft, then harder to latch, then visible gaps. By the time it's warped or rotted,
              it's been underperforming for years.
            </p>
            <p className="text-lg text-gray-700">
              MP Doors entry doors combine authentic wood appearance with fiberglass panels and full composite frames—maintaining
              dimensional stability, weather protection, and secure operation over the door's lifetime.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8">Product Characteristics</h2>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Fiberglass Panel with Deep Embossed Wood Grain</h3>
              <p className="text-gray-700">
                Compression-molded fiberglass replicates real wood grain texture and shadow lines. Stainable or paintable
                like wood, but won't rot, split, or delaminate. Available in multiple woodgrain patterns (oak, mahogany, rustic)
                or smooth white. Engineered to maintain appearance over many years of sun and rain exposure without requiring refinishing.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Complete Composite Frame System</h3>
              <p className="text-gray-700">
                Entire frame—jambs, sill, header, brickmold—is composite, not wood. Critical distinction: many "fiberglass doors"
                have wood frames that absorb moisture and rot. MP Doors composite frames are non-porous, dimensionally stable,
                and carry lifetime warranty against rot and warping.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Superior Insulation - Polyurethane Foam Core</h3>
              <p className="text-gray-700">
                CFC-free rigid polyurethane foam creates thermal barrier. R-value 5.8 vs. solid wood R-value 1.0 = 6x better
                performance. Eliminates cold drafts near door, reduces HVAC runtime, improves comfort. ENERGY STAR certified
                for all U.S. climate zones.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Multi-Point Locking System</h3>
              <p className="text-gray-700">
                Locks engage frame at three+ points (top, middle, bottom) vs. single latch of basic locks. Composite frames
                provide rigidity needed—won't crack or split under force like wood. Solid brass or stainless steel hardware
                with anti-pick cylinders.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f68428]">Factory-Assembled, Pre-Hung, and Prefinished</h3>
              <p className="text-gray-700">
                Complete door arrives as single unit: panel hung in frame, hinges installed/adjusted, weatherstripping in place,
                factory finish applied, hardware pre-installed. Factory assembly in controlled environment ensures consistent quality.
                Installers complete standard replacements in 3-4 hours.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Common Problems Solved</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">My door is hard to close in summer, drafty in winter</h4>
              <p className="text-gray-700">
                Wood expands significantly with humidity, shrinks when dry. Composite has minimal expansion—maintains fit
                year-round without seasonal adjustment.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">My door looks worn, needs repainting every few years</h4>
              <p className="text-gray-700">
                Wood degrades from UV and moisture, requires refinishing every 2-3 years. Fiberglass is UV-stable and
                non-porous. Factory finishes last for years. Maintenance: occasional soap and water cleaning.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">I worry about security—frame feels weak when locked</h4>
              <p className="text-gray-700">
                Wood frames soften from moisture and split at stress points. Composite frames maintain structural rigidity,
                won't split when deadbolts engage, resist forced entry when properly anchored.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">I want beautiful wood look without constant maintenance</h4>
              <p className="text-gray-700">
                Wood appearance (deep grain embossing, rich stain colors) without wood's problems. No rot, no splitting,
                no refinishing. Factory finishes warranted against fading/peeling. Visual authenticity from normal viewing
                distance—closely replicates quality wood.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Browse Entry Door Models</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-[#f68428] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Classic Craftsman: 36 in. x 80 in. Fiberglass 3-Lite Entry Door</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Fiberglass panel with woodgrain embossing</li>
                <li>• Complete composite frame with Hydroshield</li>
                <li>• Low-E glass in three-panel craftsman configuration</li>
                <li>• Multi-point locking system included</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Traditional/craftsman homes</p>
            </div>

            <div className="bg-white border border-gray-300 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Contemporary: 36 in. x 80 in. Smooth White Entry Door</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Clean lines, minimal detailing</li>
                <li>• Smooth finish (paintable any color)</li>
                <li>• Modern hardware styles available</li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Modern architecture, minimalist design</p>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-gray-700 mb-2"><strong>Sizes:</strong> 32", 36" (most common), custom available</p>
            <p className="text-gray-700 mb-2"><strong>Glass:</strong> No glass, half-lite, 3/4 lite, full oval</p>
            <p className="text-gray-700 mb-6"><strong>Finishes:</strong> Woodgrain stains, smooth white, custom colors</p>
            <a
              href="https://www.homedepot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-orange"
            >
              Shop all entry doors at The Home Depot →
            </a>
          </div>

          <h2 className="text-3xl font-bold mb-8">FAQ - Entry Doors</h2>

          <div className="space-y-6">
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">How does fiberglass compare to wood in appearance?</h4>
              <p className="text-gray-700">
                Compression molding captures real wood grain patterns, raised texture, and dimensional shadow lines.
                From normal viewing distances, closely replicates the appearance of quality wood. Accepts stain like wood,
                creating color variation and grain highlighting. Provides wood's aesthetic benefits with superior performance characteristics.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">Will MP Doors really last decades?</h4>
              <p className="text-gray-700">
                The estimate is based on material science: fiberglass used in boats remains structurally sound for 30-40 years
                in saltwater (more aggressive than atmospheric exposure). Composite frames are non-porous—don't rot, minimal
                UV degradation. Lifetime warranty on composite frame and fiberglass panel reflects the durability of these materials.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">What warranty coverage comes with MP Doors?</h4>
              <p className="text-gray-700">
                Lifetime warranty (as long as you own home): Fiberglass panel delamination/structural failure, composite frame
                rot/warping/degradation, material defects. Limited period: Glass seal (10 years), factory finish (5 years),
                hardware (1 year). Professional installation strongly recommended for warranty coverage.
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <Link to="/products/patio-doors" className="cta-button-outline">
              Explore Patio Doors →
            </Link>
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
