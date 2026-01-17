import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";



const faqData = [
  {
    category: "Integration",
    question: "How do I integrate the API into my existing workflow?",
    answer:
      "You can integrate our API by following the documentation provided in your dashboard. We support REST and GraphQL interfaces with comprehensive SDKs for all major programming languages including Python, JavaScript, and Ruby.",
    open: true,
  },
  {
    category: "Security",
    question: "Is my data encrypted and secure on your servers?",
    answer:
      "Absolutely. We use industry-standard AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our infrastructure is SOC2 Type II compliant and regularly audited by third-party security firms.",
  },
  {
    category: "Pricing",
    question: "What payment methods do you accept for subscriptions?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for enterprise accounts. For annual plans, we also support ACH payments.",
  },
  {
    category: "General",
    question: "Is there a free trial available for the Pro plan?",
    answer:
      "Yes, we offer a 14-day full-featured trial for our Pro plan. No credit card is required to start.",
  },
  {
    category: "General",
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "You can change your plan at any point through the billing section of your account. Upgrades apply immediately, downgrades apply next cycle.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark py-16 px-4 md:px-8">
      <main className="w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl flex flex-col md:flex-row min-h-[800px] border border-white/10">

        {/* LEFT PANEL */}
        <div className="md:w-2/5 geometric-bg p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="geometric-shape w-64 h-64 -top-20 -left-20 rotate-12"></div>
          <div className="geometric-shape w-96 h-96 -bottom-32 -right-32 rotate-45 opacity-20"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <div className="size-8 bg-white/20 backdrop-blur-md rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  <IoCallSharp />
                </span>
              </div>
              <span className="text-white font-bold tracking-widest text-sm uppercase">
                Help Center
              </span>
            </div>

            <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Frequently Asked <br />
              <span className="text-white/70">Questions</span>
            </h1>

            <p className="text-white/80 text-lg max-w-sm leading-relaxed">
              Everything you need to know about our platform, security, and
              integration processes in one place.
            </p>
          </div>

          <div className="relative z-10 mt-12 flex flex-col gap-4 text-white/90">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="font-medium">support@prodesign.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">forum</span>
              <span className="font-medium">Live Chat Available 24/7</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:w-3/5 bg-white dark:bg-[#1c2a18] p-8 md:p-16 overflow-y-auto">

          {/* CATEGORY CHIPS */}
          <div className="flex gap-3 mb-10 flex-wrap">
            {["General", "Pricing", "Integration", "Security"].map((item, i) => (
              <div
                key={i}
                className={`flex h-10 items-center justify-center px-6 rounded-full cursor-pointer transition-all
                ${
                  i === 0
                    ? "bg-primary text-background-dark font-bold"
                    : "bg-primary/10 border border-primary/20 text-primary font-semibold hover:bg-primary/20"
                }`}
              >
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>

          {/* FAQ LIST */}
          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => (
              <details
                key={index}
                open={faq.open}
                className="group bg-background-light dark:bg-[#152012]/50 rounded-xl border border-black/5 dark:border-white/5 transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 list-none">
                  <div className="flex flex-col gap-1">
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                      {faq.category}
                    </span>
                    <p className="text-background-dark dark:text-white text-lg font-bold">
                      {faq.question}
                    </p>
                  </div>

                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform group-open:rotate-180">
                    <span className="material-symbols-outlined text-primary">
                     <IoIosArrowUp />
                    </span>
                  </div>
                </summary>

                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-background-dark dark:text-white font-bold text-xl mb-1">
                Still have questions?
              </h3>
              <p className="text-slate-500 text-sm">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
            </div>

            <button className="bg-primary text-background-dark font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 group">
              Contact Support
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
               
               <FaLongArrowAltRight />
              </span>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FAQ;
