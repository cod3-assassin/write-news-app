import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/SIdebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Headlines from "./pages/Headlines";

import Interests from "./components/Interests";
import AddNewsDetailForm from "./components/AddNews";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Header />

        {/* Main Content Area */}
        <div className="flex-1 w-full">
          {" "}
          {/* 20% width for the sidebar */}
          <main className="pt-16 bg-gray-800 h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/interests" element={<Interests />} />
              {/* <Route path="/news/:id" element={<NewsDetails />} /> */}
              <Route path="/news" element={<AddNewsDetailForm />} />
              <Route path="/allHeadlines" element={<Headlines />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
