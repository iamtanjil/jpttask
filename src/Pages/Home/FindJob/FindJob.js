import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyCard from "../../../Components/CompanyCard/CompanyCard";
import JobCard from "../../../Components/JobCard/JobCard";

const FindJob = () => {
  const [tab, setTab] = useState("");

  const fresherJob = [
    {
      companyName: "TSquare IT Services",
      location: "Dhaka, Bangladesh",
      position: "Intern Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://lastfm.freetls.fastly.net/i/u/300x300/4db4a67db4f543c29fe563f5252d1df0.jpg",
    },
    {
      companyName: "Basis IT Services",
      location: "Dhaka, Bangladesh",
      position: "Intern Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://lastfm.freetls.fastly.net/i/u/300x300/4db4a67db4f543c29fe563f5252d1df0.jpg",
    },
    {
      companyName: "NexusHand IT Services",
      location: "Dhaka, Bangladesh",
      position: "Intern Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://lastfm.freetls.fastly.net/i/u/300x300/4db4a67db4f543c29fe563f5252d1df0.jpg",
    },
    {
      companyName: "SoftHub IT Services",
      location: "Dhaka, Bangladesh",
      position: "Intern Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://lastfm.freetls.fastly.net/i/u/300x300/4db4a67db4f543c29fe563f5252d1df0.jpg",
    },
    {
      companyName: "ABC IT Services",
      location: "Dhaka, Bangladesh",
      position: "Intern Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://lastfm.freetls.fastly.net/i/u/300x300/4db4a67db4f543c29fe563f5252d1df0.jpg",
    },
    {
      companyName: "Xyz IT Services",
      location: "Dhaka, Bangladesh",
      position: "Intern Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://lastfm.freetls.fastly.net/i/u/300x300/4db4a67db4f543c29fe563f5252d1df0.jpg",
    },
  ];

  const experienceJob = [
    {
      companyName: "TSquare IT Services",
      location: "Dhaka, Bangladesh",
      position: "Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=2000",
    },
    {
      companyName: "Basis IT Services",
      location: "Dhaka, Bangladesh",
      position: "Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=2000",
    },
    {
      companyName: "NexusHand IT Services",
      location: "Dhaka, Bangladesh",
      position: "Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=2000",
    },
    {
      companyName: "SoftHub IT Services",
      location: "Dhaka, Bangladesh",
      position: "Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=2000",
    },
    {
      companyName: "ABC IT Services",
      location: "Dhaka, Bangladesh",
      position: "Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=2000",
    },
    {
      companyName: "Xyz IT Services",
      location: "Dhaka, Bangladesh",
      position: "Frontend Engineer",
      details:
        "Find world class all level job from our website. we have a lots of reputed company who are still looking for tech guy. We have jobs for fresher, mid-level and expert.",
      logo: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=2000",
    },
  ];

  const topCompany = [
    {
      name: "TSquare IT Services",
      location: "Dhaka,Bangladesh",
      established: 2019,
      logo: "https://lastfm.freetls.fastly.net/i/u/300x300/4db4a67db4f543c29fe563f5252d1df0.jpg",
    },
    {
      name: "TSquare IT Services",
      location: "Dhaka,Bangladesh",
      established: 2019,
      logo: "https://lastfm.freetls.fastly.net/i/u/300x300/4db4a67db4f543c29fe563f5252d1df0.jpg",
    },
    {
      name: "TSquare IT Services",
      location: "Dhaka,Bangladesh",
      established: 2019,
      logo: "https://lastfm.freetls.fastly.net/i/u/300x300/4db4a67db4f543c29fe563f5252d1df0.jpg",
    },
    {
      name: "XYZ IT Services",
      location: "California,USA",
      established: 2019,
      logo: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=2000",
    },
    {
      name: "XYZ IT Services",
      location: "California,USA",
      established: 2019,
      logo: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=2000",
    },
    {
      name: "XYZ IT Services",
      location: "California,USA",
      established: 2019,
      logo: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=2000",
    },
  ];

  return (
    <div className="mt-10 w-full flex items-center justify-center flex-col">
      <h2 className="text-5xl text-center font-medium text-blue-700">
        Find Your Dream Job
      </h2>
      <div className="tabs mt-10 justify-center">
        <Link
          onClick={() => setTab("tab1")}
          className={`tab tab-lg tab-lifted ${
            tab === "tab1" ? "tab-active" : ""
          }`}
        >
          Fresher Job
        </Link>
        <Link
          onClick={() => setTab("tab2")}
          className={`tab tab-lg tab-lifted ${
            tab === "tab2" ? "tab-active" : ""
          }`}
        >
          Experienced Jobs
        </Link>
        <Link
          onClick={() => setTab("tab3")}
          className={`tab tab-lg tab-lifted ${
            tab === "tab3" ? "tab-active" : ""
          }`}
        >
          Top IT Companies
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 w-full">
          {tab === "tab1" ? (
            fresherJob.map((job) => <JobCard job={job}></JobCard>)
          ) : (
            <></>
          )}
          {tab === "tab2" ? (
            experienceJob.map((jobs) => <JobCard job={jobs}></JobCard>)
          ) : (
            <></>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:mx-auto">
          {tab === "tab3" ? (
            topCompany.map((company) => (
              <CompanyCard company={company}></CompanyCard>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindJob;
