"use client";
import { useState } from "react";
import { ShoppingBag, Sparkles, Star, Heart, Clock, Users, Shield } from "lucide-react";

export default function ServicesPage() {
  const [orders, setOrders] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const services = [
    {
      name: "Bridal Makeup",
      price: "₹8000",
      img: "/bridal-makeup.jpg",
      desc: "Complete bridal look with premium products for your special day.",
      popular: true,
      rating: 4.9,
      duration: "3-4 hours",
      bookings: "500+"
    },
    {
      name: "Party Makeup",
      price: "₹2500",
      img: "/party-makeup.jpeg",
      desc: "Glamorous party makeup to make you shine in every event.",
      popular: false,
      rating: 4.7,
      duration: "1-2 hours",
      bookings: "300+"
    },
    {
      name: "Facial Treatment",
      price: "₹1500",
      img: "/facial.jpeg",
      desc: "Glow enhancing facial using herbal and premium products.",
      popular: true,
      rating: 4.8,
      duration: "1 hour",
      bookings: "400+"
    },
    {
      name: "Hair Styling",
      price: "₹1200",
      img: "/hair.jpeg",
      desc: "Trendy hairstyles to match your occasion and outfit perfectly.",
      popular: false,
      rating: 4.6,
      duration: "45 mins",
      bookings: "250+"
    },
    {
      name: "Mehendi Service",
      price: "₹2000",
      img: "/mehndi.jpeg",
      desc: "Beautiful mehendi designs for weddings and special functions.",
      popular: true,
      rating: 4.9,
      duration: "2-3 hours",
      bookings: "600+"
    },
    {
      name: "Nail Art Service",
      price: "₹1000",
      img: "/nail-art.jpeg",
      desc: "Trendy and stylish nail art designs to complete your look.",
      popular: false,
      rating: 4.5,
      duration: "1 hour",
      bookings: "200+"
    },
  ];

  const handleOrder = (service) => {
    setOrders([...orders, service]);
    alert(`${service.name} added to your order! ✅`);
  };

  const toggleFavorite = (serviceName) => {
    if (favorites.includes(serviceName)) {
      setFavorites(favorites.filter(name => name !== serviceName));
    } else {
      setFavorites([...favorites, serviceName]);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 border border-white/30">
              <Sparkles size={22} className="text-yellow-300" />
              <span className="text-lg font-semibold">Premium Beauty Services</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent leading-tight">
            Our Services
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Discover our exclusive beauty services crafted to enhance your natural beauty for every special occasion
          </p>

          <div className="flex justify-center gap-4 mt-12">
            {[
              { icon: "💎", text: "Premium Quality" },
              { icon: "👑", text: "Expert Artists" },
              { icon: "⭐", text: "5-Star Service" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span>{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 -mt-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Look
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            From bridal transformations to party glam, we bring your beauty vision to life with expert care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-pink-200 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Star size={16} fill="white" />
                    Most Popular
                  </div>
                )}
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1 backdrop-blur-sm border border-white/20">
                  <Star size={16} className="text-yellow-400" fill="currentColor" />
                  {service.rating}
                </div>
                
                {/* Favorite Button */}
                <button 
                  onClick={() => toggleFavorite(service.name)}
                  className={`absolute bottom-4 right-4 p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    favorites.includes(service.name) 
                      ? 'bg-pink-500 border-pink-500 text-white' 
                      : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                  }`}
                >
                  <Heart 
                    size={20} 
                    fill={favorites.includes(service.name) ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Service Details */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{service.bookings} booked</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-3xl font-bold text-pink-600">{service.price}</span>
                    <span className="text-gray-500 text-sm ml-2">starting price</span>
                  </div>
                  
                  <button
                    onClick={() => handleOrder(service)}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    <ShoppingBag size={20} />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="bg-gradient-to-r from-gray-50 to-pink-50 py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium beauty services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Sparkles className="text-pink-500" size={32} />, 
                title: "Premium Quality", 
                desc: "We use only the best professional products from top brands" 
              },
              { 
                icon: <Users className="text-purple-500" size={32} />, 
                title: "Expert Artists", 
                desc: "Certified professional makeup artists with 5+ years experience" 
              },
              { 
                icon: <Shield className="text-indigo-500" size={32} />, 
                title: "Hygiene First", 
                desc: "Sterilized tools and single-use products for your safety" 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience premium beauty services
          </p>
          <button className="bg-white text-pink-600 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-2xl hover:shadow-3xl">
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
}