import  { Star, Eye, Info, MessageCircle } from 'lucide-react'; 
import { Link } from 'react-router-dom';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  available: boolean;
  genre: string;
  description: string;
  publishedYear?: number;
}

interface BookCardProps {
  book: Book;
  onBookClick?: (book: Book) => void;
}

const BookCard = ({ book, onBookClick }: BookCardProps) => {
  return (
    <div className="mystical-card rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 border-2 border-yellow-200 hover:border-yellow-400 transform hover:-translate-y-1">
      <div className="relative group">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-amber-900 text-lg mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-green-700 text-sm mb-1">{book.author}</p>
        {book.publishedYear && (
          <p className="text-amber-600 text-xs mb-3">Published: {book.publishedYear}</p>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm text-amber-800 font-medium">{book.rating}</span>
          </div>
          <span className="text-xs bg-gradient-to-r from-green-500 to-yellow-500 text-white px-3 py-1 rounded-full font-medium">
            {book.genre}
          </span>
        </div>
        
        <p className="text-amber-700 text-xs mb-4 line-clamp-2">{book.description}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-3">
          <Link
            to={`/book/${book.id}`}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg"
          >
            <Eye className="h-4 w-4" />
          </Link>
          
          <button 
            onClick={() => onBookClick && onBookClick(book)}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-2 rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center shadow-lg"
          >
            <Info className="h-4 w-4" />
          </button>
          
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-lg text-sm font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center shadow-lg">
            <MessageCircle className="h-4 w-4" />
          </button>
        </div>
        
        <button
          className={`w-full py-3 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg ${
            book.available
              ? 'bg-gradient-to-r from-green-500 to-yellow-500 text-white hover:from-green-600 hover:to-yellow-600 transform hover:scale-105'
              : 'bg-gray-400 text-gray-600 cursor-not-allowed'
          }`}
          disabled={!book.available}
        >
          {book.available ? 'Add to Collection' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
 