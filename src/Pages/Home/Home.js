import React from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Serveces from './Serveces';

const Home = () => {
    return (
        <div>
            <h1>This is Home page</h1>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Serveces></Serveces>
        </div>
    );
};

export default Home;