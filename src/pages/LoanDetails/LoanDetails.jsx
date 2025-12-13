import React from "react";
import { Link, useLoaderData } from "react-router";


const LoanDetails = () => {
  const loan = useLoaderData();
  

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Home / Loans / <span className="text-black">{loan.title}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image Section */}
        <div className="w-full">
          <img
            src={loan.image}
            alt={loan.title}
            className="rounded-xl shadow-lg w-full h-full "
          />
        </div>

        {/* Details Section */}
        <div>
          <h2 className="text-3xl font-bold mb-3">{loan.title}</h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {loan.shortDesc}
          </p>

          {/* Loan Info Box */}
          <div className="bg-gray-50 border rounded-xl p-6 space-y-4 mb-8">
            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Maximum Limit:</p>
              <p className="font-semibold text-gray-900">${loan.maxLimit}</p>
            </div>

            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Tenure:</p>
              <p className="font-semibold text-gray-900">{loan.tenure} Months</p>
            </div>

            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Interest Rate:</p>
              <p className="font-semibold text-gray-900">{loan.interest}</p>
            </div>

            <div className="flex justify-between">
              <p className="font-medium text-gray-700">Category:</p>
              <p className="font-semibold text-gray-900">{loan.category}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link to={`/loan-application/${loan.id}`} className="px-6 py-3 bg-primary text-white font-semibold rounded-md  transition">
              Apply For Loan
            </Link>

            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-100 transition">
              Contact Advisor
            </button>
          </div>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="mt-14 bg-white p-6 border rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Why Choose This Loan?</h3>
        <p className="text-gray-600 leading-relaxed">
          This microloan is specifically created to support small business owners,
          shopkeepers, and local vendors who want to expand operations or need a
          financial boost for daily activities. With flexible repayment options &
          a low-interest structure, it ensures business growth with minimal risk.
        </p>
      </div>
    </div>
  );
};

export default LoanDetails;
