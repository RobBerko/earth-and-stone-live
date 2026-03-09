/*
  DESIGN: "New England Craftsman" — Warm Organic Naturalism
  Portfolio: Masonry-style grid of project images with hover overlay.
  Uses generated images — each one is unique, no repeats.
*/
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const portfolioItems = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397683748/oMHW93yZHcwjSgY9dE45pp/portfolio_1_2a86030f.jpg",
    title: "Stone Patio & Steps",
    category: "Masonry",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397683748/oMHW93yZHcwjSgY9dE45pp/portfolio_2_4bb4aeda.jpg",
    title: "Retaining Wall & Garden",
    category: "Landscaping",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397683748/oMHW93yZHcwjSgY9dE45pp/portfolio_3_85e69b3c.jpg",
    title: "Outdoor Fireplace & Patio",
    category: "Outdoor Living",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397683748/oMHW93yZHcwjSgY9dE45pp/portfolio_4_2011af3b.jpg",
    title: "Stone Walkway & Plantings",
    category: "Masonry",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium tracking-widest uppercase text-forest mb-3"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 bg-forest mx-auto mb-6" />
          <p
            className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Every project reflects our commitment to quality craftsmanship and
            attention to detail. Here's a selection of our recent work.
          </p>
        </motion.div>

        {/* Portfolio Grid — Masonry-style with varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                index === 0 || index === 3 ? "md:row-span-1" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p
                    className="text-xs font-medium tracking-widest uppercase text-sage mb-1"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {item.category}
                  </p>
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about more photos */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground mt-10 text-sm"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          More project photos coming soon. Follow us on{" "}
          <a
            href="https://www.facebook.com/EarthStoneScapes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest font-medium hover:underline"
          >
            Facebook
          </a>{" "}
          for the latest updates.
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={portfolioItems[selectedImage].src}
              alt={portfolioItems[selectedImage].title}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
