import { Clock, Users, ChefHat, ArrowLeft, Flame, Activity } from 'lucide-react';
import type { Recipe } from '../stores/recipeStore';


type RecipeDetailProps = {
  recipe: Recipe;
  onBack: () => void;
};

export function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  return (
    <div className="pt-16 pb-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Recipes
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative aspect-[21/9] overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="mb-2">{recipe.title}</h1>
              <p className="text-white/90 max-w-2xl">
                {recipe.description}
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-gray-900">Prep Time</span>
                </div>
                <p className="text-gray-600">{recipe.prepTime}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <ChefHat className="w-5 h-5 text-green-600" />
                  <span className="text-gray-900">Cook Time</span>
                </div>
                <p className="text-gray-600">{recipe.cookTime}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-gray-900">Servings</span>
                </div>
                <p className="text-gray-600">{recipe.servings}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Activity className="w-5 h-5 text-green-600" />
                  <span className="text-gray-900">Difficulty</span>
                </div>
                <p className="text-gray-600">{recipe.difficulty}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {recipe.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600">📝</span>
                    </div>
                    Ingredients
                  </h3>
                  <div className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <input
                          type="checkbox"
                          className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <span className="text-gray-700">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <ChefHat className="w-5 h-5 text-green-600" />
                    </div>
                    Instructions
                  </h3>
                  <div className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 pt-1">{instruction}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="sticky top-24 space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <h3 className="mb-4 flex items-center gap-2">
                      <Flame className="w-5 h-5 text-green-600" />
                      Nutritional Info
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Calories</span>
                        <span className="text-gray-900">{recipe.nutritionalInfo.calories}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Protein</span>
                        <span className="text-gray-900">{recipe.nutritionalInfo.protein}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Carbs</span>
                        <span className="text-gray-900">{recipe.nutritionalInfo.carbs}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Fat</span>
                        <span className="text-gray-900">{recipe.nutritionalInfo.fat}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Fiber</span>
                        <span className="text-gray-900">{recipe.nutritionalInfo.fiber}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="mb-4">Rich in Vitamins</h3>
                    <div className="flex flex-wrap gap-2">
                      {recipe.nutritionalInfo.vitamins.map((vitamin, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-600 text-white rounded-full text-sm"
                        >
                          {vitamin}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                    <p className="text-sm text-amber-900">
                      💡 <strong>Tip:</strong> Meal prep this recipe on Sunday for easy healthy meals throughout the week!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
