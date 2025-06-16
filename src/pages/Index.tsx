
import React from 'react';
import { Heart, Users, Shield, Star, Phone, Mail, MapPin, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="w-10 h-10 text-rose-600" fill="currentColor" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">Lami Nepal</h1>
            <p className="text-xl text-rose-100">Your trusted partner in finding love</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-amber-400 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About Us', id: 'about' },
              { name: 'Why Choose Us', id: 'benefits' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 font-semibold hover:text-rose-600 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-white/20"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-16 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              We connect hearts with <span className="text-rose-600">culture</span>, 
              <span className="text-amber-600"> care</span>, and 
              <span className="text-rose-600"> confidentiality</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you find your perfect match in a safe, respectful, and culturally aligned environment
            </p>
            
            <div className="relative max-w-md mx-auto mb-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Happy Couple</h3>
                <p className="text-gray-600">Join thousands who found love through Lami Nepal</p>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-rose-50 rounded-3xl shadow-xl p-8 md:p-12 border border-rose-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">About Us</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Lami Nepal is a registered matrimonial service in Nepal, dedicated to bringing together hearts 
                that beat in harmony. Whether you're single, divorced, or widowed, our experienced team supports 
                you at every step with complete confidentiality and personalized care. We understand the 
                importance of cultural values and family traditions in finding your life partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Create Profile",
                  description: "Share your details, preferences, and what you're looking for in a partner",
                  icon: Users,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: "2",
                  title: "Browse Matches",
                  description: "Filter by age, caste, location, education, and other preferences",
                  icon: Star,
                  color: "from-purple-500 to-purple-600"
                },
                {
                  step: "3",
                  title: "Connect Safely",
                  description: "Use our secure messaging system to initiate meaningful conversations",
                  icon: Shield,
                  color: "from-green-500 to-green-600"
                },
                {
                  step: "4",
                  title: "Find Love",
                  description: "Get continuous support and guidance until you find your perfect match",
                  icon: Heart,
                  color: "from-rose-500 to-rose-600"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl shadow-lg p-6 h-full transform group-hover:scale-105 transition-all duration-300 border border-gray-100">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold text-gray-800">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Lami Nepal</h3>
              <p className="text-lg text-gray-600">Experience the difference with our premium matrimonial services</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Diverse Global Network",
                  description: "Connect with verified profiles across Nepal and international Nepali communities",
                  icon: Users
                },
                {
                  title: "Advanced Matching System",
                  description: "Our intelligent algorithm considers compatibility factors for better matches",
                  icon: Star
                },
                {
                  title: "Complete Privacy Protection",
                  description: "Your personal information is secure with our advanced data protection systems",
                  icon: Shield
                },
                {
                  title: "24/7 Dedicated Support",
                  description: "Our expert relationship counselors are always available to guide you",
                  icon: Heart
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-amber-200">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Start Your Journey Today</h3>
                <p className="text-lg text-gray-600">Get in touch with us and take the first step towards finding your life partner</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about yourself and what you're looking for *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white resize-vertical"
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Send Message <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-600 to-rose-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-rose-600" fill="currentColor" />
            </div>
            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-rose-200" />
                <span className="text-rose-100">Kageshwori Manohara, Kathmandu</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-rose-200" />
                <span className="text-rose-100">+977-9861-726027</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-rose-200" />
                <span className="text-rose-100">info@laminepal.com</span>
              </div>
            </div>
            <div className="border-t border-rose-500 mt-8 pt-6">
              <p className="text-rose-100">
                &copy; 2025 Lami Nepal. All rights reserved. | Connecting hearts, building futures.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
