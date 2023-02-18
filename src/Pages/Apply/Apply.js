import React from "react";

const Apply = () => {
  const roleData = [
    {
      id: 1,
      role: "admin-officer",
    },
    {
      id: 2,
      role: "Junior-engineer",
    },
    {
      id: 3,
      role: "Senior-engineer",
    },
  ];
  return (
    <div className="p-5">
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <form className="w-full shadow-2xl bg-base-100">
            <h2 className="text-5xl text-blue-600 text-center">Apply Now</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">School</span>
                </label>
                <input
                  type="text"
                  name="school"
                  placeholder="School Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">College</span>
                </label>
                <input
                  type="text"
                  name="college"
                  placeholder="College Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">University</span>
                </label>
                <input
                  type="text"
                  name="university"
                  placeholder="University Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Skills</span>
                </label>
                <input
                  type="text"
                  name="skill"
                  placeholder="Skills Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Experiences</span>
                </label>
                <input
                  type="text"
                  name="experiences"
                  placeholder="Total Experience"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expected Allowance</span>
                </label>
                <input
                  type="text"
                  name="allowance"
                  placeholder="Expected Allowance"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  name="role"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Select Role
                  </option>
                  {roleData.map((data) => (
                    <option value={data.role}>{data.role}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                type="Submit"
                value="Apply Now"
                className="btn btn-primary mx-auto mb-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
