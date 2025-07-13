import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Play, 
  Gift, 
  Users, 
  Clock, 
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Music,
  Heart,
  Sparkles,
  Award,
  Volume2,
  Download,
  FileText,
  Zap,
  Repeat,
  Lock
} from "lucide-react";

// Custom Logo Component
const Logo = () => (
  <motion.div 
    className="flex items-center space-x-2"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center">
      <Music className="h-6 w-6 text-white" />
    </div>
    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
      [Your Brand]
    </span>
  </motion.div>
);

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.header 
      className="bg-white/90 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex space-x-8">
            {["Accueil", "Chanson personnalisée", "Contact"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-blue-800 hover:text-yellow-600 font-medium transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              className="p-2 text-blue-800 hover:text-yellow-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="h-5 w-5" />
            </motion.button>
            <motion.button
              className="p-2 text-blue-800 hover:text-yellow-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611936042825-0c0edbf09893?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpb3xlbnwwfHx8Ymx1ZXwxNzUyNDI3NDcyfDA&ixlib=rb-4.1.0&q=85')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-yellow-900/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>(1146 avis)</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Chanson Personnalisée
            </h1>
            
            <p className="text-xl text-blue-100 mb-4">
              Bouleversez vos proches avec une{" "}
              <span className="text-yellow-400 font-semibold">chanson unique créée sur mesure</span>{" "}
              à partir de vos histoires, souvenirs et idées.
            </p>
            
            <div className="flex flex-wrap gap-4 text-blue-100 mb-8">
              <div className="flex items-center space-x-2">
                <Gift className="h-5 w-5 text-yellow-400" />
                <span>Le cadeau émotion N°1 en France</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <span>3 retouches gratuites</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span>Qualité professionnelle</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span>Prête en 72h</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-yellow-300 mb-8">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Planning allégé - 3 places restantes</span>
            </div>
            
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Personnalisez votre chanson
            </motion.button>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1620164654914-cfa3cef2e26e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMHN0dWRpb3xlbnwwfHx8Ymx1ZXwxNzUyNDI3NDcyfDA&ixlib=rb-4.1.0&q=85"
                alt="Microphone professionnel"
                className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-yellow-400"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 rounded-full p-4 shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Play className="h-8 w-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Product Showcase Component
const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Pack Streaming",
      price: "€54,99",
      originalPrice: "€137,96",
      description: "Chanson + Streaming inclus sur toutes les plateformes - Spotify / Deezer / Apple Music / Amazon Music",
      features: ["Chanson personnalisée", "Streaming sur toutes plateformes", "Qualité studio", "Paroles incluses"],
      image: "https://images.unsplash.com/photo-1500702790369-fe461685b3c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb258ZW58MHx8fGJsdWV8MTc1MjQyNzQ3OXww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      name: "Chanson seule",
      price: "€39,99",
      originalPrice: "€79,98",
      description: "Chanson personnalisée créée sur mesure selon vos souvenirs et histoires",
      features: ["Chanson personnalisée", "Format MP3", "Paroles incluses", "Qualité studio"],
      image: "https://images.unsplash.com/photo-1574154768417-8bc39bb13178?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMHByb2R1Y3Rpb258ZW58MHx8fGJsdWV8MTc1MjQyNzQ3OXww&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            OFFRE LIMITÉE - SOLDES D'ÉTÉ
          </h2>
          <p className="text-blue-700 text-lg">
            Commandez aujourd'hui pour aussi recevoir ces 4 cadeaux GRATUITS
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-100 hover:border-yellow-400 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                  OFFERT
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
                <p className="text-blue-600 mb-4">{product.description}</p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-blue-900">{product.price}</span>
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-blue-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choisir ce pack
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const Features = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Vos paroles (PDF)",
      description: "Pour que vous puissiez chanter avec",
      badge: "GRATUIT"
    },
    {
      icon: <Volume2 className="h-8 w-8" />,
      title: "Livraison express 3j",
      description: "Pour quelle soit livrée à temps",
      badge: "GRATUIT"
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      title: "3 retouches",
      description: "Pour quelle soit exactement comme vous le souhaitez",
      badge: "GRATUIT"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Cession des droits",
      description: "Pour quelle vous appartienne uniquement",
      badge: "GRATUIT"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Commandez aujourd'hui pour aussi recevoir ces 4 cadeaux GRATUITS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative inline-block mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-yellow-500 text-white p-4 rounded-full">
                  {feature.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-full">
                  {feature.badge}
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h3>
              <p className="text-blue-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Customization Form Component
const CustomizationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    recipient: '',
    occasion: '',
    relationship: '',
    musicStyle: '',
    language: '',
    additionalInfo: ''
  });

  const steps = [
    {
      title: "Le destinataire",
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Qui est la star de cette chanson ?*
            </label>
            <input
              type="text"
              placeholder="Son prénom ou surnom"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
              value={formData.recipient}
              onChange={(e) => setFormData({...formData, recipient: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Inclure son prénom dans la chanson ?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="includeName" value="yes" className="mr-2" />
                <span>Oui (+2,99€)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="includeName" value="no" className="mr-2" />
                <span>Non</span>
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Quel est votre lien ?
            </label>
            <input
              type="text"
              placeholder="Ex: meilleurs amis, mari, collègue"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
              value={formData.relationship}
              onChange={(e) => setFormData({...formData, relationship: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Célébrez-vous une occasion spéciale ?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="specialOccasion" value="yes" className="mr-2" />
                <span>Oui</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="specialOccasion" value="no" className="mr-2" />
                <span>Non</span>
              </label>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Style musical",
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Quel style musical préférez-vous ?
            </label>
            <select 
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
              value={formData.musicStyle}
              onChange={(e) => setFormData({...formData, musicStyle: e.target.value})}
            >
              <option value="">Sélectionnez un style</option>
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="acoustic">Acoustique</option>
              <option value="rap">Rap</option>
              <option value="country">Country</option>
              <option value="jazz">Jazz</option>
              <option value="classical">Classique</option>
            </select>
          </div>
        </div>
      )
    },
    {
      title: "Paroles",
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Racontez-nous votre histoire
            </label>
            <textarea
              rows={6}
              placeholder="Partagez vos souvenirs, anecdotes, et tout ce qui rendrait cette chanson spéciale..."
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors resize-none"
              value={formData.additionalInfo}
              onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
            />
          </div>
        </div>
      )
    },
    {
      title: "Finalisation",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Récapitulatif de votre commande</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Destinataire:</span> {formData.recipient || 'Non spécifié'}</p>
              <p><span className="font-medium">Style musical:</span> {formData.musicStyle || 'Non spécifié'}</p>
              <p><span className="font-medium">Relation:</span> {formData.relationship || 'Non spécifié'}</p>
            </div>
          </div>
          
          <div className="text-center">
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Créer ma chanson - €39,99
            </motion.button>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Personnalisez votre chanson
            </h2>
            <p className="text-blue-100">
              Suivez ces étapes simples pour créer votre chanson unique
            </p>
          </div>

          {/* Steps Navigation */}
          <div className="flex justify-center space-x-4 p-6 bg-gray-50 border-b">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : index < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
                onClick={() => setCurrentStep(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Étape {index + 1}
              </motion.button>
            ))}
          </div>

          {/* Form Content */}
          <div className="p-8">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                Étape {currentStep + 1} - {steps[currentStep].title}
              </h3>
              {steps[currentStep].content}
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <motion.button
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
                whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
              >
                Précédent
              </motion.button>
              
              <motion.button
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === steps.length - 1
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentStep === steps.length - 1 ? 'Finaliser' : 'Suivant'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Combien de temps avant de recevoir ma chanson ?",
      answer: "Une fois votre commande passée, vous recevrez votre chanson sous 3 jours. Elle vous sera envoyée par email au format MP3, prête à être partagée facilement. Vous pouvez également sélectionner l'option Livraison Ultra Express 24h."
    },
    {
      question: "Est-ce que je peux choisir le style musical ?",
      answer: "Absolument ! Vous pouvez choisir parmi une large variété de styles musicaux : pop, rock, acoustique, rap, country, jazz, classique et bien d'autres. Notre équipe d'artistes s'adapte à vos préférences."
    },
    {
      question: "Comment vais-je recevoir ma chanson ?",
      answer: "Votre chanson vous sera envoyée par email au format MP3 haute qualité. Vous recevrez également les paroles en PDF pour pouvoir chanter avec."
    },
    {
      question: "Je ne suis pas doué pour écrire les chansons...",
      answer: "Pas de problème ! Vous n'avez pas besoin d'être un expert. Il suffit de nous raconter votre histoire, vos souvenirs et ce qui rend cette personne spéciale. Nos artistes se chargent du reste."
    },
    {
      question: "Et si le style n'aime pas ma chanson ?",
      answer: "Nous offrons 3 retouches gratuites pour que la chanson soit exactement comme vous le souhaitez. Si vous n'êtes toujours pas satisfait, nous vous remboursons intégralement."
    },
    {
      question: "Est-ce qu'il y a un nombre d'écoutes limité ?",
      answer: "Aucune limite ! Une fois que vous recevez votre chanson, elle vous appartient pour toujours. Vous pouvez l'écouter autant de fois que vous voulez et la partager librement."
    },
    {
      question: "Est-ce que vous faites des chansons dans d'autres langues ?",
      answer: "Oui, nous créons des chansons en français, anglais, espagnol, italien et allemand. Précisez simplement votre préférence lors de la commande."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Foire aux questions
          </h2>
          <p className="text-blue-600 text-lg">
            Tout ce que vous devez savoir sur nos chansons personnalisées
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
              >
                <span className="font-medium text-blue-900 text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-blue-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Créer votre chanson
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula Louveaux",
      location: "FR",
      rating: 5,
      text: "Très belle réalisation musicale",
      details: "Superbe prestation très jolie chanson Rose. Mon amie a pleuré merci de vous êtes adaptée selon mes envies genrer merci",
      avatar: "A"
    },
    {
      name: "GAELLE FOUMENAIGUE",
      location: "FR", 
      rating: 5,
      text: "Un superbe moment passé avec Marie",
      details: "Une belle aventure avec Marie, très à l'écoute et très disponible. Elle a su faire émerger toute l'émotion que je voulais exprimer et l'arrangement musical avec ce timbre si harmonieux vient la chanson unique et mémorable.",
      avatar: "G"
    },
    {
      name: "Gaelle Loiodice",
      location: "FR",
      rating: 5,
      text: "Très belle surprise",
      details: "Je suis agréablement étonnée, Lou a su écrire les paroles de ma chanson très rapidement, un très joli texte. L'envoie de la chanson finie a été très rapide et le rendu est vraiment splendide. J'en ai eu les larmes aux yeux en l'écoutant, il faut dire que les paroles du coeur ça va droit au coeur de mon conjoint.",
      avatar: "G"
    },
    {
      name: "Mathieu Belliot",
      location: "FR",
      rating: 5,
      text: "Rapide et à l'attention",
      details: "Rapide et à l'attention Chouette souvenir Bravo à amandine",
      avatar: "M"
    },
    {
      name: "Cathy Heuchon",
      location: "FR",
      rating: 5,
      text: "Une chanson au top",
      details: "Une chanson au top, un suivi d'une équipe réactive! Je recommande à 100%. Le résultat est juste WAOUW.",
      avatar: "C"
    },
    {
      name: "Sarah Collart",
      location: "FR",
      rating: 5,
      text: "Plein de joie",
      details: "Un tout grand merci pour cette belle chanson aussi bien pour la musique que pour les paroles. Mon chéri a adoré et nous avons passé une formidable soirée.",
      avatar: "S"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Avis clients
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-white">
              <span className="text-2xl font-bold">5.0/5</span>
              <p className="text-blue-200">1.2k avis</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 text-white">
            {[
              { stars: 5, percentage: 98 },
              { stars: 4, percentage: 2 },
              { stars: 3, percentage: 0 },
              { stars: 2, percentage: 0 },
              { stars: 1, percentage: 0 }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>{item.stars}</span>
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <div className="w-20 h-2 bg-blue-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <h3 className="font-bold text-blue-900 mb-2">{testimonial.text}</h3>
              <p className="text-blue-600 text-sm mb-4">{testimonial.details}</p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-blue-900">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-blue-200 mt-4">
              Créez des chansons personnalisées uniques qui touchent le cœur et marquent les esprits.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Chanson personnalisée</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Pack Streaming</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Livraison Express</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Retouches</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Conditions</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Confidentialité</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@yourmusic.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 [Your Brand]. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

// Back to Top Component
const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <ArrowUp className="h-6 w-6" />
    </motion.button>
  );
};

// Export all components
export default {
  Header,
  Hero,
  ProductShowcase,
  Features,
  CustomizationForm,
  FAQ,
  Testimonials,
  Footer,
  BackToTop
};