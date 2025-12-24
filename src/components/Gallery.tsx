"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595450269117-a4c68af150d2?w=800&auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1585478259844-06d7b756b082?w=800&auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="overflow-hidden rounded-[3rem] h-[600px] shadow-sm transform transition-all duration-700 border border-black/5 group cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={src}
                alt="Baked treat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
