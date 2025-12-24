"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen font-body bg-background-light">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 bg-accent/5 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading mb-6 text-primary"
          >
            About Our Bakery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto"
          >
            A passion for health-conscious baking, delivering delicious treats
            without compromise.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            {...fadeIn}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
              alt="Our Bakery Story"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-heading text-primary leading-tight">
              More than just <br />
              <span className="italic text-accent">a treat</span>
            </h2>
            <div className="space-y-6 text-primary/70 leading-relaxed text-lg">
              <p>
                Founded on the belief that everyone deserves to enjoy the simple
                pleasure of a freshly baked treat, KS supertreat was born from a
                personal journey toward better health.
              </p>
              <p>
                We specialize in creating artisanal baked goods that are
                entirely gluten-free and sugar-free, using only the finest
                natural ingredients. Our mission is to prove that healthy eating
                doesn't have to mean sacrificing flavor.
              </p>
              <p className="font-medium text-primary">
                Every loaf of bread, every muffin, and every cookie is
                handcrafted with care in our dedicated facility, ensuring the
                highest standards of quality and safety for our community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4">
              Our Philosophy
            </h2>
            <p className="text-primary/60 max-w-xl mx-auto">
              The core principles that guide every batch we bake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gluten-Free Always",
                text: "We use premium alternative flours to create textures so perfect you won't believe it's gluten-free.",
                icon: "🌾",
              },
              {
                title: "No Refined Sugar",
                text: "Sweetened by nature. We use natural alternatives that keep your energy stable and your body happy.",
                icon: "🍯",
              },
              {
                title: "Handcrafted Daily",
                text: "Freshly baked every single day. No preservatives, no shortcuts, just pure goodness.",
                icon: "👨‍🍳",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.2 }}
                className="p-10 bg-white rounded-[2rem] shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-6 bg-accent/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-accent/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-heading mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-primary/70 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
