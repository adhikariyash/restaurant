const products = [
  // Salad
  {
    id: 1,
    name: 'Caesar Salad',
    price: 7.99,
    category: 'Salad',
    image: '/ceasarsalad.jpg',
    description: 'A classic Caesar salad with crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.',
    rating: 4.5,
    ingredients: ['1. Romaine lettuce', '2. Parmesan cheese', '3. Croutons'],
    type: 'Non-Veg'
  },
  {
    id: 2,
    name: 'Greek Salad',
    price: 8.49,
    category: 'Salad',
    image: '/greeksalad.jpg',
    description: 'A refreshing salad with cucumbers, tomatoes, olives, feta cheese, and a lemon-oregano vinaigrette.',
    rating: 4.7,
    ingredients: ['1. Cucumbers', '2. Tomatoes', '3. Feta cheese'],
    type: 'Veg'
  },
  {
    id: 3,
    name: 'Garden Salad',
    price: 6.99,
    category: 'Salad',
    image: '/gardensalad.jpg',
    description: 'A colorful mix of fresh garden vegetables with a choice of dressing.',
    rating: 4.2,
    ingredients: ['1. Lettuce', '2. Tomatoes', '3. Cucumbers'],
    type: 'Veg'
  },
  {
    id: 4,
    name: 'Spinach Salad',
    price: 7.49,
    category: 'Salad',
    image: '/spinachsalad.jpg',
    description: 'Baby spinach leaves topped with strawberries, almonds, and a balsamic vinaigrette.',
    rating: 4.6,
    ingredients: ['1. Baby spinach', '2. Strawberries', '3. Almonds'],
    type: 'Veg'
  },

  // Rolls
  {
    id: 5,
    name: 'Veg Rolls',
    price: 5.49,
    category: 'Rolls',
    image: '/vegetablespringrolls.jpg',
    description: 'Crispy spring rolls stuffed with a mix of fresh vegetables and served with a sweet chili dipping sauce.',
    rating: 4.3,
    ingredients: ['1. Spring roll wrappers', '2. Cabbage', '3. Carrots'],
    type: 'Veg'
  },
  {
    id: 6,
    name: 'Chicken Rolls',
    price: 6.99,
    category: 'Rolls',
    image: '/chickenteriyakirolls.jpg',
    description: 'Tender chicken rolled in a flavorful teriyaki sauce with fresh veggies.',
    rating: 4.4,
    ingredients: ['1. Chicken breast', '2. Teriyaki sauce', '3. Cucumber'],
    type: 'Non-Veg'
  },
  {
    id: 7,
    name: 'Sushi Rolls',
    price: 8.49,
    category: 'Rolls',
    image: '/shushirolls.jpg',
    description: 'A selection of sushi rolls with fresh fish and vegetables, perfect for sushi lovers.',
    rating: 4.8,
    ingredients: ['1. Sushi rice', '2. Nori', '3. Tuna'],
    type: 'Non-Veg'
  },
  {
    id: 8,
    name: 'Spicy Tuna',
    price: 7.99,
    category: 'Rolls',
    image: '/spicytunarolls.jpg',
    description: 'Spicy tuna wrapped in sushi rice and seaweed, with a touch of wasabi.',
    rating: 4.7,
    ingredients: ['1. Spicy tuna', '2. Sushi rice', '3. Nori'],
    type: 'Non-Veg'
  },

  // Dessert
  {
    id: 9,
    name: 'Choco Lava',
    price: 6.99,
    category: 'Dessert',
    image: '/chocolatelavacake.jpg',
    description: 'Warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream.',
    rating: 4.9,
    ingredients: ['1. Dark chocolate', '2. Butter', '3. Eggs'],
    type: 'Veg'
  },
  {
    id: 10,
    name: 'Cheesecake',
    price: 7.49,
    category: 'Dessert',
    image: '/cheesecake.jpg',
    description: 'Creamy cheesecake with a graham cracker crust, topped with a strawberry sauce.',
    rating: 4.6,
    ingredients: ['1. Cream cheese', '2. Graham crackers', '3. Strawberry sauce'],
    type: 'Veg'
  },
  {
    id: 11,
    name: 'Apple Pie',
    price: 5.99,
    category: 'Dessert',
    image: '/applepie.jpg',
    description: 'Classic apple pie with a buttery crust and spiced apple filling, served warm.',
    rating: 4.4,
    ingredients: ['1. Apples', '2. Butter', '3. Sugar'],
    type: 'Veg'
  },
  {
    id: 12,
    name: 'Tiramisu',
    price: 6.49,
    category: 'Dessert',
    image: '/tiramisu.jpg',
    description: 'Layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.',
    rating: 4.8,
    ingredients: ['1. Ladyfingers', '2. Mascarpone cheese', '3. Coffee'],
    type: 'Veg'
  },

  // Sandwich
  {
    id: 13,
    name: 'Club Sandwich',
    price: 8.49,
    category: 'Sandwich',
    image: '/clubsandwich.jpg',
    description: 'A triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo.',
    rating: 4.5,
    ingredients: ['1. Turkey breast', '2. Bacon', '3. Lettuce'],
    type: 'Non-Veg'
  },
  {
    id: 14,
    name: 'Grilled Cheese',
    price: 6.99,
    category: 'Sandwich',
    image: '/grilledcheesesandwich.jpg',
    description: 'Classic grilled cheese sandwich with melted cheddar and toasted bread.',
    rating: 4.3,
    ingredients: ['1. Cheddar cheese', '2. Bread', '3. Butter'],
    type: 'Veg'
  },
  {
    id: 15,
    name: 'Turkey Sandwich',
    price: 7.49,
    category: 'Sandwich',
    image: '/turkeysandwich.jpg',
    description: 'Turkey breast, Swiss cheese, lettuce, and tomato on whole grain bread.',
    rating: 4.6,
    ingredients: ['1. Turkey breast', '2. Swiss cheese', '3. Lettuce'],
    type: 'Non-Veg'
  },
  {
    id: 16,
    name: 'BLT Sandwich',
    price: 7.99,
    category: 'Sandwich',
    image: '/bltsandwich.jpg',
    description: 'Bacon, lettuce, and tomato on toasted bread with mayo.',
    rating: 4.4,
    ingredients: ['1. Bacon', '2. Lettuce', '3. Tomato'],
    type: 'Non-Veg'
  },

  // Cake
  {
    id: 17,
    name: 'Red Velvet',
    price: 9.99,
    category: 'Cake',
    image: '/redvelvetcake.jpeg',
    description: 'Moist red velvet cake with a hint of cocoa, layered with cream cheese frosting.',
    rating: 4.7,
    ingredients: ['1. Red velvet cake mix', '2. Cream cheese', '3. Butter'],
    type: 'Veg'
  },
  {
    id: 18,
    name: 'Chocolate Cake',
    price: 8.99,
    category: 'Cake',
    image: '/chocolatecake.jpeg',
    description: 'Rich and decadent chocolate cake with a smooth chocolate ganache.',
    rating: 4.8,
    ingredients: ['1. Dark chocolate', '2. Butter', '3. Sugar'],
    type: 'Veg'
  },
  {
    id: 19,
    name: 'Carrot Cake',
    price: 9.49,
    category: 'Cake',
    image: '/carrotcake.jpg',
    description: 'Spiced carrot cake with walnuts, topped with a creamy cream cheese frosting.',
    rating: 4.6,
    ingredients: ['1. Carrots', '2. Walnuts', '3. Flour'],
    type: 'Veg'
  },
  {
    id: 20,
    name: 'Lemon Cake',
    price: 8.49,
    category: 'Cake',
    image: '/lemoncake.jpeg',
    description: 'Tangy lemon cake with a zesty lemon glaze and a light, fluffy texture.',
    rating: 4.5,
    ingredients: ['1. Lemon juice', '2. Lemon zest', '3. Flour'],
    type: 'Veg'
  },

  // Pure Veg
  {
    id: 21,
    name: 'Veg Stir Fry',
    price: 10.49,
    category: 'Pure Veg',
    image: '/vegstirfry.jpg',
    description: 'A mix of fresh vegetables stir-fried with a savory sauce.',
    rating: 4.6,
    ingredients: ['1. Bell peppers', '2. Broccoli', '3. Carrots'],
    type: 'Veg'
  },
  {
    id: 22,
    name: 'Paneer Tikka',
    price: 11.99,
    category: 'Pure Veg',
    image: '/paneertikka.jpg',
    description: 'Spiced paneer cubes grilled to perfection, served with mint chutney.',
    rating: 4.7,
    ingredients: ['1. Paneer', '2. Yogurt', '3. Spices'],
    type: 'Veg'
  },
  {
    id: 23,
    name: 'Veg Biryani',
    price: 12.49,
    category: 'Pure Veg',
    image: '/vegbiryani.jpg',
    description: 'Aromatic basmati rice cooked with mixed vegetables and spices.',
    rating: 4.8,
    ingredients: ['1. Basmati rice', '2. Mixed vegetables', '3. Biryani spices'],
    type: 'Veg'
  },
  {
    id: 24,
    name: 'Veg Pizza',
    price: 13.99,
    category: 'Pure Veg',
    image: '/vegpizza.jpg',
    description: 'Delicious pizza topped with fresh vegetables and mozzarella cheese.',
    rating: 4.5,
    ingredients: ['1. Pizza dough', '2. Tomato sauce', '3. Mozzarella cheese'],
    type: 'Veg'
  }
];
export default products
export const categories = [...new Set(products.map(item => item.category))];