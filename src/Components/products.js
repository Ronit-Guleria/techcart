const AllProducts = [
  {
    id: 1,
    name: "Smart Watch",
    category: "Wearables",
    price: "₹1500",
    rating: "4.8",
    description: "Track fitness, heart rate, and notifications easily.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1511732351157-1865efcb7b7b",
    ],
  },

  {
    id: 2,
    name: "Wireless Headphones",
    category: "Audio",
    price: "₹2000",
    rating: "4.9",
    description: "Deep bass, noise cancellation, and long battery life.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1580894908361-967195033215",
    ],
  },

  {
    id: 3,
    name: "Laptop",
    category: "Computers",
    price: "₹45000",
    rating: "4.7",
    description: "High-performance laptop for coding, editing and gaming.",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    ],
  },

  {
    id: 4,
    name: "Security Camera",
    category: "Security",
    price: "₹3500",
    rating: "4.6",
    description: "24/7 surveillance with night vision and motion detection.",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      "https://images.unsplash.com/photo-1581093588401-22d9b1b9c6a9",
    ],
  },

  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: "₹2500",
    rating: "4.5",
    description: "Portable speaker with powerful bass and long battery.",
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d",
    ],
  },

  {
    id: 6,
    name: "Gaming Mouse",
    category: "Accessories",
    price: "₹4999",
    rating: "4.7",
    description: "High precision gaming mouse with RGB lighting.",
    images: [
      "https://images.unsplash.com/photo-1613141412501-9012977f1969",
      "https://images.unsplash.com/photo-1587202372775-98988b5c66c9",
    ],
  },

  {
    id: 7,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: "₹7999",
    rating: "4.8",
    description: "Tactile keys with RGB lighting for pro gamers.",
    images: [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    ],
  },

  {
    id: 8,
    name: "Smartphone",
    category: "Mobiles",
    price: "₹110000",
    rating: "4.9",
    description: "Flagship smartphone with stunning display and camera.",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    ],
  },

  {
    id: 9,
    name: "Tablet",
    category: "Mobiles",
    price: "₹25000",
    rating: "4.6",
    description: "Lightweight tablet for work, reading, and entertainment.",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9",
    ],
  },

  {
    id: 10,
    name: "DSLR Camera",
    category: "Cameras",
    price: "₹55000",
    rating: "4.8",
    description: "Capture professional photos and videos with ease.",
    images: [
      "https://images.unsplash.com/photo-1519183071298-a2962be96c8b",
      "https://images.unsplash.com/photo-1495121605193-b116b5b09a6c",
    ],
  },

  {
    id: 11,
    name: "Gaming Chair",
    category: "Furniture",
    price: "₹12000",
    rating: "4.7",
    description: "Ergonomic chair designed for long gaming sessions.",
    images: [
      "https://images.unsplash.com/photo-1616627989975-8f6e3f1a5d39",
      "https://images.unsplash.com/photo-1582582494700-1d1f0b61d7d6",
    ],
  },

  {
    id: 12,
    name: "LED Monitor",
    category: "Computers",
    price: "₹15000",
    rating: "4.6",
    description: "Ultra HD display with vibrant colors and clarity.",
    images: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    ],
  },

  {
    id: 13,
    name: "Power Bank",
    category: "Accessories",
    price: "₹1200",
    rating: "4.5",
    description: "Fast charging power bank with long battery backup.",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      "https://images.unsplash.com/photo-1606813902917-8cfc0d2cbf7c",
    ],
  },

  {
    id: 14,
    name: "VR Headset",
    category: "Gaming",
    price: "₹30000",
    rating: "4.7",
    description: "Experience immersive virtual reality gaming.",
    images: [
      "https://images.unsplash.com/photo-1581091215367-59ab6b2d1a4b",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200",
    ],
  },

  {
    id: 15,
    name: "Smart Home Hub",
    category: "Smart Home",
    price: "₹8000",
    rating: "4.6",
    description: "Control all your smart devices from one place.",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    ],
  },
  {
  id: 16,
  name: "Smart LED Bulb",
  category: "Smart Home",
  price: "₹999",
  rating: "4.5",
  description: "Control brightness and color using your smartphone or voice assistant.",
  images: [
    "https://images.unsplash.com/photo-1582719471386-94b7a5b7f2c3",
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c4",
  ],
},

{
  id: 17,
  name: "Wireless Charger",
  category: "Accessories",
  price: "₹1200",
  rating: "4.6",
  description: "Fast wireless charging pad compatible with all modern devices.",
  images: [
    "https://images.unsplash.com/photo-1585386959984-a41552262e1c",
    "https://images.unsplash.com/photo-1603899122093-96cb6c4c28f4",
  ],
},

{
  id: 18,
  name: "Noise Cancelling Earbuds",
  category: "Audio",
  price: "₹3500",
  rating: "4.7",
  description: "Compact earbuds with active noise cancellation and deep bass.",
  images: [
    "https://images.unsplash.com/photo-1606220838315-056192d5e927",
    "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
  ],
},

{
  id: 19,
  name: "Gaming Console",
  category: "Gaming",
  price: "₹45000",
  rating: "4.9",
  description: "Next-gen console for ultra-smooth gaming and stunning graphics.",
  images: [
    "https://images.unsplash.com/photo-1606813909025-4d5c3e76aa1c",
    "https://images.unsplash.com/photo-1587202372775-98988b5c66c9",
  ],
},

{
  id: 20,
  name: "External Hard Drive",
  category: "Storage",
  price: "₹5000",
  rating: "4.6",
  description: "1TB portable hard drive for secure and fast data storage.",
  images: [
    "https://images.unsplash.com/photo-1587202372775-98988b5c66c9",
    "https://images.unsplash.com/photo-1580894908361-967195033215",
  ],
},

{
  id: 21,
  name: "Smart Door Lock",
  category: "Smart Home",
  price: "₹9000",
  rating: "4.7",
  description: "Secure your home with fingerprint and app-controlled access.",
  images: [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
  ],
},

{
  id: 22,
  name: "Portable Projector",
  category: "Entertainment",
  price: "₹15000",
  rating: "4.6",
  description: "Mini projector for movies and presentations anywhere.",
  images: [
    "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    "https://images.unsplash.com/photo-1593642532400-2682810df593",
  ],
},

{
  id: 23,
  name: "Fitness Band",
  category: "Wearables",
  price: "₹1200",
  rating: "4.4",
  description: "Track your steps, calories, and sleep patterns daily.",
  images: [
    "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
    "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
  ],
},

{
  id: 24,
  name: "USB-C Hub",
  category: "Accessories",
  price: "₹2500",
  rating: "4.6",
  description: "Expand your laptop ports with HDMI, USB, and SD card support.",
  images: [
    "https://images.unsplash.com/photo-1587202372775-98988b5c66c9",
    "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
  ],
},

{
  id: 25,
  name: "4K Action Camera",
  category: "Cameras",
  price: "₹18000",
  rating: "4.7",
  description: "Capture adventures in ultra HD with waterproof design.",
  images: [
    "https://images.unsplash.com/photo-1519183071298-a2962be96c8b",
    "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac",
  ],
}
];

export default AllProducts;