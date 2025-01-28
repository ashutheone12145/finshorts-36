import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">MarketIntel</h3>
            <p className="text-gray-300">
              Your trusted partner for market intelligence and business growth.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-center text-gray-300">
            © {new Date().getFullYear()} MarketIntel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};