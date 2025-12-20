import React from 'react';
import useAuth from '../../hooks/useAuth';
import {  useParams } from 'react-router';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const LoanApplication = () => {
    const {user} = useAuth();
    const { id } = useParams();


    const axiosSecure = useAxiosSecure()

    const {isPending, data: loan} = useQuery({
        queryKey: ['loan', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans/${id}`)
            return res.data;
        }
    })


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
     

    const loanApplicationSubmit = data => {
        data.status = 'pending',
        data.applicationFeeStatus = 'unpaid'
        data.image = loan?.image;
        console.log(data);


        axiosSecure.post('/loans', data)
        .then(res => {
            console.log('after loan application', res.data);
            if(res.data.insertedId){
                toast("Loan Application Successfull")
            }
        })
        .catch(error => {
            console.log(error);
        })


    }

    if(isPending){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <SectionTitle title="Loan Application Form" subtitle="Apply for your loan!"></SectionTitle>

        {/* hook form */}
            <form onSubmit={handleSubmit(loanApplicationSubmit)}>

           
            {/* Applicants email */}
            <label className="label">Applicants Email</label>
            <input type="email" {...register('applicantsEmail')} defaultValue={user?.email} readOnly className="input w-full" placeholder="applicants Email" />
            {/* loan title */}
            <label className="label">Loan Title</label>
            <input type="text" {...register('loanTitle')} defaultValue={loan?.title} readOnly className="input w-full" placeholder="applicants Title" />
            {/* loan category */}
            <label className="label">Loan Category</label>
            <input type="text" {...register('category')} defaultValue={loan?.category} readOnly className="input w-full" placeholder="Loan Category" />
            {/* interest rate */}
             <label className="label">Interest Rate</label>
             <input type="text" {...register('interestRate')} defaultValue={loan?.interest} readOnly className="input w-full" placeholder="applicants Email" />
            {/* applicants fname */}
            <label className="label">First Name</label>
            <input type="text" {...register('fName', { required: true })}  className="input w-full" placeholder="First Name" />
            {errors.fName && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* applicants lname */}
            <label className="label">Last Name</label>
            <input type="text" {...register('lName', {required: true})}  className="input w-full" placeholder="Last Name" />
             {errors.lName && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* contact number */}
            <label className="label">Contact Number</label>
            <input type="number" {...register('contact', {required: true})}  className="input w-full" placeholder="Contact Number" />
             {errors.contact && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* National ID / Passport Number */}
            <label className="label">National ID / Passport Number</label>
            <input type="number" {...register('nid', {required: true})}  className="input w-full" placeholder="National ID / Passport Number" />
             {errors.nid && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* National ID / Passport Number */}
            <label className="label">Income Source</label>
            <input type="text" {...register('incomeSource', { required: true })}  className="input w-full" placeholder="Income Source" />
             {errors.incomeSource && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* Monthly Income */}
            <label className="label">Monthly Income</label>
            <input type="number" {...register('monthlyIncome', { required: true })}  className="input w-full" placeholder="Monthly Income" />
             {errors.monthlyIncome && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/*Loan Amount */}
            <label className="label">Loan Amount</label>
            <input type="number" {...register('loanAmount', { required: true })} className="input w-full" placeholder="Loan Amount" />
             {errors.loanAmount && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* Reason for Loan */}
            <label className="label">Reason for Loan</label>
            <input type="text" {...register('reasonForLoan', { required: true })}  className="input w-full" placeholder="Reason for Loan" />
             {errors.reasonForLoan && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* Address */}
            <label className="label">Address</label>
            <input type="text" {...register('address', { required: true })}  className="input w-full" placeholder="Address" />
             {errors.address && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* Extra Notes */}
            <label className="label">Extra Notes</label>
            <input type="text" {...register('extraNotes', { required: true })}  className="input w-full" placeholder="Extra Notes" />
             {errors.extraNotes && <span className='text-sm text-red-500'>This field is required</span>} <br />
             
            
            <input type="submit" className='btn btn-primary w-full my-6' />
            </form>

        </div>
    );
};

export default LoanApplication;