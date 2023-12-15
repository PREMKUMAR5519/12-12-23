import { ProductList } from './ProducList'

const Product1 = ProductList[0]
const Product2 = ProductList[1]
const Product3 = ProductList[2]
const Product4 = ProductList[3]
const Product5 = ProductList[4]

const initialState={
    cart:[
        Product1,Product2,Product3,Product4,Product5
    ],
    totalQuantity:0,
    totalPrice:0,
    tax:0
};
console.log(Product1)

const cartReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'INCREMENT_QUANTITY':
            return incrementQuantity(state,action.payload.id);
        case 'DECREMENT_QUANTITY':
            return decrementQuantity(state,action.payload.id);
        default:
            return state;
    }
}

const incrementQuantity = (state,id)=>{
    const updateCart=state.cart.map((item)=>
    item.id === id ? {...item,quantity: item.quantity +1}: item)

    return {
        ...state,
        cart: updateCart,
        totalQuantity:state.totalQuantity+1,
        totalPrice: state.totalPrice + getItemPrice(state.cart, id),
        tax: getItemPrice(state.cart, id)/100 +state.totalPrice /100
    }
}


const decrementQuantity = (state, id) => {
    const updatedCart = state.cart.map((item) =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
  
    return {
      ...state,
      cart: updatedCart,
      totalQuantity: state.totalQuantity > 0 ? state.totalQuantity - 1 : 0,
      totalPrice: state.totalQuantity > 0 ? state.totalPrice - getItemPrice(state.cart, id) : 0,
      tax: getItemPrice(state.cart, id)/100 -state.totalPrice /100
    };
  };
  
  const getItemPrice = (cart, id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.price : 0;
  };
  
  export default cartReducer;