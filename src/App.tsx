import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import GlobalJsonLd from './components/GlobalJsonLd';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import NewsFlash from './pages/NewsFlash';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import BlogPostsAndArticles from './pages/BlogPostsAndArticles';
import WebsiteCopy from './pages/WebsiteCopy';
import EmailTemplates from './pages/EmailTemplates';
import LandingPages from './pages/LandingPages';
import CustomLegalApps from './pages/CustomLegalApps';
import CaseStudies from './pages/CaseStudies';
import LeadMagnets from './pages/LeadMagnets';
import ThoughtLeadership from './pages/ThoughtLeadership';
import WhitepapersGuides from './pages/WhitepapersGuides';
import AppDevelopment from './pages/AppDevelopment';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <GlobalJsonLd />
      <ScrollToTop />
      <div className="min-h-screen bg-[#c3d0ff]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog-posts" element={<BlogPostsAndArticles />} />
          <Route path="/website-copy" element={<WebsiteCopy />} />
          <Route path="/email-templates" element={<EmailTemplates />} />
          <Route path="/landing-pages" element={<LandingPages />} />
          <Route path="/custom-legal-apps" element={<CustomLegalApps />} />
          <Route path="/thought-leadership" element={<ThoughtLeadership />} />
          <Route path="/whitepapers-guides" element={<WhitepapersGuides />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/lead-magnets" element={<LeadMagnets />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/news-flash" element={<NewsFlash />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App