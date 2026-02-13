export default function Contact() {
  return (
    <div className="pt-20">
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Contact MP Doors</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Questions about our doors? Need technical support? We're here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#f5f5f5] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Customer Service</h3>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> 1-888-366-7717</p>
              <p className="text-gray-700 mb-2"><strong>Fax:</strong> 1-888-366-7713</p>
              <p className="text-gray-700 mb-4"><strong>Email:</strong> info@mpdoors.com</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Hours:</strong></p>
              <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM CT</p>
              <p className="text-sm text-gray-600">Saturday: 9:00 AM - 2:00 PM CT</p>
              <p className="text-sm text-gray-600">Sunday: Closed</p>
            </div>

            <div className="bg-[#f5f5f5] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-700 mb-2"><strong>Installation Questions:</strong></p>
              <p className="text-gray-700 mb-4">1-888-366-7717 (ext. 2)</p>
              <p className="text-gray-700 mb-2"><strong>Email:</strong> techsupport@mpdoors.com</p>
              <p className="text-gray-700 mb-4"><strong>Warranty Claims:</strong> warranty@mpdoors.com</p>
            </div>

            <div className="bg-[#f5f5f5] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Where to Buy</h3>
              <p className="text-gray-700 mb-4">
                MP Doors are sold exclusively through The Home Depot.
              </p>
              <a
                href="https://www.homedepot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-orange mb-4 inline-block"
              >
                Find Your Nearest Home Depot →
              </a>
            </div>
          </div>

          <div className="bg-[#f5f5f5] p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-6">Company Information</h3>
            <p className="text-lg font-semibold mb-2">MP Doors Corporate Office:</p>
            <p className="text-gray-700 mb-1">8989 North Loop East</p>
            <p className="text-gray-700 mb-1">Houston, Texas 77029</p>
            <p className="text-gray-700 mb-6">United States</p>

            <p className="text-gray-700 mb-1"><strong>Founded:</strong> 1999</p>
            <p className="text-gray-700 mb-1"><strong>Manufacturing:</strong> Made in USA</p>
            <p className="text-gray-700"><strong>Exclusive Retail Partner:</strong> The Home Depot</p>
          </div>

          <div className="text-center bg-[#2a2a2a] text-white p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Need Quick Answers?</h3>
            <p className="text-lg mb-6">Check our FAQ page - most questions are answered there immediately.</p>
            <a href="/help-center/faq" className="cta-button-orange">
              Visit FAQ Hub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
