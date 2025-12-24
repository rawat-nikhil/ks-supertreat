"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "KS supertreat’s snacks have transformed my afternoons—no sugar crash, just pure satisfaction.",
    author: "Olivia T.",
    time: "4 days ago",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=olivia",
  },
  {
    text: "Finally, a bakery that gets it right—flavorful, healthy, and perfect for my dietary needs.",
    author: "Marcus D.",
    time: "3 weeks ago",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    text: "The crisp texture and natural sweetness of these treats keep me coming back for more.",
    author: "Sarah L.",
    time: "1 month ago",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    text: "I appreciate how KS supertreat balances taste and health without compromise.",
    author: "James R.",
    time: "2 months ago",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=james",
  },
];

export default function Testimonials() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary/60 mb-4 font-bold">
            Genuine words from fans
          </p>
          <h2 className="text-4xl md:text-6xl font-heading text-primary">
            Customer Voices
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500"
            >
              <div>
                <div className="flex mb-6 text-accent">
                  {[...Array(t.stars)].map((_, s) => (
                    <svg
                      key={s}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-primary/80 font-body font-light mb-8 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center space-x-4 border-t border-black/5 pt-8">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full border-2 border-accent/10"
                />
                <div>
                  <p className="font-bold text-primary">{t.author}</p>
                  <p className="text-sm text-primary/40">{t.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
