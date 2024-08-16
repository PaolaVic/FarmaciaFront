import './Navbar.css';
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-title-container'>
          <img src={logo} alt="Logo" className='navbar-logo' />
          <div className='navbar-title'>
            Pharmacy Gen
          </div>
        </div>

        <div className='navbar-menu'>
          <div className='navbar-item'>Items</div>
          <div className='navbar-item'>Categoria</div>
          <div className='navbar-item'>Carrinho</div>
          <div className='navbar-item'>Perfil</div>
          <div className='navbar-item'>Sair</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;