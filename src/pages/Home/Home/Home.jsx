import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import AvaiableLoans from '../AvaiableLoans/AvaiableLoans';
import HowItWorks from '../HowItWorks/HowItWorks';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import VolunteerSection from '../VolunteerSection/VolunteerSection';
import UpcomingEvents from '../UpComingEvents/UpComingEvents';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <AvaiableLoans ></AvaiableLoans>
           
            <HowItWorks></HowItWorks>
            <CustomerFeedback></CustomerFeedback>
            <VolunteerSection></VolunteerSection>
            <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default Home;