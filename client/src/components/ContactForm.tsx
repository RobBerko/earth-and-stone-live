/*
  DESIGN: "New England Craftsman" — Warm Organic Naturalism
  Contact: Centered layout with heading and form card. No email shown.
  Matches reference image: "Get a Free, No Obligation Quote"
  Form POSTs to /api/ghl-webhook which proxies to the GHL webhook URL.
  JSON payload keys: name, email, phone, service, message, source.
*/
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    // JSON payload keys match the form inputs clearly
    const payload = {
      name: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      source: "earthandstonescapes.com",
    };

    try {
      const response = await fetch("/api/ghl-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Clear form fields and show success message
        setFormData({
          firstName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setFormStatus({
          type: "success",
          message: "Thank you, we will be in touch!",
        });
      } else {
        setFormStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setFormStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:ring-2 focus:ring-forest/30 focus:border-forest outline-none transition-all";
  const labelClasses =
    "block text-xs font-medium tracking-wider uppercase text-muted-foreground mb-2";
  const fontStyle = { fontFamily: "'Source Sans 3', sans-serif" };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-sm font-medium tracking-widest uppercase text-forest mb-3"
            style={fontStyle}
          >
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get a Free, No Obligation Quote
          </h2>
          <div className="w-16 h-0.5 bg-forest mx-auto mb-6" />
          <p
            className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
            style={fontStyle}
          >
            Ready to transform your outdoor space? Contact us for a free
            consultation and estimate.
          </p>
        </motion.div>

        {/* Form Card — Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          {formStatus.type === "success" ? (
            <div className="bg-white p-10 rounded-sm border border-border/30 text-center shadow-sm">
              <CheckCircle className="w-16 h-16 text-forest mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Thank You!
              </h3>
              <p className="text-muted-foreground mb-6" style={fontStyle}>
                Thank you, we will be in touch! You can also call us at{" "}
                <a
                  href="tel:2034599642"
                  className="text-forest font-medium"
                >
                  (203) 459-9642
                </a>
                .
              </p>
              <button
                onClick={() =>
                  setFormStatus({ type: null, message: "" })
                }
                className="text-forest font-medium hover:underline"
                style={fontStyle}
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-sm border border-border/30 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="firstName" className={labelClasses} style={fontStyle}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClasses}
                    style={fontStyle}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses} style={fontStyle}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    style={fontStyle}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="phone" className={labelClasses} style={fontStyle}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    style={fontStyle}
                    placeholder="(203) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="service" className={labelClasses} style={fontStyle}>
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClasses}
                    style={fontStyle}
                  >
                    <option value="">Select a service...</option>
                    <option value="Stone Masonry">Stone Masonry</option>
                    <option value="Landscape Design">Landscape Design</option>
                    <option value="Patios & Walkways">Patios & Walkways</option>
                    <option value="Retaining Walls">Retaining Walls</option>
                    <option value="Outdoor Living">Outdoor Living</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={labelClasses} style={fontStyle}>
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                  style={fontStyle}
                  placeholder="Describe your project, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-forest text-white font-semibold text-base tracking-wide uppercase rounded-sm hover:bg-forest/90 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ ...fontStyle, letterSpacing: "0.08em" }}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Request Free Estimate"}
              </button>

              {formStatus.type === "error" && (
                <p
                  className="text-red-600 text-sm text-center mt-4"
                  style={fontStyle}
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
