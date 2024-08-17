import React from 'react';
import './Categoria.css';
import pillsImage from '../../assets/pills.png'; // Caminho para a imagem

const Categoria: React.FC = () => {
  return (
    <div className="categoria-container">
      <h1>Categorias dos Produtos</h1>
      <div className="categoria-content">
   
        <div className="categoria-list">
          <div className="categoria-item">
            <h2>ㅤAnticoncepcionaisㅤ</h2>
          </div>
          <div className="categoria-item">
            <h2>ㅤAnalgésicos</h2>
          </div>
          <div className="categoria-item">
            <h2>Medicamento para Diabetes</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categoria;