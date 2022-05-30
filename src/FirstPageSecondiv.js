import React,{useState,useEffect} from 'react';
import './FirstPageSecondiv.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useStateValueTwo } from './StateProviderTwo';
function FirstPageSecondiv() {


const [index,setIndex]=useState(1050);
const [indexNone,setIndexNone]=useState('all 3s');
const [indexTrue,setIndexTrue]=useState(false);
const [getTit,dispatch]=useStateValueTwo();

console.log(index)
let setTrans=()=>{
  setIndexTrue(true);
  if(index<=6300)
  {setIndex((a)=>a+1050)}
 

}
let setTransMinus=()=>{
  setIndex((a)=>a-1050);
  setIndexTrue(true);
  if(index<=0)
  {setIndex(a=>a=0)}

}








const setAll=()=>{
  setIndexTrue(a=>a=false);
  if(index<=0)
  {setIndexNone(a=>a='none');
  setIndex(a=>a=5250);  
setTimeout(()=>{
setIndexNone(a=>a='all 3s')},50);
 }
 if(index>=6300)
 {setIndexNone(a=>a='none');
 setIndex(a=>a=1050);
 setTimeout(()=>{
  setIndexNone(a=>a='all 3s')},50); }

}



const trueORfalse=()=>{

  setIndexTrue(a=>a=true)


}
 


  return (
    <div className='main__div'>
        
        <div className='main__divOne'>
          <button disabled={indexTrue} onClick={setTransMinus} className='button__left'><KeyboardArrowLeftIcon/></button>
          <button  disabled={indexTrue} onClick={setTrans} className='button__right'><ChevronRightIcon/></button>

        <div className='main__divOne_first'  onTransitionEnd={setAll} style={{transform:`translateX(-${index}px)`,  transition:`${indexNone}` }}>
        <div className='slide__inside'><img src='https://i.pinimg.com/736x/58/20/75/58207556a9f0774698ad01cffd5d0ece.jpg' /></div>
        <div className='slide__inside'><img src='https://images.saymedia-content.com/.image/t_share/MTc0Mzc4NTY2MjIwNjUzOTI4/best-burger-restaurant-names.jpg'/></div>
        <div className='slide__inside'><img src='https://images.deliveryhero.io/image/fd-tr/LH/d04k-hero.jpg' /></div>
        <div className='slide__inside'><img src='https://www.mashed.com/img/gallery/discontinued-restaurant-burgers-that-need-to-make-a-comeback/l-intro-1604599081.jpg' /></div>
        <div className='slide__inside'><img src='https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/chilis-oldtimer-with-cheese.jpg' /></div>
        <div className='slide__inside'><img src='https://i.pinimg.com/736x/58/20/75/58207556a9f0774698ad01cffd5d0ece.jpg' /></div>
        <div className='slide__inside'><img src='https://images.saymedia-content.com/.image/t_share/MTc0Mzc4NTY2MjIwNjUzOTI4/best-burger-restaurant-names.jpg'/></div>
        </div >
        


        </div>
        <div className='main__divSecond'>
        <div className='main__divSecond_first'><img src='https://www.ercanburger.com/templates/website/tema-1/assets/images/map_bg2.jpg'/></div>
        <div className='main__divSecond_first'><img src='https://ercansteakhouse.com/images/onlinesp.jpg'/></div>
        <div className='main__divSecond_second'><img src='http://www.efespak.com/wp-content/uploads/2019/03/quality-assurance-testing.png'/></div>
        <div className='main__divSecond_second'><img src='https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc='/></div>
        <div className='main__divSecond_second'><img src='https://icons-for-free.com/download-icon-contact+us+contacts+phone+support+telephone+icon-1320166528627385734_512.png'/></div>
        
        </div>

    </div>
  )
}

export default FirstPageSecondiv