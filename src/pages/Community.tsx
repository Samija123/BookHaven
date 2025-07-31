import { useState } from 'react';
import { MessageCircle, Users, Star } from 'lucide-react';

interface Discussion {
  id: string;
  title: string;
  book: string;
  author: string;
  participants: number;
  lastActivity: string;
  messages: number;
}

const Community = () => {
  const [discussions] = useState<Discussion[]>([
    {
      id: '1',
      title: "The mystical symbolism in Elara's realm",
      book: 'Chronicles of the Mystic Realms',
      author: 'Elara Moonwhisper',
      participants: 24,
      lastActivity: '1 hour ago',
      messages: 87,
    },
    {
      id: '2',
      title: 'Dark magic ethics discussion',
      book: 'The Grimoire of Shadows',
      author: 'Magnus Darkweaver',
      participants: 15,
      lastActivity: '3 hours ago',
      messages: 43,
    },
    {
      id: '3',
      title: 'Ancient prophecies coming true?',
      book: 'Sacred Scrolls of Elijah',
      author: 'Prophet Aramis',
      participants: 31,
      lastActivity: '5 hours ago',
      messages: 156,
    },
  ]);

  return (
    <div className="min-h-screen bg-[#f5f5dc] p-6">
      <div className="mb-8">
        <div className="bg-gradient-to-r from-[#d2c9a5] via-[#b3a888] to-[#9f947a] rounded-lg p-6 shadow-md">
          <h1 className="text-4xl font-bold text-[#3b291c] mb-2">Mystical Community</h1>
          <p className="text-[#3f3a34]">Connect with fellow seekers of ancient wisdom</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Discussions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-xl border border-[#c9b99a]">
            <div className="p-6 border-b border-[#d6cdb3] bg-[#f1ecdd]">
              <h2 className="text-2xl font-semibold text-[#5c452b] flex items-center">
                <MessageCircle className="h-6 w-6 mr-2" />
                Active Discussions
              </h2>
            </div>

            <div className="divide-y divide-[#e2d9c0]">
              {discussions.map((discussion) => (
                <div
                  key={discussion.id}
                  className="p-6 hover:bg-[#f7f3e6] cursor-pointer transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-[#4e3a28] text-lg group-hover:text-[#7b603a] transition-colors duration-300">
                      {discussion.title}
                    </h3>
                    <span className="text-xs text-[#7d725f] bg-[#ece4cc] px-2 py-1 rounded">
                      {discussion.lastActivity}
                    </span>
                  </div>

                  <p className="text-sm text-[#4b3e2f] mb-4">
                    📚 Discussing: <span className="font-medium text-[#69845f]">{discussion.book}</span> by {discussion.author}
                  </p>

                  <div className="flex items-center text-sm text-[#7d725f] space-x-6">
                    <div className="flex items-center bg-[#f1ebd4] px-3 py-1 rounded-full">
                      <Users className="h-4 w-4 mr-2 text-[#668855]" />
                      {discussion.participants} mystics
                    </div>
                    <div className="flex items-center bg-[#f1ebd4] px-3 py-1 rounded-full">
                      <MessageCircle className="h-4 w-4 mr-2 text-[#5a7c6f]" />
                      {discussion.messages} messages
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Column */}
        <div className="space-y-6">
          {/* Mystical Circles */}
          <div className="bg-white rounded-lg shadow-xl p-6 border border-[#d1c6ad]">
            <h3 className="text-xl font-semibold text-[#5c452b] mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2" />
              Mystical Circles
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-[#ccb68a] to-[#b19a72] rounded-lg border border-[#8d7a5e]">
                <h4 className="font-semibold text-[#3f2e1c] mb-1">🔮 Crystal Gazers</h4>
                <p className="text-sm text-[#5f4b31] mb-1">Masters of divination arts</p>
                <p className="text-xs text-[#786b57]">47 members</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-[#a9c39f] to-[#88a379] rounded-lg border border-[#6d8c56]">
                <h4 className="font-semibold text-[#2f3d2c] mb-1">🌿 Nature Witches</h4>
                <p className="text-sm text-[#4d6142] mb-1">Earth magic practitioners</p>
                <p className="text-xs text-[#5f725d]">32 members</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-[#c4ccc5] to-[#aab1aa] rounded-lg border border-[#8a968a]">
                <h4 className="font-semibold text-[#2e312f] mb-1">📜 Ancient Scholars</h4>
                <p className="text-sm text-[#4f5a52] mb-1">Keepers of old wisdom</p>
                <p className="text-xs text-[#707c70]">68 members</p>
              </div>
            </div>
          </div>

          {/* Mystical Reviews */}
          <div className="bg-white rounded-lg shadow-xl p-6 border border-[#d1c6ad]">
            <h3 className="text-xl font-semibold text-[#5c452b] mb-4 flex items-center">
              <Star className="h-6 w-6 mr-2" />
              Mystical Reviews
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-[#bfa87f] pl-4 bg-[#f5f1e1] p-3 rounded-r-lg">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#bfa87f] fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#4e3a28] mb-2">"This tome revealed secrets I never imagined..."</p>
                <p className="text-xs text-[#6a5a47]">- Morgana the Wise ✨</p>
              </div>
              <div className="border-l-4 border-[#a8c686] pl-4 bg-[#f5f1e1] p-3 rounded-r-lg">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? 'text-[#a8c686] fill-current' : 'text-[#d9d2c3]'}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-[#4e3a28] mb-2">"Dark magic at its finest, proceed with caution..."</p>
                <p className="text-xs text-[#6a5a47]">- Shadow Walker 🌙</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
