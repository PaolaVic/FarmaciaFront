import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Caminho para o logo
import './Navbar.css'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo e título */}
        <div className='navbar-title-container'>
          <img src={logo} alt="Logo" className='navbar-logo' />
          <div className='navbar-title'>
            Pharmacy Gen
          </div>
        </div>

        {/* Menu de navegação */}
        <ul className='navbar-menu'>
          <li><Link to="/" className='navbar-item'>Home</Link></li>
          <li><Link to="/produto" className='navbar-item'>Produtos</Link></li>
          <li><Link to="/categoria" className='navbar-item'>Categorias</Link></li>
          <li><Link to="/contato" className='navbar-item'>Contato</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;