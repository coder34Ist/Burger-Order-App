import React from 'react';
import './PaymentCard.css';
import {useStateValueTwo} from './StateProviderTwo';
function PaymentCard({index}) {
    const [store,dispatch]=useStateValueTwo();
    
    const refcode=store.lastBasket[index].Price[0].refCode;
    
    const getTotal=()=>{

        let a=store.lastBasket[index].Price.reduce((a,b)=>b.price+a,0)
        let b=store.lastBasket[index].dataEkle.reduce((a,b)=>b.price+a,0);
        let c=store.lastBasket[index].dataSos.reduce((a,b)=>b.price+a,0);
          return (a+b+c)
        }
       
    
        getTotal();

      
        const removeItem=()=>{

            dispatch({type:'REMOVE__ITEM',refCode:refcode})
          console.log(store)
          
          
          }
  return (
    <div className='paymentCard__main'>
        <div className='card__img__div'><img src={store.lastBasket[index].Price[0].picture}/></div>
        <div className='card__remove__div'>
            <h2>Remove İtems</h2>
            {store.lastBasket[index].dataCik.length==0?<span className='none_div'>NONE</span>:null}
            <div className='remove__content'>
                {store.lastBasket[index].dataCik.map((a)=><span>{a.id}</span>)}
                
            </div>
        </div>
        <div className='card__add__div'>
        <h2>Extra Items</h2>
        {store.lastBasket[index].dataEkle.length==0?<span className='none_div'>NONE</span>:null}
        <div className='extra__content'>
        {store.lastBasket[index].dataEkle.map((a)=><span>{a.id} + {a.price}</span>)}
            </div>
        </div>
        <div className='card__sauce__div'>
        <h2>Sauce</h2>
        {store.lastBasket[index].dataSos.length==0?<span className='none_div'>NONE</span>:null}
        <div className='sauce__content'>
        {store.lastBasket[index].dataSos.map((a)=><span>{a.id} + {a.price}</span>)}
            </div>
        </div>
        <div className='card__price__div'>
        <h2>Price</h2> <span onClick={removeItem}>X</span>
        <div className='card__insinde'>
        <div className='price__content'>

                <span>{store.lastBasket[index].Price.map((a)=><span>{a.idProduct}</span>)}</span>
                <span>AMOUNT</span>
                <span style={{marginRight:'50px'}}>
                {store.lastBasket[index].Order.map((a)=><span>{a.amount}</span>)}
                </span>
                <span>Total</span>
                <span>{getTotal() } TL</span>
                
        </div>
        </div>
        </div>
    </div>
  )
}

export default PaymentCard