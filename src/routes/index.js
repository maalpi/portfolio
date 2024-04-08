import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from '../pages/Menu';
import Projetos from '../pages/Projetos';
import Contato from '../pages/Contato';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
