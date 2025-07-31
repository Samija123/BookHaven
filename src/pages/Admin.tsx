import  { useState } from 'react'; 
import { Users, Book, BarChart3, Plus, Edit, Trash } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  booksRead: number;
  lastActive: string;
}

const Admin = () => {
  const { isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const [users] = useState<AdminUser[]>([
    { id: '1', name: 'Elara Moonwhisper', email: 'elara@bookhaven.com', role: 'reader', booksRead: 45, lastActive: '2024-01-10' },
    { id: '2', name: 'Magnus Darkweaver', email: 'magnus@bookhaven.com', role: 'reader', booksRead: 32, lastActive: '2024-01-09' },
    { id: '3', name: 'Luna Starweaver', email: 'luna@bookhaven.com', role: 'moderator', booksRead: 67, lastActive: '2024-01-11' }
  ]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-black p-6 text-center">
        <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-lg p-8 border-2 border-red-400">
          <h1 className="text-3xl font-bold text-red-400 mb-4">🚫 Access Forbidden</h1>
          <p className="text-gray-200">Only mystical administrators may enter this sacred realm.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-900 via-teal-600 to-green-500 rounded-lg p-6">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">🔮 Admin Sanctum</h1>
          <p className="text-beige-100">Command center for the mystical realm</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl border-2 border-gray-700">
        <div className="border-b border-yellow-400">
          <nav className="flex space-x-8 px-6">
            {['dashboard', 'users', 'books'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'border-yellow-400 text-yellow-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg border border-blue-400">
                <div className="flex items-center">
                  <Users className="h-10 w-10 text-blue-200" />
                  <div className="ml-4">
                    <div className="text-3xl font-bold text-white">347</div>
                    <div className="text-blue-200">Mystical Users</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-lg border border-green-400">
                <div className="flex items-center">
                  <Book className="h-10 w-10 text-green-200" />
                  <div className="ml-4">
                    <div className="text-3xl font-bold text-white">1,892</div>
                    <div className="text-green-200">Sacred Tomes</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-lg border border-purple-400">
                <div className="flex items-center">
                  <BarChart3 className="h-10 w-10 text-purple-200" />
                  <div className="ml-4">
                    <div className="text-3xl font-bold text-white">94%</div>
                    <div className="text-purple-200">Active Mystics</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-yellow-400">User Management</h2>
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 font-semibold flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Mystic
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-yellow-400">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-yellow-400">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-yellow-400">Role</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-yellow-400">Books Read</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-yellow-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {users.map(user => (
                      <tr key={user.id} className="hover:bg-gray-800 transition-colors duration-300">
                        <td className="px-6 py-4 text-white font-medium">{user.name}</td>
                        <td className="px-6 py-4 text-gray-300">{user.email}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.role === 'admin' ? 'bg-purple-600 text-white' :
                            user.role === 'moderator' ? 'bg-blue-600 text-white' :
                            'bg-green-600 text-white'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{user.booksRead}</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-400 hover:text-blue-300">
                              <Edit className="h-5 w-5" />
                            </button>
                            <button className="text-red-400 hover:text-red-300">
                              <Trash className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'books' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-yellow-400">Tome Management</h2>
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 font-semibold flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Sacred Text
                </button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
                <p className="text-gray-300">📚 Sacred tome management interface will manifest here...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
 