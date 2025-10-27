import { GraduationCap, Camera, Heart, Sparkles } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* div with image --> remove col 1 and put col 2*/}
                <div className="grid lg:grid-cols-1 gap-12 items-center">

                    {/* <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl opacity-20 blur-2xl"></div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80"
                alt="Nadya Alhadidi"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}

                    <div className="space-y-6 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-green-200">
                            <Sparkles className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-700">About Me</span>
                        </div>

                        <h2 className="text-gray-900">
                            Hi, I'm Nadya Alhadidi
                        </h2>

                        <p className="text-gray-600 text-lg">
                            I'm a pharmacist, former model, and passionate content creator dedicated to sharing
                            healthy, nutrient-rich recipes that make wellness both delicious and accessible.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="mb-1">Pharmacist Background</h3>
                                    <p className="text-gray-600">
                                        My pharmaceutical expertise helps me create recipes with science-backed nutritional benefits.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Camera className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="mb-1">Former Model</h3>
                                    <p className="text-gray-600">
                                        My modeling experience taught me the importance of balanced nutrition and self-care.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="mb-1">Wellness Advocate</h3>
                                    <p className="text-gray-600">
                                        I believe healthy eating should be enjoyable, sustainable, and filled with flavor and nutrients.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-col items-center justify-center">
                            <p className="text-gray-700 mb-4">
                                Follow my journey on Instagram where I share daily recipes, wellness tips,
                                and inspiration for living your healthiest life.
                            </p>
                            <a
                                href="https://www.instagram.com/dose_of_nadya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center  gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all"
                            >
                                <Camera className="w-5 h-5" />
                                Follow on Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
