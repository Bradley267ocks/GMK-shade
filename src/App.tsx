/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  MessageSquare,
  ShieldCheck,
  Clock,
  ThumbsUp,
  Award,
  Car,
  Fence,
  Warehouse,
  Paintbrush,
  BrickWall,
  Hammer,
  LayoutGrid,
} from "lucide-react";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    title: "Carports",
    icon: Car,
    image: "https://i.ibb.co/9knMNHNv/carport-2.jpg",
    description: "Durable and stylish steel carports tailored to protect your vehicles from South Africa's harsh weather.",
  },
  {
    title: "Gates",
    icon: Fence,
    image: "https://i.ibb.co/ms2wRW4/gates.jpg",
    description: "Custom gate manufacturing and professional installation for enhanced security and curb appeal.",
  },
  {
    title: "Shade Netting",
    icon: Warehouse,
    image: "https://i.ibb.co/fYtwCTfd/Whats-App-Image-2026-04-28-at-19-00-51.jpg",
    description: "High-quality shade netting structures for residential driveways, commercial parking, and agriculture.",
  },
  {
    title: "Building",
    icon: Hammer,
    image: "https://i.ibb.co/nsSDgXbC/Whats-App-Image-2026-04-28-at-19-00-46.jpg",
    description: "General building services including alterations, extensions, and structural improvements with expert care.",
  },
  {
    title: "Paving",
    icon: BrickWall,
    image: "https://i.ibb.co/HfxyMTF7/Whats-App-Image-2026-04-28-at-19-00-47-2.jpg",
    description: "Professional paving installation for driveways, walkways, and patios using premium materials.",
  },
  {
    title: "Painting",
    icon: Paintbrush,
    image: "https://i.ibb.co/3mzdJHNN/Whats-App-Image-2026-04-28-at-19-00-47-1.jpg",
    description: "Residential and commercial painting services that transform your property with a flawless finish.",
  },
  {
    title: "Tiling",
    icon: LayoutGrid,
    image: "https://i.ibb.co/bgM0xpcV/Tiling-interior.jpg",
    description: "Professional interior and exterior tiling services for a clean, modern look in any space.",
  }
];

const REASONS = [
  "Affordable and reliable service",
  "Skilled and experienced team",
  "High-quality materials",
  "On-time project delivery",
  "Customer satisfaction focus"
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    service: "Carport Installation",
    quote: "Godfrey and his team did an amazing job on our double carport in Rosslyn. The quality is top-notch and they finished ahead of schedule!"
  },
  {
    name: "Johan K.",
    service: "Gate Manufacturing",
    quote: "Professional service from start to finish. Our new security gate looks great and feels incredibly solid. Definitely the best in Pretoria."
  },
  {
    name: "Lebo T.",
    service: "Shade Netting",
    quote: "The shade netting structure they installed for our garden nursery is perfect. Strong, durable, and exactly what we needed."
  }
];

const GALLERY = [
  {
    img: "https://i.ibb.co/23xq7V1x/Whats-App-Image-2026-04-28-at-19-00-45.jpg",
    title: "Steel Carport Structure",
    location: "Rosslyn, Pretoria"
  },
  {
    img: "https://i.ibb.co/NnKJggf9/Whats-App-Image-2026-04-28-at-19-00-45-1.jpg",
    title: "Double Shade Netting",
    location: "Pretoria North"
  },
  {
    img: "https://i.ibb.co/9knMNHNv/carport-2.jpg",
    title: "Residential Carport",
    location: "Montana"
  },
  {
    img: "https://i.ibb.co/nsSDgXbC/Whats-App-Image-2026-04-28-at-19-00-46.jpg",
    title: "Building Construction",
    location: "Akasia"
  },
  {
    img: "https://i.ibb.co/HfxyMTF7/Whats-App-Image-2026-04-28-at-19-00-47-2.jpg",
    title: "Paving Project",
    location: "Silver Lakes"
  },
  {
    img: "https://i.ibb.co/3mzdJHNN/Whats-App-Image-2026-04-28-at-19-00-47-1.jpg",
    title: "Exterior Painting",
    location: "The Orchards"
  },
  {
    img: "https://i.ibb.co/ms2wRW4/gates.jpg",
    title: "Custom Security Gate",
    location: "Pretoria East"
  },
  {
    img: "https://i.ibb.co/xSzxLrm9/Whats-App-Image-2026-04-28-at-19-00-48-1.jpg",
    title: "Gate Installation",
    location: "Rosslyn"
  },
  {
    img: "https://i.ibb.co/Ngmg4sTj/Whats-App-Image-2026-04-28-at-19-00-48.jpg",
    title: "Property Boundary Wall",
    location: "Soshanguve"
  },
  {
    img: "https://i.ibb.co/bgM0xpcV/Tiling-interior.jpg",
    title: "Interior Tiling",
    location: "Pretoria West"
  },
  {
    img: "https://i.ibb.co/SXPdwBY3/Whats-App-Image-2026-04-28-at-19-00-49.jpg",
    title: "Entrance Gate Design",
    location: "Mamelodi"
  },
  {
    img: "https://i.ibb.co/KpgDDFWV/Whats-App-Image-2026-04-28-at-19-00-50-1.jpg",
    title: "Driveway Paving",
    location: "Ga-Rankuwa"
  },
  {
    img: "https://i.ibb.co/gb1X91kT/Whats-App-Image-2026-04-28-at-19-00-50.jpg",
    title: "Building Extension",
    location: "Waterkloof"
  },
  {
    img: "https://i.ibb.co/fYtwCTfd/Whats-App-Image-2026-04-28-at-19-00-51.jpg",
    title: "Commercial Shade Net",
    location: "Menlo Park"
  },
  {
    img: "https://i.ibb.co/wZndByvm/Whats-App-Image-2026-04-28-at-19-00-52.jpg",
    title: "Large Scale Carport",
    location: "Rosslyn Industrial"
  },
  {
    img: "https://i.ibb.co/zWjk6nF6/car-port.jpg",
    title: "Modern Double Carport",
    location: "Faerie Glen"
  },
  {
    img: "https://i.ibb.co/pv2bxtrs/Whats-App-Image-2026-04-28-at-19-01-56.jpg",
    title: "Finished Property View",
    location: "Centurion"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "GMK Shades Installer | Carports & Gate Services Pretoria";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Reliable Carports, Gates & Construction Services in Pretoria. High quality shade netting, paving, and painting in Rosslyn. Get a free quote today!");
    }
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/27658528651" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-white text-zinc-900 px-3 py-1 rounded-lg text-sm font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Questions? Talk to us!
        </span>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-zinc-900/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="bg-brand-gold p-2 rounded-lg">
              <ShieldCheck className="text-zinc-900 w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              GMK <span className="text-brand-gold">SHADES</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-zinc-300 font-medium text-sm">
            {["Services", "About", "Gallery", "Testimonials", "Contact"].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
                className="hover:text-brand-gold transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo("contact")}
              className="bg-brand-gold text-zinc-900 px-5 py-2.5 rounded-full font-bold hover:bg-brand-gold-dark transition-all transform active:scale-95"
            >
              FREE QUOTE
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/10 px-4 py-8 flex flex-col gap-6"
          >
            {["Services", "About", "Gallery", "Testimonials", "Contact"].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
                className="text-white font-display text-2xl text-left border-b border-white/5 pb-2"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-transparent z-10" />
          <img 
            src="https://i.ibb.co/zWjk6nF6/car-port.jpg" 
            alt="Double Carport Installation" 
            className="w-full h-full object-cover scale-110 blur-[1px]"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-brand-gold/20 text-brand-gold font-bold text-xs tracking-[0.2em] uppercase py-2 px-4 rounded-full mb-6">
              ROSSLYN, PRETORIA • SINCE 2018
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
              Reliable Carports, Gates & Construction in <span className="text-brand-gold">Pretoria</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-2xl">
              We build, install, and improve your property with quality workmanship you can trust. From shade netting to professional painting, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollTo("contact")}
                className="bg-brand-gold text-zinc-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-gold-dark transition-all transform active:scale-95 shadow-xl shadow-brand-gold/20"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:0658528651"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all transform active:scale-95"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto italic">
              Comprehensive property solutions for residential and commercial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-brand-gold hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-zinc-900 text-brand-gold w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-zinc-900 transition-colors shadow-lg">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://i.ibb.co/pv2bxtrs/Whats-App-Image-2026-04-28-at-19-01-56.jpg" 
                alt="GMK Shades professional property renovation" 
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-gold p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-zinc-900">10+</div>
                  <div className="text-zinc-900 font-bold leading-tight">Years OF<br/>EXPERIENCE</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About GMK Shades Installer</h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Based in the hub of <span className="text-white font-medium">Rosslyn, Pretoria</span>, GMK Shades Installer has built a reputation for excellence across Gauteng. We are more than just shade installers; we are property renovation partners.
              </p>
              <p>
                Our philosophy is simple: <span className="text-brand-gold italic">Quality workmanship shouldn't be a luxury.</span> We combine high-grade materials with years of practical experience to deliver results that last. Whether it's a simple repave or a complex industrial carport structure, we bring the same level of dedication and precision.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Expert Team", icon: Award },
                { label: "Reliability", icon: Clock },
                { label: "Customer Focus", icon: ThumbsUp },
                { label: "Local Pretoria Business", icon: MapPin }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="bg-brand-gold/20 p-2 rounded-lg">
                    <item.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <span className="font-medium text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white bg-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[100px]" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-12 relative z-10">Why Choose Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {REASONS.map((reason, i) => (
                <motion.div 
                  key={reason}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0" />
                  <span className="text-lg font-medium text-zinc-300">{reason}</span>
                </motion.div>
              ))}
              <div className="flex items-center justify-center p-5 rounded-2xl bg-brand-gold text-zinc-900 font-bold text-xl">
                Guaranteed Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
              <p className="text-zinc-600 italic">Take a look at some of our recent installations across Pretoria.</p>
            </div>
            <button 
              onClick={() => scrollTo("contact")}
              className="text-brand-gold font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              See your project here <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="gallery-mask shadow-lg"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="gallery-overlay">
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-zinc-300 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-gold" /> {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-50 p-8 rounded-3xl relative shadow-sm border border-zinc-100"
              >
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-gold text-white p-3 rounded-2xl shadow-lg">
                  <ThumbsUp className="w-6 h-6 text-zinc-900" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, star) => (
                    <span key={star} className="text-brand-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-zinc-600 mb-8 italic text-lg leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-bold text-zinc-900 text-lg">{t.name}</div>
                  <div className="text-brand-gold text-sm font-medium">{t.service}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-zinc-50 to-transparent opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Get Your <span className="text-brand-gold">Free Quote</span></h2>
              <p className="text-zinc-400 mb-12 text-lg">
                Ready to transform your property? Fill out the form or reach out directly via WhatsApp for an immediate response.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Call Us", val: "065 852 8651", link: "tel:27658528651" },
                  { icon: MessageSquare, label: "WhatsApp", val: "Chat Now", link: "https://wa.me/27658528651" },
                  { icon: Mail, label: "Email", val: "godfreymakuya20@gmail.com", link: "mailto:godfreymakuya20@gmail.com" },
                  { icon: MapPin, label: "Location", val: "Rosslyn, Pretoria, SA", link: "https://maps.google.com/?q=Rosslyn,Pretoria" }
                ].map((item) => (
                  <a 
                    key={item.label}
                    href={item.link}
                    className="flex items-center gap-6 group"
                  >
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl group-hover:bg-brand-gold group-hover:text-zinc-900 transition-all">
                      <item.icon className="w-6 h-6 text-brand-gold group-hover:text-zinc-900" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{item.label}</div>
                      <div className="text-white text-xl font-bold">{item.val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-900 font-bold mb-2 text-sm uppercase">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-900 font-bold mb-2 text-sm uppercase">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-zinc-900 font-bold mb-2 text-sm uppercase">Service Needed</label>
                  <select 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all font-medium appearance-none"
                  >
                    <option>Carports</option>
                    <option>Gates</option>
                    <option>Shade Netting</option>
                    <option>Building</option>
                    <option>Paving</option>
                    <option>Painting</option>
                    <option>Tiling</option>
                    <option>Other / General Quote</option>
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-900 font-bold mb-2 text-sm uppercase">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all font-medium"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <button className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/10 transform active:scale-95">
                  SEND QUOTE REQUEST
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="bg-zinc-900 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-brand-gold w-6 h-6" />
            <a href="https://www.gmkshades.co.za" className="font-display font-bold text-xl text-white tracking-tight hover:text-brand-gold transition-colors">
              GMK <span className="text-brand-gold">SHADES</span>
            </a>
          </div>
          
          <div className="flex gap-6 text-zinc-500">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-brand-gold hover:text-zinc-900 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-brand-gold hover:text-zinc-900 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} GMK Shades Installer (Pty) Ltd. All rights reserved. Rosslyn, Pretoria.
        </div>
      </footer>
    </div>
  );
}
