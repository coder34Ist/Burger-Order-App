export const initialState = {
    basket:[{state:false,price:0,stateTwo:false}]
};

export  const reducer = (state, action) => {
    
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [action.item],
      }

      case 'REMOVE__BASKET':
          return {...state, basket:[{state:false,price:0,stateTwo:false}]}
  
  

  default:
    return state;}
};


export const newState = {
  lastBasket:[],
  refCode:[]
}

export const reducerr=(state, action) => {
  
switch (action.type) {
  case "ADD__BASKET":
    return    {...state,
      lastBasket:[...state.lastBasket,action.newObject]}
     

    case "ADD__NEW__OPTİON":
      return  {...state,lastBasket:[...state.lastBasket,action.newObject]}


      case'priceAndAmount':
     const lastIndex=state.lastBasket.findIndex((a)=>a.Price[0].refCode===action.code);

     let newState=[...state.lastBasket]
     if(lastIndex>=0)
     {newState[lastIndex].Price[0].price=action.price;
      newState[lastIndex].Order[0].amount=action.amount; 
      
      
      
    }

      return {...state,lastBasket:newState}



      case 'add__refcode':
        return{...state, refCode:[action.id]}



      case'dataSosAdd':
     const lastIndexSos=state.lastBasket.findIndex((a)=>a.Price[0].refCode===action.code);
     let newStateSos=[...state.lastBasket]     
     if(lastIndexSos>=0)
     {const InsideSos=state.lastBasket[lastIndexSos].dataSos.findIndex(b=>b.id===action.id);      
      
      if(InsideSos>=0){
       newStateSos[lastIndexSos].dataSos[InsideSos].price=action.price}
      
      }

      return {...state,lastBasket:newStateSos}


      case'dataEkleAdd':
      const lastIndexEkle=state.lastBasket.findIndex((a)=>a.Price[0].refCode===action.code);
      let newStateEkle=[...state.lastBasket]     
      if(lastIndexEkle>=0)
      {const InsideEkle=state.lastBasket[lastIndexEkle].dataEkle.findIndex(b=>b.id===action.id);      
       
       if(InsideEkle>=0){
        newStateEkle[lastIndexEkle].dataEkle[InsideEkle].price=action.price}
       
       }

       return {...state,lastBasket:newStateEkle}

      case 'REMOVE__ITEM':
       const IndexRemove=state.lastBasket.findIndex((a)=>a.Price[0].refCode===action.refCode);
       let newStateRemove=[...state.lastBasket];
       if(IndexRemove>=0)
       {newStateRemove.splice(IndexRemove,1)}
       return {...state,lastBasket:newStateRemove}




     case 'remove__all':
       return{...state,lastBasket:[]}





 
      




     


default:
  return state;}
};




export const thirdState={Price:[],dataCik:[],dataSos:[],dataEkle:[],Order:[],LastOne:[]}




export const reducerThree=(state,action)=>{
  switch (action.type) {
    case "ADD__BASKET":
      return {
        ...state,
        dataCik:[...state.dataCik,action.dataCik]
      }
      case "REMOVE__BASKET":
        const index = state.dataCik.findIndex(
          (basketItem) => basketItem.id === action.id          
        );

        let newBasket = [...state.dataCik];
      if(index>=0)
      {newBasket.splice(index, 1);}
     
        return {
          ...state,
          dataCik: newBasket
        }
        case "ADD__dataSos":
      return {
        ...state,
        dataSos:[...state.dataSos,action.dataSos]
       
      }
      case "REMOVE__dataSos":
        const indexTwo = state.dataSos.findIndex(
          (basketItem) => basketItem.id === action.id          
        );
        
        let newBasketTwo = [...state.dataSos];
       
      if(indexTwo>=0)
      {newBasketTwo.splice(indexTwo, 1)}
     
        return {
          ...state,
          dataSos: newBasketTwo     
          
        }

        case "ADD__dataEkle":
      return {
        ...state,
        dataEkle:[...state.dataEkle,action.dataEkle]
        
      }
      case "REMOVE__dataEkle":
        const indexThree = state.dataEkle.findIndex(
          (basketItem) => basketItem.id === action.id          
        );
       
        
        let newBasketThree = [...state.dataEkle];
      if(indexThree>=0)
      {newBasketThree.splice(indexThree, 1)}
      
     
        return {
          ...state,
          dataEkle: newBasketThree,
          
        }



        case "ADD__Price":          
       
          return {
            ...state,
            Price:[...state.Price,action.id],
            
          }
        


        case 'remove__price':
          return{
            ...state,
            Price:[],
            Order:[],
            dataCik:[],
            dataSos:[],
            dataEkle:[],
            
          }

          case 'add__order':

          return{...state,Order:[...state.Order,]}




          case 'speacial__State':
            const indexSpecial=state.dataSos.findIndex(
              (itemDataSos)=>itemDataSos.id===action.id
            );
            let newDataSos=[...state.dataSos]
            if(indexSpecial>=0)
            {newDataSos[indexSpecial].price=action.price}


            return{
              ...state,dataSos:newDataSos
            }


            case 'speacial__State__Two':
            const indexSpecialTwo=state.dataEkle.findIndex(
              (itemDataEkle)=>itemDataEkle.id===action.id
            );
            let newDataEkle=[...state.dataEkle]
            if(indexSpecialTwo>=0)
            {newDataEkle[indexSpecialTwo].price=action.price}


            return{
              ...state,dataEkle:newDataEkle
            }


            case 'speacial__State__Price':
            const indexSpecialThree=state.Price.findIndex(
              (itemDataEkle)=>itemDataEkle.id===action.id
            );
            let newDataPrice=[...state.Price]
            if(indexSpecialThree>=0)
            {newDataPrice[indexSpecialThree].price=action.price}


            return{
              ...state,Price:newDataPrice
            }

                
            case 'add__amount':

              return{...state,Order:[{amount:action.id1}]}

        
                     
            case 'lastBasket':
              const lastIndex=state.Price
              return{}
  
  default:
    return state}}

