import SectionTitle from "../../../components/SectionTitle/SectionTitle";

export default function CustomerFeedback() {
  const feedbacks = [
    {
      id: 1,
      name: "Rahim Uddin",
      role: "Small Business Owner",
      comment:
        "The loan approval was super fast! I could expand my grocery shop within a week. Highly recommended!",
      image: "https://i.ibb.co.com/N6JdXgxT/demu-user.png",
    },
    {
      id: 2,
      name: "Ayesha Akter",
      role: "Home-Based Entrepreneur",
      comment:
        "Very smooth experience. The microloan helped me start my handmade clothing business.",
      image: "https://i.ibb.co.com/N6JdXgxT/demu-user.png",
    },
    {
      id: 3,
      name: "Mehedi Hasan",
      role: "Freelancer",
      comment:
        "I received the funds instantly after approval. The process is easy and user-friendly.",
      image: "https://i.ibb.co.com/N6JdXgxT/demu-user.png",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Customer Feedback</h2>
          <p className="mt-2 text-gray-600">
            Real stories from real customers who used our microloan services.
          </p>
        </div> */}
        <SectionTitle title="Customer Feedback" subtitle="Real stories from real customers who used our microloan services."></SectionTitle>

        {/* Carousel */}
        <div className="carousel w-full rounded-2xl shadow-lg bg-gray-50">
          {feedbacks.map((fb, i) => (
            <div
              key={fb.id}
              id={`slide${i}`}
              className="carousel-item relative w-full flex flex-col items-center px-8 py-12 text-center"
            >
              <img
                src={fb.image}
                alt={fb.name}
                className="w-[200px] h-[200px] rounded-full object-contain p-2 "
              />

              <p className="text-gray-700 text-lg max-w-2xl italic mb-3">
                “{fb.comment}”
              </p>

              <h3 className="text-lg font-semibold text-gray-900">{fb.name}</h3>
              <span className="text-sm text-gray-500">{fb.role}</span>

              {/* Arrows */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
                <a
                  href={`#slide${i === 0 ? feedbacks.length - 1 : i - 1}`}
                  className="btn btn-circle btn-sm"
                >
                  ❮
                </a>
                <a
                  href={`#slide${i === feedbacks.length - 1 ? 0 : i + 1}`}
                  className="btn btn-circle btn-sm"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
