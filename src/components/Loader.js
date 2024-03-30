import React from 'react';
import Spinner from "react-bootstrap/Spinner";


export const Loader = ({ isLoading  }) => {
    return (
        <div id="loader" className={`loader ${isLoading ? 'visible' : ''}`}>
        <div className="loader-content">
            <Spinner animation="border" className='loader-spinner'/>
            <p>Cikka Purchase are Processing. Please wait...</p>
        </div>
    </div>
    );
}
