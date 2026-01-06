import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80"
            alt="About hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        
        <div className="container-elegant relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-background mb-6">
              Our Story
            </h1>
            <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto">
              Redefining modern elegance through thoughtful design and timeless craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Our Philosophy
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Simplicity is the
                <span className="italic block">Ultimate Sophistication</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded on the belief that true style transcends fleeting trends, LUCAS HANSEN 
                  curates a collection of essential pieces designed to form the foundation of a 
                  refined wardrobe.
                </p>
                <p>
                  We partner with skilled artisans and ethical manufacturers who share our 
                  commitment to quality and sustainability. Each garment is crafted from premium 
                  materials, designed to age beautifully and become more cherished with time.
                </p>
                <p>
                  Our design ethos embraces minimalism—not as a limitation, but as a canvas 
                  for personal expression. We believe in pieces that work harder, lasting 
                  longer and pairing effortlessly with your existing wardrobe.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Quality First',
                description: 'Premium materials and meticulous craftsmanship ensure every piece stands the test of time.',
              },
              {
                title: 'Timeless Design',
                description: 'We create pieces that transcend seasons, becoming lasting additions to your wardrobe.',
              },
              {
                title: 'Sustainable Practice',
                description: 'Ethical production and sustainable materials are at the heart of everything we do.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-border flex items-center justify-center">
                  <span className="font-heading text-2xl text-foreground">0{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="section-padding">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Our Partner Brands
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              We collaborate with artisan labels that share our vision for timeless elegance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {['Velvet Aura', 'Urban Essence', 'Loom & Thread', 'Sia Studio'].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-xl md:text-2xl text-muted-foreground hover:text-foreground transition-colors cursor-default">
                  {brand}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-elegant max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Start Your Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Discover our curated collection of timeless pieces designed for the modern individual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">Shop Collection</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
