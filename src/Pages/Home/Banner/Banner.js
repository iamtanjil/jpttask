import React from "react";
import './Banner.css';
import img1 from '../../../Assests/img-1.jpg'

const Banner = () => {
  return (
    <div className="banner-bg mt-5 p-10 rounded-lg">
      <div className="banner-bg-overlay"></div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.Top Companies are waiting for you. why so late grab your position now.Yes its the perfect time to grab your position. so don't so late. Create an account and grab your dream position at world class IT companies.{" "}
            </p>
            <button className="btn btn-primary">
              Find Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
