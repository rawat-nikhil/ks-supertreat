"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";

const treats = [
  {
    name: "Artisan Sourdough",
    category: "Gluten-Free",
    description: "Classic sourdough taste and texture, minus the gluten.",
    longDescription:
      "Our Artisan Sourdough is fermented for 24 hours to develop a rich, complex flavor and perfect airy crumb. Made with high-quality gluten-free flours, it provides the authentic sourdough experience without the gluten.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    ingredients: [
      "Brown Rice Flour",
      "Tapioca Starch",
      "Sourdough Starter",
      "Sea Salt",
      "Filtered Water",
    ],
  },
  {
    name: "Berry Bliss Muffin",
    category: "Sugar-Free",
    description: "Bursting with fresh berries and naturally sweetened.",
    longDescription:
      "These muffins are a breakfast favorite, packed with antioxidants from fresh blueberries and raspberries. We use monk fruit and erythritol to provide sweetness without the sugar spike.",
    image:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&q=80&w=800",
    ingredients: [
      "Almond Flour",
      "Fresh Berries",
      "Monk Fruit",
      "Free-range Eggs",
      "Coconut Oil",
    ],
  },
  {
    name: "Golden Crackers",
    category: "Vegan",
    description: "Crispy, savory snacks perfect for any dip.",
    longDescription:
      "Our Golden Crackers are seasoned with nutritional yeast for a cheesy flavor and toasted to perfection. They are entirely plant-based and made with whole ancient grains.",
    image:
      "https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&q=80&w=800",
    ingredients: [
      "Quinoa Flour",
      "Flax Seeds",
      "Nutritional Yeast",
      "Olive Oil",
      "Herbs",
    ],
  },
  {
    name: "Chocolate Delight",
    category: "Gluten-Free",
    description: "Rich cocoa goodness with a soft, moist center.",
    longDescription:
      "A decadent treat for chocolate lovers. This cake-like treat is made with 70% dark cocoa and sweet potato for a naturally moist texture and rich flavor profile.",
    image:
      "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&q=80&w=800",
    ingredients: [
      "Dark Cocoa",
      "Sweet Potato",
      "Maple Syrup",
      "Coconut Flour",
      "Vanilla Bean",
    ],
  },
  {
    name: "Ancient Grain Loaf",
    category: "Sugar-Free",
    description:
      "Packed with fiber and nutrients for a sustained energy boost.",
    longDescription:
      "A dense, nutritious bread made with a blend of teff, amaranth, and buckwheat. It's high in protein and fiber, making it the perfect base for your morning toast.",
    image:
      "https://plus.unsplash.com/premium_photo-1667806841904-751960cadc78?w=800&auto=format&fit=crop&q=80&w=800",
    ingredients: [
      "Teff Flour",
      "Amaranth",
      "Buckwheat",
      "Sunflower Seeds",
      "Psyllium Husk",
    ],
  },
  {
    name: "Fruit & Nut Bar",
    category: "Vegan",
    description: "The perfect on-the-go snack for active lifestyles.",
    longDescription:
      "Compressed dates, walnuts, and dried apricots provide a natural energy boost. No added sugars, preservatives, or animal products. Just pure, whole-food energy.",
    image:
    "https://plus.unsplash.com/premium_photo-1726567910881-8130e305bfdd?q=80&w=987&auto=format&fit=crop&q=80&w=800",
    ingredients: [
      "Medjool Dates",
      "Walnuts",
      "Dried Apricots",
      "Chia Seeds",
      "Cinnamon",
    ],
  },
];

interface Treat {
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  ingredients: string[];
}

function TreatModal({ treat, onClose }: { treat: Treat; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-auto md:w-1/2">
          <Image
            src={treat.image}
            alt={treat.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 md:p-12 md:w-1/2 overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {treat.category}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4 leading-tight">
            {treat.name}
          </h2>

          <p className="text-primary/70 mb-8 leading-relaxed">
            {treat.longDescription}
          </p>

          <div className="space-y-4">
            <h4 className="font-bold text-primary flex items-center gap-2">
              <Info size={16} className="text-accent" />
              Key Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {treat.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="px-3 py-1 bg-secondary text-primary/80 text-xs rounded-lg border border-primary/5"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all hover:shadow-lg active:scale-[0.98]">
              Contact to Order
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TreatsPage() {
  const [selectedTreat, setSelectedTreat] = useState<Treat | null>(null);

  return (
    <main className="min-h-screen font-body bg-background-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading mb-6 text-primary">
              Our Delicious Treats
            </h1>
            <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto">
              Discover our range of health-conscious, artisanal products crafted
              for your wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treats.map((treat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedTreat(treat)}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={treat.image}
                    alt={treat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black text-accent uppercase tracking-widest shadow-sm">
                    {treat.category}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white text-primary px-6 py-2.5 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Quick View
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading mb-3 text-primary group-hover:text-accent transition-colors">
                    {treat.name}
                  </h3>
                  <p className="text-primary/70 text-sm mb-6 leading-relaxed line-clamp-2">
                    {treat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-accent uppercase tracking-widest flex items-center gap-2">
                      Details
                      <span className="transition-transform group-hover:translate-x-1 underline decoration-2 underline-offset-4">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedTreat && (
          <TreatModal
            treat={selectedTreat}
            onClose={() => setSelectedTreat(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
