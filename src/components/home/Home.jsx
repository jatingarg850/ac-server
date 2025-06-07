import React from 'react';
import '../../../src/index.css'; // Corrected the path to index.css
import Services from './services'; // Fixed the spelling of 'sevices'
import AcList from './aclist'; // Fixed the casing of 'aclist'
import CustomerReviews from './customerReviews'; // Verified the path
import Button from '../commonComponents/button';
import FormCard from './formCard';
import CommonCard from './commonCard';

const Main = () => {
    return (
        <>
            <br />
            <FormCard />
            <br />
            <h1 className="service-heading">
                Our
                <span className='sub-heading'> Services</span>
            </h1>
            <div className='services-block'>
                <Services />
                <Services />
                <Services />
                <Services />
            </div>
            <br />
            <CommonCard
                title="Looking to sell your Old AC!?"
                desc="Get the best price with zero hassle! List your AC in just a few clicks and connect with genuine buyers instantly. Fast, easy, and secure."
                buttonText="Sell Now"
            />
            <br />
            <div className='common-header'>
                <h1 className="service-heading">
                    Old Listed
                    <span className='sub-heading'> AC Products</span>
                </h1>
                <Button text="See All" className="default-button" />
            </div>
            <br />
            <div className='aclist-block'>
                <AcList />
                <AcList />
                <AcList />
                <AcList />
                <AcList />
                <AcList />
            </div>
            <br />
            <CustomerReviews />
            <br />
            <CommonCard
                title="Refer a friend and Get flat 20% off on any of the services!"
                desc="Earn rewards effortlessly! Refer a friend to list their AC with us and both of you get exclusive benefits. Fast, easy, and rewarding."
                buttonText="Refer Now"
            />
            <br />
        </>
    );
};

export default Main;