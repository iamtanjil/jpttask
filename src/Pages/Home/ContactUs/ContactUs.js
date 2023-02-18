import React from "react";
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-bg p-7 rounded-md mb-3">
      <h2 className="text-2xl font-medium text-blue-600 text-center">
        Contact Us
      </h2>
      <h2 className="text-3xl text-center text-white">
        Stay connected with us
      </h2>
      <form
        className="flex flex-col items-center justify-center mt-5"
      >
        <input
          type="text"
          placeholder="Your Email"
          className="input input-bordered input-sm w-full max-w-xs"
        />
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          className="input input-bordered input-sm w-full mt-3 max-w-xs"
        />
        <textarea
          name="message"
          className="textarea textarea-bordered mt-3 w-80 h-28"
          placeholder="Your Message"
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary mt-6"
        />
      </form>
    </div>
  );
};

export default ContactUs;
