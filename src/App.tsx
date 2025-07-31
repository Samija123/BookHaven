import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; 
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Library from './pages/Library';
import MyBooks from './pages/MyBooks';
import Recommendations from './pages/Recommendations';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import BookReader from './pages/BookReader';
import  Terms from './pages/Terms';
import Privacy from './pages/Privacy'; 
import Cookies from './pages/Cookies';
import { AuthProvider } from './context/AuthContext';  

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <Welcome onEnter={() => setShowWelcome(false)} />;
  }

  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/my-books" element={<MyBooks />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/book/:id" element={<BookReader />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
 