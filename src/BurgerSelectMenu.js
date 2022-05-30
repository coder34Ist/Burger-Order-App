import React from 'react';
import './BurgerSelectMenu.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {useReducer,useState,useEffect} from 'react';
import { useStateValue } from './StateProvider';
import { useStateValueTwo } from './StateProviderTwo';
import {reducerThree} from './Reducer';
import {thirdState} from './Reducer';
import {useStateValueThree} from './StateProviderThree';
function BurgerSelectMenu() {

    const [heightState,setheightState]=useState(false);
    const [getTitle,dispatch]=useStateValue();    
    const [numberIncrement,setnumberIncrement]=useState(1);
    const [store,dispatchTwo]=useStateValueTwo();
    const [option,dispatchThree]=useStateValueThree();
     const [openOne,setopenOne]=useState({state:true,first:false,second:'rotate(0deg)'});
     const [openTwo,setopenTwo]=useState({state:true,first:false,second:'rotate(0deg)'});
     const [openThree,setopenThree]=useState({state:true,first:false,second:'rotate(0deg)'});
    const[inputState,setinputState]=useState(false);
    const[inputStates,setinputStates]=useState(null);
    const[element,setelement]=useState(false);
    
const firstOpen=()=>{
if(openOne.state===true)
{setopenOne(a=>a={state:false,first:true,second:'rotate(90deg)'})};
if(openOne.state===false)
{setopenOne(a=>a={state:true,first:false,second:'rotate(0deg)'})}
};

const secondOpen=()=>{
  if(openTwo.state===true)
  {setopenTwo(a=>a={state:false,first:true,second:'rotate(90deg)'})};
  if(openTwo.state===false)
  {setopenTwo(a=>a={state:true,first:false,second:'rotate(0deg)'})}
  };
const secondThree=()=>{
  if(openThree.state===true)
  {setopenThree(a=>a={state:false,first:true,second:'rotate(90deg)'})};
  if(openThree.state===false)
  {setopenThree(a=>a={state:true,first:false,second:'rotate(0deg)'})}
  };

const degisken=getTitle.basket[0].state;
const firstPrice=getTitle.basket[0].price;
const secondState=getTitle.basket[0].stateTwo;

const id=getTitle.basket[0].id;
const title=getTitle.basket[0].title;
const type=getTitle.basket[0].productType;
const priceP=getTitle.basket[0].price


console.log(openOne.second)

useEffect(()=>{   
  setheightState(degisken);  
    
  },[degisken]);

const increment=()=>{
  let a=numberIncrement;
  if(a>0)
  {  setnumberIncrement((a)=>a+=1);
      pricePlusR(a);
      pricePlusM(a);
      pricePlusK(a);
      pricePlusB(a);
      pricePluscccc(a);
      pricePlusccc(a);
      pricePluscc(a);
      pricePlusc(a);
      amountPrice(a); 
      addingOrder();   
    }else if(numberIncrement<=0){
  setnumberIncrement(1)}

 
 
}



const deincrement=()=>{
  let a=numberIncrement;
  if(a>1)
  {setnumberIncrement(a=>a-1);
    priceMinus(a);
    priceMinuss(a);
    priceMinusss(a);
    priceMinussss(a);
    priceMinusTwo(a);
    priceMinusTwoo(a);
    priceMinusTwooo(a);
    priceMinusTwoooo(a);
    amountPriceMinus(a);
    addingOrder();
    }else if(numberIncrement<2){
  setnumberIncrement(1)}
 else {setnumberIncrement(1)}
}
const globalNumber=()=>{
  if(numberIncrement<1)
  {setnumberIncrement(1)}
}
globalNumber();





  


 



function amountPrice(a){

  dispatchThree({type:'speacial__State__Price',id:'burger',price:(priceP*(a+1))});
  dispatchThree({type:'speacial__State__Price',id:'dessert',price:(priceP*(a+1))});
  dispatchThree({type:'speacial__State__Price',id:'snack',price:(priceP*(a+1))});


};

function amountPriceMinus(a){

  dispatchThree({type:'speacial__State__Price',id:'burger',price:(priceP*(a-1))});
  dispatchThree({type:'speacial__State__Price',id:'dessert',price:(priceP*(a-1))});
  dispatchThree({type:'speacial__State__Price',id:'snack',price:(priceP*(a-1))});


};



function pricePlusR(a){
  dispatchThree({type:'speacial__State',id:'Ranch',price:(5*(a+1))})
}
function pricePlusB(a){
  dispatchThree({type:'speacial__State',id:'Barbecue',price:(5*(a+1))})
}
function pricePlusK(a){
  dispatchThree({type:'speacial__State',id:'ketchup',price:(5*(a+1))})
}
function pricePlusM(a){
  dispatchThree({type:'speacial__State',id:'Mayonnaise',price:(5*(a+1))})
}

function priceMinus(a){
dispatchThree({type:'speacial__State',id:'Ranch',price:(5*(a-1))})};
function priceMinuss(a){
dispatchThree({type:'speacial__State',id:'Barbecue',price:(5*(a-1))})};
function priceMinusss(a){
dispatchThree({type:'speacial__State',id:'ketchup',price:(5*(a-1))})};
function priceMinussss(a){
dispatchThree({type:'speacial__State',id:'Mayonnaise',price:(5*(a-1))})};





function pricePlusc(a){
  dispatchThree({type:'speacial__State__Two',id:'Caramelized Onions',price:(5*(a+1))})
}
function pricePluscc(a){
  dispatchThree({type:'speacial__State__Two',id:'Extra Tomato',price:(5*(a+1))})
}
function pricePlusccc(a){
  dispatchThree({type:'speacial__State__Two',id:'Extra Cheese',price:(5*(a+1))})
}
function pricePluscccc(a){
  dispatchThree({type:'speacial__State__Two',id:'Extra Pickle',price:(5*(a+1))})
}

function priceMinusTwo(a){
dispatchThree({type:'speacial__State__Two',id:'Extra Pickle',price:(5*(a-1))})};
function priceMinusTwoo(a){
dispatchThree({type:'speacial__State__Two',id:'Extra Cheese',price:(5*(a-1))})};
function priceMinusTwooo(a){
dispatchThree({type:'speacial__State__Two',id:'Extra Tomato',price:(5*(a-1))})};
function priceMinusTwoooo(a){
dispatchThree({type:'speacial__State__Two',id:'Caramelized Onions',price:(5*(a-1))})};





const addingOrder=()=>{

dispatchThree({type:'add__amount',id1:numberIncrement+1})


}




 
const ekle=(e)=>{   
 
  if(e.target.checked===true){      
  dispatchThree({
    type:'ADD__BASKET',
    dataCik:{id:e.target.value}})}
    if(e.target.checked===false)
    {dispatchThree({type:'REMOVE__BASKET',
  id:e.target.value})}

}

const ekleSos=(e)=>{   
 
  if(e.target.checked===true){      
  dispatchThree({
    type:'ADD__dataSos',
    dataSos:{id:e.target.id,price:Number(e.target.value)},
    dataPrice:{price:Number(e.target.value)}
  })}
    if(e.target.checked===false)
    {dispatchThree({type:'REMOVE__dataSos',
  id:e.target.id})}

}

const ekleEkle=(e)=>{   
 
  if(e.target.checked===true){      
  dispatchThree({
    type:'ADD__dataEkle',
    dataEkle:{id:e.target.id,price:Number(e.target.value)},
    dataPrice:Number(e.target.value)})}
    if(e.target.checked===false)
    {dispatchThree({type:'REMOVE__dataEkle',
  id:e.target.id,
id1:e.target.value})}

}



const bodyDesign=()=>{
  if(heightState===true)
  {document.documentElement.style.overflow='hidden'}
  else if(heightState===false)
  {document.documentElement.style.overflow='scroll'}
}
bodyDesign();



useEffect(()=>{
  setinputStates((a)=>a=document.querySelectorAll('.design__input'));
  

},[]);




const aaa=()=>{
  let a=option.Price.reduce((a,b)=>b.price+a,0);
  let b=option.dataEkle.reduce((a,b)=>b.price+a,0);
  let c=option.dataSos.reduce((a,b)=>b.price+a,0);
  return (a+b+c)
}
aaa();





  



 const allChecked=()=>{
   const a=[...inputStates];

   a.map((b)=>{
     b.checked=false
   })
  
 
 }

 

const lastBasketGo=()=>{
  allChecked();
  dispatchTwo({
    type:"ADD__BASKET",
    newObject:option
  });  
  setnumberIncrement(1);
  setheightState(false);
  dispatch({ type: "REMOVE__BASKET"});
  dispatchThree({type:'remove__price'});

      
}



    const openClose=()=>{
    
        dispatch({ type: "REMOVE__BASKET"});
        dispatchThree({type:'remove__price'});
        setnumberIncrement(1);
        allChecked();      }

  return (
    <div className='select__item' style={{display:`${heightState===true?'flex':'none'}`}}>
    <div className='select__item_menu__back' >
    <div className='select__item_menu'>
      <div className='select__item_menu__pic'><img src={getTitle.basket[0].picture}/></div>








      <div className='select__item_menu__select'>
        <div className='header_div'>
          <h2 >{id}</h2><span onClick={openClose}>X</span>
        </div>
        <div className='container_form-div'>
          <div className='description'>
            <p>{title}</p>
          </div>
          {type=='burger'&&<form>
          <div className='landing__one' onClick={firstOpen}>                
            <h4><ArrowRightIcon style={{transform:`${openOne.second}`}}/>Remove Items</h4>
            <p>Pick item you want it to be removed)</p> 
                       
          </div>
          <div className='input__one'  style={{height:`${openOne.first===true?0:200}px`}} >
          <div className='container__la' >              
                <input onChange={ekle}  type='checkbox' value='Caramelized Onions' id='check' className='design__input'></input>                  
                 <span className='design__input__s'>5</span>
                <span className='contain__text'>Caramelized Onions</span>                             
            </div>
            <div className='container__la'>
              
                <input type='checkbox' onChange={ekle} value='Cheese' id='check' className='design__input'></input>                    
             
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Cheese</span>
                
              
            </div>
            <div className='container__la'>
              
                <input type='checkbox'onChange={ekle}  id='check' value='Pickle' className='design__input'></input>                    
              
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Pickle</span>
                
              
            </div>
            <div className='container__la'>
              
                <input type='checkbox'onChange={ekle}  value='Tomato'id='check' className='design__input'></input>                    
             
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Tomato</span>
               
              
            </div>
          </div>
          <div className='landing__one'  onClick={secondOpen}>
          <h4><ArrowRightIcon style={{transform:`${openTwo.second}`}}/>ADD Items</h4>
            <p>You can choose extra items</p>
          </div>
          <div className='input__one' style={{height:`${openTwo.first===true?0:200}px`}} >
          <div className='container__la'>
              <label htmlFor='check'>
                <input type='checkbox' onChange={ekleEkle} id='Caramelized Onions' value={numberIncrement*5} className='design__input'></input>                    
              </label>
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Caramelized Onions</span>
                <span className='contain__price'>+ 5 ₺</span>
                
             
            </div>
            <div className='container__la'>
              <label htmlFor='check'>
                <input type='checkbox' onChange={ekleEkle} id='Extra Cheese' value={numberIncrement*5} className='design__input'></input>                    
              </label>
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Extra Cheese</span>
                <span className='contain__price'>+ 5 ₺</span>
              
            </div>
            <div className='container__la'>
              <label htmlFor='check'>
                <input type='checkbox' id='Extra Pickle' onChange={ekleEkle} value={numberIncrement*5} className='design__input'></input>                    
              </label>
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Extra Pickle</span>
                <span className='contain__price'>+ 5 ₺</span>
              
            </div>
            <div className='container__la'>
              <label htmlFor='check'>
                <input type='checkbox' id='Extra Tomato' onChange={ekleEkle} value={numberIncrement*5} className='design__input'></input>                    
              </label>
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Extra Tomato</span>
                <span className='contain__price'>+ 5 ₺</span>
             
            </div>
          </div>
          
          
          <div className='landing__one' onClick={secondThree}>
          <h4><ArrowRightIcon style={{transform:`${openThree.second}`}}/>Choose Sauce</h4>
            <p>You can choose sauce you want</p>
          </div>
          <div className='input__one' style={{height:`${openThree.first===true?0:200}px`}} >
          <div className='container__la'>
              <label htmlFor='check'>
                <input type='checkbox' id='ketchup' onChange={ekleSos} value={numberIncrement*5} className='design__input'></input>                    
              </label>
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Ketchup</span>
                <span className='contain__price'>+ 5 ₺</span>
              
      
            </div>
            <div className='container__la'>
              <label htmlFor='check'>
                <input type='checkbox' id='Mayonnaise' onChange={ekleSos} value={numberIncrement*5} className='design__input'></input>                    
              </label>
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Mayonnaise</span>
                <span className='contain__price'>+ 5 ₺</span>
             
            </div>
            <div className='container__la'>
              <label htmlFor='check'>
                <input type='checkbox' id='Barbecue' onChange={ekleSos}  value={numberIncrement*5}className='design__input'></input>                    
              </label>
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Barbecue Sauce</span>
                <span className='contain__price'>+ 5 ₺</span>
              
            </div>
            <div className='container__la'>
              <label htmlFor='check'>
                <input type='checkbox' id='Ranch' onChange={ekleSos}  value={numberIncrement*5} className='design__input'></input>                    
              </label>
              <span className='design__input__s'>5</span>
                <span className='contain__text'>Ranch Sauce</span>
                <span className='contain__price'>+ 5 ₺</span>
             
            </div>
          </div>
          
          </form>}
        </div>
        <div className='container_button_div'>
        <div className='container_button_div_inside'>
          <button className='button_minus' onClick={deincrement}>-</button>
          <div className='number_contain' >{numberIncrement}</div>
          <button className='button_plus' onClick={increment}>--</button>
        </div>
        <div className='container_button_div_inside_two'onClick={lastBasketGo}>
          <a className='add_chart'>
            <span className='price_one'  >add to basket</span>
            <span className='price'>{aaa()} ₺</span>
          </a>
        </div>
        
        </div>       
      </div>







    </div>
      </div>           
    </div>
    
  )
}

export default BurgerSelectMenu
