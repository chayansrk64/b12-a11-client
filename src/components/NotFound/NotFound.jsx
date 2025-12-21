import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full">
        <h1 className="text-7xl font-extrabold text-red-600 mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            ⬅ Go Back
          </button>

          {/* Home Button */}
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            🏠 Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
