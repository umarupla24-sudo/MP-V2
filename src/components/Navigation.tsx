import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/MPDoors_Logo.png" alt="MP Doors" className="h-12" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="text-white flex items-center gap-1 hover:text-[#f68428] transition-colors"
                onMouseEnter={() => setOpenDropdown('products')}
              >
                Products <ChevronDown size={16} />
              </button>
              {openDropdown === 'products' && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 glass-card py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/products/patio-doors" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Patio Doors
                  </Link>
                  <Link to="/products/entry-doors" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Entry Doors
                  </Link>
                  <Link to="/products/best-sellers" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Top 3 Best-Sellers
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="text-white flex items-center gap-1 hover:text-[#f68428] transition-colors"
                onMouseEnter={() => setOpenDropdown('why')}
              >
                Why MP Doors <ChevronDown size={16} />
              </button>
              {openDropdown === 'why' && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 glass-card py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/why-mp-doors#hydroshield" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Hydroshield Technology
                  </Link>
                  <Link to="/why-mp-doors#energy" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Energy Efficiency
                  </Link>
                  <Link to="/why-mp-doors#certifications" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Testing & Certifications
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="text-white flex items-center gap-1 hover:text-[#f68428] transition-colors"
                onMouseEnter={() => setOpenDropdown('help')}
              >
                Help Center <ChevronDown size={16} />
              </button>
              {openDropdown === 'help' && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 glass-card py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/help-center/how-to-choose" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    How to Choose Your Door
                  </Link>
                  <Link to="/help-center/material-comparison" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Material Comparison Guide
                  </Link>
                  <Link to="/help-center/care-maintenance" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Care & Maintenance
                  </Link>
                  <Link to="/help-center/warranty" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Lifetime Limited Warranty
                  </Link>
                  <Link to="/help-center/faq" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="text-white flex items-center gap-1 hover:text-[#f68428] transition-colors"
                onMouseEnter={() => setOpenDropdown('gallery')}
              >
                Installation Gallery <ChevronDown size={16} />
              </button>
              {openDropdown === 'gallery' && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 glass-card py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/installation-gallery/climate" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    By Climate Zone
                  </Link>
                  <Link to="/installation-gallery/challenge" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    By Challenge Solved
                  </Link>
                  <Link to="/installation-gallery/style" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    By Home Style
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="text-white flex items-center gap-1 hover:text-[#f68428] transition-colors"
                onMouseEnter={() => setOpenDropdown('resources')}
              >
                Resources <ChevronDown size={16} />
              </button>
              {openDropdown === 'resources' && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 glass-card py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/resources/door-assessment" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Door Health Assessment
                  </Link>
                  <Link to="/resources/measurement-guide" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Measurement Guide
                  </Link>
                  <Link to="/resources/installation-guide" className="block px-4 py-2 text-white hover:bg-[#f68428]/20">
                    Installation Guide
                  </Link>
                </div>
              )}
            </div>
          </div>

          <a
            href="https://www.homedepot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block cta-button-orange"
          >
            WHERE TO BUY
          </a>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden glass-card m-4">
          <div className="flex flex-col space-y-4 p-6">
            <div>
              <button
                onClick={() => toggleDropdown('products')}
                className="text-white flex items-center justify-between w-full"
              >
                Products <ChevronDown size={16} />
              </button>
              {openDropdown === 'products' && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/products/patio-doors" className="block text-white/80">Patio Doors</Link>
                  <Link to="/products/entry-doors" className="block text-white/80">Entry Doors</Link>
                  <Link to="/products/best-sellers" className="block text-white/80">Top 3 Best-Sellers</Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown('why')}
                className="text-white flex items-center justify-between w-full"
              >
                Why MP Doors <ChevronDown size={16} />
              </button>
              {openDropdown === 'why' && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/why-mp-doors#hydroshield" className="block text-white/80">Hydroshield Technology</Link>
                  <Link to="/why-mp-doors#energy" className="block text-white/80">Energy Efficiency</Link>
                  <Link to="/why-mp-doors#certifications" className="block text-white/80">Testing & Certifications</Link>
                </div>
              )}
            </div>

            <Link to="/help-center/faq" className="text-white">Help Center</Link>
            <Link to="/installation-gallery/climate" className="text-white">Installation Gallery</Link>
            <Link to="/resources/door-assessment" className="text-white">Resources</Link>

            <a
              href="https://www.homedepot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-orange text-center"
            >
              WHERE TO BUY
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
