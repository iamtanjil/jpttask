import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const {companyName, location, position, logo, details}=job;
  return (
    <div className="flex w-full bg-base-200 p-5 rounded-md">
      <div>
        <div>
          <img className="w-52" src={logo} alt="company logo"></img>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="p-2 border-2 hover:bg-blue-700 hover:text-white cursor-pointer">
            <h2 className="text-sm">React JS</h2>
          </div>
          <div className="p-2 border-2 hover:bg-blue-700 hover:text-white cursor-pointer">
            <h2 className="text-sm">Node JS</h2>
          </div>
          <div className="p-2 border-2 hover:bg-blue-700 hover:text-white cursor-pointer">
            <h2 className="text-sm">Vue JS</h2>
          </div>
        </div>
      </div>
      <div className="ml-3 w-full">
        <div className="flex justify-between w-full">
          <div>
            <h2 className="text-3xl">{companyName}</h2>
            <p className="text-xl mt-2">{location}</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <Link to="/apply" className="btn btn-sm btn-primary m-2">
              Apply Now
            </Link>
            <Link to="/details" className="btn btn-sm btn-primary m-2">
              View Details
            </Link>
          </div>
        </div>
        <p className="text-lg mt-3">{details}</p>
        <p className="text-lg mt-4">
          Position: <b>{position}</b>
        </p>
      </div>
    </div>
  );
};

export default JobCard;
