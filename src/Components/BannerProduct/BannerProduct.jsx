import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { addToFav } from '../../Redux/slices/PersonalCardsSlice';
import style from './BannerProduct.module.css'
function BannerProduct({data}) {
    console.log(data);
    const nav = useNavigate();
    const dispatch = useDispatch();
    // function addToFav() {
    //     dispatch(addToFav(data));
        // nav(`/moviedet/${data.id}`, { state: data });
    // }
  return (
    <>
  












</>
 )
}

export default BannerProduct
