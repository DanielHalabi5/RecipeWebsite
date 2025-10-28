import { useState } from 'react';
import { useRecipeStore } from './stores/recipeStore';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RecipeGrid } from './components/RecipeGrid';
import { About } from './components/About';
import { RecipeDetail } from './components/RecipeDetail';
import { Footer } from './components/Footer';
import { AllRecipes } from './components/AllRecipes';
import { Analytics } from '@vercel/analytics/react';



export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'recipe-detail' | 'all-recipes'>('home');
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);
  const setSelectedRecipe = useRecipeStore((state) => state.setSelectedRecipe);

  const handleRecipeClick = (recipeId: string) => {
    const recipe = useRecipeStore.getState().getRecipeById(recipeId);
    if (recipe) {
      setSelectedRecipe(recipe);
      setCurrentView('recipe-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToHome = () => {
    setSelectedRecipe(null);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllRecipes = () => {
    setCurrentView('all-recipes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateHome={handleBackToHome} />

      {currentView === 'home' ? (
        <>
          <Hero />
          <RecipeGrid
            onRecipeClick={handleRecipeClick}
            onViewAllRecipes={handleViewAllRecipes}
          />
          <About />
        </>
      ) : currentView === 'all-recipes' ? (
        <AllRecipes onRecipeClick={handleRecipeClick} />
      ) : (
        selectedRecipe && (
          <RecipeDetail recipe={selectedRecipe} onBack={handleBackToHome} />
        )
      )}

      <Footer />
      <Analytics />
    </div>
  );
}
