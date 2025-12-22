import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h3 className="text-3xl">Payment Cancelled</h3>
            <Link to="/dashboard/my-loans"><button className='btn btn-primary'>Try Again</button></Link>
        </div>
    );
};

export default PaymentCancelled;