import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './pages/Menu';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

import GlobalStyles from './styles/GlobalStyle';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
