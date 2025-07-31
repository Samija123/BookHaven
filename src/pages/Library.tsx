import { useState, useEffect } from 'react'; 
import { Search, Filter } from 'lucide-react';
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

const Library = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const genres = [
    'all', 'Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Thriller', 'Horror', 
    'Historical Fiction', 'Biography', 'Non-Fiction', 'Young Adult', 'Children', 
    'Poetry', 'Drama', 'Adventure', 'Crime', 'Philosophy', 'Religion', 'Self-Help',
    'Travel', 'Cookbook', 'Art', 'Music', 'Sports', 'Politics', 'Science', 'Health',
    'Business', 'Technology', 'Education', 'Psychology', 'Sociology', 'History'
  ];

  useEffect(() => {
    setBooks([
      {
        id: '1',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        cover: 'https://i.pinimg.com/736x/5d/04/ce/5d04ce93d50edd0f276faaf7aa372e04.jpg',
        genre: 'Fantasy',
        rating: 4.9,
        available: true,
        description: 'Epic fantasy adventure through Middle-earth.',
        fullDescription: 'The Lord of the Rings is an epic high fantasy novel by J.R.R. Tolkien...',
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
      },
      {
        id: '7',
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J.K. Rowling',
        cover: 'https://i.pinimg.com/736x/60/86/09/608609cb613363a4bec0992fd87c1f9f.jpg',
        genre: 'Fantasy',
        rating: 4.9,
        available: true,
        description: 'Magical adventure of a young wizard at Hogwarts.',
        fullDescription: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel by J.K. Rowling...',
        publishedYear: 1997,
        pages: 223,
        isbn: '978-0439708180'
      },
      {
        id: '8',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        cover: 'https://i.pinimg.com/736x/e4/fe/01/e4fe01aecdf48fdc5822caf5d17cd88a.jpg',
        genre: 'Young Adult',
        rating: 4.3,
        available: true,
        description: 'Coming-of-age story of Holden Caulfield.',
        fullDescription: 'The Catcher in the Rye is a novel by J.D. Salinger...',
        publishedYear: 1951,
        pages: 277,
        isbn: '978-0316769174'
      }
    ]);
  }, []);

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50 p-6">
      <div className="mb-8">
        <div className="bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-500 rounded-xl p-8 mb-6 shadow-2xl border border-yellow-600">
          <h1 className="text-5xl font-bold text-green-800 mb-3 cursive-font">Digital Library</h1>
          <p className="text-green-700 text-lg">Explore our complete collection of books and digital resources</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 h-5 w-5" />
            <input
              type="text"
              placeholder="Search books and authors..."
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-yellow-400 rounded-lg text-amber-900 focus:border-green-500 focus:outline-none shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 h-5 w-5" />
            <select
              className="pl-10 pr-8 py-3 bg-white border-2 border-yellow-400 rounded-lg text-amber-900 focus:border-green-500 focus:outline-none shadow-lg"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map(genre => (
                <option key={genre} value={genre} className="bg-white">
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} onBookClick={setSelectedBook} />
        ))}
      </div>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default Library;
