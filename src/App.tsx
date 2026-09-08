import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ChevronRight, Menu, X, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <img src="/images/logo.jpg" alt="Estetica Denise" className="h-12 w-auto rounded-full shadow-md" />
            <span className="ml-3 font-serif text-2xl font-semibold tracking-wide text-brand-dark">Estetica Denise</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-brand-orange transition-colors">Home</a>
            <a href="#promozioni" className="text-gray-700 hover:text-brand-orange transition-colors">Promozioni</a>
            <a href="#servizi" className="text-gray-700 hover:text-brand-orange transition-colors">Servizi & Listino</a>
            <a href="#unghie" className="text-gray-700 hover:text-brand-orange transition-colors">Nails</a>
            <a href="#contatti" className="text-gray-700 hover:text-brand-orange transition-colors">Contatti</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-brand-orange">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50">Home</a>
            <a href="#promozioni" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50">Promozioni</a>
            <a href="#servizi" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50">Servizi & Listino</a>
            <a href="#unghie" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50">Nails</a>
            <a href="#contatti" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50">Contatti</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="/images/logo.jpg" 
          alt="Background" 
          className="w-full h-full object-cover filter blur-sm scale-105"
        />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
        >
          Ritrova il tuo equilibrio, <br/>
          <span className="italic text-brand-orange">riparti da te.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto"
        >
          Trattamenti esclusivi. Tempo riservato. Attenzione assoluta. Un momento di puro relax pensato solo per te.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#promozioni" className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-medium rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Scopri le Promozioni
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Promozioni = () => {
  const promos = [
    {
      image: '/images/promo_settembre.png',
      title: 'Settembre Beauty Reset',
      desc: '3 promo speciali per prenderci cura di te dalla testa ai piedi. Laser, Trattamento Viso e Manicure+Pedicure.'
    },
    {
      image: '/images/promo_radiofrequenza.png',
      title: 'Novità: Radiofrequenza + Vacuum',
      desc: 'Rassoda, drena e tonifica. Migliora gli inestetismi della cellulite con la nostra nuova tecnologia.'
    },
    {
      image: '/images/promo_pressoterapia.png',
      title: 'Speciale Pressoterapia',
      desc: 'Drena i liquidi e ritrova leggerezza. Pacchetto 10 sedute gambe + addome in offerta speciale.'
    }
  ];

  return (
    <section id="promozioni" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-brand-dark mb-4"
          >
            Le Nostre Promozioni 🧡
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Non perdere l'occasione di coccolarti con i nostri pacchetti speciali pensati per il tuo benessere.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {promos.map((promo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{promo.desc}</p>
                <a href="#contatti" className="text-brand-orange font-medium inline-flex items-center hover:underline">
                  Prenota ora <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Servizi = () => {
  return (
    <section id="servizi" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-brand-dark mb-4"
          >
            I Nostri Servizi & Listino
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Trattamenti mirati per valorizzare la tua bellezza naturale, dal make-up all'epilazione, dai massaggi alla cura delle unghie.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src="/images/pricelist1.png" alt="Listino Prezzi Make-up" className="w-full h-auto" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src="/images/pricelist2.png" alt="Listino Prezzi Trattamenti" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const NailsCarousel = () => {
  const images = [
    '/images/nails.jpg',
    // We only have one explicit nails image provided, so we duplicate it for the carousel effect, 
    // or we could use the instagram profile pic as placeholder. Let's duplicate to show scrolling.
    '/images/nails.jpg',
    '/images/nails.jpg',
    '/images/nails.jpg',
  ];

  return (
    <section id="unghie" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif text-brand-dark mb-4"
            >
              Nails Art & Cura delle Mani ✨
            </motion.h2>
            <p className="text-gray-600">Dettagli che fanno la differenza. Manicure curativa, semipermanente e nail art personalizzate.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src={src} alt="Nails" className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

const Feedback = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-brand-dark mb-4"
          >
            Dicono di Noi 🤍
          </motion.h2>
          <p className="text-gray-600">La soddisfazione delle nostre clienti è il nostro più grande successo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            <div className="flex text-brand-orange mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <img src="/images/feedback1.png" alt="Feedback Cliente" className="w-full h-auto rounded-xl object-contain" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            <div className="flex text-brand-orange mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <img src="/images/feedback2.png" alt="Feedback Cliente" className="w-full h-auto rounded-xl object-contain" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            <div className="flex text-brand-orange mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-gray-700 italic mb-4">"Comunque Denise fantastiche le unghiette, continuano a farmi i complimenti!!"</p>
            <p className="font-semibold text-brand-dark">- Cliente Felice</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contatti" className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/images/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full mr-3" />
              <span className="font-serif text-2xl">Estetica Denise</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Il tuo angolo di benessere. Ti aspettiamo per prenderci cura di te.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Orari Negozio</h4>
            <ul className="space-y-3 text-gray-400">
              <li><span className="text-white">Lunedì:</span> 14:00 - 19:30</li>
              <li><span className="text-white">Martedì - Venerdì:</span> 09:00 - 19:00</li>
              <li><span className="text-white">Sabato:</span> 09:00 - 13:00</li>
              <li><span className="text-white">Domenica:</span> Chiuso</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contatti</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-orange shrink-0 mt-1" />
                <span>Via Borgo Treviso 49, <br/>Cittadella 35013 (PD)</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-orange shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:0492322348" className="hover:text-white transition-colors">049.2322348</a>
                  <a href="tel:3296647452" className="hover:text-white transition-colors">329.6647452 (WhatsApp)</a>
                </div>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-brand-orange shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <a href="https://www.instagram.com/esteticadenise__/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@esteticadenise__</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Estetica Denise. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Hero />
      <Promozioni />
      <Servizi />
      <NailsCarousel />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
