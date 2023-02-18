import React from "react";

const CompanyCard = ({company}) => {
    const {name, location, established, logo} = company;
    console.log(name);
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{location}</p>
        <p>Established: <b>{established}</b></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
