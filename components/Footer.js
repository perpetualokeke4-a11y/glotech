
// components/Footer.jsx

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo / About */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            GlotechGlobal
          </h1>

          <p className="text-gray-400 text-sm leading-6">
            We provide quality computer accessories, laptops,
            solar products, and modern technology solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/dashboard/computer-accessories" className="hover:text-yellow-400 transition">
                Computer-Accessories
              </Link>
            </li>

            <li>
              <Link href="/dashboard/solar-item" className="hover:text-yellow-400 transition">
                Solar-Items
              </Link>
            </li>

            <li>
              <Link href="/dashboard/location" className="hover:text-yellow-400 transition">
                Location
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Services
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>Computer Sales</li>
            <li>Solar Installation</li>
            <li>Laptop Repairs</li>
            <li>Technical Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Contact Us
          </h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Email: info@techsolar.com</li>
            <li>Phone: 08068911221</li>
            <li>Phone: 08131861215</li>
            <li>Abuja,Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        <ul>
          <li> &copy; {year} All right Reserved</li>
        </ul>
      </div>
    </footer>
  );
}