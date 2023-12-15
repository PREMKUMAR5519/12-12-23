export const incrementQuantity=(id)=>({
    type: 'INCREMENT_QUANTITY',payload:{id}
})

export const decrementQuantity =(id)=>({
    type: 'DECREMENT_QUANTITY',payload:{id}
})