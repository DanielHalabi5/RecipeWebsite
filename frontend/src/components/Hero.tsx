import { Sparkles, Heart, Leaf } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200">
                            <Sparkles className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-700">Pharmacist | Model | Content Creator</span>
                        </div>

                        <h1 className="text-gray-900">
                            Nourish Your Body with
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                                Healthy & Delicious Recipes
                            </span>
                        </h1>

                        <p className="text-gray-600 text-lg max-w-xl">
                            Hi, I'm Nadya! As a pharmacist and wellness enthusiast, I create nutrient-rich recipes
                            that taste amazing and fuel your body with vitamins and essential nutrients.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all"
                            >
                                Explore Recipes
                            </button>
                            <a
                                href="https://www.instagram.com/dose_of_nadya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-green-500 hover:text-green-600 transition-all"
                            >
                                Follow on Instagram
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Heart className="w-6 h-6 text-green-600" />
                                </div>
                                <p className="text-sm text-gray-600">Heart Healthy</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Leaf className="w-6 h-6 text-emerald-600" />
                                </div>
                                <p className="text-sm text-gray-600">Plant Based</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <Sparkles className="w-6 h-6 text-teal-600" />
                                </div>
                                <p className="text-sm text-gray-600">Vitamin Rich</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl opacity-20 blur-2xl"></div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
                                alt="Healthy food"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
