import { useState, useEffect } from 'react';
import { Star, TrendingUp, Award, MessageCircle, ChevronRight } from 'lucide-react';
import BookCard from '../components/BookCard';
import BookModal from '../components/BookModal';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  rating: number;
  available: boolean;
  description: string;
  fullDescription: string;
  publishedYear: number;
  pages: number;
  isbn: string;
}

interface Review {
  id: string;
  bookTitle: string;
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [trendingBooks, setTrendingBooks] = useState<Book[]>([]);
  const [bestReads, setBestReads] = useState<Book[]>([]);
  const [readerReviews, setReaderReviews] = useState<Review[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const books: Book[] = [
      {
        id: '1',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        cover: 'https://i.pinimg.com/736x/5d/04/ce/5d04ce93d50edd0f276faaf7aa372e04.jpg',
        genre: 'Fantasy',
        rating: 4.9,
        available: true,
        description: 'Epic fantasy adventure through Middle-earth.',
        fullDescription: 'The Lord of the Rings is an epic high fantasy novel...',
        publishedYear: 1954,
        pages: 1216,
        isbn: '978-0544003415'
      },
      {
        id: '2',
        title: 'Dune',
        author: 'Frank Herbert',
        cover: 'https://i.pinimg.com/736x/4c/2d/1a/4c2d1a0dbb17adcd8d7cefc9b2740ef3.jpg',
        genre: 'Science Fiction',
        rating: 4.8,
        available: true,
        description: 'A sweeping space opera set on the desert planet Arrakis.',
        fullDescription: 'Dune is a science fiction novel by Frank Herbert...',
        publishedYear: 1965,
        pages: 688,
        isbn: '978-0441172719'
      },
      {
        id: '3',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        cover: 'https://i.pinimg.com/736x/36/35/00/3635001cee01cf44993d9364bc5777da.jpg',
        genre: 'Romance',
        rating: 4.7,
        available: true,
        description: 'Classic romance novel about Elizabeth Bennet and Mr. Darcy.',
        fullDescription: 'Pride and Prejudice is a romantic novel by Jane Austen...',
        publishedYear: 1813,
        pages: 432,
        isbn: '978-0141439518'
      },
      {
        id: '4',
        title: '1984',
        author: 'George Orwell',
        cover: 'https://i.pinimg.com/736x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg',
        genre: 'Science Fiction',
        rating: 4.6,
        available: true,
        description: 'Dystopian novel about totalitarian surveillance and control.',
        fullDescription: '1984 is a dystopian social science fiction novel by George Orwell...',
        publishedYear: 1949,
        pages: 328,
        isbn: '978-0452284234'
      },
      {
        id: '5',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        cover: 'https://i.pinimg.com/736x/dd/28/97/dd2897a3b88442f0d060a357fd526a28.jpg',
        genre: 'Historical Fiction',
        rating: 4.5,
        available: true,
        description: 'American classic about the Jazz Age and the American Dream.',
        fullDescription: 'The Great Gatsby is a novel by F. Scott Fitzgerald...',
        publishedYear: 1925,
        pages: 180,
        isbn: '978-0743273565'
      },
      {
        id: '6',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        cover: 'https://i.pinimg.com/736x/4c/f2/c3/4cf2c3604cbc35485e5158f7158a06f3.jpg',
        genre: 'Historical Fiction',
        rating: 4.8,
        available: true,
        description: 'Powerful story about racial injustice in the American South.',
        fullDescription: 'To Kill a Mockingbird is a novel by Harper Lee...',
        publishedYear: 1960,
        pages: 376,
        isbn: '978-0061120084'
      }
    ];

    setFeaturedBooks(books.slice(0, 3));
    setTrendingBooks(books.slice(2, 5));
    setBestReads(books.slice(1, 4));

    setReaderReviews([
      {
        id: '1',
        bookTitle: 'The Lord of the Rings',
        reviewer: 'Sarah M.',
        rating: 5,
        comment: 'An absolute masterpiece! The world-building is incredible and the characters are unforgettable.',
        date: '2024-01-15'
      },
      {
        id: '2',
        bookTitle: 'Dune',
        reviewer: 'John D.',
        rating: 5,
        comment: 'Mind-bending science fiction at its finest.',
        date: '2024-01-12'
      },
      {
        id: '3',
        bookTitle: 'Pride and Prejudice',
        reviewer: 'Emma K.',
        rating: 4,
        comment: "Austen's wit and romance never get old.",
        date: '2024-01-10'
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50">
      <section
        className="relative overflow-hidden bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1749219466252-8eb6f6647fbc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1
            className="text-6xl font-bold mb-6 cursive-font"
            style={{ color: '#f5f5dc' }}
          >
            Welcome to BookHaven
          </h1>
          <p
            className="text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#fffaf0' }}
          >
            Discover enchanted worlds, timeless classics, and new adventures in our magical digital library
          </p>
          <div className="flex justify-center space-x-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-yellow-300">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#fdf5e6' }}>
                10,000+
              </h3>
              <p style={{ color: '#fffaf0' }}>Books Available</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-yellow-300">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#fdf5e6' }}>
                5,000+
              </h3>
              <p style={{ color: '#fffaf0' }}>Active Readers</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-yellow-300">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#fdf5e6' }}>
                50+
              </h3>
              <p style={{ color: '#fffaf0' }}>Genres</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4 cursive-font">Featured Collections</h2>
            <p className="text-amber-700 text-lg">Handpicked treasures from our mystical archives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} onBookClick={setSelectedBook} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-100 to-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <h2 className="text-4xl font-bold text-amber-900 cursive-font">Trending Now</h2>
            </div>
            <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium">
              <span>View All</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingBooks.map(book => (
              <BookCard key={book.id} book={book} onBookClick={setSelectedBook} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Reads */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4">
              <Award className="h-8 w-8 text-yellow-600" />
              <h2 className="text-4xl font-bold text-amber-900 cursive-font">Best Reads</h2>
            </div>
            <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium">
              <span>View All</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestReads.map(book => (
              <BookCard key={book.id} book={book} onBookClick={setSelectedBook} />
            ))}
          </div>
        </div>
      </section>

      {/* Reader Reviews */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
              <h2 className="text-4xl font-bold text-amber-900 cursive-font">Reader Reviews</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {readerReviews.map(review => (
              <div key={review.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-amber-900">{review.bookTitle}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                
                <p className="text-amber-800 text-sm mb-4 leading-relaxed">"{review.comment}"</p>
                
                <div className="flex items-center justify-between text-xs text-green-600">
                  <span className="font-medium">- {review.reviewer}</span>
                  <span>{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default Home;
 