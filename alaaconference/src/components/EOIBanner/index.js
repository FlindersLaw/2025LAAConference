import React from 'react';
import './styles.css';

const EOIBanner = () => {
    return (
        <div className="content">
            <h1>Registration Opens Soon!</h1>
            <p>
                Registration for the ALAA 2024 Conference will open soon. Please click
                on the Expression of Interest button below to register your interest in
                the ALAA 2024 Conference.  We will contact you as soon as registration opens.
            </p> 
        </div>
    );
}

export const RegisterBanner = () => {
    return(
        <div className='content'>
            <h1>Registrations are Open!</h1>
            <p>
                Early bird registration for the ALAA 2024 Conference is now open.  Please
                click on the button below to register.
            </p>
        </div>
    )
}

export default EOIBanner;
