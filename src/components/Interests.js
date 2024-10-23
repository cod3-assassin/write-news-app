import React, { useState, useEffect } from "react";
import axios from "axios";

const Interests = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(false); // Start with false to show nothing until button is clicked
  const [error, setError] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const response = await axios.get("http://localhost:3011/topics");
      setTopics(response.data);
      console.log("Available topics:", response.data);
    } catch (error) {
      console.error("Error fetching topics:", error);
      setError("Failed to fetch topics.");
    }
  };

  const fetchInterests = async () => {
    try {
      setLoading(true); // Show loading when button is clicked
      console.log("Selected topics:", selectedTopics);
      const response = await axios.post("http://localhost:3011/interests", {
        topics: selectedTopics,
      });
      console.log("Interests response:", response.data);
      setInterests(response.data);
      setLoading(false); // Stop loading after data is fetched
    } catch (error) {
      console.error("Error fetching interests:", error);
      setFetchError("Failed to fetch interests.");
      setLoading(false); // Stop loading in case of error
    }
  };

  const handleTopicChange = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  if (error) {
    return <div className="text-center text-red-600 mt-8">{error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gray-800 py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Your <span className="text-blue-500">Interests</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Discover posts that match your interests and preferences.
          </p>
        </div>
      </section>

      {/* Topics Selection */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Select Your Topics
          </h2>
          <div className="flex flex-wrap gap-4">
            {topics.map((topic) => (
              <label
                key={topic}
                className="flex items-center space-x-2 text-gray-300"
              >
                <input
                  type="checkbox"
                  value={topic}
                  checked={selectedTopics.includes(topic)}
                  onChange={() => handleTopicChange(topic)}
                  className="form-checkbox"
                />
                <span>{topic}</span>
              </label>
            ))}
          </div>
          <button
            onClick={fetchInterests}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            disabled={selectedTopics.length === 0} // Disable button if no topics are selected
          >
            Show Interests
          </button>
        </div>
      </section>

      {/* Interests List */}
      {fetchError && (
        <div className="text-center text-red-600 mt-8">{fetchError}</div>
      )}

      {loading ? (
        <div className="text-center mt-8 text-gray-600">Loading...</div>
      ) : interests.length === 0 && !loading ? (
        <div className="text-center mt-8 text-gray-600">
          No interests available.
        </div>
      ) : (
        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {interests.map((interest) => (
              <div
                key={interest._id}
                className="bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="relative mb-4">
                  {interest.image && (
                    <img
                      src={interest.image}
                      alt="Interest"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  )}
                </div>
                <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                  {interest.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {interest.description}
                </p>
                <p className="text-gray-400">Category: {interest.category}</p>
                <p className="text-gray-400">Region: {interest.region}</p>
                <p className="text-gray-400">Language: {interest.language}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Interests;
