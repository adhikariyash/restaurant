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
    ingredients: ['Romaine lettuce', 'Parmesan cheese', 'Croutons'],
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
    ingredients: ['Cucumbers', 'Tomatoes', 'Feta cheese'],
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
    ingredients: ['Lettuce', 'Tomatoes', 'Cucumbers'],
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
    ingredients: ['Baby spinach', 'Strawberries', 'Almonds'],
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
    ingredients: ['Cabbage', 'Carrots', 'Bean sprouts'],
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
    ingredients: ['Chicken breast', 'Teriyaki sauce', 'Cucumber'],
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
    ingredients: ['Tuna', 'Salmon', 'Avocado'],
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
    ingredients: ['Spicy tuna', 'Sushi rice', 'Nori'],
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
    ingredients: ['Dark chocolate', 'Butter', 'Eggs'],
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
    ingredients: ['Cream cheese', 'Graham crackers', 'Strawberry sauce'],
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
    ingredients: ['Apples', 'Butter', 'Cinnamon'],
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
    ingredients: ['Ladyfingers', 'Mascarpone cheese', 'Coffee'],
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
    ingredients: ['Turkey breast', 'Bacon', 'Lettuce'],
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
    ingredients: ['Cheddar cheese', 'Bread', 'Butter'],
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
    ingredients: ['Turkey breast', 'Swiss cheese', 'Lettuce'],
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
    ingredients: ['Bacon', 'Lettuce', 'Tomato'],
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
    ingredients: ['Red velvet mix', 'Cream cheese', 'Butter'],
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
    ingredients: ['Dark chocolate', 'Butter', 'Flour'],
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
    ingredients: ['Carrots', 'Walnuts', 'Flour'],
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
    ingredients: ['Lemon juice', 'Lemon zest', 'Flour'],
    type: 'Veg'
  },

  // Pure Veg
  {
    id: 21,
    name: 'Veg Stir Fry',
    price: 10.49,
    category: 'Pure Veg',
    image: '/veggiestirfry.jpg',
    description: 'A colorful mix of stir-fried vegetables with a savory soy sauce glaze.',
    rating: 4.4,
    ingredients: ['Bell peppers', 'Broccoli', 'Carrots'],
    type: 'Veg'
  },
  {
    id: 22,
    name: 'Veg Curry',
    price: 9.99,
    category: 'Pure Veg',
    image: '/vegetablecurry.jpg',
    description: 'A hearty curry made with a variety of vegetables simmered in a rich and spicy sauce.',
    rating: 4.6,
    ingredients: ['Potatoes', 'Carrots', 'Green beans'],
    type: 'Veg'
  },
  {
    id: 23,
    name: 'Stuffed Peppers',
    price: 11.49,
    category: 'Pure Veg',
    image: '/stuffedbellpapers.jpeg',
    description: 'Bell peppers stuffed with a flavorful mixture of rice, beans, and vegetables, baked until tender.',
    rating: 4.5,
    ingredients: ['Bell peppers', 'Rice', 'Black beans'],
    type: 'Veg'
  },
  {
    id: 24,
    name: 'Chickpea Salad',
    price: 8.99,
    category: 'Pure Veg',
    image: '/chickpeasalad.jpg',
    description: 'A hearty salad with chickpeas, cucumbers, tomatoes, and a lemon-tahini dressing.',
    rating: 4.7,
    ingredients: ['Chickpeas', 'Cucumbers', 'Tomatoes'],
    type: 'Veg'
  },

  // Pasta
  {
    id: 25,
    name: 'Spaghetti Carbonara',
    price: 11.99,
    category: 'Pasta',
    image: '/spaghetticarbonara.jpg',
    description: 'Classic Italian pasta with a creamy egg and cheese sauce, pancetta, and black pepper.',
    rating: 4.6,
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese'],
    type: 'Non-Veg'
  },
  {
    id: 26,
    name: 'Fettuccine Alfredo',
    price: 12.49,
    category: 'Pasta',
    image: '/fettuccinealfredo.jpeg',
    description: 'Rich and creamy fettuccine pasta tossed in a buttery Alfredo sauce with Parmesan cheese.',
    rating: 4.7,
    ingredients: ['Fettuccine', 'Butter', 'Heavy cream'],
    type: 'Veg'
  },
  {
    id: 27,
    name: 'Penne Arrabbiata',
    price: 10.99,
    category: 'Pasta',
    image: '/pennearrabbiata.jpg',
    description: 'Penne pasta in a spicy tomato sauce with garlic and red pepper flakes.',
    rating: 4.4,
    ingredients: ['Penne', 'Tomatoes', 'Garlic'],
    type: 'Veg'
  },
  {
    id: 28,
    name: 'Lasagna',
    price: 13.49,
    category: 'Pasta',
    image: '/lasagna.jpg',
    description: 'Layers of pasta, rich meat sauce, and cheese, baked until bubbly and golden.',
    rating: 4.7,
    ingredients: ['Lasagna noodles', 'Ground beef', 'Ricotta cheese'],
    type: 'Non-Veg'
  }
];

export default products;

export const categories = [...new Set(products.map(item => item.category))];
