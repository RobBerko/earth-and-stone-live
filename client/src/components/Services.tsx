/*
  DESIGN: "New England Craftsman" — Warm Organic Naturalism
  Services: Three service cards with icons, on warm cream background.
*/
import { motion } from "framer-motion";
import { Landmark, TreePine, Fence } from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Stone Masonry",
    description:
      "Custom stone walls, patios, walkways, and fireplaces crafted with precision. We work with natural fieldstone, bluestone, and granite to create structures that stand the test of time.",
  },
  {
    icon: TreePine,
    title: "Landscape Design",
    description:
      "Thoughtful planting plans that complement your property's architecture and evolve beautifully through every season. From foundation plantings to complete garden transformations.",
  },
  {
    icon: Fence,
    title: "Outdoor Living",
    description:
      "Complete outdoor living spaces including patios, fire pits, outdoor kitchens, and retaining walls. We design and build spaces where memories are made.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
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
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-16 h-0.5 bg-forest mx-auto" />
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/30"
            >
              <div className="w-14 h-14 rounded-sm bg-forest/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
