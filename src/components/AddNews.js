import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNews = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("general");
  const [region, setRegion] = useState("us");
  const [language, setLanguage] = useState("en");
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addNews = async () => {
    if (!title || !description || !category || !region || !language) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const formData = {
        title,
        description,
        category,
        region,
        language,
        image: imageFile ? imageFile.split(",")[1] : "",
      };
      await axios.post("http://localhost:3011/headlines", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      toast.success("News added successfully");
      setTitle("");
      setDescription("");
      setCategory("general");
      setRegion("us");
      setLanguage("en");
      setImageFile(null);
    } catch (error) {
      toast.error("Failed to add news. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8 relative">
      <div className="w-full max-full bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 space-y-6 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-gray-100 text-center mb-6">
          Add News
        </h2>

        <div className="space-y-6">
          {/* Title and Category on the same line */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-base font-semibold text-gray-300 mb-2">
                Title:
              </label>
              <input
                type="text"
                placeholder="Enter news title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-gray-100 bg-gray-700"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-base font-semibold text-gray-300 mb-2">
                Category:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-gray-100 bg-gray-700"
                required
              >
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="entertainment">Entertainment</option>
                <option value="sports">Sports</option>
                <option value="science">Science</option>
                <option value="world">World</option>
              </select>
            </div>
          </div>

          {/* Region, Language, and Image on the same line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <label className="block text-base font-semibold text-gray-300 mb-2">
                Region:
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-gray-100 bg-gray-700"
                required
              >
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="in">India</option>
                <option value="ca">Canada</option>
              </select>
            </div>

            <div className="relative">
              <label className="block text-base font-semibold text-gray-300 mb-2">
                Language:
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-gray-100 bg-gray-700"
                required
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="es">Spanish</option>
              </select>
            </div>

            <div className="relative">
              <label className="block text-base font-semibold text-gray-300 mb-2">
                Image:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 bg-gray-700"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-base font-semibold text-gray-300 mb-2">
              News Description:
            </label>
            <textarea
              placeholder="Enter news description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-gray-100 bg-gray-700"
              required
            ></textarea>
          </div>

          <button
            onClick={addNews}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add News
          </button>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default AddNews;
