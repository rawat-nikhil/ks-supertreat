"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto"
          >
            We'd love to hear from you! Whether you have a question about our
            treats or a special order request.
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-heading mb-10 text-primary">
                Contact Information
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: <MapPin className="text-accent" />,
                    title: "Our Location",
                    content: "123 Baker street, Maryland,\nUnited States",
                  },
                  {
                    icon: <Mail className="text-accent" />,
                    title: "Email Us",
                    content: "hello@kssupertreat.com\norders@kssupertreat.com",
                  },
                  {
                    icon: <Clock className="text-accent" />,
                    title: "Opening Hours",
                    content:
                      "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 8:00 AM - 3:00 PM",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary/70 whitespace-pre-line leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Connect */}
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <h4 className="font-heading text-2xl mb-6 text-primary">
                Connect with us online
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, href: "#" },
                  { icon: <Facebook size={20} />, href: "#" },
                  { icon: <Twitter size={20} />, href: "#" },
                  { icon: <Linkedin size={20} />, href: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center hover:bg-accent transition-colors shadow-lg shadow-primary/10"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-black/5 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h2 className="text-2xl md:text-3xl font-heading mb-8 text-primary">
                    Send a Message
                  </h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary/60 ml-1">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent border-2 focus:bg-white focus:border-accent focus:ring-0 transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary/60 ml-1">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent border-2 focus:bg-white focus:border-accent focus:ring-0 transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary/60 ml-1">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent border-2 focus:bg-white focus:border-accent focus:ring-0 transition-all resize-none outline-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/10 transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 flex items-center justify-center gap-3 overflow-hidden group"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send
                            size={18}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-3xl font-heading text-primary mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-primary/70 mb-8">
                    Thank you for reaching out. We'll get back to you as soon as
                    possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
