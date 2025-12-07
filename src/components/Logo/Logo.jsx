import React from 'react';
import { Link } from 'react-router';
import logoImg from '../../../public/logo-img.png'

const Logo = () => {
    return (
         <Link to="/">
        <div className='flex items-center'>
            <img className='w-12 me-1' src={logoImg} alt="" />
            <h3 className="text-3xl -ms-2 font-bold">Loan<span className='text-neutral'>Link</span></h3>
        </div>
        </Link>
    );
};

export default Logo;