import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white/10">
              <Image
                src="/logo.png"
                alt="KS Supertreat"
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
              KS supertreat
            </h2>
          </Link>
          <div className="max-w-md">
            <p className="text-white/60 mb-6 text-lg font-light">
              Healthy treats for a better you. Gluten-free, sugar-free, and
              crafted with love.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent border-b border-white/30 py-4 outline-none focus:border-white transition-colors mb-6 text-xl font-light"
              />
              <button className="bg-white text-primary px-10 py-3 font-semibold hover:bg-secondary transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold uppercase tracking-widest mb-8 opacity-60">
            Contact
          </h3>
          <div className="space-y-4 font-light text-lg">
            <p>ks.supertreat@gmail.com</p>
            <p>+91 9910098774</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold uppercase tracking-widest mb-8 opacity-60">
            Address
          </h3>
          <div className="space-y-2 font-light text-lg">
            <p>123 Sohna Road,</p>
            <p>Gurgaon,</p>
            <p>India</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center opacity-60 text-sm">
        <p>© 2025 All Rights Reserved | KS Supertreat</p>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <Link
            href="https://wa.me/919910098774"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-white transition-colors"
          >
            WhatsApp
          </Link>
          <Link
            href="https://www.instagram.com/ks_supertreats?igsh=a2RqMnd1MHRtNmgw"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-white transition-colors"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
