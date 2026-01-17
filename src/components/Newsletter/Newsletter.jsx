import { useState } from "react";
import { toast } from "react-toastify";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }

    // 👉 API call / Firebase / backend logic here
    console.log("Subscribed email:", email);

    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="bg-background-light dark:bg-background-dark font-display transition-colors duration-300 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden rounded-xl bg-white dark:bg-[#1a2617] shadow-2xl">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2 relative geometric-bg overflow-hidden flex items-center justify-center p-12 min-h-[350px]">
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#53d22d" />
                    <stop offset="100%" stopColor="#152012" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                <rect
                  x="50"
                  y="50"
                  width="300"
                  height="300"
                  rx="40"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1"
                  transform="rotate(45 200 200)"
                />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary text-5xl">
                 <MdEmail />
                </span>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">
                Exclusive Updates
              </h3>
              <p className="text-primary/70 max-w-xs mx-auto text-lg">
                Join the most influential network of industry experts and visionaries.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-20">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 max-w-[480px] mx-auto w-full"
            >
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">
                  <span className="w-8 h-[2px] bg-primary" />
                  Newsletter
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Stay in the Loop
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mt-3">
                  Join our community of over 10,000+ professionals and get the latest
                  industry insights delivered weekly.
                </p>
              </div>

              {/* INPUT */}
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none material-symbols-outlined text-slate-400 group-focus-within:text-primary">
                  <MdEmail />
                </span>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full h-14 md:h-16 pl-12 pr-4 bg-slate-100 dark:bg-white/5 focus:ring-2 focus:ring-primary/50 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 transition-all outline-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full h-14 md:h-16 bg-primary hover:bg-primary/90 text-background-dark font-extrabold text-lg rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Subscribe Now</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  <FaLongArrowAltRight />
                </span>
              </button>

              {/* FOOTER */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-[#1a2617] bg-slate-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic">
                  We respect your privacy. Join 10k+ subscribers.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
