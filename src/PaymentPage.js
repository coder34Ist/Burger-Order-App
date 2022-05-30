import React,{useState} from 'react'
import Order from './Order';
import PaymentCard from './PaymentCard';
import './PaymentPage.css';
import Footer from './Footer';
import {useStateValueTwo} from './StateProviderTwo';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
function PaymentPage() {

const [store,dispatch]=useStateValueTwo();
const [anima,setAnima]=useState('none');
const [trueS,settrueS]=useState(false);

console.log(store)
console.log(store.refCode[0])


let number=store.lastBasket.length;
const animaChange=()=>{
if(store.lastBasket.length>0)
{setAnima(a=>a='rightToleft')};
if(store.lastBasket<=0)
{setAnima(a=>a='none')};
}


useEffect(()=>{
  const animaChange=()=>{
    if(store.lastBasket.length>0)
    {setAnima(a=>a='rightToleft')};
    if(store.lastBasket<=0)
    {setAnima(a=>a='none')};
    }
    animaChange();


},[]);


const totalGet=()=>{

    let a=store.lastBasket.map((a)=>a.Price.reduce((a,b)=>a+b.price,0));
    let b=store.lastBasket.map((a)=>a.dataSos.reduce((a,b)=>a+b.price,0));
    let c=store.lastBasket.map((a)=>a.dataEkle.reduce((a,b)=>a+b.price,0));
    
     let d=a.reduce((a,b)=>a+b,0);
     let e=b.reduce((a,b)=>a+b,0);
     let f=c.reduce((a,b)=>a+b,0);
    
    return (d+e+f)
     
    }
    
    totalGet();


  const trueOrrFalse=()=>{settrueS(true)}
  const falseOrrTrue=()=>{settrueS(false)}
    
  const confirmBasket=()=>{
    settrueS(false);
dispatch({type:'remove__all'})


  }     
  
  return (
    
    <div className='appThree'> 
      <Order/>
     <div className='sticky__header'>
    <div className='sticky__navbar'>
        
    <Link style={{textDecoration:'none'}} to='/'>
        <a className='sticky__navbara'><span className='sticky__span'>HOME PAGE</span></a>
        </Link>
        <a className='sticky__navbara'><span className='sticky__span'>DEMO</span></a>
        <Link style={{textDecoration:'none'}} to='/PaymentPage'>
        <a className='sticky__navbara'><span className='sticky__span'>PaymentPAGE</span></a>
        </Link>
        <a className='sticky__navbara' ><span className='sticky__span'>DEMO</span></a>
        <Link style={{textDecoration:'none'}} to='/Order'>
        <a className='sticky__navbara'><span className='sticky__span'>ORDER PAGE</span></a>
        </Link>
        <a className='sticky__navbara'><span className='sticky__span'>DEMO</span></a>
        <a className='sticky__navbara'><span className='sticky__span'>DEMO</span></a>
    </div>
</div>
<div className='wrap__div'>
<div className='payment_main_div'>    
    {store.lastBasket.map((a,index)=><PaymentCard index={index}/>)}    

   {number===0? <div className='payment_page_img'><img src='https://previews.123rf.com/
images/billah9/billah92001/bil
lah9200100572/138670193-mod%C3%A8le-de-co
nception-de-logo-de-panier-d-achat.jpg' />
<span >BASKET İS EMPTY</span></div>:null }
    



</div>
<div className='total__price'>
    <span>Total Price</span>
    <span>{totalGet()} TL</span>
   {number>0?  <div onClick={trueOrrFalse} className='last__button' style={{animationName:`${anima}`}}><span>PAY</span></div>:null}





   {trueS===true?<div className='last__page__'>
     <span className='third'>Your orders reference code: {store.refCode[0]}</span>
     <span className='fourth'>Your orders Price: {totalGet()} TL</span>


           <button onClick={confirmBasket} className='first'>Are you sure to confirm Basket?</button>
    <button onClick={falseOrrTrue} className='second'>cancel</button>
  </div>:null}



</div>
</div>




     </div>









  )
}

export default PaymentPage