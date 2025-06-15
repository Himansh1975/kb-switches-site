import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Wifi,
  Smartphone,
  Mic,
  Zap,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Play,
  Award,
  Users,
  Lightbulb,
  Lock,
  Camera,
  Calendar,
  ArrowUp,
  Power,
  Home,
  Cpu,
  Activity,
  Gauge,
  WifiOff,
  Timer,
  Thermometer,
  Cloud,
  Sparkles,
  Settings,
  CheckCircle,
  CircuitBoard
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const products = [
    {
      modelNumber: "KB 001",
      name: "4 Touch Switch",
      description: "WiFi Smart Touch Switch with 4 individual load controls",
      voltage: "110-250 VAC, 50/60Hz",
      load: "450W incandescent, 120W LED",
      applications: ["LED lights", "Ceiling lights", "T.V", "Computers"],
      image: "/api/placeholder/300/250",
      icon: <Zap className="w-6 h-6" />,
      colorClass: "blue"
    },
    {
      modelNumber: "KB 002",
      name: "15A Switch",
      description: "High capacity WiFi Smart Touch Switch for heavy appliances",
      voltage: "110-250 VAC, 50/60Hz",
      load: "2000W",
      applications: ["A.C (up to 2 Ton)", "Refrigerator", "Microwave", "Oven"],
      image: "/api/placeholder/300/250",
      icon: <Power className="w-6 h-6" />,
      colorClass: "purple"
    },
    {
      modelNumber: "KB 003",
      name: "24A Switch",
      description: "Maximum capacity switch for industrial applications",
      voltage: "110-250 VAC, 50/60Hz",
      load: "3500W",
      applications: ["Geyser", "Room heater", "2hp motor", "A.C (up to 3 Ton)"],
      image: "/api/placeholder/300/250",
      icon: <Gauge className="w-6 h-6" />,
      colorClass: "red"
    },
    {
      modelNumber: "KB 004",
      name: "2 Way Switch",
      description: "Perfect for staircase and parking area lighting",
      voltage: "110-250 VAC, 50/60Hz",
      load: "450W",
      applications: ["Staircase lights", "Parking area light"],
      image: "/api/placeholder/300/250",
      icon: <Activity className="w-6 h-6" />,
      colorClass: "green"
    },
    {
      modelNumber: "KB 005",
      name: "Fan Regulator",
      description: "Humming-free 5-step speed control for ceiling fans",
      voltage: "110-250 VAC, 50/60Hz",
      load: "100W Capacitor based",
      applications: ["Ceiling Fan"],
      image: "/api/placeholder/300/250",
      icon: <Settings className="w-6 h-6" />,
      colorClass: "cyan"
    },
    {
      modelNumber: "KB 006",
      name: "Bell Switch",
      description: "Smart bell control for homes and offices",
      voltage: "110-250 VAC, 50/60Hz",
      load: "120W",
      applications: ["Outdoor bell", "Office bell"],
      image: "/api/placeholder/300/250",
      icon: <Home className="w-6 h-6" />,
      colorClass: "orange"
    }
  ];

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Life App",
      description: "Control all devices from your Android/iOS smartphone",
      bgPattern: "diagonal-lines"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Control",
      description: "Compatible with Amazon Alexa & Google Assistant",
      bgPattern: "dots"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "WiFi Connectivity",
      description: "2.4GHz WiFi for reliable smart home integration",
      bgPattern: "circuit"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Touch Control",
      description: "Elegant touch interface with memory function",
      bgPattern: "waves"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", icon: <Shield className="w-6 h-6" /> },
    { name: "CE Certified", icon: <CheckCircle className="w-6 h-6" /> },
    { name: "RoHS Compliant", icon: <Award className="w-6 h-6" /> },
    { name: "Make in India", icon: <Star className="w-6 h-6" /> }
  ];

  const lockProducts = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Smart Lock ${i + 1}`,
    image: "/api/placeholder/300/200"
  }));

  const sensorProducts = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Sensor & Stair Kit ${i + 1}`,
    image: "/api/placeholder/300/200"
  }));

  const eventPhotos = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Event ${i + 1}`,
    image: "/api/placeholder/400/300"
  }));

  const videos = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `Product Demo ${i + 1}`,
    thumbnail: "/api/placeholder/300/200"
  }));

  // Helper function to get color classes
  const getColorClasses = (colorClass) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        icon: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        gradient: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        icon: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        gradient: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        icon: 'text-red-600',
        button: 'bg-red-600 hover:bg-red-700',
        gradient: 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        icon: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        gradient: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
      },
      cyan: {
        bg: 'bg-cyan-100',
        text: 'text-cyan-800',
        icon: 'text-cyan-600',
        button: 'bg-cyan-600 hover:bg-cyan-700',
        gradient: 'from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        icon: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        gradient: 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800'
      }
    };
    return colorMap[colorClass] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Circuit Pattern CSS */}
      <style jsx>{`
        .circuit-pattern {
          background-image: 
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .diagonal-lines {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(59, 130, 246, 0.05) 10px,
            rgba(59, 130, 246, 0.05) 20px
          );
        }
        .electric-glow {
          box-shadow: 
            0 0 20px rgba(59, 130, 246, 0.3),
            inset 0 0 20px rgba(59, 130, 246, 0.1);
        }
        .power-line {
          background: linear-gradient(to right, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%);
          height: 2px;
          animation: power-flow 3s linear infinite;
        }
        @keyframes power-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b-2 border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Lightbulb className="w-8 h-8 text-blue-600" />
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-800">KB Switches™</span>
                <div className="text-xs text-blue-600 font-medium">SMART HOME AUTOMATION</div>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              {['Home', 'Products', 'Locks', 'Sensors', 'Gallery', 'Videos', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
    </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Products', 'Locks', 'Sensors', 'Gallery', 'Videos', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden circuit-pattern">
        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full power-line"></div>
          <div className="absolute top-2/4 left-0 w-full power-line" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-0 w-full power-line" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Cpu className="w-4 h-4" />
                <span>Established Since 2019</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                SWITCH TO
                <span className="text-blue-600 block">SMART LIVING</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A Light With New Shine.. Transform your home with India's most reliable WiFi smart switches and automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg electric-glow flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Get Quotation</span>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <CircuitBoard className="w-5 h-5" />
                  <span>View Catalog</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                    <div className="text-blue-600">{cert.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Product Showcase */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 electric-glow">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 diagonal-lines opacity-10"></div>
                  <div className={getColorClasses(products[activeProduct].colorClass).icon}>
                    {React.cloneElement(products[activeProduct].icon, { className: "w-24 h-24" })}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{products[activeProduct].name}</h3>
                <p className="text-gray-600 mb-4">{products[activeProduct].description}</p>
                <div className="flex space-x-2">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProduct(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === activeProduct ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Timer className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800 mb-2">5+ Years</div>
              <div className="text-gray-600">Industry Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Activity className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800 mb-2">1L+</div>
              <div className="text-gray-600">Switch Cycles</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800 mb-2">Pan India</div>
              <div className="text-gray-600">Distribution</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Award className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800 mb-2">MSME</div>
              <div className="text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 circuit-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>WHY CHOOSE KB</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Features, Smarter Living</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of innovation, quality, and convenience with our smart home automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Banner */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 diagonal-lines"></div>
            <div className="relative grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Cloud className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-1">Cloud Connected</h4>
                <p className="text-blue-100">Control from anywhere in the world</p>
              </div>
              <div>
                <Timer className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-1">Schedule & Timer</h4>
                <p className="text-blue-100">Automate your daily routines</p>
              </div>
              <div>
                <Shield className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-1">Surge Protection</h4>
                <p className="text-blue-100">Built-in safety for all devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              <span>PRODUCT RANGE</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Switches for Every Need</h2>
            <p className="text-xl text-gray-600">From basic lighting to heavy-duty appliances - we've got you covered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const colors = getColorClasses(product.colorClass);
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 circuit-pattern opacity-10"></div>
                    <div className={`${colors.icon} transform group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(product.icon, { className: "w-16 h-16" })}
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`${colors.bg} ${colors.text} text-sm font-medium px-3 py-1 rounded-full`}>
                        {product.modelNumber}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">Voltage</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{product.voltage}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Gauge className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-600">Load</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{product.load}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2 font-medium">Perfect for:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app, i) => (
                          <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-lg font-medium">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}>
                      <Phone className="w-4 h-4" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We provide tailored smart home automation solutions for builders, architects, and large projects
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Our B2B Team
            </button>
          </div>
        </div>
      </section>

      {/* Locks Section */}
      <section id="locks" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Lock className="w-4 h-4" />
              <span>SMART SECURITY</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Smart Locks</h2>
            <p className="text-xl text-gray-600">Secure your home with cutting-edge biometric and app-controlled locks</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lockProducts.map((lock) => (
              <div key={lock.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 diagonal-lines opacity-10"></div>
                  <Lock className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-2 right-2">
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{lock.name}</h3>
                  <p className="text-sm text-gray-500">Fingerprint + App Control</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-purple-600 font-semibold text-sm">View Details</span>
                    <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
     </section >

  {/* Sensors Section */ }
  < section id = "sensors" className = "py-20 bg-gray-50" >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Activity className="w-4 h-4" />
          <span>SMART SENSING</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Sensors & Automation</h2>
        <p className="text-xl text-gray-600">Motion sensors, stair lighting kits, and environmental monitoring</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sensorProducts.map((sensor) => (
          <div key={sensor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center relative">
              <div className="absolute inset-0 circuit-pattern opacity-10"></div>
              <div className="flex space-x-3">
                <Camera className="w-10 h-10 text-green-600 group-hover:animate-pulse" />
                <Thermometer className="w-10 h-10 text-blue-600 group-hover:animate-pulse animation-delay-200" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{sensor.name}</h3>
              <p className="text-gray-600 mb-4">Advanced motion detection and automated control</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">PIR Motion Detection</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Auto On/Off Control</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Energy Saving Mode</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Activity className="w-4 h-4" />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
     </section >

  {/* Gallery Section */ }
  < section id = "gallery" className = "py-20 bg-white relative overflow-hidden" >
       <div className="absolute inset-0 circuit-pattern opacity-5"></div>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
         <div className="text-center mb-16">
           <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
             <Calendar className="w-4 h-4" />
             <span>EVENTS & EXHIBITIONS</span>
           </div>
           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey in Pictures</h2>
           <p className="text-xl text-gray-600">Moments from trade shows, installations, and industry events</p>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {eventPhotos.slice(0, 12).map((photo) => (
             <div key={photo.id} className="group relative aspect-square bg-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
               <div className="w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                 <Calendar className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <div className="text-white">
                   <p className="font-semibold">{photo.title}</p>
                   <p className="text-sm text-gray-200">View Details</p>
                 </div>
               </div>
             </div>
           ))}
         </div>

         <div className="text-center mt-12">
           <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
             View All Photos
           </button>
         </div>
       </div>
     </section >

  {/* Videos Section */ }
  < section id = "videos" className = "py-20 bg-gray-50" >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Play className="w-4 h-4" />
          <span>VIDEO LIBRARY</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Products in Action</h2>
        <p className="text-xl text-gray-600">Installation guides, product demos, and customer testimonials</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.slice(0, 6).map((video) => (
          <div key={video.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center relative">
              <div className="absolute inset-0 diagonal-lines opacity-10"></div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-red-600 ml-1" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{video.title}</h3>
              <p className="text-sm text-gray-500 mt-1">Duration: 3:45</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-red-600 font-semibold text-sm">Watch Now</span>
                <ChevronRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
          <Play className="w-4 h-4" />
          <span>View All Videos</span>
        </button>
      </div>
    </div>
     </section >

  {/* Contact Section */ }
  < section id = "contact" className = "py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden" >
       <div className="absolute inset-0 circuit-pattern opacity-10"></div>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
         <div className="text-center mb-16">
           <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
             <Phone className="w-4 h-4" />
             <span>GET IN TOUCH</span>
           </div>
           <h2 className="text-4xl font-bold mb-4">Ready to Switch to Smart?</h2>
           <p className="text-xl text-gray-300">Contact us for quotations, bulk orders, and dealership inquiries</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="space-y-8">
             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
               <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                 <MapPin className="w-5 h-5 text-blue-400" />
                 <span>Visit Our Office</span>
               </h3>
               <div className="space-y-4">
                 <div>
                   <p className="text-gray-300 mb-2">
                     A-183 Ambica Industrial-2, Near Olive Circle,<br />
                     Gandhi Kutir Road, Bhattar, Surat - 395017
                   </p>
                 </div>
                 <div className="pt-4 border-t border-white/20">
                   <p className="text-sm text-gray-400 mb-2">Business Hours:</p>
                   <p className="text-gray-300">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                   <p className="text-gray-300">Sunday: Closed</p>
                 </div>
               </div>
             </div>

             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
               <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                 <Phone className="w-5 h-5 text-blue-400" />
                 <span>Quick Contact</span>
               </h3>
               <div className="space-y-4">
                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                   <span className="text-gray-300">Customer Care</span>
                   <a href="tel:7990414919" className="font-semibold hover:text-blue-400 transition-colors">7990414919</a>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                   <span className="text-gray-300">Business Inquiries</span>
                   <a href="tel:9687637511" className="font-semibold hover:text-blue-400 transition-colors">9687637511</a>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                   <span className="text-gray-300">Email</span>
                   <a href="mailto:kblights29@gmail.com" className="font-semibold hover:text-blue-400 transition-colors">kblights29@gmail.com</a>
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
             <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium mb-2">Name *</label>
                   <input
                     type="text"
                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     placeholder="Your Name"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-2">Phone *</label>
                   <input
                     type="tel"
                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     placeholder="Your Phone"
                   />
                 </div>
               </div>
               <div>
                 <label className="block text-sm font-medium mb-2">Email</label>
                 <input
                   type="email"
                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   placeholder="your@email.com"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium mb-2">Product Interest</label>
                 <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                   <option value="" className="bg-gray-800">Select Product Category</option>
                   <option value="switches" className="bg-gray-800">Smart Switches</option>
                   <option value="locks" className="bg-gray-800">Smart Locks</option>
                   <option value="sensors" className="bg-gray-800">Sensors & Automation</option>
                   <option value="bulk" className="bg-gray-800">Bulk/Dealership Inquiry</option>
                 </select>
               </div>
               <div>
                 <label className="block text-sm font-medium mb-2">Message</label>
                 <textarea
                   rows="4"
                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   placeholder="Tell us about your requirements..."
                 ></textarea>
               </div>
               <button
                 type="submit"
                 className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2"
               >
                 <Mail className="w-4 h-4" />
                 <span>Send Message</span>
               </button>
             </form>
           </div>
         </div>

         {/* Dealer Network CTA */}
         <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20">
           <h3 className="text-2xl font-bold mb-4">Become a KB Switches Dealer</h3>
           <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
             Join our growing network of dealers across India. Attractive margins, marketing support, and exclusive territories available.
           </p>
           <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2">
             <Users className="w-5 h-5" />
             <span>Partner With Us</span>
           </button>
         </div>
       </div>
     </section >

  {/* Footer */ }
  < footer className = "bg-gray-900 text-white py-12 border-t border-gray-800" >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <Lightbulb className="w-8 h-8 text-blue-400" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <span className="text-xl font-bold">KB Switches™</span>
              <div className="text-xs text-blue-400">SMART HOME AUTOMATION</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">A Light With New Shine..</p>
          <p className="text-gray-400 text-sm mt-2">Making Indian homes smarter since 2019</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#products" className="hover:text-blue-400 transition-colors">Products</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Download Catalog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Installation Guide</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Customer Care</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Dealer Locator</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Service Centers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Certifications</h4>
          <div className="grid grid-cols-2 gap-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-1 text-sm text-gray-400">
                <div className="text-blue-400">{cert.icon}</div>
                <span>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; 2024 B.R. ENTERPRISE. All rights reserved. | KB Switches is a registered trademark.</p>
      </div>
    </div>
     </footer >

  {/* Scroll to Top Button */ }
{
  showScrollTop && (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 electric-glow"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}

{/* WhatsApp Button */ }
<a
        href="https://wa.me/917990414919"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default App;