"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl mb-8 leading-tight font-heading text-primary">
          Smart Snacking Made Simple
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-primary/70 font-light leading-relaxed font-body">
          Each bite supports your wellness goals, crafted to balance taste and
          nutrition for a snack you can trust anytime.
        </p>
      </motion.div>
    </section>
  );
}
