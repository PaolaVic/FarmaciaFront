import React from 'react';
import './Produto.css';
import paracetamolImage from '../../assets/paracetamol.png'; 
import metforminaImage from '../../assets/metformina.jpg';
import levonorgestrelImage from '../../assets/levonorgestrel.png';

function Produto() {
    return (
        <div className="produto-container">
            <h1>Nossos Produtos</h1>
            <div className="produto-list">
                <div className="produto-item">
                    <img src={paracetamolImage} alt="Paracetamol" className="produto-image" />
                    <h2>Paracetamol (Tylenol)</h2>
                    <p>Descrição: O paracetamol é um analgésico e antipirético amplamente utilizado para aliviar dores leves a moderadas e reduzir febre. É frequentemente utilizado para dores de cabeça, dores musculares, dores nas articulações e sintomas de resfriado.</p>
                </div>
                <div className="produto-item">
                    <img src={metforminaImage} alt="Metformina" className="produto-image" />
                    <h2>Metformina</h2>
                    <p>Descrição: A metformina é um medicamento utilizado no tratamento do diabetes tipo 2. Ajuda a controlar os níveis de açúcar no sangue ao melhorar a resposta do corpo à insulina e diminuir a produção de glicose pelo fígado.</p>
                </div>
                <div className="produto-item">
                    <img src={levonorgestrelImage} alt="Levonorgestrel" className="produto-image" />
                    <h2>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤLevonorgestrel</h2>
                    <p>Levonorgestrel é um hormônio utilizado em pílulas anticoncepcionais e dispositivos intrauterinos (DIUs) para prevenir a gravidez. Ele age inibindo a ovulação e alterando o muco cervical para dificultar a passagem dos espermatozoides..</p>
                </div>
            </div>
        </div>
    );
}

export default Produto;