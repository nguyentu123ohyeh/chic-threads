import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

const sizes = ['S', 'M', 'L', 'XL'];
const priceRanges = [
  { label: 'Under $100', min: 0, max: 100 },
  { label: '$100 - $250', min: 100, max: 250 },
  { label: '$250 - $500', min: 250, max: 500 },
  { label: 'Over $500', min: 500, max: Infinity },
];

export default function ProductListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const selectedCategory = searchParams.get('category') || '';
  const selectedSize = searchParams.get('size') || '';
  const selectedPrice = searchParams.get('price') || '';

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }
      
      // Size filter
      if (selectedSize && !product.sizes.includes(selectedSize)) {
        return false;
      }
      
      // Price filter
      if (selectedPrice) {
        const priceIndex = parseInt(selectedPrice);
        const range = priceRanges[priceIndex];
        if (range && (product.price < range.min || product.price >= range.max)) {
          return false;
        }
      }
      
      return true;
    });
  }, [selectedCategory, selectedSize, selectedPrice]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedSize || selectedPrice;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container-elegant py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Shop</span>
            {selectedCategory && (
              <>
                <span>/</span>
                <span className="text-foreground capitalize">
                  {categories.find(c => c.id === selectedCategory)?.name || selectedCategory}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container-elegant py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            <Button
              variant="elegant"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-foreground rounded-full" />
              )}
            </Button>
          </div>

          {/* Sidebar Filters */}
          <motion.aside
            initial={false}
            animate={{ 
              height: showFilters ? 'auto' : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : 'auto'),
              opacity: showFilters ? 1 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : 1)
            }}
            className={cn(
              "lg:w-64 lg:flex-shrink-0 overflow-hidden lg:overflow-visible",
              !showFilters && "lg:block hidden"
            )}
          >
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-lg text-foreground">Filters</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', '')}
                    className={cn(
                      "block w-full text-left text-sm py-1 transition-colors",
                      !selectedCategory ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => updateFilter('category', category.id)}
                      className={cn(
                        "block w-full text-left text-sm py-1 transition-colors",
                        selectedCategory === category.id ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => updateFilter('size', selectedSize === size ? '' : size)}
                      className={cn(
                        "w-10 h-10 text-sm border transition-colors",
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <button
                      key={index}
                      onClick={() => updateFilter('price', selectedPrice === index.toString() ? '' : index.toString())}
                      className={cn(
                        "block w-full text-left text-sm py-1 transition-colors",
                        selectedPrice === index.toString() ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
                <Button variant="elegant" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
