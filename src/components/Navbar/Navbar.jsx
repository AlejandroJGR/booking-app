import './Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar__container">
        <a href='/' className='navbar__logo'>Alebooking</a>
        <div className='navbar__items'>
          <button className='navbar__button'>Register</button>
          <button className='navbar__button'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar