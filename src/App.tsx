import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import SEO from './components/layout/SEO';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        
        <FAQSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
