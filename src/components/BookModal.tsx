import  { X, Star, Heart, BookOpen, Calendar, FileText, User } from 'lucide-react'; 
import { useState } from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  available: boolean;
  genre: string;
  description: string;
  fullDescription: string;
  publishedYear: number;
  pages: number;
  isbn: string;
}

interface BookModalProps {
  book: Book;
  onClose: () => void;
}

const BookModal = ({ book, onClose }: BookModalProps) => {
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState('');
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const handleSubmitReview = () => {
    console.log('Review submitted:', { rating: userRating, review });
    setReview('');
    setUserRating(0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="book-modal max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border-2 border-yellow-400">
        <div className="sticky top-0 bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 p-4 flex justify-between items-center border-b border-yellow-600">
          <h2 className="text-2xl font-bold text-green-800 cursive-font">Book Details</h2>
          <button
            onClick={onClose}
            className="text-green-800 hover:text-green-900 transition-colors p-2 hover:bg-yellow-300 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Book Cover */}
            <div className="lg:col-span-1">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-auto rounded-xl shadow-2xl border-2 border-yellow-300"
              />
              <div className="mt-6 space-y-3">
                <button
                  onClick={handleAddToWishlist}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isInWishlist
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                      : 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white hover:from-yellow-600 hover:to-amber-600'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
                  <span>{isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                </button>
                
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Add to Collection</span>
                </button>
              </div>
            </div>

            {/* Book Information */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-amber-900 mb-2">{book.title}</h1>
                <div className="flex items-center space-x-4 text-green-700 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{book.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{book.publishedYear}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FileText className="h-4 w-4" />
                    <span>{book.pages} pages</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="text-lg font-semibold text-amber-800">{book.rating}</span>
                  </div>
                  <span className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {book.genre}
                  </span>
                  <span className="text-sm text-gray-600">ISBN: {book.isbn}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Description</h3>
                <p className="text-amber-800 leading-relaxed">{book.fullDescription}</p>
              </div>

              {/* Rating Section */}
              <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl border border-yellow-300">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Rate this Book</h3>
                <div className="flex items-center space-x-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setUserRating(star)}
                      className="transition-colors"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= userRating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-amber-800 font-medium">
                    {userRating > 0 ? `${userRating}/5` : 'Click to rate'}
                  </span>
                </div>
                
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Write your review..."
                  className="w-full p-4 border-2 border-yellow-300 rounded-lg focus:border-green-500 focus:outline-none resize-none"
                  rows={4}
                />
                
                <button
                  onClick={handleSubmitReview}
                  disabled={userRating === 0}
                  className="mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
 