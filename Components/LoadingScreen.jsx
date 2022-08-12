import React from 'react';
import '../Styles/loadingScreen.css';
import {Spinner} from 'react-bootstrap'

const LoadingScreen = () => {
    return (
        <div className='overlay'>
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default LoadingScreen;