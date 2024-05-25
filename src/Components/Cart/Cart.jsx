import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard';

function Cart() {

    const cart = useSelector(state => state.CartReducer.cart);
    console.log(cart);

    return (
        <div className='row mx-5'>
            {
                cart.map((item) => {
                    return <div key={item.id} className='col-3 mt-1'> <CartCard data={item} /></div>
                })
            }
        </div>
    )
}

export default Cart