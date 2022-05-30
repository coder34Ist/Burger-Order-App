import React from 'react';
import './SnackMenu.css';
import Cardd from './Cardd';
function SnackMenu() {



  const data=[
    {id:'stick-peynir-kizartma',price:20,tt:'snack',type:'apper',title:'stick-peynir-kizartma',picture:'https://nevco.restapp.com/uploads/13497/775f927b0f9f153dd31efab3b66e1146-thumbnail.jpg'},
    {id:'Soğan Halkası',price:10,type:'apper',tt:'snack',title:`Soğan Halkası`,picture:'https://nevco.restapp.com/uploads/13497/1a3db2a54b5964701c4dba404068d10c-thumbnail.jpg'},
    {id:'Patates Kızartması',price:25,tt:'snack',type:'apper',title:'Patates Kızartması',picture:'https://nevco.restapp.com/uploads/13497/41b39c2b686fdeffa1b93fa517abb624-thumbnail.jpg'},
    {id:'Çıtır Tavuk',price:10,type:'apper',tt:'snack',title:`Çıtır Tavuk`,picture:'https://nevco.restapp.com/uploads/13497/52cdfe69c4f101cf714e001320517bc6-thumbnail.jpg'},
    {id:'Misket Tavuk',price:10,type:'apper',tt:'snack',title:'Misket Tavuk',picture:'https://nevco.restapp.com/uploads/13497/77a0f51a80a1ba8bc8433a27a458f0eb-thumbnail.jpg'},
    {id:'Mix Atıştırma',price:55,type:'dapper',tt:'snack',title:'Mix Atıştırma',picture:'https://nevco.restapp.com/uploads/13497/72e0501cbb5fe52300235ead7dcd4510-thumbnail.jpg'},
    ]
  return (
    <div className='snack__menu'>
        <h1>Snack Menu</h1>        
        {data.map((a)=>{

return <Cardd  tt={a.tt} id={a.id} price={a.price} type={a.type} title={a.title} picture={a.picture}/>

  })}
    </div>
  )
}

export default SnackMenu