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
  GlobalStyles,
  ErrorBoundary,
  ComponentErrorBoundary
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
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <GlobalStyles />
        
        <ComponentErrorBoundary componentName="Header">
          <Header 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
          />
        </ComponentErrorBoundary>
        
        <ComponentErrorBoundary componentName="Hero Section">
          <Hero 
            activeProduct={activeProduct} 
            setActiveProduct={setActiveProduct} 
          />
        </ComponentErrorBoundary>
        
        <ComponentErrorBoundary componentName="Stats Section">
          <Stats />
        </ComponentErrorBoundary>
        
        <ComponentErrorBoundary componentName="Features Section">
          <Features />
        </ComponentErrorBoundary>
        
        <ComponentErrorBoundary componentName="Products Section">
          <Products 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            expandedProduct={expandedProduct}
            setExpandedProduct={setExpandedProduct}
          />
        </ComponentErrorBoundary>
        
        <ComponentErrorBoundary componentName="Testimonials Section">
          <Testimonials />
        </ComponentErrorBoundary>
        
        <ComponentErrorBoundary componentName="Projects Section">
          <Projects />
        </ComponentErrorBoundary>
        
        <ComponentErrorBoundary componentName="Contact Section">
          <Contact />
        </ComponentErrorBoundary>
        
        <ComponentErrorBoundary componentName="Footer">
          <Footer 
            showScrollTop={showScrollTop} 
            scrollToTop={scrollToTop} 
          />
        </ComponentErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default App;