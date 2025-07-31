import  { useState } from 'react';
import { Sparkles, Star } from 'lucide-react';

interface WelcomeProps {
  onEnter: () => void;
}

const Welcome = ({ onEnter }: WelcomeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f5f5dc'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-green-900/60 to-stone-800/70"></div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Star className="h-3 w-3 text-green-400 opacity-60" />
          </div>
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-8xl font-bold mb-8 cursive-font text-stone-100 drop-shadow-2xl">
          BookHaven
        </h1>
        
        <p className="text-2xl text-stone-200 mb-16 leading-relaxed font-light max-w-2xl mx-auto">
          Welcome to the enchanted realm where ancient wisdom meets boundless imagination
        </p>

        <div className="relative">
          <button
            onClick={onEnter}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="welcome-button text-2xl font-bold text-stone-100 cursor-pointer"
          >
            <span className="flex items-center space-x-4 relative z-10">
              <Sparkles className={`h-7 w-7 ${isHovered ? 'animate-spin' : ''}`} />
              <span>Enter BookHaven</span>
              <Sparkles className={`h-7 w-7 ${isHovered ? 'animate-spin' : ''}`} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 
 