import React,{useState} from 'react';
import { useEffect } from 'react';
import './BasketOption.css';
import { useStateValueTwo } from './StateProviderTwo';
function BasketOption({refCode,price,amount,id,index}) {



const [store,dispatch]=useStateValueTwo();
const [numberIncrement,setnumberIncrement]=useState(amount);



const Increment=()=>{

setnumberIncrement(a=>a+1);
priceAndAmountPlus();
datasosPlus();
dataEklePlus();

}

const deIncrement=()=>{
if(numberIncrement>1)
  {setnumberIncrement(a=>a-1);
  priceAndAmountMinus();
  datasosMinus();
  dataEkleMinus();}
  
  }



  function globalNumber(){
if(numberIncrement<1)
{setnumberIncrement(1)}



  }
  globalNumber();
const priceAndAmountPlus=()=>{
  dispatch({type:'priceAndAmount',code:refCode,price:price*(numberIncrement+1), amount:numberIncrement+1})

}

const priceAndAmountMinus=()=>{
  dispatch({type:'priceAndAmount',code:refCode,price:price*(numberIncrement-1), amount:numberIncrement-1})

}

const datasosPlus=()=>{
  dispatch({type:'dataSosAdd',price:5*(numberIncrement+1),id:'ketchup',code:refCode});
  dispatch({type:'dataSosAdd',price:5*(numberIncrement+1),id:'Ranch',code:refCode});
  dispatch({type:'dataSosAdd',price:5*(numberIncrement+1),id:'Mayonnaise',code:refCode});
  dispatch({type:'dataSosAdd',price:5*(numberIncrement+1),id:'Barbecue',code:refCode})
}
const datasosMinus=()=>{ 
    dispatch({type:'dataSosAdd',price:5*(numberIncrement-1),id:'ketchup',code:refCode});
  dispatch({type:'dataSosAdd',price:5*(numberIncrement-1),id:'Ranch',code:refCode});
  dispatch({type:'dataSosAdd',price:5*(numberIncrement-1),id:'Mayonnaise',code:refCode});
  dispatch({type:'dataSosAdd',price:5*(numberIncrement-1),id:'Barbecue',code:refCode})
  
}


const dataEklePlus=()=>{
  dispatch({type:'dataEkleAdd',price:5*(numberIncrement+1),id:'Caramelized Onions',code:refCode});
  dispatch({type:'dataEkleAdd',price:5*(numberIncrement+1),id:'Extra Cheese',code:refCode});
  dispatch({type:'dataEkleAdd',price:5*(numberIncrement+1),id:'Extra Pickle',code:refCode});
  dispatch({type:'dataEkleAdd',price:5*(numberIncrement+1),id:'Extra Tomato',code:refCode})
}

const dataEkleMinus=()=>{
  dispatch({type:'dataEkleAdd',price:5*(numberIncrement-1),id:'Caramelized Onions',code:refCode});
  dispatch({type:'dataEkleAdd',price:5*(numberIncrement-1),id:'Extra Cheese',code:refCode});
  dispatch({type:'dataEkleAdd',price:5*(numberIncrement-1),id:'Extra Pickle',code:refCode});
  dispatch({type:'dataEkleAdd',price:5*(numberIncrement-1),id:'Extra Tomato',code:refCode})
}





const removeItem=()=>{

  dispatch({type:'REMOVE__ITEM',refCode:refCode})



}



  const getTotal=()=>{

    let a=store.lastBasket[index].Price.reduce((a,b)=>b.price+a,0)
    let b=store.lastBasket[index].dataEkle.reduce((a,b)=>b.price+a,0);
    let c=store.lastBasket[index].dataSos.reduce((a,b)=>b.price+a,0);
      return (a+b+c)
    }
   

    getTotal();





  
  return (
    <div className='basket__Option'>
        <div className='product__id'>
         <span className='product__id__span'>{id}</span>
         <span  onClick={removeItem} className='product__id__icon'>X</span> 
        </div>
        <div className='product__price'>{getTotal()} TL</div> 
        <div className='product__button'>
            <button onClick={deIncrement} className='minus'>-</button>
            <span className='product__span'>{numberIncrement}</span>
            <button onClick={Increment} className='plus'>+</button>
        </div>
        <div className='line' ></div>
    </div>
  )
}

export default BasketOption