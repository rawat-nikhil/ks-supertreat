"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function MiddleHero() {
  return (
    <section className="relative py-40 px-6 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1920"
          alt="Baking background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-4xl text-white">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl mb-8 font-heading leading-tight drop-shadow-2xl"
        >
          Cloud-Baked Goodness, <br />
          <span className="italic text-secondary">Guilt-Free</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl mb-12 font-body font-light max-w-2xl mx-auto text-white/90 leading-relaxed"
        >
          Crafted without gluten or sugar, baked fresh for your healthy
          cravings. Taste the difference in every bite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/treats"
            className="bg-accent text-white px-12 py-5 rounded-full font-bold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-2xl inline-block"
          >
            See Our Treats
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center space-x-8 mt-20"
        >
          {[
            { icon: <Mail size={20} />, href: "mailto:ks.supertreat@gmail.com" },
            { icon: <MessageCircle size={20} />, href: "https://wa.me/919910098774" },
            { icon: <Instagram size={20} />, href: "https://www.instagram.com/ks_supertreats?igsh=a2RqMnd1MHRtNmgw" },
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-accent transition-all duration-300 hover:-translate-y-1"
            >
              {social.icon}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
