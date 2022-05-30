import React,{useState,useReducer,useEffect} from 'react';
import  './RightSideBar.css';
import { useStateValueTwo } from './StateProviderTwo';
import  BasketFull from './BasketFull';
import {Link} from 'react-router-dom';
function RightSideBar() {



const [getBasket,dispatch]=useStateValueTwo();
const [state,setState]=useState(0);

let length=getBasket.lastBasket.length;

useEffect(()=>{
  let a=state;
  const tt=()=>setState(a=>a=length);
  tt();



},[length])

 
const totalGet=()=>{

let a=getBasket.lastBasket.map((a)=>a.Price.reduce((a,b)=>a+b.price,0));
let b=getBasket.lastBasket.map((a)=>a.dataSos.reduce((a,b)=>a+b.price,0));
let c=getBasket.lastBasket.map((a)=>a.dataEkle.reduce((a,b)=>a+b.price,0));

 let d=a.reduce((a,b)=>a+b,0);
 let e=b.reduce((a,b)=>a+b,0);
 let f=c.reduce((a,b)=>a+b,0);

return (d+e+f)
 
}




console.log(totalGet());



document.querySelector('.right__side__bar');

const y=document.querySelector('.right__side__bar_img');







  
  return (
    <div className='right__side__bar'>
      <h1 className='right_side_bar_h1' >Basket</h1>
      <div className='right__side__bar_img' style={{display:`${length>0?'none':'block'}`}}>
        <img  className='right__side__bar__image'src='https://previews.123rf.com/
images/billah9/billah92001/bil
lah9200100572/138670193-mod%C3%A8le-de-co
nception-de-logo-de-panier-d-achat.jpg'/>
<div className='right_side_bar_title'><span>Basket is empty</span></div>
      </div>
      <BasketFull open={state} />
      <div className='product_total' style={{height:`${length>0?'150px':'0px'}`}}>
        <span className='firstt'>Total</span>
        <span className='secondd'>{totalGet()} TL</span>
        
      </div>
      <Link style={{textDecoration:'none'}}to='/PaymentPage' >
      <button disabled={false} className='sepet__button'>Go to Payment</button>
      </Link>    
    </div>

  )
}

export default RightSideBar