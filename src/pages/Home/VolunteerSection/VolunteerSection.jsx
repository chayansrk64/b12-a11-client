import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const VolunteerSection = () => {
  const images = [
    "https://html.dynamiclayers.net/dl/charitify/img/team-1.jpg",
    "https://html.dynamiclayers.net/dl/charitify/img/team-2.jpg",
    "https://html.dynamiclayers.net/dl/charitify/img/team-3.jpg",
    "https://html.dynamiclayers.net/dl/charitify/img/team-4.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50">
        <SectionTitle title="Meet Out Volunteers" subtitle="Help today because tomorrow you may be the one whoneeds more helping!"></SectionTitle>
      <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-center gap-12">

        {/* LEFT — IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 flex-1 mb-10 lg:mb-0">
          {images.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt="Volunteer"
                className="w-full h-60 object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>

        {/* RIGHT — TEXT CONTENT */}
        <div className="flex-1">
         

          <h3 className="text-2xl font-semibold mb-2 text-gray-800">
            Become a Volunteer?
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make in the lives of the poor, abused, and
            the helpless.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 text-xl">✔</span>
              We are friendly to each other.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 text-xl">✔</span>
              If you join us, we will give you free training.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 text-xl">✔</span>
              It’s an opportunity to help poor children.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 text-xl">✔</span>
              No goal requirements.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 text-xl">✔</span>
              Joining is totally free. We don’t need any money from you.
            </li>
          </ul>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-600 transition">
            Join With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
