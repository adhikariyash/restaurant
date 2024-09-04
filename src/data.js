// data.js

const products = [
  // Salad
  {
    id: 1,
    name: 'Caesar Salad',
    price: 7.99,
    category: 'Salad',
    image: '/public/ceasarsalad.jpg'
  },
  {
    id: 2,
    name: 'Greek Salad',
    price: 8.49,
    category: 'Salad',
    image: '/public/greeksalad.jpg'
  },
  {
    id: 3,
    name: 'Garden Salad',
    price: 6.99,
    category: 'Salad',
    image: '/public/gardensalad.jpg'
  },
  {
    id: 4,
    name: 'Spinach Salad',
    price: 7.49,
    category: 'Salad',
    image: '/public/spinachsalad.jpg'
  },

  // Rolls
  {
    id: 5,
    name: 'Vegetable Spring Rolls',
    price: 5.49,
    category: 'Rolls',
    image: '/public/vegetablespringrolls.jpg'
  },
  {
    id: 6,
    name: 'Chicken Teriyaki Rolls',
    price: 6.99,
    category: 'Rolls',
    image: '/public/chickenteriyakirolls.jpg'
  },
  {
    id: 7,
    name: 'Sushi Rolls',
    price: 8.49,
    category: 'Rolls',
    image: '/public/shushirolls.jpg'
  },
  {
    id: 8,
    name: 'Spicy Tuna Rolls',
    price: 7.99,
    category: 'Rolls',
    image: '/public/spicytunarolls.jpg'
  },

  // Dessert
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    price: 6.99,
    category: 'Dessert',
    image: '/public/chocolatelavacake.jpg'
  },
  {
    id: 10,
    name: 'Cheesecake',
    price: 7.49,
    category: 'Dessert',
    image: '/public/cheesecake.jpg'
  },
  {
    id: 11,
    name: 'Apple Pie',
    price: 5.99,
    category: 'Dessert',
    image: '/public/applepie.jpg'
  },
  {
    id: 12,
    name: 'Tiramisu',
    price: 6.49,
    category: 'Dessert',
    image: '/public/tiramisu.jpg'
  },

  // Sandwich
  {
    id: 13,
    name: 'Club Sandwich',
    price: 8.49,
    category: 'Sandwich',
    image: '/public/clubsandwich.jpg'
  },
  {
    id: 14,
    name: 'Grilled Cheese Sandwich',
    price: 6.99,
    category: 'Sandwich',
    image: '/public/grilledcheesesandwich.jpg'
  },
  {
    id: 15,
    name: 'Turkey Sandwich',
    price: 7.49,
    category: 'Sandwich',
    image: '/public/turkeysandwich.jpg'
  },
  {
    id: 16,
    name: 'BLT Sandwich',
    price: 7.99,
    category: 'Sandwich',
    image: '/public/bltsandwich.jpg'
  },

  // Cake
  {
    id: 17,
    name: 'Red Velvet Cake',
    price: 9.99,
    category: 'Cake',
    image: '/public/redvelvetcake.jpeg'
  },
  {
    id: 18,
    name: 'Chocolate Cake',
    price: 8.99,
    category: 'Cake',
    image: '/public/chocolatecake.jpeg'
  },
  {
    id: 19,
    name: 'Carrot Cake',
    price: 9.49,
    category: 'Cake',
    image: '/public/carrotcake.jpg'
  },
  {
    id: 20,
    name: 'Lemon Cake',
    price: 8.49,
    category: 'Cake',
    image: '/public/lemoncake.jpeg'
  },

  // Pure Veg
  {
    id: 21,
    name: 'Veggie Stir Fry',
    price: 10.49,
    category: 'Pure Veg',
    image: '/public/veggiestirfry.jpg'
  },
  {
    id: 22,
    name: 'Vegetable Curry',
    price: 9.99,
    category: 'Pure Veg',
    image: '/public/vegetablecurry.jpg'
  },
  {
    id: 23,
    name: 'Stuffed Bell Peppers',
    price: 11.49,
    category: 'Pure Veg',
    image: '/public/stuffedbellpapers.jpeg'
  },
  {
    id: 24,
    name: 'Chickpea Salad',
    price: 8.99,
    category: 'Pure Veg',
    image: '/public/chickpeasalad.jpg'
  },

  // Pasta
  {
    id: 25,
    name: 'Spaghetti Carbonara',
    price: 11.99,
    category: 'Pasta',
    image: '/public/spaghetticarbonara.jpg'
  },
  {
    id: 26,
    name: 'Fettuccine Alfredo',
    price: 12.49,
    category: 'Pasta',
    image: '/public/fettuccinealfredo.jpeg'
  },
  {
    id: 27,
    name: 'Penne Arrabbiata',
    price: 10.99,
    category: 'Pasta',
    image: '/public/pennearrabbiata.jpg'
  },
  {
    id: 28,
    name: 'Lasagna',
    price: 13.49,
    category: 'Pasta',
    image: '/public/lasagna.jpg'
  },

 
];

export default products;

 export const categories = [...new Set(products.map(item => item.category))]
