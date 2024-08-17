import React from 'react';
import './Contato.css';
import normaniImage from '../../assets/normani.jpeg'; // Ajuste o caminho conforme a estrutura do seu projeto

const Contato: React.FC = () => {
  return (
    <div className="contato-container">
      <img src={normaniImage} alt="Normani" className="contato-image" />
      <div className="contato-content">
        <h1>Contato</h1>
        <p>Entre em contato conosco para mais informações ou dúvidas.</p>
        <form className="contato-form">
          <label>
            Nome:
            <input type="text" placeholder="Seu nome" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Seu email" />
          </label>
          <label>
            Mensagem:
            <textarea placeholder="Sua mensagem"></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;