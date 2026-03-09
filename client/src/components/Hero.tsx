/*
  DESIGN: "New England Craftsman" — Warm Organic Naturalism
  Hero: Full-bleed background image with dark overlay, white text, CTA button.
  The hero image is a dark/moody outdoor scene — use white/light text.
*/
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397683748/oMHW93yZHcwjSgY9dE45pp/hero_image_af34e53f.jpg";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    const el = document.querySelector("#portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Beautiful stone patio and landscaping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/80 text-sm md:text-base font-medium tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Trumbull, CT &mdash; Masonry & Landscaping
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Design & Build of
            <br />
            <span className="text-[#a8c49a]">Creative Exteriors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            From elegant stone patios to lush landscape designs, we transform
            your outdoor spaces into lasting works of art.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-forest text-white font-semibold text-base tracking-wide uppercase rounded-sm hover:bg-forest/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'Source Sans 3', sans-serif", letterSpacing: "0.08em" }}
            >
              Get a Free Estimate
            </button>
            <button
              onClick={scrollToPortfolio}
              className="px-8 py-4 border-2 border-white/40 text-white font-semibold text-base tracking-wide uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
              style={{ fontFamily: "'Source Sans 3', sans-serif", letterSpacing: "0.08em" }}
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
