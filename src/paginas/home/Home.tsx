import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import homeLogo from '../../assets/home.png'; // Imagem do logo
import './Home.css'; // Importa o CSS

const Home: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com o clique no botão
  const handleViewItemsClick = () => {
    navigate('/produto'); // Redireciona para a página de produtos
  };

  return (
    <div className="bg-green-100 flex justify-center py-8">
      <div className='container grid grid-cols-2 text-black'>
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className='text-5xl font-bold'>Muito Bem-Vindo(a)!</h2>
          <p className='text-xl'>Faça os seus pedidos!</p>
          <button 
            className='rounded bg-white text-green-950 py-2 px-4'
            onClick={handleViewItemsClick} // Adiciona o handler de clique
          >
            Ver itens
          </button>
        </div>
        <div className="flex justify-center">
          <img src={homeLogo} alt="Home Logo" className='w-2/3' />
        </div>
      </div>
    </div>
  );
}

export default Home;