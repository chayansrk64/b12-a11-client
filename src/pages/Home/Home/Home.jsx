import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import AvaiableLoans from '../AvaiableLoans/AvaiableLoans';
import HowItWorks from '../HowItWorks/HowItWorks';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import VolunteerSection from '../VolunteerSection/VolunteerSection';
import UpcomingEvents from '../UpComingEvents/UpComingEvents';
import Newsletter from '../../../components/Newsletter/Newsletter';
import FAQ from '../../../components/FAQ/FAQ';
import Statistics from '../../../components/Statistics/Statistics';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <AvaiableLoans ></AvaiableLoans>
           
            <HowItWorks></HowItWorks>
            <CustomerFeedback></CustomerFeedback>
            <VolunteerSection></VolunteerSection>
            <UpcomingEvents></UpcomingEvents>
            <Newsletter></Newsletter>
            <FAQ></FAQ>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;