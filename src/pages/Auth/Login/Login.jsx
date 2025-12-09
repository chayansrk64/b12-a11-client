
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {

    const {signInUser, setLoading} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()
    
    const handleLogin = data => {
        signInUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successfull",
                showConfirmButton: false,
                timer: 1500
                });
              setLoading(false)
              navigate(location?.state || '/')
        })
        .catch(error => {
            console.log(error);
             setLoading(false);
                Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Login Failed!",
                text: error.message,
                showConfirmButton: true,
            });
        })
        console.log(data);
       
    }
    
    return (
       <div>
            <div className='py-6'>
                <h3 className="text-4xl font-bold">WelCome Back</h3>
                <p className='font-semibold py-2'>Login with LoanLink</p>
            </div>
           <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">
                    {/* email */}
                <label className="label font-bold">Email</label>
                <input type="email" {...register("email", {required: true})} className="input w-full" placeholder="Email" />
                {errors.email?.type === 'required' && <p className='text-red-500'>Email is required!</p>}
                {/* password */}
                <label className="label font-bold">Password</label>
                <input type="password" {...register("password", {required: true, minLength: 6})} className="input w-full" placeholder="Password" />
                {errors.password?.type === "required" && <p className='text-red-500'>Password is required!</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should at least 6 character!</p>}
                  <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn bg-primary  mt-4">Login</button>
            </fieldset>
           </form>
           <p className='py-3'>Don't have any account? <Link to="/register" state={location.state}  className='text-primary underline font-semibold'>Register</Link> </p>
          <div className='text-center'>or</div>
         <div>
            {/* Google */}
             <SocialLogin></SocialLogin>
         </div>
        </div>
    );
};

export default Login;