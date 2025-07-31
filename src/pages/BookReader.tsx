import  { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bookmark, Settings, Play, Pause, Sparkles } from 'lucide-react';

interface BookContent {
  id: string;
  title: string;
  author: string;
  content: string;
  currentPage: number;
  totalPages: number;
  isAudio: boolean;
}

const BookReader = () => {
  const { id } = useParams();
  const [book, setBook] = useState<BookContent | null>(null);
  const [fontSize, setFontSize] = useState(18);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setBook({
      id: id || '1',
      title: 'Chronicles of the Mystic Realms',
      author: 'Elara Moonwhisper',
      content: `In the twilight hours when reality grows thin and magic seeps through the cracks of our world, there exists a realm where ancient spirits dance with moonbeams and forgotten prophecies whisper through the ethereal mists.

      The chronicles speak of a time when mortals could traverse the mystical boundaries, guided by crystalline portals that hummed with otherworldly energy. These gateways, scattered across hidden groves and sacred mountains, pulsed with the heartbeat of the cosmos itself.

      Luna, a young seeker of forbidden knowledge, discovered that her grandmother's antique mirror was more than mere glass and silver. As she traced the intricate runes carved along its golden frame, the surface began to ripple like disturbed water, revealing glimpses of realms beyond imagination...`,
      currentPage: 47,
      totalPages: 342,
      isAudio: false
    });
  }, [id]);

  if (!book) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-yellow-400 text-xl">🔮 Summoning mystical text...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-gradient-to-r from-purple-900 via-teal-600 to-green-500 shadow-2xl border-b-2 border-yellow-400">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-yellow-400 transition-colors duration-300">
              <ArrowLeft className="h-7 w-7" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-yellow-400">{book.title}</h1>
              <p className="text-gray-200 text-sm">{book.author}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-200 bg-black bg-opacity-30 px-3 py-1 rounded-full">
              📖 Page {book.currentPage} of {book.totalPages}
            </span>
            <button className="text-white hover:text-yellow-400 transition-colors duration-300">
              <Bookmark className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-yellow-400 transition-colors duration-300">
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        {book.isAudio ? (
          <div className="text-center">
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl p-10 mb-8 border-2 border-yellow-400">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center justify-center">
                <Sparkles className="h-8 w-8 mr-3" />
                Mystical Audio Experience
                <Sparkles className="h-8 w-8 ml-3" />
              </h2>
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-2xl"
                >
                  {isPlaying ? <Pause className="h-10 w-10" /> : <Play className="h-10 w-10" />}
                </button>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 border border-yellow-400">
                <div className="bg-gradient-to-r from-yellow-400 to-green-400 h-3 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-300 mt-3">
                <span>🕐 23:45</span>
                <span>🕑 1:07:32</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl p-10 border-2 border-gray-700">
            <div className="prose max-w-none text-beige-100 leading-relaxed" style={{ fontSize: `${fontSize}px` }}>
              {book.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 first-letter:text-4xl first-letter:font-bold first-letter:text-yellow-400 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-8 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-600">
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 font-semibold transition-all duration-300">
            ⬅️ Previous Chapter
          </button>
          
          <div className="flex items-center space-x-6 bg-gray-800 px-6 py-3 rounded-lg border border-gray-600">
            <button
              onClick={() => setFontSize(Math.max(14, fontSize - 2))}
              className="text-yellow-400 hover:text-yellow-300 font-bold text-lg"
            >
              A-
            </button>
            <span className="text-gray-300 font-medium">{fontSize}px</span>
            <button
              onClick={() => setFontSize(Math.min(26, fontSize + 2))}
              className="text-yellow-400 hover:text-yellow-300 font-bold text-lg"
            >
              A+
            </button>
          </div>
          
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 font-semibold transition-all duration-300">
            Next Chapter ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookReader;
 