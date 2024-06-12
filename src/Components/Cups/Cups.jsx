import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCups } from '../../Redux/slices/CupsSlice';
import CupsCard from './CupsCard';
import { Link } from 'react-router-dom';
import LoadingScrean from '../../Components/LoodingScreen/LoodingScreen';
// import { addToCart } from '../../Redux/slices/CartSlice';
function Cups() {
    const dispatch = useDispatch();
    const cups = useSelector(state => state.CupsReducer.cups);
    const flag = useSelector(state => state.CupsReducer.loading);

    useEffect(() => {
        dispatch(getCups());
    }, [dispatch]);

    return (
        <>
            <div className='container-fluid my-5 px-md-5' style={{overflowX:'hidden'}}>
                <div className='me-3'>
                    <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div>
                            <Link className="home" to="/home" title="Return to Home">
                                <i className="fa-solid fa-house text-danger"></i>
                            </Link>
                            <span className="navigation-pipe">&gt;</span> اكواب
                        </div>
                    </div>
                </div>
                {/* personal cards */}
                {/* <div className='container-fluid d-md-flex flex-wrap col-12'> */}
                    {flag ? (
                     <LoadingScrean/>
                    ) : (
                        <div className='row'>
                            {cups.map((item) => (
                                <div key={item.id} className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                                    <CupsCard data={item} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            {/* </div> */}
        </>
    );
}

export default Cups;
