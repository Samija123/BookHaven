import { useState } from 'react';
import { User, Settings, Award, Calendar, Star, Book } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();  
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    booksRead: 87,
    currentStreak: 23,
    totalHours: 342,
    favoriteGenre: 'Dark Fantasy'
  };

  const badges = [
    { name: 'Mystical Scholar', description: 'Read 100 fantasy books', earned: false, icon: '🔮' },
    { name: 'Night Reader', description: 'Read after midnight 25 times', earned: true, icon: '🌙' },
    { name: 'Ancient Wisdom Seeker', description: 'Completed 10 ancient texts', earned: true, icon: '📜' },
    { name: 'Spell Collector', description: 'Collected 50 magical tomes', earned: true, icon: '✨' },
    { name: 'Dragon Slayer', description: 'Read 5 epic fantasy series', earned: false, icon: '🐉' },
    { name: 'Crystal Gazer', description: 'Explored mystical divination books', earned: true, icon: '🔍' }
  ];

  const recentBooks = [
    {
      title: 'Chronicles of the Mystic Realms',
      cover: 'https://images.unsplash.com/photo-1685478237148-aaf613b2e8ad?...',
      rating: 5,
      status: 'completed'
    },
    {
      title: 'The Grimoire of Shadows',
      cover: 'https://images.unsplash.com/photo-1706932527793-aba6d47814af?...',
      rating: 4,
      status: 'reading'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5dc] p-6">
      <div className="bg-gradient-to-r from-[#e0c9a6] via-[#d6cfb9] to-[#c4b89c] rounded-lg shadow-2xl p-8 mb-6 border-2 border-[#8B5E3C]">
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="relative">
            <div className="h-24 w-24 bg-gradient-to-br from-[#6B8E23] to-[#3B7A57] rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
              <User className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#3B7A57] rounded-full p-2">
              <Award className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-[#3B3A30] mb-2">{user?.name}</h1>
            <p className="text-[#5A5A3B] mb-2">{user?.email}</p>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="bg-[#A0522D] text-white px-3 py-1 rounded-full text-sm font-semibold">
                ✨ {user?.role}
              </span>
              <span className="bg-[#6B8E23] text-white px-3 py-1 rounded-full text-sm font-semibold">
                🔮 Mystic Level 7
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f0e8d9] rounded-lg shadow-2xl border-2 border-[#A0522D]">
        <div className="border-b border-[#8B5E3C]">
          <nav className="flex space-x-8 px-6">
            {['overview', 'achievements', 'library', 'settings'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'border-[#8B5E3C] text-[#8B5E3C]'
                    : 'border-transparent text-[#7B6D4D] hover:text-[#5A4A2D]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#d6cfb9] p-6 rounded-lg text-center border border-[#8B5E3C]">
                  <Book className="h-8 w-8 text-[#6B8E23] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#3B3A30]">{stats.booksRead}</div>
                  <div className="text-sm text-[#5A5A3B]">Tomes Read</div>
                </div>
                <div className="bg-[#d6e8c0] p-6 rounded-lg text-center border border-[#6B8E23]">
                  <Calendar className="h-8 w-8 text-[#3B7A57] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#3B3A30]">{stats.currentStreak}</div>
                  <div className="text-sm text-[#3B7A57]">Day Streak</div>
                </div>
                <div className="bg-[#c4b89c] p-6 rounded-lg text-center border border-[#A0522D]">
                  <Star className="h-8 w-8 text-[#8B5E3C] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#3B3A30]">{stats.totalHours}</div>
                  <div className="text-sm text-[#8B5E3C]">Hours Spent</div>
                </div>
                <div className="bg-[#e6d8b3] p-6 rounded-lg text-center border border-[#8B5E3C]">
                  <Award className="h-8 w-8 text-[#A0522D] mx-auto mb-2" />
                  <div className="text-lg font-bold text-[#3B3A30]">{stats.favoriteGenre}</div>
                  <div className="text-sm text-[#7B6D4D]">Favorite Genre</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#6B8E23] mb-4 flex items-center">
                  <Book className="h-6 w-6 mr-2" />
                  Recent Reading
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recentBooks.map((book, index) => (
                    <div key={index} className="flex items-center p-4 bg-[#efe8d1] rounded-lg border border-[#a89f91]">
                      <img src={book.cover} alt={book.title} className="w-16 h-20 object-cover rounded mr-4" />
                      <div className="flex-1">
                        <h4 className="font-medium text-[#3B3A30] mb-1">{book.title}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < book.rating ? 'text-[#FFD700]' : 'text-gray-400'}`} />
                            ))}
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            book.status === 'completed' ? 'bg-green-600 text-white' : 'bg-[#A0522D] text-white'
                          }`}>
                            {book.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div>
              <h3 className="text-xl font-semibold text-[#6B8E23] mb-6 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Mystical Achievements
              </h3>
              <div className="grid gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                    badge.earned 
                      ? 'bg-[#e6d8b3] border-[#6B8E23] shadow-lg shadow-[#6B8E23]/20' 
                      : 'bg-[#ede4d0] border-[#ccc5b4]'
                  }`}>
                    <div className="flex items-center">
                      <div className={`text-4xl mr-4 ${badge.earned ? 'filter-none' : 'grayscale opacity-50'}`}>
                        {badge.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold text-lg ${badge.earned ? 'text-[#3B7A57]' : 'text-[#88816f]'}`}>
                          {badge.name}
                        </h4>
                        <p className={`text-sm ${badge.earned ? 'text-[#5A5A3B]' : 'text-[#a89f91]'}`}>
                          {badge.description}
                        </p>
                      </div>
                      {badge.earned && (
                        <div className="bg-[#6B8E23] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Earned ✨
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#6B8E23] mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#efe8d1] rounded-lg">
                  <span className="text-[#3B3A30]">Mystical notifications</span>
                  <input type="checkbox" className="rounded bg-[#c4b89c] border-[#8B5E3C]" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-[#efe8d1] rounded-lg">
                  <span className="text-[#3B3A30]">Dark realm mode</span>
                  <input type="checkbox" className="rounded bg-[#c4b89c] border-[#8B5E3C]" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-[#efe8d1] rounded-lg">
                  <span className="text-[#3B3A30]">Auto-bookmark progress</span>
                  <input type="checkbox" className="rounded bg-[#c4b89c] border-[#8B5E3C]" defaultChecked />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
