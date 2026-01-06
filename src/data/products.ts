export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: 'tops' | 'bottoms' | 'accessories';
  subcategory: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  styleNote: string;
  material: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export const products: Product[] = [
  // TOPS & OUTERWEAR (10 items)
  {
    id: 'top-001',
    name: 'Silk Blend Blouse',
    brand: 'Velvet Aura',
    price: 285,
    category: 'tops',
    subcategory: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Sage', hex: '#B2AC88' },
    ],
    images: [
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
    ],
    styleNote: 'A timeless silk-blend blouse with delicate button detailing and relaxed shoulders.',
    material: '70% Silk, 30% Cotton',
    isNew: true,
  },
  {
    id: 'top-002',
    name: 'Oversized Linen Shirt',
    brand: 'Loom & Thread',
    price: 195,
    category: 'tops',
    subcategory: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Natural', hex: '#E8DCC4' },
      { name: 'Charcoal', hex: '#36454F' },
    ],
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
      'https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800',
    ],
    styleNote: 'Effortlessly chic oversized silhouette in pure European linen.',
    material: '100% European Linen',
    isTrending: true,
  },
  {
    id: 'top-003',
    name: 'Merino Wool Turtleneck',
    brand: 'Urban Essence',
    price: 245,
    category: 'tops',
    subcategory: 'T-shirts',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Oatmeal', hex: '#D4C4A8' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
    ],
    styleNote: 'Luxuriously soft merino wool with a refined ribbed finish.',
    material: '100% Extra-fine Merino Wool',
    isNew: true,
  },
  {
    id: 'top-004',
    name: 'Structured Wool Blazer',
    brand: 'Sia Studio',
    price: 485,
    category: 'tops',
    subcategory: 'Blazers',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Slate', hex: '#708090' },
    ],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    ],
    styleNote: 'Impeccably tailored blazer with subtle peak lapels and horn buttons.',
    material: '95% Virgin Wool, 5% Cashmere',
    isTrending: true,
  },
  {
    id: 'top-005',
    name: 'Quilted Down Jacket',
    brand: 'Velvet Aura',
    price: 595,
    category: 'tops',
    subcategory: 'Jackets',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Espresso', hex: '#4A3728' },
      { name: 'Cream', hex: '#F5F5DC' },
    ],
    images: [
      'https://images.unsplash.com/photo-1544923246-77307dd628b7?w=800',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    ],
    styleNote: 'Lightweight yet warm quilted jacket with minimal geometric stitching.',
    material: '100% Recycled Nylon, 90% Down Fill',
  },
  {
    id: 'top-006',
    name: 'Cotton Jersey Tee',
    brand: 'Loom & Thread',
    price: 85,
    category: 'tops',
    subcategory: 'T-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Navy', hex: '#1B2838' },
      { name: 'Stone', hex: '#9A8B7A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
    ],
    styleNote: 'The perfect everyday tee with a relaxed fit and soft hand-feel.',
    material: '100% Organic Cotton',
  },
  {
    id: 'top-007',
    name: 'Cashmere Cardigan',
    brand: 'Urban Essence',
    price: 445,
    category: 'tops',
    subcategory: 'Jackets',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Mink', hex: '#8B7355' },
      { name: 'Ivory', hex: '#FFFFF0' },
    ],
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800',
    ],
    styleNote: 'Sumptuous cashmere cardigan with mother-of-pearl buttons.',
    material: '100% Grade A Mongolian Cashmere',
    isNew: true,
  },
  {
    id: 'top-008',
    name: 'Leather Biker Jacket',
    brand: 'Sia Studio',
    price: 895,
    category: 'tops',
    subcategory: 'Jackets',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800',
    ],
    styleNote: 'Classic moto silhouette reimagined with clean, modern lines.',
    material: '100% Lambskin Leather',
    isTrending: true,
  },
  {
    id: 'top-009',
    name: 'Relaxed Oxford Shirt',
    brand: 'Velvet Aura',
    price: 165,
    category: 'tops',
    subcategory: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Pale Blue', hex: '#ADD8E6' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    images: [
      'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=800',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800',
    ],
    styleNote: 'A relaxed take on the classic oxford with a soft, washed finish.',
    material: '100% Cotton Oxford',
  },
  {
    id: 'top-010',
    name: 'Cropped Tweed Jacket',
    brand: 'Loom & Thread',
    price: 525,
    category: 'tops',
    subcategory: 'Blazers',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Herringbone', hex: '#5E5348' },
    ],
    images: [
      'https://images.unsplash.com/photo-1548712373-5d93ce58c66f?w=800',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
    ],
    styleNote: 'Artisanal tweed jacket with raw-edge details and vintage buttons.',
    material: '80% Wool, 20% Silk Tweed',
  },

  // BOTTOMS (10 items)
  {
    id: 'btm-001',
    name: 'High-Waist Tailored Trousers',
    brand: 'Sia Studio',
    price: 295,
    category: 'bottoms',
    subcategory: 'Trousers',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Sand', hex: '#C2B280' },
    ],
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
    ],
    styleNote: 'Elevated everyday trousers with a flattering high-rise silhouette.',
    material: '98% Wool, 2% Elastane',
    isNew: true,
  },
  {
    id: 'btm-002',
    name: 'Wide-Leg Linen Pants',
    brand: 'Urban Essence',
    price: 225,
    category: 'bottoms',
    subcategory: 'Trousers',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Natural', hex: '#E8DCC4' },
      { name: 'Terracotta', hex: '#CC6B49' },
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
    ],
    styleNote: 'Breezy wide-leg pants perfect for warm days and effortless styling.',
    material: '100% French Linen',
    isTrending: true,
  },
  {
    id: 'btm-003',
    name: 'Pleated Midi Skirt',
    brand: 'Velvet Aura',
    price: 265,
    category: 'bottoms',
    subcategory: 'Skirts',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Champagne', hex: '#F7E7CE' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0uj68?w=800',
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800',
    ],
    styleNote: 'Elegant pleated skirt with fluid movement and a flattering midi length.',
    material: '100% Polyester Crepe',
  },
  {
    id: 'btm-004',
    name: 'Vintage Wash Straight Jeans',
    brand: 'Loom & Thread',
    price: 195,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Light Wash', hex: '#8FAADC' },
      { name: 'Indigo', hex: '#2F4F6F' },
    ],
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
    ],
    styleNote: 'Classic straight-leg jeans with an authentic vintage wash.',
    material: '100% Organic Cotton Denim',
    isTrending: true,
  },
  {
    id: 'btm-005',
    name: 'Tailored Bermuda Shorts',
    brand: 'Sia Studio',
    price: 175,
    category: 'bottoms',
    subcategory: 'Shorts',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Navy', hex: '#1B2838' },
      { name: 'Khaki', hex: '#C3B091' },
    ],
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
    ],
    styleNote: 'Sophisticated bermuda shorts with tailored pleats and a polished finish.',
    material: '97% Cotton, 3% Elastane',
    isNew: true,
  },
  {
    id: 'btm-006',
    name: 'Satin Wrap Skirt',
    brand: 'Urban Essence',
    price: 215,
    category: 'bottoms',
    subcategory: 'Skirts',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Olive', hex: '#556B2F' },
      { name: 'Burgundy', hex: '#722F37' },
    ],
    images: [
      'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800',
    ],
    styleNote: 'Luxurious satin wrap skirt with an adjustable tie waist.',
    material: '100% Mulberry Silk Satin',
  },
  {
    id: 'btm-007',
    name: 'Raw Hem Cropped Jeans',
    brand: 'Velvet Aura',
    price: 185,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Medium Blue', hex: '#4682B4' },
    ],
    images: [
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
    ],
    styleNote: 'Relaxed cropped jeans with artful raw-edge hems.',
    material: '98% Cotton, 2% Lycra',
  },
  {
    id: 'btm-008',
    name: 'Wool Blend Wide Trousers',
    brand: 'Loom & Thread',
    price: 345,
    category: 'bottoms',
    subcategory: 'Trousers',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Heather Grey', hex: '#9AA0A6' },
      { name: 'Camel', hex: '#C19A6B' },
    ],
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
    ],
    styleNote: 'Sophisticated wide-leg trousers with a flowing, architectural drape.',
    material: '70% Wool, 25% Polyester, 5% Elastane',
  },
  {
    id: 'btm-009',
    name: 'Leather Mini Skirt',
    brand: 'Sia Studio',
    price: 395,
    category: 'bottoms',
    subcategory: 'Skirts',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Cognac', hex: '#934D1E' },
    ],
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaab?w=800',
    ],
    styleNote: 'Butter-soft leather mini with an A-line silhouette.',
    material: '100% Nappa Leather',
  },
  {
    id: 'btm-010',
    name: 'Linen Drawstring Shorts',
    brand: 'Urban Essence',
    price: 125,
    category: 'bottoms',
    subcategory: 'Shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Ocean', hex: '#4F84C4' },
    ],
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
    ],
    styleNote: 'Easy-going linen shorts with a relaxed fit and adjustable waist.',
    material: '100% Belgian Linen',
  },

  // ACCESSORIES (10 items)
  {
    id: 'acc-001',
    name: 'Structured Leather Tote',
    brand: 'Velvet Aura',
    price: 685,
    category: 'accessories',
    subcategory: 'Handbags',
    sizes: ['One Size'],
    colors: [
      { name: 'Tan', hex: '#D2B48C' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
    ],
    styleNote: 'A timeless leather tote with architectural structure and gold hardware.',
    material: 'Full-grain Italian Leather',
    isNew: true,
    isTrending: true,
  },
  {
    id: 'acc-002',
    name: 'Woven Leather Belt',
    brand: 'Loom & Thread',
    price: 145,
    category: 'accessories',
    subcategory: 'Belts',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Brown', hex: '#8B4513' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800',
    ],
    styleNote: 'Hand-woven leather belt with a vintage brass buckle.',
    material: '100% Vegetable-tanned Leather',
  },
  {
    id: 'acc-003',
    name: 'Oversized Acetate Sunglasses',
    brand: 'Urban Essence',
    price: 295,
    category: 'accessories',
    subcategory: 'Sunglasses',
    sizes: ['One Size'],
    colors: [
      { name: 'Tortoise', hex: '#6B4423' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
    ],
    styleNote: 'Bold oversized frames with UV400 protection and Italian acetate.',
    material: 'Italian Mazzucchelli Acetate',
    isTrending: true,
  },
  {
    id: 'acc-004',
    name: 'Hammered Gold Hoops',
    brand: 'Sia Studio',
    price: 185,
    category: 'accessories',
    subcategory: 'Jewelry',
    sizes: ['One Size'],
    colors: [
      { name: 'Gold', hex: '#FFD700' },
    ],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
    ],
    styleNote: 'Artisanal hammered hoops with a luminous, organic finish.',
    material: '18K Gold-plated Sterling Silver',
    isNew: true,
  },
  {
    id: 'acc-005',
    name: 'Cashmere Wool Fedora',
    brand: 'Velvet Aura',
    price: 225,
    category: 'accessories',
    subcategory: 'Hats',
    sizes: ['S/M', 'M/L'],
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Charcoal', hex: '#36454F' },
    ],
    images: [
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800',
      'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=800',
    ],
    styleNote: 'A sophisticated fedora crafted from luxurious cashmere-wool blend.',
    material: '70% Wool, 30% Cashmere',
  },
  {
    id: 'acc-006',
    name: 'Mini Crossbody Bag',
    brand: 'Loom & Thread',
    price: 385,
    category: 'accessories',
    subcategory: 'Handbags',
    sizes: ['One Size'],
    colors: [
      { name: 'Sage', hex: '#B2AC88' },
      { name: 'Cream', hex: '#F5F5DC' },
    ],
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    ],
    styleNote: 'Compact crossbody with adjustable strap and secure clasp closure.',
    material: 'Pebbled Calfskin Leather',
  },
  {
    id: 'acc-007',
    name: 'Minimalist Chain Necklace',
    brand: 'Urban Essence',
    price: 165,
    category: 'accessories',
    subcategory: 'Jewelry',
    sizes: ['One Size'],
    colors: [
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Gold', hex: '#FFD700' },
    ],
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800',
    ],
    styleNote: 'Delicate chain necklace with a modern, minimalist aesthetic.',
    material: 'Sterling Silver / 18K Gold Vermeil',
  },
  {
    id: 'acc-008',
    name: 'Aviator Sunglasses',
    brand: 'Sia Studio',
    price: 245,
    category: 'accessories',
    subcategory: 'Sunglasses',
    sizes: ['One Size'],
    colors: [
      { name: 'Gold/Green', hex: '#BDB76B' },
      { name: 'Silver/Grey', hex: '#A8A8A8' },
    ],
    images: [
      'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
    ],
    styleNote: 'Timeless aviator frames with polarized mineral glass lenses.',
    material: 'Titanium Frame, Mineral Glass Lens',
  },
  {
    id: 'acc-009',
    name: 'Wide Leather Waist Belt',
    brand: 'Velvet Aura',
    price: 195,
    category: 'accessories',
    subcategory: 'Belts',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Cognac', hex: '#934D1E' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    ],
    styleNote: 'Statement waist belt with covered buckle for a streamlined look.',
    material: '100% Spanish Leather',
  },
  {
    id: 'acc-010',
    name: 'Canvas Weekend Bag',
    brand: 'Loom & Thread',
    price: 285,
    category: 'accessories',
    subcategory: 'Handbags',
    sizes: ['One Size'],
    colors: [
      { name: 'Natural', hex: '#E8DCC4' },
      { name: 'Navy', hex: '#1B2838' },
    ],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a45?w=800',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
    ],
    styleNote: 'Durable canvas weekender with leather trims and brass hardware.',
    material: 'Waxed Cotton Canvas, Vegetable-tanned Leather',
    isNew: true,
  },
];

export const categories = [
  {
    id: 'tops',
    name: 'Tops & Outerwear',
    description: 'Shirts, T-shirts, Jackets, Blazers',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
  },
  {
    id: 'bottoms',
    name: 'Bottoms',
    description: 'Trousers, Skirts, Jeans, Shorts',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Handbags, Belts, Sunglasses, Jewelry, Hats',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter(p => p.isTrending);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
