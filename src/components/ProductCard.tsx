import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-foreground text-background text-[10px] uppercase tracking-widest px-3 py-1">
              New
            </span>
          )}
          {product.isTrending && !product.isNew && (
            <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] uppercase tracking-widest px-3 py-1">
              Trending
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.brand}</p>
          <h3 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground">${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
