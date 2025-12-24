"use client";

import { motion } from "framer-motion";

export default function InfoSection() {
  const fadeIn = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section className="py-24 px-6 bg-white border-t border-black/5 text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 p-16 bg-accent/5 rounded-[3rem] border border-accent/10"
        >
          <h2 className="text-4xl md:text-6xl font-heading leading-tight">
            Tasty <br />
            <span className="text-accent italic">Healthy Bakes</span>
          </h2>
          <p className="mt-8 text-primary/60 max-w-sm font-body">
            Connect with us online to experience the aroma and goodness of our
            freshly baked gluten-free treats.
          </p>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-2xl font-bold uppercase tracking-[0.2em] mb-10 text-primary/40 text-center md:text-left">
            Opening Hours
          </h3>
          <div className="space-y-4 text-lg">
            {[
              { day: "Monday", hours: "9:00 am – 5:00 pm" },
              { day: "Tuesday", hours: "9:00 am – 5:00 pm" },
              { day: "Wednesday", hours: "9:00 am – 5:00 pm" },
              { day: "Thursday", hours: "9:00 am – 5:00 pm" },
              { day: "Friday", hours: "9:00 am – 5:00 pm" },
              { day: "Saturday", hours: "9:00 am – 5:00 pm" },
              { day: "Sunday", hours: "Closed" },
            ].map((item, idx) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex justify-between border-b border-black/5 pb-3 group hover:border-accent/40 transition-colors"
              >
                <span className="font-bold group-hover:text-accent transition-colors">
                  {item.day}
                </span>
                <span className="font-light text-primary/60">{item.hours}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
