import { ChefHat } from 'lucide-react';

type HeaderProps = {
    onNavigateHome: () => void;
};

export function Header({ onNavigateHome }: HeaderProps) {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If section doesn't exist, navigate home first
            onNavigateHome();
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <button
                        onClick={onNavigateHome}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                            <ChefHat className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                            <h1 className="text-gray-900">Nadya Alhadidi, PharmD</h1>
                            <p className="text-xs text-gray-600">Not your average pharmacist</p>
                        </div>
                    </button>

                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('recipes')}
                            className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                            Recipes
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                            About
                        </button>
                        <a
                            href="https://www.instagram.com/dose_of_nadya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all"
                        >
                            Follow on Instagram
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
