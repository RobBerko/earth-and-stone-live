/*
  DESIGN: "New England Craftsman" — Warm Organic Naturalism
  About: Clean text-only section with company description and stats. No logo image.
*/
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p
              className="text-sm font-medium tracking-widest uppercase text-forest mb-3"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Crafting Outdoor
              <br />
              Spaces Since Day One
            </h2>
            <div className="w-16 h-0.5 bg-forest mx-auto" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center"
          >
            <p
              className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Earth & Stone Scapes specializes in the design and build of
              creative exteriors. Based in Trumbull, Connecticut, we bring
              artistry and precision to every project — from elegant stone
              patios and retaining walls to complete landscape transformations.
            </p>
            <p
              className="text-muted-foreground leading-relaxed mb-12 text-base md:text-lg"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              As a trusted masonry contractor with a 100% recommendation rate,
              we take pride in delivering exceptional craftsmanship that
              enhances both the beauty and value of your property.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 text-center"
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-forest">
                100%
              </p>
              <p
                className="text-xs text-muted-foreground tracking-wide uppercase mt-1"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Recommended
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-forest">
                15+
              </p>
              <p
                className="text-xs text-muted-foreground tracking-wide uppercase mt-1"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                5-Star Reviews
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-forest">
                CT
              </p>
              <p
                className="text-xs text-muted-foreground tracking-wide uppercase mt-1"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Based
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
