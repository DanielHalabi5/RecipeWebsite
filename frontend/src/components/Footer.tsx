import { Instagram, Mail, Heart, ChefHat, Youtube } from 'lucide-react';
import {FaTiktok} from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                                <ChefHat className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white">Nadya Alhadidi</h3>
                                <p className="text-sm text-gray-400">Healthy Living & Recipes</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Creating delicious, nutrient-rich recipes to help you live your healthiest life.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button
                                    onClick={() => document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    Recipes
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/dose_of_nadya/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@dose_of_nadya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    Youtube
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.tiktok.com/@dose_of_nadya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    Tiktok
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/dose_of_nadya/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/@dose_of_nadya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@dose_of_nadya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                            >
                                <FaTiktok className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@nadyaalhadidi.com"
                                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm mt-4">
                            Questions or collaboration inquiries? Feel free to reach out!
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                        Made with <Heart className="w-4 h-4 text-red-500" /> by Nadya Alhadidi © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
