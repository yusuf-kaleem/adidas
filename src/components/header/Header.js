import logo from '../../images/logo192.png';
import './header.css'
function Header({childCompoent}) {
  return (
    <div className="header" >
      {/* Main Logo  */}
      <img className="m10" src={logo} height="40" alt="Adidas-logo" />
      
      <div className='right'>
      {childCompoent}
      </div>
      
    </div>
  );
}

export default Header;
