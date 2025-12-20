import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const AddLoan = () => {
    const axiosSecure = useAxiosSecure();
    const {register, handleSubmit, formState: { errors } } = useForm()
    
    const handleAddLoan = (data) => {
        console.log(data);
        const profileImage = data.image[0];
        const formData = new FormData();
        formData.append('image', profileImage)

        // 2. upload to imgBB using axios and get the url;
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
        // 3. post by axios
        axios.post(image_API_URL, formData)
        .then(res => {
            // console.log('res after image', res.data.data.url);
            data.image = res.data.data.url;

            axiosSecure.post('/addloan', data)
        .then(res => {
            console.log(res.data);
            toast.success("Loan Added Successfully!")
        })
        .catch(error => toast.error(error.message))


        })

        



    }


    return (
        <div>
            <SectionTitle title="Add Loan" subtitle="Add your loan here"></SectionTitle>

        {/* add loan form */}
        <div className='max-w-7xl mx-auto w-2/4'>
          <form onSubmit={handleSubmit(handleAddLoan)}>

           
          
            {/* loan title */}
            <label className="label">Loan Title</label>
            <input type="text" {...register('title')}  className="input w-full" placeholder="Loan Title" />
            {errors.title && <span className='text-sm text-red-500'>This field is required</span>} <br />
              {/* Description */}
            <label className="label">Description</label>
            <input type="text" {...register('shortDesc', { required: true })}  className="input w-full" placeholder="Description" />
             {errors.shortDesc && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* loan category */}
            <label className="label">Loan Category</label>
            <input type="text" {...register('category')} className="input w-full" placeholder="Loan Category" />
            {errors.category && <span className='text-sm text-red-500'>This field is required</span>} <br />
            {/* interest rate */}
             <label className="label">Interest Rate</label>
             <input type="text" {...register('interest')}  className="input w-full" placeholder="Interest Rate" />
             {errors.interest && <span className='text-sm text-red-500'>This field is required</span>} <br />
              {/*Loan limit */}
            <label className="label">Max Loan Limit</label>
            <input type="number" {...register('maxLimit', { required: true })} className="input w-full" placeholder="max Loan Limit" />
             {errors.maxLimit && <span className='text-sm text-red-500'>This field is required</span>} <br />
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