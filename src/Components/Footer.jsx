"use client";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  PlayCircle,   // ✅ YouTube ki jagah PlayCircle
  Mail 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl">GlamStore</h3>
          <p className="text-gray-400 text-sm">
            Premium beauty destination for makeup, skincare, fragrance, and haircare products. 
            Quality products delivered to your doorstep.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><PlayCircle size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Products", "Categories", "Offers", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-pink-500 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            {["Face Makeup", "Eye Makeup", "Skincare", "Haircare", "Fragrance", "Accessories"].map((cat) => (
              <li key={cat}>
                <a href="#" className="hover:text-pink-500 transition-colors">{cat}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold mb-2">Newsletter</h4>
          <p className="text-gray-400 text-sm">Subscribe for the latest offers and updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 px-4 py-2 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500" 
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-xl text-white font-semibold flex items-center gap-2 transition-all">
              <Mail size={16} /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GlamStore. All rights reserved.
      </div>
    </footer>
  );
}
