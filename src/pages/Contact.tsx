import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, User, Send } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactInfo = {
  representative: 'LUCAS HANSEN',
  email: 'zryecswom7956@hotmail.com',
  address: '554 E Haskell St, Winnemucca, Nevada 89445',
  phone: '+1 2832830013',
};

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent',
      description: 'Thank you for reaching out. We\'ll be in touch soon.',
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 section-padding">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with questions, feedback, or just to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                      Representative
                    </p>
                    <p className="text-foreground font-medium">{contactInfo.representative}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                      Email
                    </p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                      Phone
                    </p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                      Address
                    </p>
                    <p className="text-foreground">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-secondary border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Winnemucca, Nevada</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-transparent border border-border focus:border-foreground outline-none transition-colors text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-transparent border border-border focus:border-foreground outline-none transition-colors text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 bg-transparent border border-border focus:border-foreground outline-none transition-colors text-foreground"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors text-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
