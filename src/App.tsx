import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import NewsFlash from './pages/NewsFlash';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import LegalTechEvents from './pages/LegalTechEvents';
import BlogPostsAndArticles from './pages/BlogPostsAndArticles';
import WebsiteCopy from './pages/WebsiteCopy';
import EmailTemplates from './pages/EmailTemplates';
import LandingPages from './pages/LandingPages';
import CustomLegalApps from './pages/CustomLegalApps';
import CreateAIAgents from './pages/CreateAIAgents';
import PPCAdCopy from './pages/PPCAdCopy';
import CaseStudies from './pages/CaseStudies';
import DisplayAds from './pages/DisplayAds';
import LeadMagnets from './pages/LeadMagnets';

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
          <Route path="/create-ai-agents" element={<CreateAIAgents />} />
          <Route path="/ppc-ad-copy" element={<PPCAdCopy />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/display-ads" element={<DisplayAds />} />
          <Route path="/lead-magnets" element={<LeadMagnets />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/legal-tech-events" element={<LegalTechEvents />} />
          <Route path="/news-flash" element={<NewsFlash />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App