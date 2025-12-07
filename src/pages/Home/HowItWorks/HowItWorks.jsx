import { FaRegClock } from "react-icons/fa6";
import { GoCheckCircle } from "react-icons/go";
import { LuFileText } from "react-icons/lu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Submit Loan Request",
      desc: "Fill out a simple form with your basic details and choose your loan type.",
      icon: LuFileText,
    },
    {
      id: 2,
      title: "Fast Review & Approval",
      desc: "Our system reviews your request and provides approval decisions quickly.",
      icon: FaRegClock,
    },
    {
      id: 3,
      title: "Receive Your Funds",
      desc: "After approval, your microloan is disbursed instantly to your account.",
      icon: GoCheckCircle,
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        
        <SectionTitle title="How It Works" subtitle=" A simple and transparent process to request, approve, and receive your microloan."></SectionTitle>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-lg transition duration-200 group"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 mb-4 group-hover:scale-110 transition">
                <step.icon className="w-7 h-7 text-primary-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{step.desc}</p>

              <span className="mt-4 inline-block text-primary-600 font-medium group-hover:underline">
                Step {step.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
