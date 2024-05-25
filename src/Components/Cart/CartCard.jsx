import React from 'react'
import { addToCart } from '../../Redux/slices/CartSlice';
import { removeFromCart } from '../../Redux/slices/CartSlice';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import bannerproimg from '../../assets/image2.jpg';

function CartCard({ data }) {
    // console.log(data.name)
    const nav = useNavigate();
    const dispatch = useDispatch();
    function add() {
        // nav(`/userdetails/${data.id}`, { state: data });  
        dispatch(addToCart(data));  
    }
    function remove() {
        // nav(`/userdetails/${data.id}`, { state: data });
        
        dispatch(removeFromCart(data));
    }
   
    return (
       <div className='mycards mt-5'>
        <div className="card" >
            {/* <img className="card-img-top" src={data.thumbnail} /> */}
            <img className="card-img-top" src={data.thumbnail} />
            <img className="card-img-top" src={bannerproimg} />

            <div className="card-body">
                <p className="card-title text-center"><span className='font text-center'></span>{data.name.slice(0, data.name.indexOf('',15))}</p>
                {/* <p className="card-title">  <span className='font'>Notes: </span>{data.notes}</p> */}
                {/* <p className="card-title">  <span className='font'>File: </span>{data.file}</p> */}
                <p className="card-title"><span className='font fw-bold'>السعر: </span> {data.price}</p>
                <p  className="card-title"><span className='font fw-bold' id='qua'>الكمية: </span>{data.quantity}</p>
                {/* <button className="btn btn-primary" onClick={''}>Details</button> */}
                <i  onClick={add}   className="fa-solid fa-cart-plus m-4 text-primary fa-2x "></i>
                {/* <button className="btn btn-primary" onClick={add}>Add</button> */}
                <i onClick={remove}  className="fa-solid fa-trash m-4 text-danger fa-2x "></i>
                {/* <button className="btn btn-primary" onClick={remove}>Remove</button> */}
               
            </div>
            </div>
        </div>
    )
}

export default CartCard