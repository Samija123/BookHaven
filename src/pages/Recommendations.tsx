import  { useState, useEffect } from 'react'; 
import { Star, ThumbsUp, Sparkles } from 'lucide-react';
import BookCard from '../components/BookCard';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  rating: number;
  available: boolean;
  description: string;
  reason: string;
}

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState<Book[]>([]);

  useEffect(() => {
    setRecommendations([
      {
        id: '9',
        title: 'Secrets of the Sacred Texts',
        author: 'Oracle Celestine',
        cover: 'https://images.unsplash.com/photo-1728484704697-ac6ab84b2b48?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw5fHxmYW50YXN5JTIwYm9vayUyMGNvdmVycyUyMG1hZ2ljJTIwbXlzdGljYWwlMjBhbmNpZW50JTIwYm9va3N8ZW58MHx8fHwxNzUxMDYwNzQxfDA&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Ancient Wisdom',
        rating: 4.9,
        available: true,
        description: 'Uncover the hidden mysteries within sacred ancient texts.',
        reason: 'Because you loved Chronicles of the Mystic Realms'
      },
      {
        id: '10',
        title: 'The Alchemist\'s Grimoire',
        author: 'Master Aurelius',
        cover: 'https://images.unsplash.com/photo-1559466851-47d3cc0872ba?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxMHx8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Occult',
        rating: 4.7,
        available: true,
        description: 'Transform base metals into gold and souls into enlightenment.',
        reason: 'Popular among mystical fiction readers'
      },
      {
        id: '11',
        title: 'Cozy Witch Chronicles',
        author: 'Harmony Willowbrook',
        cover: 'https://images.unsplash.com/photo-1699369399102-477343a7bd0a?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxMXx8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Urban Fantasy',
        rating: 4.5,
        available: true,
        description: 'Magical adventures in a cozy cottage filled with herbal remedies.',
        reason: 'Recommended for fantasy lovers'
      },
      {
        id: '12',
        title: 'The Sacred Pendant',
        author: 'Mystic Ashwyn',
        cover: 'https://images.unsplash.com/photo-1720360110205-c96e6d48ef94?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxMnx8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Magical Realism',
        rating: 4.6,
        available: true,
        description: 'A mystical pendant holds the key to ancient prophecies.',
        reason: 'Trending in your favorite genres'
      },
      {
        id: '13',
        title: 'Nocturnal Shadows',
        author: 'Erebus Nightfall',
        cover: 'https://images.unsplash.com/photo-1677104164770-24e033d20211?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxM3x8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Dark Fantasy',
        rating: 4.4,
        available: true,
        description: 'Creatures of the night emerge from the shadows.',
        reason: 'Perfect for dark fantasy enthusiasts'
      },
      {
        id: '14',
        title: 'Crystal Visions',
        author: 'Seraphina Moonstone',
        cover: 'https://images.unsplash.com/photo-1666705520192-418fb959244e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxNHx8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Mystical Fiction',
        rating: 4.8,
        available: true,
        description: 'See the future through enchanted crystal spheres.',
        reason: 'Highly rated by users like you'
      },
      {
        id: '15',
        title: 'Elven Prophecies',
        author: 'Thranduil Starlight',
        cover: 'https://images.unsplash.com/photo-1681697655097-c4491125d431?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxNXx8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Epic Fantasy',
        rating: 4.7,
        available: true,
        description: 'Ancient elven prophecies foretell the fate of all realms.',
        reason: 'AI recommendation based on your reading'
      },
      {
        id: '16',
        title: 'The Enchanted Library',
        author: 'Bibliotheca Magnus',
        cover: 'https://images.unsplash.com/photo-1628175806356-53c2b2734ca4?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxNnx8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Fantasy',
        rating: 4.9,
        available: true,
        description: 'A magical library where books come alive and stories unfold.',
        reason: 'Perfect match for your interests'
      },
      {
        id: '17',
        title: 'Butterfly Spells',
        author: 'Flora Wingheart',
        cover: 'https://images.unsplash.com/photo-1718903778711-9f343d188e70?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxN3x8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Nature Magic',
        rating: 4.5,
        available: true,
        description: 'Transform your life with the delicate magic of butterfly spells.',
        reason: 'New release recommendation'
      },
      {
        id: '18',
        title: 'Necromancer\'s Tome',
        author: 'Mortis Shadowbane',
        cover: 'https://images.unsplash.com/photo-1699841557106-bc9e8c80819c?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxOHx8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Dark Fantasy',
        rating: 4.3,
        available: true,
        description: 'Master the forbidden arts of communicating with the dead.',
        reason: 'For advanced dark magic practitioners'
      },
      {
        id: '19',
        title: 'Divine Illuminations',
        author: 'Saint Aurelius',
        cover: 'https://images.unsplash.com/photo-1662483305267-954fed6e93f9?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxOXx8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Ancient Wisdom',
        rating: 4.8,
        available: true,
        description: 'Divine revelations and sacred illuminated manuscripts.',
        reason: 'Spiritual seekers favorite'
      },
      {
        id: '20',
        title: 'Forest Whispers',
        author: 'Willow Greenleaf',
        cover: 'https://images.unsplash.com/photo-1718903540435-82dc0fb4138d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyMHx8ZmFudGFzeSUyMGJvb2slMjBjb3ZlcnMlMjBtYWdpYyUyMG15c3RpY2FsJTIwYW5jaWVudCUyMGJvb2tzfGVufDB8fHx8MTc1MTA2MDc0MXww&ixlib=rb-4.1.0&fit=fillmax&h=400&w=300',
        genre: 'Nature Magic',
        rating: 4.6,
        available: true,
        description: 'Listen to the ancient wisdom whispered by the forest spirits.',
        reason: 'Nature lovers recommendation'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-900 via-teal-600 to-green-500 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400 mr-2" />
            <h1 className="text-4xl font-bold text-yellow-400">Mystical Recommendations</h1>
            <Sparkles className="h-8 w-8 text-yellow-400 ml-2" />
          </div>
          <p className="text-beige-100 text-lg">
            Curated by ancient wisdom and powered by mystical algorithms
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recommendations.map(book => (
          <div key={book.id} className="relative">
            <div className="absolute -top-2 -left-2 bg-gradient-to-r from-yellow-400 to-green-400 text-black px-3 py-1 rounded-full text-xs font-bold z-10">
              <ThumbsUp className="h-3 w-3 inline mr-1" />
              Recommended
            </div>
            <BookCard book={book} />
            <div className="mt-2 text-center">
              <span className="text-xs text-gray-400 italic">{book.reason}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
 