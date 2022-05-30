import React from 'react';
import './BurgerMenu.css';
import Cardd from './Cardd';
import { useStateValue } from './StateProvider';
function BurgerMenu({state,reducer}) {
  const [getTitle,dispatch]=useStateValue();


const data=[
{id:'Classic Burger',price:80,tt:'burger',type:'burger',title:'120gr Dana Eti, Ercan Burger özel sosu, karamelize soğan, yeşillik, turşu, domates, cheddar peyniri içerikleriyle ve patates kızartma eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/ef71a3b3e295d5ecad979080b80b2ec5-thumbnail.jpg'},
{id:'Cheese Burger',price:100,tt:'burger',type:'burger',title:' 150gr Dana Eti, Ercan Burger özel sosu, karamelize soğan, yeşillik, turşu, cheddar peyniri içerikleriyle ve patates kızartma eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/0067ad776f1dacef30502ff5fbb01f92-thumbnail.jpg'},
{id:'Mini Burger',price:50,tt:'burger',type:'burger',title:' 100gr Dana Eti, Ercan Burger özel sosu, karamelize soğan, yeşillik, turşu, domates, cheddar peyniri içerikleriyle ve patates kızartma eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/d83bead3f45d776a268c59409432b762-thumbnail.jpg'},
{id:'Lokum Burger',price:60,tt:'burger',type:'burger',title:' 150gr Dana Lokum, Ercan Burger özel sosu, yeşillik, turşu, domates, karamelize soğan, cheddar peyniri içerikleriyle ve patates kızartma eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/5481bba75c4cfd44bbdb2e0e6db7175b-thumbnail.jpg'},
{id:'Alev Burger',price:90,tt:'burger',type:'burger',title:' 150gr Dana Eti, Ercan Burger özel sosu, karamelize soğan, jalepono biber, louisiana sosu, yeşillik, turşu, cheddar peyniri içerikleriyle ve patates kızartma eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/ba0783ba8167d1d3a6965438b33714d0-thumbnail.jpg'},
{id:'Tavuk Burger',price:70,tt:'burger',type:'burger',title:' 160gr tavuk eti, karamelize soğan, yeşillik, turşu, domates, ranch sos içerikleriyle ve patates kızartma eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/cf613a2d00274d3c1343534f544a7ac0-thumbnail.jpg'},
{id:'Double Burger',price:120,tt:'burger',type:'burger',title:' 240gr Dana Eti, Ercan Burger özel sosu, karamelize soğan, yeşillik, turşu, domates, iki kat cheddar peyniri içerikleriyle ve patates kızartma eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/3a64a68a6859f03142270780ad5fabaa-thumbnail.jpg'},
{id:'Mini Tavuk Burger',price:130,tt:'burger',type:'burger',title:' 130gr çıtır tavuk eti, ranch sos, yeşillik, turşu, domates içerikleriyle ve patates kızartması eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/81687c6dc8c23239b35429b8e5faf852-thumbnail.jpg'},
{id:'Triplex Burger',price:140,tt:'burger',type:'burger',title:' 360gr Dana Eti, Ercan Burger Özel Sosu, Karamelize Soğan, Yeşillik, Turşu, Domates, Üç Kat Cheddar Peyniri içerikleriyle patates kızartması eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/d97753fa6e8fc8437f24968058f8c30e-thumbnail.jpg'},
{id:'Special Burger',price:150,tt:'burger',type:'burger',title:' 220gr. Dana Eti, Ercan Burger özel sosu, karamelize soğan, turşu, cheddar peyniri içerikleriyle ve patates kızartma eşliğinde servis edilir.',picture:'https://nevco.restapp.com/uploads/13497/264e65b47e2f12b88135f81474da7898-thumbnail.jpg'}]
  
  
  return (
    <div className='burger__main'>     
        <h1>Burger Menu</h1>
          {data.map((a)=>{
                       
            return <Cardd id={a.id} price={a.price} type={a.type} title={a.title} picture={a.picture} tt={a.tt} />})}     
               
               
    </div>
  )}


export default BurgerMenu