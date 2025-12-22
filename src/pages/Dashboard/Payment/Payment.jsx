import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const Payment = () => {

    const {loanId} = useParams()
    const axiosSecure = useAxiosSecure()

    const {isPending, data: loan} = useQuery({
        queryKey: ['loans', loanId],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payloan/${loanId}`)
            return res.data;
        }
    })


    const handlePayment = async() => {
        const loanInfo = {
            loanAmount: 1000,
            loanTitle: loan.loanTitle,
            applicantsEmail: loan.applicantsEmail,
            loanId: loan.loanId
        }

        const res = await axiosSecure.post('/create-checkout-session', loanInfo)
        console.log(res.data);

        // navigate to the stripe payment page
        window.location.href = res.data.url;

    }




    if(isPending){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h3 className='text-2xl'>Pay $ {loan.loanAmount} for {loan.loanTitle}</h3>
            <button onClick={handlePayment} className='btn btn-primary'>Payment</button>
        </div>
    );
};

export default Payment;