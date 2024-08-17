import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';


import CategoriaList from './components/categorias/categoriaForm/CategoriaForm';
import CategoriaForm from './components/categorias/categoriaListar/CategoriaListar';
import CategoriaDeletar from './components/categorias/categoriaDeletar/CategoriaDeletar';

import Categoria from './paginas/categoria/Categoria';
import Produto from './paginas/produto/Produto';
import Contato from './paginas/contato/Contato';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria-listar" element={<CategoriaList />} />
            <Route path="/categoria-form" element={<CategoriaForm />} />
            <Route path="/categoria-form/:id" element={<CategoriaForm />} />
            <Route path="/categoria-deletar/:id" element={<CategoriaDeletar />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/categoria" element={<Categoria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;