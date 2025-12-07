import React, { use } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AvaiableLoans = ({ loansPromise }) => {
  const loans = use(loansPromise);
  return (
    <div>
      <SectionTitle title="Available Loans" subtitle="Choose your loans here for your business"></SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {
      loans.map((loan) => (
        <div key={loan.id} className="card bg-base-100  shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{loan.title}</h2>
            <p>
             {loan.shortDesc}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply for Loan</button>
            </div>
          </div>
        </div>
      ))
      }
    </div>
    </div>
  );
};

export default AvaiableLoans;
