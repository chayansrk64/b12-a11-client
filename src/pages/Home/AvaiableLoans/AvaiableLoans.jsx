import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useAxios from "../../../hooks/useAxios";

const AvaiableLoans = () => {
  
  const axios = useAxios()

  const { data: loans = [], isLoading } = useQuery({
    queryKey: ['home-loans'],
    queryFn: async () => {
      const res = await axios.get('/home-loans');
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;


  return (
    <div>
      <SectionTitle title="Available Loans" subtitle="Choose your loans here for your business"></SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {
      loans.map((loan) => (
        <div key={loan.id} className="card bg-base-100  shadow-sm">
          <figure>
            <img
              src={loan.image}
              alt={loan.title}
              className="lg:h-[250px] w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">{loan.title}</h2>
            <p>
             {loan.shortDesc}
            </p>
            <p className="font-bold">
             Max Loan: ${loan.maxLimit}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/loan-details/${loan._id}`} className="btn btn-primary w-full">Loan Details</Link>
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
