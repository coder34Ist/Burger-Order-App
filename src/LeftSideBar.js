import React,{useState} from 'react';
import  './LeftSideBar.css';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { useEffect } from 'react';
function LeftSideBar() {





const scrollB=()=>{
  document.documentElement.scrollTop=145;
}
const scrollA=()=>{
  document.documentElement.scrollTo(0,1605);

}
const scrollC=()=>{
  document.documentElement.scrollTo(0,2694);

}




  return (
    <div className='left__side__bar'>
      <span className='left__side__bar__span'>Product</span>

      <div onClick={scrollB} className='LeftSideBarOption' >
      < LunchDiningIcon/>
      <span>Burger Menu</span>
    </div>

    <div onClick={scrollA} className='LeftSideBarOption'>
    <span className="material-symbols-outlined">
cookie
</span>
      <span>Snack Menu</span>
    </div>
    <div onClick={scrollC} className='LeftSideBarOption'>
    <span className="material-symbols-outlined">
local_pizza
</span>
      <span>Dessert Menu</span>
    </div>
    
    </div>
  )
}

export default LeftSideBar