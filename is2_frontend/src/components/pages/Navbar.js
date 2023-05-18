import { click } from '@testing-library/user-event/dist/click'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { Button } from './Button';


function Navbar() {
    const[click, setClick] = useState(false);
    const [button,setButton]= useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu=() => setClick(false);
    const showButton=() => {
        if(window.innerWidth<= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();    
    }, []);

    window.addEventListener('resize', showButton);

  return (
   <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}> 
                DebuGGer <i className= 'fab.fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/devview' className='nav-links' onClick={closeMobileMenu}>
                        DevView
                    </Link>
                </li>
                
                <li className='nav-item'>
                    <Link to='/adminview' className='nav-links' onClick={closeMobileMenu}>
                        AdminView
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/report' className='nav-links' onClick={closeMobileMenu}>
                        UserView
                    </Link>
                </li>
                
                <li className='nav-item'>
                    <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>   
                       
            </ul>
            {button && <Button class='btn btn-dark'>Sign up</Button>}
            {button && <Button class='btn btn-dark'>Log in</Button>}
        </div>
    </nav>
   </>
  )
}

export default Navbar