import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const MyLoans = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();

    const {isPending, data: myloans = []} = useQuery({
        queryKey: ['myloans', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-loans?email=${user?.email}`);
            return res.data;
        }
    })

     if(isPending){
         return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h3 className="text-3xl">my loans {myloans.length}</h3>
        </div>
    );
};

export default MyLoans;