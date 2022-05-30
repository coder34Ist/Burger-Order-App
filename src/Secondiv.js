import React from 'react';
import LeftSideBar from './LeftSideBar';
import Cardd from './Cardd';
import BurgerMenu from './BurgerMenu';
import './Secondiv.css';
import SnackMenu from './SnackMenu';
import DessertMenu from './DessertMenu';
import RightSideBar from './RightSideBar';
import {Link} from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function Secondiv({state,reducer}) {
  return (
    <div className='secondiv'>  
    <div className='sticky__header'>
    <div className='sticky__navbar'>
    <Link style={{textDecoration:'none'}} to='/'>
        <a className='sticky__navbara'><span className='sticky__span'>HOME PAGE</span></a>
        </Link>
        <a className='sticky__navbara'><span className='sticky__span'>DEMO</span></a>
        <Link style={{textDecoration:'none'}} to='/PaymentPage'>
        <a className='sticky__navbara'><span className='sticky__span'>PaymentPAGE</span></a>
        </Link>
        <a className='sticky__navbara'><span className='sticky__span'>DEMO</span></a>
        <Link style={{textDecoration:'none'}} to='/Order'>
        <a className='sticky__navbara'><span className='sticky__span'>ORDER PAGE</span></a>
        </Link>
        <a className='sticky__navbara'><span className='sticky__span'>DEMO</span></a>
        <a className='sticky__navbara'><span className='sticky__span'>DEMO</span></a>
    </div>
</div>        
    <div className='secondiv__Header'>
        
    <LeftSideBar/>
    <div className='menu__div'>
    <BurgerMenu state={state} reducer={reducer}/>
    <SnackMenu/>
    <DessertMenu/>
    </div>
    <RightSideBar/>
   
    
    </div>
    </div>
  )
}

export default Secondiv