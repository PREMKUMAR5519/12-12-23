import React from 'react'
import { ProductList } from './ProducList'
import Card from './Card'

function Cart() {
  return (
    <div>
        {ProductList.products.map(item=>(<Card {...item} /> ))}

    </div>
  )
}

export default Cart