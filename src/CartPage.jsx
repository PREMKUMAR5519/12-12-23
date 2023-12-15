import React from 'react'
import { connect } from 'react-redux'
import { incrementQuantity, decrementQuantity } from './actions'

import Card from './Card';
import './CardPage.css'

function CartPage({ cart, tax, totalQuantity, totalPrice, increment, decrement }) {
    return (
        <div>
            <h1 className='heaad'>CART<span class="material-symbols-outlined">shopping_cart
</span></h1>
            
            <div className='container'>
                <div className='box1'>
                    {cart.map((item) => (
                        <Card img={item.images} title={item.title} id={item.id} price={item.price} quantity={item.quantity} increment={increment} description={item.description} decrement={decrement} />
                    ))}
                </div>
                <div className='box2'>
                    <h3 className='summary'>SUMMARY</h3>
                    <pre className='promo'>  DO YOU HAVE ANY PROMO CODE &#11155;</pre>
                    <pre  >  TOTAL QUANTITY:                                 #{totalQuantity}</pre>
                    <pre className='delivery'>  DELIVERY CHARGES :                              Rs.50 </pre>
                    <pre>  CONVENIENCE FEE:                                Rs.{ Math.abs(tax).toFixed(2)}</pre>

                    <pre>  SUBTOTAL                                        Rs.{totalPrice}</pre>
                    <pre>  SUBTOTAL + TAX+DELIVERY CHARGE :                Rs.{totalPrice+tax+50}    </pre>
                    <div className='buttondiv'>
                    <button className='checkout'>CHECKOUT</button>
                    <pre>OR</pre>
                    <button  className='out'><img className='gpay' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png" alt="" />PAY</button>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart,
    totalQuantity: state.totalQuantity,
    totalPrice: state.totalPrice,
    tax: state.tax
});

const mapDispatchToProps = (dispatch) => ({
    increment: (id) => dispatch(incrementQuantity(id)),
    decrement: (id) => dispatch(decrementQuantity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
