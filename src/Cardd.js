import React,{useReducer} from 'react'
import './Cardd.css';
import { useStateValue } from './StateProvider';
import { useStateValueTwo } from './StateProviderTwo';
import { useStateValueThree } from './StateProviderThree';



function Cardd({id,price,title,type,picture,tt}) {




  const [getTitle,dispatch]=useStateValue();
  const [getTit,dispatchTwo]=useStateValueTwo();
  const [getTitleTwo,dispatchThree]=useStateValueThree();


const passwordContain=[0,1,2,3,4,5,6,7,8,9]


let passwordFunction=()=>{
let number='';
for(let i=0; i<12; i++){

  number=number+passwordContain[Math.floor(Math.random()*10)];
  

}
return number;
}

let a=passwordFunction();


  const handleComplete = () => {
    
    dispatch({ type: "ADD_TO_BASKET", item:{
      id:id,            
      price:price,
      state:true,
      stateTwo:true,
      title:title,
      productType:type,
      picture:picture
         
    } });
    dispatchThree({
      type:"ADD__Price",
      id:{id:tt,price:price,refCode:a,priceTwo:price,idProduct:id,picture:picture},
      
      amount:1
    });
     dispatchThree({
      type:"add__amount",
      id1:1
      
    });
    dispatchTwo({type:'add__refcode',id:a})

  };
  return (
    <div title={title}
      className='card__main'>
        <img src={picture}/>
<span className='card__productName'>{id}</span>
<span className='card__producTitle'>{title}</span>
<div className='price_button_div'>
<span className='card__productPrice'>{price} TL</span>
<button onClick={handleComplete}>add Basket</button>
</div>

    </div>
  )
}

export default Cardd
