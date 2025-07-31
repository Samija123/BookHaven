import { useState, useEffect } from 'react';
import { Calendar, BookOpen, Star } from 'lucide-react';

interface BorrowedBook {
  id: string;
  title: string;
  author: string;
  cover: string;
  dueDate: string;
  progress: number;
  status: 'reading' | 'completed' | 'overdue';
}

const MyBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBook[]>([]);

  useEffect(() => {
    setBorrowedBooks([
      {
        id: '1',
        title: 'Chronicles of the Mystic Realms',
        author: 'Elara Moonwhisper',
        cover: 'https://images.unsplash.com/photo-1685478237148-aaf613b2e8ad?auto=format&fit=crop&w=300&q=80',
        dueDate: '2024-02-15',
        progress: 78,
        status: 'reading',
      },
      {
        id: '2',
        title: 'The Grimoire of Shadows',
        author: 'Magnus Darkweaver',
        cover: 'https://images.unsplash.com/photo-1706932527793-aba6d47814af?auto=format&fit=crop&w=300&q=80',
        dueDate: '2024-02-20',
        progress: 100,
        status: 'completed',
      },
      {
        id: '3',
        title: 'Sacred Scrolls of Elijah',
        author: 'Prophet Aramis',
        cover: 'https://images.unsplash.com/photo-1606337740587-3aee763fec8b?auto=format&fit=crop&w=300&q=80',
        dueDate: '2024-01-25',
        progress: 45,
        status: 'reading',
      },
    ]);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reading':
        return 'bg-gradient-to-r from-[#4e5c38] to-[#6B8E23] text-white';
      case 'completed':
        return 'bg-gradient-to-r from-[#3B7A57] to-[#2f5236] text-white';
      case 'overdue':
        return 'bg-gradient-to-r from-[#9b4d46] to-[#7e3b34] text-white';
      default:
        return 'bg-[#c4b89c] text-[#3B3A30]';
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5dc] p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-[#c8bfae] via-[#a8c686] to-[#8B5E3C] rounded-lg p-6 shadow-lg border-2 border-[#8B5E3C]/60">
          <h1 className="text-4xl font-bold text-[#3B3A30] mb-2">My Mystical Collection</h1>
          <p className="text-[#5A5A3B]">Track your journey through enchanted realms</p>
        </div>
      </div>

      {/* Book Cards */}
      <div className="grid gap-6">
        {borrowedBooks.map((book) => (
          <div
            key={book.id}
            className="bg-[#ede4d0] hover:bg-[#e6d8b3] transition-colors duration-300 rounded-lg shadow-xl border border-[#c4b89c] p-6"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Cover */}
              <div className="relative shrink-0">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-32 h-44 object-cover rounded-lg shadow-md border-2 border-[#8B5E3C]/60"
                />
                <div className="absolute -top-2 -right-2 bg-[#8B5E3C] rounded-full p-2 shadow-md">
                  <Star className="h-4 w-4 text-[#f5f5dc]" />
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#3B3A30] mb-1">{book.title}</h3>
                    <p className="text-[#5A5A3B] text-lg">{book.author}</p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold mt-2 lg:mt-0 self-start lg:self-center ${getStatusColor(
                      book.status,
                    )}`}
                  >
                    {book.status === 'reading'
                      ? '📖 Reading'
                      : book.status === 'completed'
                      ? '✅ Completed'
                      : '⚠️ Overdue'}
                  </span>
                </div>

                {/* Meta */}
                <div className="space-y-4">
                  <div className="flex items-center text-[#5A5A3B]">
                    <Calendar className="h-5 w-5 mr-3 text-[#6B8E23]" />
                    <span>Return by: {new Date(book.dueDate).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center text-[#5A5A3B]">
                    <BookOpen className="h-5 w-5 mr-3 text-[#4e5c38]" />
                    <span>Progress: {book.progress}% complete</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="w-full bg-[#d6cfb9] rounded-full h-3 border border-[#c4b89c]">
                      <div
                        className="bg-gradient-to-r from-[#6B8E23] to-[#3B7A57] h-3 rounded-full transition-all duration-500"
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-[#7B6D4D] text-right">
                      {book.progress}% of mystical journey completed
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <button className="bg-gradient-to-r from-[#6B8E23] to-[#4e5c38] text-[#f5f5dc] px-6 py-3 rounded-lg shadow hover:to-[#3B7A57] transition-colors duration-300 font-semibold">
                    🔮 Continue Reading
                  </button>
                  <button className="bg-gradient-to-r from-[#8B5E3C] to-[#7e5a45] text-[#f5f5dc] px-6 py-3 rounded-lg shadow hover:to-[#5e4b2c] transition-colors duration-300 font-semibold">
                    📝 Add Review
                  </button>
                  <button className="bg-gradient-to-r from-[#a4a092] to-[#7d7a6c] text-[#f5f5dc] px-6 py-3 rounded-lg shadow hover:to-[#6d6a5e] transition-colors duration-300 font-semibold">
                    📤 Return Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
