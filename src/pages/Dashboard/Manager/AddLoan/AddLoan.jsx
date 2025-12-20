import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const AddLoan = () => {

    const {register, handleSubmit, formState: { errors } } = useForm()

    const handleAddLoan = (data) => {
        console.log(data);
    }


    return (
        <div>
            <SectionTitle title="Add Loan" subtitle="Add your loan here"></SectionTitle>

        {/* add loan form */}
        <div className='max-w-7xl mx-auto w-2/4'>
          <form onSubmit={handleSubmit(handleAddLoan)}>

           
          
            {/* loan title */}
            <label className="label">Loan Title</label>
            <input type="text" {...register('loanTitle')}  className="input w-full" placeholder="Loan Title" />
              {/* Description */}
            <label className="label">Description</label>
            <input type="text" {...register('description', { required: true })}  className="input w-full" placeholder="Description" />
             {errors.description && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* loan category */}
            <label className="label">Loan Category</label>
            <input type="text" {...register('category')} className="input w-full" placeholder="Loan Category" />
            {/* interest rate */}
             <label className="label">Interest Rate</label>
             <input type="text" {...register('interestRate')}  className="input w-full" placeholder="Interest Rate" />
              {/*Loan limit */}
            <label className="label">Max Loan Limit</label>
            <input type="number" {...register('maxLoanLimit', { required: true })} className="input w-full" placeholder="max Loan Limit" />
             {errors.maxLoanLimit && <span className='text-sm text-red-500'>This field is required</span>} <br />
              {/* Required Documents */}
            <label className="label">Required Documents</label>
            <input type="text" {...register('requiredDocuments', { required: true })}  className="input w-full" placeholder="Address" />
             {errors.requiredDocuments && <span className='text-sm text-red-500'>This field is required</span>} <br />
           {/* EMI Plans */}
            <label className="label">EMI Plans</label>
            <input type="number" {...register('EMIplans', { required: true })}  className="input w-full" placeholder="EMI plans" />
             {errors.EMIplans && <span className='text-sm text-red-500'>This field is required</span>} <br />
              {/* image */}
                <label className="label font-bold">Image Upload</label>
                <input type="file" {...register("image", {required: true})} className="file-input w-full" placeholder="Image" />
                {errors.image?.type === 'required' && <p className='text-red-500'>Image is required!</p>}
                  {/* input date */}
                <label className="label">Date</label> <br />
                <input type="date" {...register('date', {required: true})} className="input" /> <br />
                {/* toggle for home */}
                 <label className="label">Toggle for Home</label> <br />
                <input {...register('showHome')} type="checkbox" defaultChecked className="toggle" /> <br />  
            
            <input type="submit" className='btn btn-primary w-full my-6' />
            </form>
        </div>

        </div>
    );
};

export default AddLoan;