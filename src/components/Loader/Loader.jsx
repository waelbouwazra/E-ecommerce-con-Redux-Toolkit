import React from 'react';
import "./index.scss";
import { loader } from "../../utils/images";

const Loader = () => {
    return (
        <div className='container'>
            <div className='loader flex justify-center align-center'>
                <img src={loader} alt="Carga" />
            </div>
        </div>
    )
}

export default Loader