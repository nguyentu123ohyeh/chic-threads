export interface Product {
  id: string;
  name: string;
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
  // TOPS & OUTERWEAR
  {
    id: 'top-002',
    name: 'Cropped Quilted Puffer Vest',
    price: 45.99,
    category: 'tops',
    subcategory: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Khaki', hex: '#C3B091' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/71ZpIfr9yNL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71dUlofD0eL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71Pi-1YPr7L._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61RK8WvIbhL._AC_SY550_.jpg'
    ],
    styleNote: 'A trendy lightweight cropped puffer vest featuring a stand collar and a mix of zip and button closures. Perfect for layering in Fall 2025.',
    material: '100% Nylon Shell, Synthetic Down Fill',
    isNew: true,
  },
  {
    id: 'top-003',
    name: 'Oversized Fuzzy Sherpa Vest',
    price: 33.98,
    category: 'tops',
    subcategory: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Cream', hex: '#FFFDD0' },
      { name: 'Camel', hex: '#C19A6B' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/71FMzkQsNQL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/81J1a3381kL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/718rhsrqr1L._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/81erZO+-n3L._AC_SY550_.jpg'
    ],
    styleNote: 'Cozy up in this ultra-soft fleece vest. The oversized silhouette and zip-up front make it an essential casual piece for winter.',
    material: '100% Polyester Sherpa Fleece',
    isNew: true,
  },
  {
    id: 'top-004',
    name: "Men's Outdoor Padded Vest",
    price: 29.99,
    category: 'tops',
    subcategory: 'Outerwear',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Navy', hex: '#000080' },
      { name: 'Dark Green', hex: '#013220' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/71o5LCnm5SL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/818mHrijGhL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/81Ih0YDA5jL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/713u2Ys1mwL._AC_SY550_.jpg'
    ],
    styleNote: "Designed for the outdoorsman, this stand-collar padded vest offers warmth without the bulk. Durable and weather-ready.",
    material: 'Water-resistant Polyester Shell',
    isNew: true,
  },
  {
    id: 'top-005',
    name: 'Longline Hooded Puffer Vest',
    price: 34.73,
    category: 'tops',
    subcategory: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Grey', hex: '#808080' },
      { name: 'Olive', hex: '#808000' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/51Km0oK0CHL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61S3tKDDrFL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61S3tKDDrFL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61CnY+Lmg3L._AC_SY550_.jpg'
    ],
    styleNote: 'Extra coverage for colder days. This long-cut puffer vest features a cozy hood and a streamlined solid-color finish.',
    material: '100% Polyester Fill',
    isNew: true,
  },
  {
    id: 'top-006',
    name: 'Classic Quilted Puffy Jacket',
    price: 26.99,
    category: 'tops',
    subcategory: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Pink', hex: '#FFC0CB' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/61KaVz8AF9L._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/71DGeQysLML._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/71aYaKe1ixL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/71Fmt581d3L._AC_SX569_.jpg'
    ],
    styleNote: 'A lightweight quilted vest that combines cuteness with functionality. Perfect for crisp fall mornings and active days.',
    material: 'Soft-touch Nylon',
    isNew: true,
  },
  {
    id: 'top-007',
    name: 'Water-Resistant Packable Vest',
    price: 30.80,
    category: 'tops',
    subcategory: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Royal Blue', hex: '#4169E1' },
      { name: 'Black', hex: '#000000' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/81OtvpM2ExL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/81+L3LiDt8L._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/81eeCTee4qL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/81f+2a-sywL._AC_SX569_.jpg'
    ],
    styleNote: 'The ultimate travel companion. This puffer vest is water-resistant and folds down easily into its own carrying pouch.',
    material: '100% Recycled Polyester',
    isNew: true,
  },
  {
    id: 'top-008',
    name: 'Retro Tweed Wool Waistcoat',
    price: 29.00,
    category: 'tops',
    subcategory: 'Vests',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Brown Tweed', hex: '#5E4B3C' },
      { name: 'Grey Tweed', hex: '#708090' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/71P673CXFBL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/71P673CXFBL._AC_SX466_.jpg',
      'https://m.media-amazon.com/images/I/81CaNzgNMVL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71fB67RrhqL._AC_SY550_.jpg'
    ],
    styleNote: 'Vintage-inspired wool herringbone vest. Featuring a classic V-neck, it adds an air of sophistication to any formal or prom suit.',
    material: '50% Wool, 50% Polyester',
    isNew: true,
  },
  {
    id: 'top-009',
    name: 'Ribbed Henley Fall Top',
    price: 17.99,
    category: 'tops',
    subcategory: 'Shirts',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Burgundy', hex: '#800020' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/71w8ueiUVdL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71w8ueiUVdL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71ZJ3WazZjL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71SCnLzqQsL._AC_SY550_.jpg'
    ],
    styleNote: 'A versatile ribbed henley shirt for women. Dress it up for business casual or keep it cute for a day at school.',
    material: '95% Cotton, 5% Spandex',
    isNew: true,
  },
  {
    id: 'top-010',
    name: 'Stay-Tucked Cotton Undershirts (Pack)',
    price: 23.98,
    category: 'tops',
    subcategory: 'Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White/Black Mix', hex: '#FFFFFF' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/61+jiqYxv8L._AC_SY741_.jpg',
      'https://m.media-amazon.com/images/I/71bJtBcrjgL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71l6k2abMIL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71jRN6MV2cL._AC_SX679_.jpg'
    ],
    styleNote: 'Soft, breathable cotton undershirts with a stay-tucked design. The ultimate foundation for any outfit.',
    material: '100% Ring-spun Cotton',
    isNew: true,
  },
  {
    id: 'top-011',
    name: "Men's Summer Linen Beach Shirt",
    price: 34.99,
    category: 'tops',
    subcategory: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Linen White', hex: '#F5F5DC' },
      { name: 'Sky Blue', hex: '#87CEEB' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/817w70GDTLL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/81AGpEqaF0L._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/81HWhiRRxIL._AC_SY550_.jpg'
    ],
    styleNote: 'Crafted from a breathable linen-blend, this button-down is ideal for beach weddings or hot summer days.',
    material: '55% Linen, 45% Cotton',
    isNew: true,
  },
  {
    id: 'top-012',
    name: "Men's Casual Short Sleeve Henley",
    price: 19.99,
    category: 'tops',
    subcategory: 'Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Heather Grey', hex: '#9B9B9B' },
      { name: 'Charcoal', hex: '#36454F' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/71lQCkMDQQL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71zykPZLHcL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/81xPe-zB0eL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71mt1MST7YL._AC_SY550_.jpg'
    ],
    styleNote: 'A summer staple. This lightweight henley tee offers a relaxed fit with a classic button neckline.',
    material: 'Premium Cotton Blend',
    isNew: true,
  },
  {
    id: 'top-013',
    name: "Men's Business Casual Dress Shirt",
    price: 19.99,
    category: 'tops',
    subcategory: 'Shirts',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Light Blue', hex: '#ADD8E6' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/71oMm3Nhx6L._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71DSFE99sgL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71tV3QBKTwL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71ddhFs5QNL._AC_SY550_.jpg'
    ],
    styleNote: 'A crisp short-sleeve dress shirt that transitions perfectly from the office to dinner.',
    material: 'Easy-iron Cotton Mix',
    isNew: true,
  },

  // BOTTOMS
  {
    id: 'btm-002',
    name: "Levi's 559 Relaxed Straight Jeans",
    price: 69.50,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['30W', '32W', '34W', '36W'],
    colors: [
      { name: 'Indigo', hex: '#281E5D' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/5137bplE4kL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/41gS9EkxXqL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/51ZLGapIQkL._AC_SX569_.jpg'
    ],
    styleNote: 'Classic 559 relaxed straight jeans for men. These provide extra room through the seat and thigh for all-day comfort.',
    material: '100% Cotton Denim',
    isNew: true,
  },
  {
    id: 'btm-003',
    name: 'High Waisted Wide Leg Jeans',
    price: 39.99,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['24', '26', '28', '30'],
    colors: [
      { name: 'Light Wash', hex: '#D1E5F4' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/716QM+s2oGL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71IKB73P-tL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/718Dba1h0XL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/718Dba1h0XL._AC_SY550_.jpg'
    ],
    styleNote: 'Flattering high-rise denim with a baggy wide-leg cut. Comfort stretch makes these your new favorite pair.',
    material: '98% Denim, 2% Elastane',
    isNew: true,
  },
  {
    id: 'btm-004',
    name: 'Ripped Skinny Tapered Jeans',
    price: 36.99,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['28W', '30W', '32W', '34W'],
    colors: [
      { name: 'Distressed Blue', hex: '#4B6A88' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/61Kt-t5XxCL._AC_SY445_SX342_QL70_FMwebp_.jpg',
      'https://m.media-amazon.com/images/I/611NLzz8PSL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61IV4hFokVL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61H8puF3toL._AC_SY550_.jpg'
    ],
    styleNote: 'Edgy skinny jeans featuring distressed rips and a tapered leg for a modern streetwear silhouette.',
    material: 'Stretch Denim',
    isNew: true,
  },
  {
    id: 'btm-005',
    name: 'Tummy Control Skinny Jeggings',
    price: 41.99,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Dark Indigo', hex: '#1C2E4A' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/71ty9Nbf1iL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71wBlQDX0lL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/81cYDJCu-hL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/91+qdojJmWL._AC_SY550_.jpg'
    ],
    styleNote: 'Trendy pull-on leggings with the look of denim. Features tummy control and functional pockets for everyday wear.',
    material: 'Elastic Cotton Blend',
    isNew: true,
  },
  {
    id: 'btm-006',
    name: 'Vintage Wide Leg Baggy Jeans',
    price: 45.99,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['25', '27', '29', '31'],
    colors: [
      { name: 'Vintage Blue', hex: '#7E92A2' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/51YIHf+41WL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/51SIOwrxlcL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/51SIOwrxlcL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/51dYbC9F81L._AC_SX569_.jpg'
    ],
    styleNote: 'Retro boyfriend-style baggy jeans with a mid-low waist. Inspired by vintage 90s streetwear.',
    material: 'Premium Heavyweight Denim',
    isNew: true,
  },
  {
    id: 'btm-007',
    name: '90s Hip Hop Loose Denim',
    price: 46.49,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['28', '30', '32', '34'],
    colors: [
      { name: 'Raw Denim', hex: '#2B3E50' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/61fc7LbU4BL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/619DXfhYGdL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61z7VIzhyDL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71YOkjuElZL._AC_SX569_.jpg'
    ],
    styleNote: 'Ultra-loose hip hop style jeans. Perfect for an oversized 90s look with a comfortable mid-low waist.',
    material: '100% Cotton',
    isNew: true,
  },
  {
    id: 'btm-008',
    name: 'Raw Hem Frayed Cropped Jeans',
    price: 38.88,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['24', '26', '28', '30'],
    colors: [
      { name: 'Light Blue', hex: '#A8C3D8' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/61u0LJPVCNL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61ByyL+vlJL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/6173TDifUSL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61aAqq+8IqL._AC_SY550_.jpg'
    ],
    styleNote: 'Chic cropped jeans with a raw hem and frayed detailing. The wide-leg cut adds a modern touch to your denim collection.',
    material: 'Stretch Denim',
    isNew: true,
  },
  {
    id: 'btm-009',
    name: 'Extreme Motion Tapered Jean',
    price: 41.90,
    category: 'bottoms',
    subcategory: 'Jeans',
    sizes: ['30W', '32W', '34W', '36W'],
    colors: [
      { name: 'Dark Wash', hex: '#002366' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/6169aW-LtAL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61-3qbuDI2L._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61hXDuVqWDL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61hXDuVqWDL._AC_SY550_.jpg'
    ],
    styleNote: 'Athletic tapered jeans designed for extreme motion and flexibility. Ideal for the man on the move.',
    material: 'High-flex Denim Blend',
    isNew: true,
  },

  // ACCESSORIES
  {
    id: 'acc-002',
    name: 'Leopard Print Silk Head Scarf',
    price: 5.75,
    category: 'accessories',
    subcategory: 'Scarves',
    sizes: ['35 x 35 inch'],
    colors: [
      { name: 'Leopard', hex: '#D2B48C' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/81x1Y8ShtxL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/71jm1iPFbEL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/81PhwRN7qkL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71XRM5lB7iL._AC_SX466_.jpg'
    ],
    styleNote: 'A luxurious satin head scarf with a bold leopard print. Versatile enough to be worn as a neck scarf or hair wrap.',
    material: 'Satin Silk Blend',
    isNew: true,
  },
  {
    id: 'acc-003',
    name: 'Lace Ruffle Cottagecore Socks',
    price: 11.99,
    category: 'accessories',
    subcategory: 'Hosiery',
    sizes: ['One Size'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/51uNOPZiJlL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/61fHTW6s5ML._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/51NdEkgthtL._AC_SX522_.jpg',
      'https://m.media-amazon.com/images/I/51zym3yVcmL._AC_SX522_.jpg'
    ],
    styleNote: 'Adorable ankle socks featuring delicate lace ruffles. Perfect for cottagecore aesthetics and pairing with Mary Janes.',
    material: 'Breathable Cotton Mix',
    isNew: true,
  },
  {
    id: 'acc-004',
    name: 'Star Pattern Knitted Leg Warmers',
    price: 12.99,
    category: 'accessories',
    subcategory: 'Leg Warmers',
    sizes: ['One Size'],
    colors: [
      { name: 'Grey/White Star', hex: '#808080' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/61xhqJEqyWL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/61td8+e5tsL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/613Ju5QszOL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/61O3mBA1-WL._AC_SX522_.jpg'
    ],
    styleNote: 'Kawaii Y2K-inspired knitted leg warmers with a star pattern. A must-have accessory for 80s themed parties or retro outfits.',
    material: 'Acrylic Knit',
    isNew: true,
  },
  {
    id: 'acc-005',
    name: 'Retro Stretchy Arm Warmers',
    price: 12.99,
    category: 'accessories',
    subcategory: 'Arm Warmers',
    sizes: ['One Size'],
    colors: [
      { name: 'Black/Star', hex: '#000000' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/811Cm97wxQL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/81MvW5Bza1L._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/814GtqFVG1L._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/81Ly9l4IznL._AC_SX569_.jpg'
    ],
    styleNote: 'Y2K streetwear arm warmers. These stretchy covers feature a bold star print, perfect for dance or gothic looks.',
    material: 'Elastic Knit Fabric',
    isNew: true,
  },
  {
    id: 'acc-006',
    name: 'Ripped Gothic Tights (2 Pack)',
    price: 15.99,
    category: 'accessories',
    subcategory: 'Hosiery',
    sizes: ['One Size'],
    colors: [
      { name: 'Black', hex: '#000000' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/411M3DwwwBL._AC_.jpg',
      'https://m.media-amazon.com/images/I/61V7WSr22+L._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/71TpwPL0NrL._AC_SY550_.jpg',
      'https://m.media-amazon.com/images/I/61ERvO9l6TL._AC_.jpg'
    ],
    styleNote: 'Edgy ripped fishnet style tights for a gothic or punk-rock aesthetic. Comes in a convenient 2-pack.',
    material: 'Nylon Spandex Blend',
    isNew: true,
  },
  {
    id: 'acc-007',
    name: 'Fingerless Harajuku Arm Sleeves',
    price: 12.99,
    category: 'accessories',
    subcategory: 'Arm Warmers',
    sizes: ['One Size'],
    colors: [
      { name: 'Goth Black', hex: '#000000' },
    ],
    images: [
      'https://m.media-amazon.com/images/I/61kt-HHqiJL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/71RRGommW7L._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/71Cl0qb3UFL._AC_SX569_.jpg',
      'https://m.media-amazon.com/images/I/61egFn83d7L._AC_SX569_.jpg'
    ],
    styleNote: 'Cute Kawaii fingerless gloves in a Japanese Harajuku style. These knitted arm sleeves are perfect for goth or alt-fashion fans.',
    material: 'Soft Acrylic Knit',
    isNew: true,
  }
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
