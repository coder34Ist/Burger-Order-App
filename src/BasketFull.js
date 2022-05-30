import React from 'react';
import './BasketFull.css';
import BasketOption from './BasketOption';
import { useStateValueTwo } from './StateProviderTwo';
function BasketFull({open}) {

    const [lastSepet,dispatch]=useStateValueTwo();
    
 const a=lastSepet.lastBasket;

 
  return (
    <div className='basketfull' style={{display:`${open>0?'block':'none'}`}}>
      {a.length>0?a.map((a,index)=>{

return <BasketOption refCode={a.Price[0].refCode} index={index}  price={a.Price[0].priceTwo} id={a.Price[0].idProduct} amount={a.Order[0].amount}/>





      }):null}
               
    </div>
  )
}

export default BasketFull