import { Clock, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useRecipeStore } from '../stores/recipeStore';

type RecipeGridProps = {
  onRecipeClick: (recipeId: string) => void;
  onViewAllRecipes?: () => void;
};

export function RecipeGrid({ onRecipeClick, onViewAllRecipes }: RecipeGridProps) {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Featured Recipes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover my collection of healthy, nutrient-packed recipes designed to nourish your body 
            and delight your taste buds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.slice(0, 3).map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => onRecipeClick(recipe.id)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-gray-700">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 group-hover:text-green-600 transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.categories.slice(0, 3).map((category, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">{recipe.nutritionalInfo.calories} cal</span>
                    </div>
                    <button className="text-green-600 hover:text-green-700 transition-colors">
                      View Recipe →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {onViewAllRecipes && (
          <div className="mt-12 text-center">
            <button
              onClick={onViewAllRecipes}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all group"
            >
              <span>View All Recipes</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
