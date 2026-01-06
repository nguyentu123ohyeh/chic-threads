import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { Layout } from '@/components/layout/Layout';
import { products, categories, getNewProducts, getTrendingProducts } from '@/data/products';

const heroImage = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80';

export default function Index() {
  const newProducts = getNewProducts().slice(0, 4);
  const trendingProducts = getTrendingProducts().slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fashion hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </div>
        
        <div className="container-elegant relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              New Collection 2025
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-6">
              Effortless
              <span className="italic block">Elegance</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-md leading-relaxed">
              Discover timeless pieces crafted for the modern wardrobe. Where simplicity meets sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">Shop Collection</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Curated collections for every aspect of your wardrobe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link
                  to={`/products?category=${category.id}`}
                  className="group block relative aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-heading text-xl md:text-2xl text-background mb-1">
                      {category.name}
                    </h3>
                    <p className="text-background/80 text-sm">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="section-padding bg-secondary/30">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
                Trending Now
              </h2>
              <p className="text-muted-foreground">
                The pieces everyone is loving this season
              </p>
            </div>
            <Button variant="elegant" asChild>
              <Link to="/products">View All</Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {trendingProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800"
                  alt="Editorial"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pl-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                The Philosophy
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Less, But
                <span className="italic block">Better</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in the power of simplicity. Each piece in our collection is carefully designed 
                to transcend seasons and trends, becoming a lasting part of your personal style story.
                Quality over quantity, always.
              </p>
              <Button variant="elegant" size="lg" asChild>
                <Link to="/about">Discover More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-padding bg-secondary/30">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              New Arrivals
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Fresh additions to elevate your wardrobe
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {newProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">Shop All Products</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-elegant max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Join the Community
            </h2>
            <p className="text-muted-foreground mb-8">
              Be the first to know about new arrivals, exclusive offers, and style inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 h-12 px-4 bg-transparent border border-border focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="hero" type="submit">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
