import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import AvaiableLoans from '../AvaiableLoans/AvaiableLoans';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const loansPromise = fetch('./loan.json').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
            <AvaiableLoans loansPromise={loansPromise}></AvaiableLoans>
            </Suspense>
        </div>
    );
};

export default Home;