import React, { useState, useEffect } from "react";
import axios from "axios";

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHeadlines();
  }, []);

  const fetchHeadlines = async () => {
    try {
      const response = await axios.get("http://localhost:3011/headlines");
      setHeadlines(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching headlines:", error);
      setError("Failed to fetch headlines.");
      setLoading(false);
    }
  };

  const deleteHeadline = async (id) => {
    try {
      await axios.delete(`http://localhost:3011/headlines/${id}`);
      fetchHeadlines(); // Refresh headlines after deletion
    } catch (error) {
      console.error("Error deleting headline:", error);
      setError("Failed to delete headline.");
    }
  };

  if (loading) {
    return <div className="text-center mt-8 text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-8">{error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-800 mt-0 pt-4">
        <div className="container px-4 md:px-16 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Latest <span className="text-blue-500">Headlines</span>
          </h1>
        </div>
      </section>

      {/* Headlines List */}
      <section className="bg-gray-900 py-10">
        <div className="container mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {headlines.length === 0 ? (
            <div className="text-center text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">
                No Headlines Available
              </h2>
              <p className="text-gray-400">
                We currently have no headlines to show. Please check back later.
              </p>
            </div>
          ) : (
            headlines.map((headline) => (
              <div
                key={headline._id}
                className="bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="relative mb-4">
                  {headline.image && (
                    <img
                      src={headline.image}
                      alt="Headline"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  )}
                </div>
                <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                  {headline.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {headline.description}
                </p>
                <p className="text-gray-400">Category: {headline.category}</p>
                <p className="text-gray-400">Region: {headline.region}</p>
                <p className="text-gray-400">Language: {headline.language}</p>
                <button
                  onClick={() => deleteHeadline(headline._id)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Headlines;
