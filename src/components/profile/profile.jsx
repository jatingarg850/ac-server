import React from 'react';
import ProfileSection from './profileSection';
import Button from '../commonComponents/button';
import AcList from '../home/aclist';
import CommonCard from '../home/commonCard';

const Profile = () => {
  return (
    <div>
      <div className='common-header'>
        <h1 className="service-heading">
          Your
          <span className='sub-heading'> Profile</span>
        </h1>
      </div>
      <ProfileSection />
      <br />
      <div className='common-header'>
        <h1 className="service-heading">
          Old Listed
          <span className='sub-heading'> AC Products</span>
        </h1>
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
      <div className='common-header'>
        <h1 className="service-heading">
          Old Current
          <span className='sub-heading'> Subscriptons</span>
        </h1>
        <Button text="Upgrade Now" className="default-button" />
      </div>
      <br />
      <div className="no-subscription-container">
        No Subscription Purchased Yet
      </div>
      <CommonCard
        title="Upgrade your subscription to enjoy exclusive benefits!"
        desc="Experience premium features and priority support with our upgraded plans. Don't miss out on the best we have to offer!"
        buttonText="Upgrade Now"
      />
      <br />
    </div>
  );
}

export default Profile;