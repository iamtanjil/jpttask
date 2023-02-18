import React from "react";
import img1 from "../../../Assests/img-1.jpg";

const About = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img1} className="lg:w-[550px] rounded-lg shadow-2xl" alt="" />
        <div className="ml-16">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            JPTTask was founded to make meaningful connections between job
            seekers and employers. What started as a way to help small
            businesses find great candidates has grown into a leading online
            employment marketplace that connects millions of job seekers with
            companies of all sizes. Our sophisticated AI-matching technology is at the core of everything we do—and by analyzing billions of user interactions, it’s always getting smarter. It improves the job search experience for millions of people every month and helps businesses of all sizes find and hire the right candidates quickly.
          </p>
          <button className="btn btn-primary">Find Your Job</button>
          <button className="btn btn-primary ml-2">Post a Job</button>
        </div>
      </div>
    </div>
  );
};

export default About;
