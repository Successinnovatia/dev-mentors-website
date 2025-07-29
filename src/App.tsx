
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Mentors from './components/Mentors';
import Curriculum from './components/Curriculum';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import JoinUs from './components/JoinUs';
import EventRegister from './components/EventRegister';
import BlogLanding from './components/blog/BlogLanding';
import ArticleDetail from './components/blog/ArticleDetail';
import Footer from './components/Footer';

function App() {
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Programs />
            <Mentors />
            <Curriculum />
          </>
        } />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<JoinUs />} />
        <Route
          path="/register/:eventId"
          element={<EventRegister onBack={() => navigate('/events')} />}
        />
        <Route path="/blog" element={<BlogLanding />} />
        <Route path="/blog/:slug" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;