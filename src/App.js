import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Menu from './pages/Menu';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

import GlobalStyles from './styles/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyles />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
