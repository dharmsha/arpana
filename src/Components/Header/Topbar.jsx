"use client";
import { useState } from "react";
import { 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Heart, 
  Search, 
  ChevronDown,
  Star,
  Sparkles,
  Truck,
  Gift,
  Shield,
  Clock,
  Eye,
  Lipstick,
  Palette
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Different dropdown data for each menu item
  const dropdownData = {
    Products: {
      type: "mega",
      categories: [
        {
          title: "Face Makeup",
          icon: <User className="text-pink-500" size={18} />,
          items: ["Foundation", "Concealer", "Powder", "Blush", "Bronzer", "Highlighter", "Primer", "Setting Spray"]
        },
        {
          title: "Eye Makeup",
          icon: <Eye className="text-purple-500" size={18} />,
          items: ["Eyeshadow Palettes", "Eyeliner", "Mascara", "Eyebrow Pencil", "False Lashes", "Eye Primer"]
        },
        // {
        //   title: "Lip Products",
        //   icon: <Lipstick className="text-red-500" size={18} />,
        //   items: ["Lipstick", "Lip Gloss", "Lip Liner", "Lip Balm", "Lip Stain", "Lip Oil", "Lip Plumper"]
        // }
      ],
      featured: {
        title: "🔥 Best Sellers",
        items: [
          "Matte Liquid Lipstick - ₹899",
          "HD Foundation - ₹1,299", 
          "Volume Mascara - ₹599"
        ]
      }
    },
    Categories: {
      type: "grid",
      sections: [
        {
          icon: <Sparkles className="text-purple-500" size={20} />,
          title: "Makeup",
          items: ["Face", "Eyes", "Lips", "Cheeks", "Brushes", "Kits"]
        },
        {
          icon: <Star className="text-blue-500" size={20} />,
          title: "Skincare",
          items: ["Cleansers", "Moisturizers", "Serums", "Masks", "Sunscreen", "Toners"]
        },
        {
          icon: <Gift className="text-pink-500" size={20} />,
          title: "Fragrance",
          items: ["Perfumes", "Body Mists", "Roll-ons", "Gift Sets", "Home Fragrance"]
        },
        {
          icon: <Shield className="text-green-500" size={20} />,
          title: "Haircare",
          items: ["Shampoo", "Conditioner", "Hair Oil", "Styling", "Treatments", "Serums"]
        }
      ]
    },
    Offers: {
      type: "promotional",
      offers: [
        {
          title: "FLAT 50% OFF",
          description: "On all lipstick ranges",
          code: "LIP50",
          expiry: "Ends tomorrow",
          color: "from-red-400 to-pink-500"
        },
        {
          title: "BUY 1 GET 1",
          description: "On selected foundations",
          code: "B1G1FOUND",
          expiry: "Limited time",
          color: "from-purple-400 to-blue-500"
        },
        {
          title: "FREE DELIVERY",
          description: "On orders above ₹999",
          code: "FREESHIP",
          expiry: "No end date",
          color: "from-green-400 to-teal-500"
        }
      ]
    },
    Blog: {
      type: "articles",
      articles: [
        {
          title: "Summer Makeup Trends 2024",
          category: "Trends",
          readTime: "5 min read",
          image: "🌞"
        },
        {
          title: "Skincare Routine for Oily Skin",
          category: "Skincare",
          readTime: "7 min read",
          image: "💧"
        },
        {
          title: "How to Choose the Right Foundation",
          category: "Tutorial",
          readTime: "4 min read",
          image: "🎨"
        }
      ]
    }
  };

  const renderDropdown = (item) => {
    const data = dropdownData[item];
    if (!data) return null;

    switch (data.type) {
      case "mega":
        return (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[95vw] max-w-6xl bg-white shadow-2xl border border-gray-200 rounded-2xl p-8 z-50">
            <div className="flex gap-8">
              {/* Categories Section - 3 columns */}
              <div className="flex-1 grid grid-cols-3 gap-8">
                {data.categories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                      {category.icon}
                      <h3 className="font-bold text-gray-900 text-lg">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a 
                            href="#" 
                            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-all duration-200 group py-2 px-3 rounded-lg hover:bg-pink-50"
                          >
                            <div className="w-2 h-2 bg-pink-200 rounded-full group-hover:bg-pink-500 transition-colors"></div>
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Featured Products Section */}
              <div className="w-80 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                  <Star className="text-yellow-500" size={20} />
                  {data.featured.title}
                </h3>
                <div className="space-y-4">
                  {data.featured.items.map((featured, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="block p-4 bg-white rounded-xl border border-pink-200 hover:border-pink-400 transition-all duration-200 hover:shadow-lg group"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                          {featured.split(' - ')[0]}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-pink-600 font-bold text-sm">
                          {featured.split(' - ')[1]}
                        </span>
                        <button className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full hover:bg-pink-600 transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </a>
                  ))}
                </div>
                <button className="w-full mt-6 bg-white text-pink-600 border-2 border-pink-500 py-3 rounded-xl font-bold hover:bg-pink-600 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl">
                  View All Products →
                </button>
              </div>
            </div>
          </div>
        );

      case "grid":
        return (
          <div className="absolute top-full left-0 w-96 bg-white shadow-2xl border border-gray-200 rounded-2xl p-6 z-50">
            <h3 className="font-bold text-gray-900 mb-6 text-center text-lg">Shop By Category</h3>
            <div className="grid grid-cols-2 gap-6">
              {data.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    {section.icon}
                    <h3 className="font-semibold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a 
                          href="#" 
                          className="flex items-center gap-2 text-gray-600 hover:text-pink-600 text-sm transition-all duration-200 py-2 px-3 rounded-lg hover:bg-pink-50"
                        >
                          <div className="w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case "promotional":
        return (
          <div className="absolute top-full left-0 w-80 bg-white shadow-2xl border border-gray-200 rounded-2xl p-6 z-50">
            <h3 className="font-bold text-gray-900 mb-6 text-center text-lg">🎉 Special Offers</h3>
            <div className="space-y-4">
              {data.offers.map((offer, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${offer.color} rounded-xl p-4 text-white transform hover:scale-105 transition-all duration-200 shadow-lg`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{offer.title}</h4>
                      <p className="text-white/90 text-sm mb-2">{offer.description}</p>
                    </div>
                    <div className="bg-white/20 rounded-full p-2">
                      <Gift size={16} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <code className="bg-white/20 px-3 py-1 rounded-lg text-sm font-mono border border-white/30">
                      {offer.code}
                    </code>
                    <span className="text-xs opacity-90 bg-white/20 px-2 py-1 rounded">
                      {offer.expiry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-pink-600 transition-all duration-200">
              View All Offers
            </button>
          </div>
        );

      case "articles":
        return (
          <div className="absolute top-full left-0 w-80 bg-white shadow-2xl border border-gray-200 rounded-2xl p-6 z-50">
            <h3 className="font-bold text-gray-900 mb-6 text-lg">📚 Beauty Blog</h3>
            <div className="space-y-4">
              {data.articles.map((article, index) => (
                <a key={index} href="#" className="block group">
                  <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all duration-200">
                    <div className="text-2xl mt-1">{article.image}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-pink-600 transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded">{article.category}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <button className="w-full mt-6 bg-pink-500 text-white py-3 rounded-xl font-bold hover:bg-pink-600 transition-all duration-200">
              Read All Articles
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      {/* 🔹 Premium Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-3 px-4 gap-2">
          {/* Left - Contact & Offers */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <Truck size={14} className="text-pink-300" />
              <span className="text-pink-100">Free Shipping Above ₹999</span>
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-gray-300" />
              <span className="text-gray-200">+91 98765 43210</span>
            </span>
          </div>
          
          {/* Right - Authentication */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-gray-300 text-sm">
              Premium Beauty Destination
            </span>
            <div className="flex gap-4">
              <button className="hover:text-pink-300 transition-colors duration-200 flex items-center gap-1">
                <User size={14} />
                Login
              </button>
              <button className="bg-pink-600 hover:bg-pink-500 px-3 py-1 rounded-full transition-colors duration-200">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navigation */}
      <nav className="bg-white relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Arpana Beauty Care
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Premium Beauty</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {["Home", "Products", "Categories", "Offers", "Blog", "Contact"].map((item) => (
              <li 
                key={item}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href="#" 
                  className={`flex items-center gap-1 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeDropdown === item 
                      ? "text-pink-600 bg-pink-50 shadow-sm" 
                      : "text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                  }`}
                >
                  {item}
                  {dropdownData[item] && <ChevronDown size={16} />}
                </a>
                
                {/* Dropdown */}
                {activeDropdown === item && renderDropdown(item)}
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-2xl px-4 py-3 w-80 border border-gray-200 focus-within:border-pink-500 transition-colors">
            <Search size={18} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search for makeup, skincare, fragrance..." 
              className="bg-transparent w-full focus:outline-none text-sm placeholder-gray-400"
            />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-xl transition-colors relative group">
              <Heart size={22} className="text-gray-600 group-hover:text-pink-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                3
              </span>
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative group">
              <ShoppingCart size={22} className="text-gray-600 group-hover:text-pink-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                2
              </span>
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors group">
              <User size={22} className="text-gray-600 group-hover:text-pink-600 transition-colors" />
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-4">
          <div className="flex items-center bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200">
            <Search size={18} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-transparent w-full focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-slideDown">
            <div className="p-6 space-y-1">
              {["Home", "Products", "Categories", "Offers", "Blog", "Contact"].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="flex items-center justify-between py-4 px-4 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0"
                  onClick={() => setOpen(false)}
                >
                  <span>{item}</span>
                  {dropdownData[item] && <ChevronDown size={16} />}
                </a>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-6 border-t border-gray-200 mt-4">
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg">
                    Login
                  </button>
                  <button className="flex-1 border-2 border-pink-500 text-pink-600 py-3 rounded-xl font-semibold transition-all hover:bg-pink-50">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
  
}