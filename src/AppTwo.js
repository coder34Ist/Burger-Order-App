import React from 'react'
import Order from './Order';
import Secondiv from './Secondiv';
import {StateProviderTwo} from './StateProviderTwo';
import BurgerSelectMenu from './BurgerSelectMenu';
import {reducerr} from './Reducer';
import {newState} from './Reducer';
import {StateProviderThree} from './StateProviderThree';
import {reducerThree} from './Reducer';
import {thirdState} from './Reducer';
import AppThree from './AppThree';
function AppTwo() {
  return (    
    <div className='appTwo'> 
    <StateProviderTwo newState={newState} reducerr={reducerr}>
      <AppThree/>
     </StateProviderTwo>
     </div>
   
  )
}

export default AppTwo