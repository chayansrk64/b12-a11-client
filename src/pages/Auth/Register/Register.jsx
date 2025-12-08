import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const {setLoading, createUser, } = useAuth();
    const {register, formState: {errors}, handleSubmit} = useForm()
    // const location = useLocation();
    // const navigate = useNavigate()
    // console.log('location form register', location);
    // const axiosSecure = useAxiosSecure()



    const handleRegister = data => {
      
       const profileImage = data.photo[0]
       console.log(profileImage);

       createUser(data.email, data.password)
       .then(result => {
         console.log(result.user);
        //  prepare form data for image
        const formData = new FormData()
        formData.append('image', profileImage)

        
       })
    }

    return (
        <div>
            <div className='py-6'>
                <h3 className="text-4xl font-bold">Create an Account</h3>
                <p className='font-semibold py-2'>Register with LoanLink</p>
            </div>
           <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset">
                {/* name */}
                <label className="label font-bold">Name</label>
                <input type="text" {...register("name", {required: true})} className="input w-full" placeholder="Name" />
                {errors.name?.type === 'required' && <p className='text-red-500'>Name is required!</p>}
                {/* photo */}
                <label className="label font-bold">Photo</label>
                <input type="file" {...register("photo", {required: true})} className="file-input w-full" placeholder="Photo" />
                {errors.photo?.type === 'required' && <p className='text-red-500'>Photo is required!</p>}
                {/* email */}
                <label className="label font-bold">Email</label>
                <input type="email" {...register("email", {required: true})} className="input w-full" placeholder="Email" />
                {errors.email?.type === 'required' && <p className='text-red-500'>Email is required!</p>}
                {/* password */}
                <label className="label font-bold">Password</label>
                <input type="password" {...register('password', {required: true, minLength: 6})} className="input w-full" placeholder="Password" />
                {errors.password?.type === 'required' && <p className='text-red-500'>Password is required!</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should be at least 6 character!</p>}

                <button className="btn bg-primary  mt-4">Register</button>
            </fieldset>
           </form>
           <p className='py-3'>Already Have an account? <Link to="/login" state={location.state} className='text-primary underline font-semibold'>Login</Link> </p>
          <div className='text-center'>or</div>
         <div>
            {/* Google */}
            <SocialLogin></SocialLogin>
         </div>
        </div>
    );
};

export default Register;