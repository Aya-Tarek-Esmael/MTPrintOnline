import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPapers } from '../../Redux/slices/PapersSlice';
import PaperCard from './PaperCard';
import { Link } from 'react-router-dom';
import style from './Papers.module.css';
import LoadingScrean from '../../Components/LoodingScreen/LoodingScreen';
import { addToCart } from '../../Redux/slices/CartSlice';
function Papers() {
    const dispatch = useDispatch();
    const papers = useSelector(state => state.PapersReducer.papers);
    const flag = useSelector(state => state.PapersReducer.loading);

    useEffect(() => {
        dispatch(getPapers());
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
                            <span className="navigation-pipe">&gt;</span> ورقيات
                        </div>
                    </div>
                </div>
                {/* personal cards */}
                {/* <div className='container-fluid d-md-flex flex-wrap col-12'> */}
                    {flag ? (
                     <LoadingScrean/>
                    ) : (
                        <div className='row'>
                            {papers.map((item) => (
                                <div key={item.id} className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                                    <PaperCard data={item} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            {/* </div> */}
        </>
    );
}

export default Papers;
