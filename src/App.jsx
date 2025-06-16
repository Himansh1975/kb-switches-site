import React, { useState, useEffect, useCallback } from 'react';
import {
  Header,
  Hero,
  Stats,
  Features,
  Products,
  Testimonials,
  Projects,
  Contact,
  Footer,
  GlobalStyles
} from './components';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeCategory, setActiveCategory] = useState('switches');
  const [expandedProduct, setExpandedProduct] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalStyles />
      
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      <Hero 
        activeProduct={activeProduct} 
        setActiveProduct={setActiveProduct} 
      />
      
      <Stats />
      
      <Features />
      
      <Products 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        expandedProduct={expandedProduct}
        setExpandedProduct={setExpandedProduct}
      />
      
      <Testimonials />
      
      <Projects />
      
      <Contact />
      
      <Footer 
        showScrollTop={showScrollTop} 
        scrollToTop={scrollToTop} 
      />
    </div>
  );
};

export default App;