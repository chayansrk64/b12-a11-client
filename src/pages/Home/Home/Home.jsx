import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import AvaiableLoans from '../AvaiableLoans/AvaiableLoans';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import HowItWorks from '../HowItWorks/HowItWorks';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import VolunteerSection from '../VolunteerSection/VolunteerSection';
import UpcomingEvents from '../UpComingEvents/UpComingEvents';

const loansPromise = fetch('http://localhost:3000/loans').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
            <AvaiableLoans loansPromise={loansPromise}></AvaiableLoans>
            </Suspense>
            <HowItWorks></HowItWorks>
            <CustomerFeedback></CustomerFeedback>
            <VolunteerSection></VolunteerSection>
            <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default Home;