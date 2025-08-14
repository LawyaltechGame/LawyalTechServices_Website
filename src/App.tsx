import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import NewsFlash from './pages/NewsFlash';
import Contact from './pages/Contact';
import WordPressBlog from './components/WordPressBlog';
import WordPressTest from './components/WordPressTest';
import BlogPost from './pages/BlogPost';
import LegalTechEvents from './pages/LegalTechEvents';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#c3d0ff]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
                  <Route path="/legal-writing" element={<WordPressBlog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/wordpress-test" element={<WordPressTest />} />
        <Route path="/legal-tech-events" element={<LegalTechEvents />} />
          <Route path="/news-flash" element={<NewsFlash />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App