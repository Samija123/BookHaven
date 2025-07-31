import  { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Home, Star, Users, User, Settings, Menu, X, Mail, Phone, MapPin, FileText, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { isAdmin } = useAuth();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Library', href: '/library', icon: Book },
    { name: 'My Books', href: '/my-books', icon: Star },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Profile', href: '/profile', icon: User },
    ...(isAdmin ? [{ name: 'Admin', href: '/admin', icon: Settings }] : [])
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-center p-4 bg-stone-200 shadow-lg relative">
          <Link to="/" className="cursive-font text-3xl font-bold text-green-800 hover:text-green-900 transition-colors">
            BookHaven
          </Link>
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="absolute right-4 text-green-800"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="w-64 h-full bg-stone-200 shadow-2xl">
              <div className="flex items-center justify-between p-4 border-b border-green-300">
                <Link to="/" className="cursive-font text-xl font-bold text-green-800">BookHaven</Link>
                <button onClick={() => setSidebarOpen(false)} className="text-green-800">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="px-4 mt-4">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-4 py-3 text-stone-700 hover:bg-green-100 rounded mb-1 transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-3 text-green-700" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col">
        {/* Desktop Header */}
        <header className="bg-stone-200 shadow-lg border-b-2 border-green-600">
          <div className="flex items-center justify-center px-6 py-4 relative">
            <div className="flex items-center space-x-12">
              <Link 
                to="/" 
                className="p-3 text-green-800 hover:bg-green-100 rounded-full transition-colors"
                title="Home"
              >
                <Home className="h-6 w-6" />
              </Link>
              <Link 
                to="/library" 
                className="p-3 text-green-800 hover:bg-green-100 rounded-full transition-colors"
                title="Library"
              >
                <Book className="h-6 w-6" />
              </Link>
            </div>
            
            <Link 
              to="/" 
              className="cursive-font text-4xl font-bold text-green-800 hover:text-green-900 transition-colors mx-16"
            >
              BookHaven
            </Link>
            
            <div className="flex items-center space-x-12">
              <Link 
                to="/my-books" 
                className="p-3 text-green-800 hover:bg-green-100 rounded-full transition-colors"
                title="My Books"
              >
                <Star className="h-6 w-6" />
              </Link>
              <Link 
                to="/community" 
                className="p-3 text-green-800 hover:bg-green-100 rounded-full transition-colors"
                title="Community"
              >
                <Users className="h-6 w-6" />
              </Link>
              <Link 
                to="/profile" 
                className="p-3 text-green-800 hover:bg-green-100 rounded-full transition-colors"
                title="Profile"
              >
                <User className="h-6 w-6" />
              </Link>
              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="p-3 text-green-800 hover:bg-green-100 rounded-full transition-colors"
                  title="Admin"
                >
                  <Settings className="h-6 w-6" />
                </Link>
              )}
            </div>
          </div>
        </header>
        
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-stone-200 border-t-2 border-green-600 shadow-2xl">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-6 cursive-font">Contact Us</h3>
                <div className="space-y-4 text-stone-700">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-700" />
                    <span>info@bookhaven.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-700" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-700" />
                    <span>123 Enchanted Grove<br />Fantasy Realm, FR 12345</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-6 cursive-font">Legal</h3>
                <div className="space-y-3 text-stone-700">
                  <Link to="/privacy" className="flex items-center space-x-2 hover:text-green-800 transition-colors">
                    <Shield className="h-4 w-4" />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link to="/terms" className="flex items-center space-x-2 hover:text-green-800 transition-colors">
                    <FileText className="h-4 w-4" />
                    <span>Terms of Service</span>
                  </Link>
                  <Link to="/cookies" className="flex items-center space-x-2 hover:text-green-800 transition-colors">
                    <Settings className="h-4 w-4" />
                    <span>Cookie Policy</span>
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-6 cursive-font">Library Hours</h3>
                <div className="space-y-2 text-stone-700 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-6 cursive-font">About BookHaven</h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Your gateway to mystical worlds and ancient wisdom. 
                  Discover the magic of reading in our enchanted digital library.
                </p>
              </div>
            </div>
            
            <div className="border-t border-green-300 mt-8 pt-6 text-center text-green-800">
              <p className="text-sm font-medium">&copy; 2024 BookHaven. All rights reserved. Built with jdoodle.ai</p>
            </div>
          </div>
        </footer>
      </div>

      <div className="lg:hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout; 
 