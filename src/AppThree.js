import React from 'react'
import Order from './Order';
import Secondiv from './Secondiv';
import BurgerSelectMenu from './BurgerSelectMenu';
import PaymentPage from './PaymentPage';
import './AppThree.css';
import Footer from './Footer';
import {Route,Routes} from 'react-router-dom';
import LastPage from './LastPage';
import FirstPageSecondiv from './FirstPageSecondiv';
import FirstPageFooter from './FirstPageFooter'
function AppThree() {
  return (
    <div className='appThree'>
        <Routes>
          <Route path='/' element={[<LastPage/>,<FirstPageSecondiv/>,<Footer/>]}/>
        <Route path='/Order' element={[<Order/>,<BurgerSelectMenu/>,<Secondiv/>,<Footer/>]} />
         <Route path='/PaymentPage' element={[<PaymentPage/>,<Footer/>]} />  
                      
            
            
        </Routes> 
    

     </div>
  )
}

export default AppThree