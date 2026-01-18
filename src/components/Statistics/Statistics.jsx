import { FaUser } from "react-icons/fa";
import { MdOutlineSupport, MdTask } from "react-icons/md";
import { VscGistSecret } from "react-icons/vsc";



const statsData = [
  {
    icon: <FaUser />,
    label: "Global Users",
    value: "10k+",
    description:
      "Empowering thousands of creators and businesses worldwide.",
  },
  {
    icon: <VscGistSecret />,
    label: "Uptime",
    value: "99.9%",
    description:
      "Reliable infrastructure that keeps your business running 24/7.",
  },
  {
    icon: <MdOutlineSupport />,
    label: "Support",
    value: "24/7",
    description:
      "Dedicated expert assistance whenever you need it most.",
  },
  {
    icon: <MdTask />,
    label: "Completed",
    value: "500+",
    description:
      "Successful projects delivered with precision and care.",
  },
];

const Statistics = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark py-16 font-display">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-2xl border border-black/5 dark:border-white/5">

          {/* LEFT PANEL */}
          <div className="w-full md:w-[40%] geometric-pattern relative flex flex-col justify-center p-12 min-h-[400px]">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 mb-6 bg-white/20 backdrop-blur-md rounded-full text-white">
                <span className="material-symbols-outlined text-3xl">
                  analytics
                </span>
              </div>

              <h2 className="text-white text-5xl font-extrabold leading-tight tracking-tight mb-6">
                Our Impact
              </h2>

              <p className="text-white/90 text-lg font-medium leading-relaxed max-w-sm">
                Measuring our commitment to excellence through real-world data and
                consistent performance across the globe.
              </p>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black/20 pointer-events-none" />
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full md:w-[60%] bg-white dark:bg-[#1c2e17] p-12 flex items-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="flex flex-col gap-3 group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      {stat.icon}
                    </span>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-primary text-5xl font-extrabold tracking-tighter">
                      {stat.value}
                    </h3>
                    <div className="h-1 w-12 bg-primary/20 rounded-full mt-2 group-hover:w-24 transition-all duration-300" />
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Statistics;
