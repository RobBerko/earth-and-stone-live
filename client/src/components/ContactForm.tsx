import { useEffect } from 'react';

export default function ContactForm() {
  // This safely loads the GoHighLevel resizing script into your React app
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-primary font-bold tracking-wider uppercase mb-2">Get In Touch</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free, No Obligation Quote</h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your outdoor space? Contact us for a free consultation and estimate.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white/50 md:p-6 rounded-xl">
          {/* Your GoHighLevel Embed */}
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/3kGMn3Y3oqu6OZPVanuB"
            style={{ width: "100%", height: "600px", border: "none", borderRadius: "3px" }}
            id="inline-3kGMn3Y3oqu6OZPVanuB"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="E&S Scapes"
            data-height="583"
            data-layout-iframe-id="inline-3kGMn3Y3oqu6OZPVanuB"
            data-form-id="3kGMn3Y3oqu6OZPVanuB"
            title="E&S Scapes"
          />
        </div>
      </div>
    </section>
  );
}
