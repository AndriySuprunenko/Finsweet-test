import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import Author from './pages/Author';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Category from './pages/Category';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Components
import Header from './components/Header';

// scss
import './styles/index.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/category" element={<Category />} />
          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
