import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
   const [click, setclick] = useState(false);
   const [button, setButton]= useState(true);
   const handleClick = () => setclick(!click);
   const closeMobileMenu = () => setclick(false);
   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false);
      }else {
         setButton(true);
      }
   };
   useEffect(()=> {
      showButton();
   }, []);

   window.addEventListener('resize',showButton);
return(
    <>
       <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>KIKI
            <i className='fab fa-typo3' />
            </Link>
             </div>
             <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
             </div>
             <ul className={click ? 'nav-menu-active': 'nav-menu'}>
              <li className='nav-item'>
               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
               </Link>
               </li>
               <li className='nav-item'>
               <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
               </Link>
               </li>
               <li className='nav-item'>
               <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                  Products
               </Link>
              </li>
              
             </ul>
             {button && <Button buttonStyle='btn--outline'>Sign-up</Button>}
            </nav></>
            )
}
export default Navbar;