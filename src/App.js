import './App.css';
import Order from './Order';
import Secondiv from './Secondiv';
import {StateProviderTwo} from './StateProviderTwo';
import BurgerSelectMenu from './BurgerSelectMenu';
import {reducerr} from './Reducer';
import {newState} from './Reducer';
import {StateProviderThree} from './StateProviderThree';
import {reducerThree} from './Reducer';
import {thirdState} from './Reducer';
import AppTwo from './AppTwo';
function App({price,id,state,initialState,reducer}) { 
  


  return (
    <div className="App">
      <StateProviderThree  reducerThree={reducerThree}  thirdState={thirdState} >
     <AppTwo/>
     </StateProviderThree>
    </div>
  );
}

export default App;
