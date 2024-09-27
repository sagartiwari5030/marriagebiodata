import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroimg.png'; // Make sure the path is correct
import heroimg1 from '../assets/img1.png';
import heroimg3 from '../assets/img3.png';
import CreateProfile from './CreateProfile';
import bgimg from '../assets/imgbg.png'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-white text-white py-10 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
          {/* Left Side: Text and Buttons */}
          <div className="text-center md:text-left md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-black">Create Your</span> <br />
              <span className="text-pink-500">Marriage Biodata</span>
            </h1>
            <p className="text-base md:text-lg text-black mb-4 md:mb-6">
              Find your perfect match by creating a detailed biodata and browsing through our database of profiles.
            </p>
            <div className="space-x-4">
              <Link to="/create-profile" className="bg-pink-900 text-white px-4 py-2 rounded shadow-md font-semibold">Create Profile</Link>
              <Link to="/profile-list" className="bg-pink-900 text-white px-4 py-2 rounded shadow-md font-semibold">View Profiles</Link>
            </div>
          </div>

          {/* Right Side: Image with Cards */}
          <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
            {/* Background Cards */}
            <img
              src={heroimg1}
              alt="Card 1"
              className="absolute w-40 md:w-50 h-64 md:h-80 rounded-lg shadow-md transform -rotate-12 -left-10 md:-left-20 top-10 z-0"
            />
            <img
              src={heroimg3}
              alt="Card 3"
              className="absolute w-40 md:w-50 h-64 md:h-80 rounded-lg shadow-md transform rotate-3 left-5 md:left-10 top-16 z-0"
            />
            {/* Main Circular Image */}
            <img
              src={heroImage}
              alt="Marriage Hero"
              className="w-60 h-60 md:w-96 md:h-96 rounded-full border-8 border-pink-500 object-cover relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-12 px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-1 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-xl">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">Step 1</h3>
              <p>Create your marriage biodata by filling in your personal, educational, and professional details.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-xl">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">Step 2</h3>
              <p>Select a biodata design from our curated list of templates.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-1 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-xl">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Step 3</h3>
              <p>Enter your Number and get your Biodata PDF on Whatsapp.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Create Profile Section */}
      <div
  className="container mx-auto px-4 md:px-6 lg:px-8 py-12 bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: `url(${bgimg})`, // Path to background image
  }}
>
  <h2 className="text-3xl font-bold text-center mb-8 text-white">Create Your Biodata Now</h2>

  {/* Flex Container for Form and Image */}
  <div className="flex flex-col md:flex-row items-center justify-between rounded-lg shadow-md p-6 md:p-12 bg-opacity-90 space-y-6 md:space-y-0">
    
    {/* 3/4 Width for Form */}
    <div className="w-full md:w-3/4 md:mr-8">
      <CreateProfile />
    </div>

    {/* 1/4 Width for Image */}
    <div className="w-full md:w-1/4 flex justify-center mt-8 md:mt-0">
      <img
        src={heroimg1} // Path to your image
        alt="Profile Image"
        className="w-full h-auto rounded-lg shadow-md object-cover"
      />
    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} MarriageBiodata. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
