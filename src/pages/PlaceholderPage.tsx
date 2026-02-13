import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="pt-20">
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-12">{description}</p>

          <div className="bg-[#f5f5f5] p-12 rounded-lg mb-12">
            <p className="text-lg text-gray-700 mb-6">
              This page is currently under development. For immediate assistance, please contact us or visit The Home Depot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="cta-button-orange">
                Return Home
              </Link>
              <Link to="/help-center/faq" className="cta-button-outline">
                Visit FAQ
              </Link>
              <a
                href="https://www.homedepot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-outline"
              >
                Find Home Depot
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
