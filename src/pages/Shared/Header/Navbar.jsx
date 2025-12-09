import Logo from '../../../components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {

    const {user, setLoading, logOut} = useAuth()
    // console.log(user);

    const handleLogOut = () => {
       logOut()
        .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log out successfull",
          showConfirmButton: false,
          timer: 1500
        });
        setLoading(false)
      })
      .catch(error => Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        }))
    }
    

     const links = (
    <>

    {
      user ? <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-loans">All Loans</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><button onClick={handleLogOut}>LogOut</button></li>
        <li>
           <img className='w-10 h-8 object-cover rounded-full p-0' title={user?.displayName || "User"} src={ user?.photoURL} alt="" />
        </li>
         
      </> 
      :
       <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-loans">All Loans</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>   
      <div className='flex items-center'>
          <input type="checkbox" value="synthwave" className="toggle theme-controller " />
      </div>
      </>
    }
       
    </>
  );


    return (
        <div className='bg-primary text-white'>
            <div className="navbar max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  
</div>
</div>
    );
};

export default Navbar;