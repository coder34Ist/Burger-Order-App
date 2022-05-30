import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>

        <div className='div__contain'>
        <div className='div__contain__one'>
           <Link to='/' style={{textDecoration:'none',fontWeight:'bold'}}> <span style={{color:'red'}}>HOME PAGE</span></Link>
            <span>Hesabım</span>
            
            <span>Gönderim Bölgeleri</span>
            <Link style={{textDecoration:'none',fontWeight:'bold'}} to='/PaymentPage/'>
            <span style={{color:'red'}}>PAYMENT PAGE</span>
            </Link>
            <span>Demo</span>
        </div>
        <div className='div__contain__two'>
        <Link style={{textDecoration:'none',fontWeight:'bold'}} to='/Order'>
        <span style={{color:'red'}}>ORDER PAGE</span>
        </Link>
        <span>Aydınlatma Metni</span>
        <span>Demo</span>
        <span>İade Politikası</span>
        <span>Demo</span>

        </div>
        <div className='div__contain__three'>
        <span>Demo</span>
        <span>Demo</span>
        <span>Demo</span>
        <span>Demo</span>
        <span>Demo</span>
        
        </div>
        <div className='div__img'><img src='https://static.vecteezy.com/
system/resources/previews/
002/144/871/original/delicious-hot
-burgers-logo-with-lettering-fast-food-free-vector.jpg'/></div>
        </div>

    </div>
  )
}

export default Footer
