import { create } from 'zustand';

export type Recipe = {
    id: string;
    title: string;
    description: string;
    image: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    categories: string[];
    ingredients: string[];
    instructions: string[];
    nutritionalInfo: {
        calories: number;
        protein: string;
        carbs: string;
        fat: string;
        fiber: string;
        vitamins: string[];
    };
};

type RecipeStore = {
    recipes: Recipe[];
    selectedRecipe: Recipe | null;
    setSelectedRecipe: (recipe: Recipe | null) => void;
    getRecipeById: (id: string) => Recipe | undefined;
};


const mockRecipes: Recipe[] = [
    {
        id: '1',
        title: 'Lazy Day Plate',
        description:
            'A simple yet hearty protein-packed meal featuring steak, eggs, and fresh vegetables. Perfect for a quick, classic lunch or dinner.',
        image:
            'data:image/webp;base64,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',
        prepTime: '10 min',
        cookTime: '10 min',
        servings: 1,
        difficulty: 'Easy',
        categories: ['Lunch', 'Dinner', 'Quick', 'Classic'],
        ingredients: [
            'Steak (leftover or freshly cooked)',
            'Homemade cheese',
            '2 soft-boiled eggs',
            'Fresh lettuce',
            'Bell peppers (sliced)',
        ],
        instructions: [
            'Reheat or serve the leftover steak as is.',
            'Add a few slices or chunks of homemade cheese.',
            'Prepare two soft-boiled eggs.',
            'Wash and chop fresh vegetables like lettuce and bell peppers.',
            'Plate everything together and serve immediately.',
        ],
        nutritionalInfo: {
            calories: 520,
            protein: '42g',
            carbs: '8g',
            fat: '35g',
            fiber: '3g',
            vitamins: ['Vitamin A', 'Vitamin C', 'Iron', 'Zinc', 'B Vitamins'],
        },
    },
    {
        id: '2',
        title: 'Fruit & Yogurt Power Plate',
        description:
            'A refreshing, nutrient-rich breakfast featuring fresh fruit, Greek yogurt, and a drizzle of honey for a healthy, quick start to your day.',
        image: 'https://th.bing.com/th/id/OIP.rmw3vnUxTkL34l5VDOvBtwHaHa?w=147&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3',
        prepTime: '10-15 min',
        cookTime: '0 min',
        servings: 1,
        difficulty: 'Easy',
        categories: ['Breakfast', 'Healthy', 'Quick', 'Antioxidant'],
        ingredients: [
            'Fresh guava (sliced)',
            'Fresh strawberries',
            'Fresh papaya (cubed)',
            'Greek yogurt',
            'Honey (to drizzle)',
            'Black seeds (nigella or chia)',
            'Banana bread with strawberries and raspberries (optional)',
        ],
        instructions: [
            'Prepare a bowl or plate with sliced guava, strawberries, and cubed papaya.',
            'Add Greek yogurt in a small bowl and drizzle with honey.',
            'Sprinkle black seeds over the yogurt.',
            'Slice a piece of banana bread and place it beside the fruit.',
            'Serve immediately for a balanced, antioxidant-rich meal.',
        ],
        nutritionalInfo: {
            calories: 380,
            protein: '14g',
            carbs: '60g',
            fat: '8g',
            fiber: '9g',
            vitamins: ['Vitamin C', 'Vitamin A', 'Calcium', 'Potassium'],
        },
    },
    {
        id: '3',
        title: 'Spiced Greek Yogurt Dip with Bell Peppers',
        description:
            'A flavorful and creamy dip made with Greek yogurt, spices, and infused olive oil—perfect for a light, vegetarian snack.',
        image:
            'https://th.bing.com/th/id/OIP.urukMnaG-Qj1OtzVsaRPigHaEO?w=307&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3',
        prepTime: '5-7 min',
        cookTime: '0 min',
        servings: 1,
        difficulty: 'Easy',
        categories: ['Snack', 'Vegetarian', 'Low-Calorie', 'Quick'],
        ingredients: [
            '1 cup Greek yogurt',
            '1–2 bell peppers, chopped',
            'Cayenne pepper (to taste)',
            'Seasoning salt (e.g. Gibson’s blend)',
            'Fermented black garlic, finely chopped',
            'Sun-dried tomatoes, chopped',
            'Olive oil infused with cinnamon stick, cloves, cardamom, and dried mint',
        ],
        instructions: [
            'Chop the bell peppers into bite-sized pieces and set aside.',
            'Scoop Greek yogurt into a bowl.',
            'Season the yogurt with cayenne pepper and seasoning salt. Mix well.',
            'Top with chopped fermented black garlic and sun-dried tomatoes.',
            'Drizzle with the infused olive oil.',
            'Serve immediately with chopped bell peppers for dipping.',
        ],
        nutritionalInfo: {
            calories: 120,
            protein: '6g',
            carbs: '8g',
            fat: '7g',
            fiber: '2g',
            vitamins: ['Vitamin C', 'Calcium', 'Magnesium', 'Probiotics'],
        },
    },
    {
        id: '4',
        title: 'Avocado Toast Deluxe',
        description: 'Creamy avocado on whole grain toast, topped with cherry tomatoes, radish, and a sprinkle of seeds for a nutritious breakfast.',
        image: 'https://th.bing.com/th/id/OIP.N9Obafr2WXcX3u3T0SLE7wHaEK?w=273&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3',
        prepTime: '5 min',
        cookTime: '0 min',
        servings: 1,
        difficulty: 'Easy',
        categories: ['Breakfast', 'Quick', 'Healthy', 'Vegetarian'],
        ingredients: [
            '1 slice whole grain bread',
            '1/2 ripe avocado',
            'Cherry tomatoes (sliced)',
            'Radish slices',
            'Mixed seeds (pumpkin, sunflower)',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Toast the bread slice to your liking.',
            'Mash the avocado and spread evenly on the toast.',
            'Top with cherry tomatoes and radish slices.',
            'Sprinkle seeds, salt, and pepper over the top.',
            'Serve immediately.',
        ],
        nutritionalInfo: {
            calories: 250,
            protein: '6g',
            carbs: '30g',
            fat: '14g',
            fiber: '8g',
            vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin E', 'Potassium'],
        },
    },
    {
        id: '5',
        title: 'Classic Chicken Caesar Salad',
        description: 'Crisp romaine lettuce with grilled chicken, parmesan, croutons, and creamy Caesar dressing.',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&h=180&w=300',
        prepTime: '10 min',
        cookTime: '15 min',
        servings: 2,
        difficulty: 'Medium',
        categories: ['Lunch', 'Dinner', 'Salad', 'Healthy'],
        ingredients: [
            '2 chicken breasts, grilled and sliced',
            'Romaine lettuce, chopped',
            'Parmesan cheese, grated',
            'Croutons',
            'Caesar dressing',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Grill chicken breasts until cooked through, then slice.',
            'Toss chopped romaine with Caesar dressing.',
            'Top with sliced chicken, croutons, and grated Parmesan.',
            'Season with salt and pepper if needed.',
            'Serve immediately.',
        ],
        nutritionalInfo: {
            calories: 480,
            protein: '40g',
            carbs: '22g',
            fat: '28g',
            fiber: '5g',
            vitamins: ['Vitamin A', 'Vitamin K', 'Vitamin C', 'Calcium'],
        },
    },
    {
        id: '6',
        title: 'Vegetable Stir-Fry with Tofu',
        description: 'A colorful, protein-rich stir-fry with tofu and a mix of fresh vegetables, perfect for a quick dinner.',
        image: 'https://th.bing.com/th/id/OIP.LWLLD3K5PP_CPb8Gz3r9_QHaE8?w=244&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3',
        prepTime: '10 min',
        cookTime: '15 min',
        servings: 2,
        difficulty: 'Medium',
        categories: ['Dinner', 'Vegetarian', 'Healthy', 'Quick'],
        ingredients: [
            '200g firm tofu, cubed',
            '1 cup broccoli florets',
            '1 red bell pepper, sliced',
            '1 carrot, sliced',
            '2 tbsp soy sauce',
            '1 tbsp sesame oil',
            '1 clove garlic, minced',
            '1 tsp ginger, minced',
        ],
        instructions: [
            'Heat sesame oil in a pan, add garlic and ginger.',
            'Add tofu cubes and cook until lightly golden.',
            'Add vegetables and stir-fry for 5–7 minutes.',
            'Add soy sauce and stir well.',
            'Serve hot.',
        ],
        nutritionalInfo: {
            calories: 320,
            protein: '18g',
            carbs: '18g',
            fat: '20g',
            fiber: '5g',
            vitamins: ['Vitamin C', 'Vitamin K', 'Calcium', 'Iron'],
        },
    },
    {
        id: '7',
        title: 'Overnight Oats with Berries',
        description: 'A creamy and satisfying breakfast of oats soaked overnight in milk, topped with fresh berries and nuts.',
        image: 'https://th.bing.com/th/id/OIP.3zxVW35eRDiIuKBi6nFocwHaHa?w=189&h=252&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3',
        prepTime: '5 min',
        cookTime: '0 min',
        servings: 1,
        difficulty: 'Easy',
        categories: ['Breakfast', 'Quick', 'Healthy', 'Vegetarian'],
        ingredients: [
            '1/2 cup rolled oats',
            '1/2 cup milk or plant-based milk',
            '1/4 cup fresh blueberries',
            '1/4 cup fresh strawberries, sliced',
            '1 tbsp almond or peanut butter',
            '1 tsp chia seeds',
        ],
        instructions: [
            'Combine oats, milk, and chia seeds in a jar.',
            'Refrigerate overnight.',
            'Top with fresh berries and nut butter in the morning.',
            'Serve chilled.',
        ],
        nutritionalInfo: {
            calories: 280,
            protein: '10g',
            carbs: '40g',
            fat: '10g',
            fiber: '8g',
            vitamins: ['Vitamin C', 'Vitamin A', 'Calcium', 'Iron'],
        },
    },
    {
        id: '8',
        title: 'Quinoa and Black Bean Salad',
        description: 'A protein-packed, colorful salad with quinoa, black beans, corn, avocado, and a zesty lime dressing.',
        image: 'https://th.bing.com/th/id/OIP.sE04x6LImKAxqEdhSN8_VAHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3',
        prepTime: '15 min',
        cookTime: '15 min',
        servings: 2,
        difficulty: 'Medium',
        categories: ['Lunch', 'Healthy', 'Vegetarian', 'Quick'],
        ingredients: [
            '1 cup cooked quinoa',
            '1/2 cup black beans, drained',
            '1/2 cup corn kernels',
            '1/2 avocado, diced',
            '1/2 red bell pepper, diced',
            'Juice of 1 lime',
            '1 tbsp olive oil',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Combine quinoa, black beans, corn, bell pepper, and avocado in a bowl.',
            'Whisk together lime juice, olive oil, salt, and pepper.',
            'Pour dressing over salad and toss gently.',
            'Serve chilled or at room temperature.',
        ],
        nutritionalInfo: {
            calories: 350,
            protein: '12g',
            carbs: '55g',
            fat: '10g',
            fiber: '12g',
            vitamins: ['Vitamin C', 'Vitamin A', 'Iron', 'Folate'],
        },
    },
    {
        id: '9',
        title: 'Shrimp and Veggie Stir-Fry',
        description: 'Quick and flavorful stir-fry with shrimp, mixed vegetables, and garlic-ginger sauce.',
        image: 'https://th.bing.com/th/id/OIP.aQT_3R9dNra_7qjTI92qpAHaJ4?w=189&h=252&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3',
        prepTime: '10 min',
        cookTime: '10 min',
        servings: 2,
        difficulty: 'Medium',
        categories: ['Dinner', 'Seafood', 'Quick', 'Healthy'],
        ingredients: [
            '200g shrimp, peeled and deveined',
            '1 cup broccoli florets',
            '1 red bell pepper, sliced',
            '1 carrot, sliced',
            '2 cloves garlic, minced',
            '1 tsp ginger, minced',
            '2 tbsp soy sauce',
            '1 tbsp sesame oil',
        ],
        instructions: [
            'Heat sesame oil in a pan and sauté garlic and ginger.',
            'Add shrimp and cook until pink and opaque.',
            'Add vegetables and stir-fry for 5 minutes.',
            'Add soy sauce and stir well.',
            'Serve hot.',
        ],
        nutritionalInfo: {
            calories: 300,
            protein: '25g',
            carbs: '15g',
            fat: '15g',
            fiber: '4g',
            vitamins: ['Vitamin C', 'Vitamin A', 'Calcium', 'Iron'],
        },
    },
    {
        id: '10',
        title: 'Caprese Salad with Pesto',
        description: 'A fresh Italian salad with ripe tomatoes, mozzarella, basil, and drizzled with pesto and balsamic glaze.',
        image: 'https://th.bing.com/th/id/OIP.ss--sPUFn8ozUHmqPU7OjwHaLH?w=189&h=284&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3',
        prepTime: '10 min',
        cookTime: '0 min',
        servings: 2,
        difficulty: 'Easy',
        categories: ['Appetizer', 'Salad', 'Vegetarian', 'Quick'],
        ingredients: [
            '2 large tomatoes, sliced',
            '150g fresh mozzarella, sliced',
            'Fresh basil leaves',
            '2 tbsp pesto',
            '1 tbsp balsamic glaze',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Layer tomato and mozzarella slices alternately on a plate.',
            'Tuck fresh basil leaves between layers.',
            'Drizzle with pesto and balsamic glaze.',
            'Season with salt and pepper.',
            'Serve immediately.',
        ],
        nutritionalInfo: {
            calories: 280,
            protein: '12g',
            carbs: '8g',
            fat: '22g',
            fiber: '2g',
            vitamins: ['Vitamin C', 'Vitamin K', 'Calcium', 'Vitamin A'],
        },
    },
];

export const useRecipeStore = create<RecipeStore>((set, get) => ({
    recipes: mockRecipes,
    selectedRecipe: null,
    setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
    getRecipeById: (id) => get().recipes.find((r) => r.id === id),
}));
