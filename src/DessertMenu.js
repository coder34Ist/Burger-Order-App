import React from 'react';
import './DessertMenu.css';
import Cardd from './Cardd';

function DessertMenu() {



  const data=[
    {id:'Frambuazlı Trileçe',price:20,tt:'dessert',type:'dessert',title:' Nefis frambuaz tadıyla, hafif enfes tatlılarımızdan! Size sadece bu lezzetin tadını çıkarmak kaldı!',picture:'https://nevco.restapp.com/uploads/13497/8f60ae806cd44ee9fa299ce4c9538b19-thumbnail.jpg'},
    {id:'Karamelli Trileçe',price:10,tt:'dessert',type:'dessert',title:`Karamelden vazgeçemeyenler için Ercan Burger'in nefis Karamelli Trileçesi dillere destan lezzetiyle sizler için hazır!`,picture:'https://nevco.restapp.com/uploads/13497/de65a64484c2ad4c0037fd274e782b09-thumbnail.jpg'},
    {id:'Soğuk Baklava',price:25,tt:'dessert',type:'dessert',title:' 100gr Dana Eti, Ercan Burger özel sosu, karamelize soğan, yeşillik, turşu, domates, cheddar peyniri içerikleriyle ve patates kızartma eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/6bd1cdfc358d356217328cfd9d95e4aa-thumbnail.jpg'},
    {id:'Çilekli Magnolia',price:10,tt:'dessert',type:'dessert',title:`Çilekli Magnolia`,picture:'https://nevco.restapp.com/uploads/13497/740ab89206cd5c10904211d6f1acd867-thumbnail.jpg'},
    {id:'Çikolata Cup',price:10,tt:'dessert',type:'dessert',title:'Çikolata Cup',picture:'https://nevco.restapp.com/uploads/13497/ee56747eefc4d2c59837f68e66183ce7-thumbnail.jpg'},
    {id:'Çikolatalı Magnolia',price:55,tt:'dessert',type:'dessert',title:'Çikolatalı Magnolia',picture:'https://nevco.restapp.com/uploads/13497/c0f96ea3ddf0e68b96cb58a0797e895b-thumbnail.jpeg'},
    ]
      
  return (
    <div className='dessertMenu'>
        <h1>DessertMenu</h1>
        {data.map((a)=>{

      return <Cardd id={a.id} price={a.price} type={a.type} title={a.title} picture={a.picture} tt={a.tt}/>

        })}




    </div>
  )
}

export default DessertMenu