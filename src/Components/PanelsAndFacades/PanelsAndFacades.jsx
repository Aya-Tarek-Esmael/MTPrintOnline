import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPanelsAndFacades } from '../../Redux/slices/PanelsAndFacadesSlice';
import PanelsAndFacadesCard from './PanelsAndFacadesCard';
import LettersCard from './LettersCard';
import { Link } from 'react-router-dom';
// import style from './PanelsAndFacades.module.css';
import LoadingScrean from '../../Components/LoodingScreen/LoodingScreen';
import { addToCart } from '../../Redux/slices/CartSlice';
function PanelsAndFacades() {
    const dispatch = useDispatch();
    const PanelsAndFacades = useSelector(state => state.PanelsAndFacadesReducer.PanelsAndFacades);
    const flag = useSelector(state => state.PanelsAndFacadesReducer.loading);

    useEffect(() => {
        dispatch(getPanelsAndFacades());
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
                            <span className="navigation-pipe">&gt;</span> يفط وواجهات
                        </div>
                    </div>
                </div>
                {/* personal cards */}
                {/* <div className='container-fluid d-md-flex flex-wrap col-12'> */}
                    {flag ? (
                     <LoadingScrean/>
                    ) : (
                        // <div className='row'>
                        //     {PanelsAndFacades.map((item) => (
                        //         <div key={item.id} className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                        //             <LettersCard data={item} />
                        //         </div>
                        //     ))}
                        // </div>
                         <div className='row'>
                       
                             <div  className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                                 <LettersCard  data={PanelsAndFacades} />
                             </div>
                       
                     </div>
                    )}
                </div>
            {/* </div> */}
        </>
    );
}

export default PanelsAndFacades;
