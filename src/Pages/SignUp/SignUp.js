import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import signImg from '../../Assests/121-1218449_ecommerce-shopping-cart-png-image-background-online-shop.png';
import { AuthProvider } from "../../Context/AuthContext";

const SignUp = () => {
    const {createUser} = useContext(AuthProvider);
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(user => {
            toast.success('Sign up successfully');
            navigate('/');
        })
    }

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className="w-full" src={signImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-3xl text-center mt-5">Sign Up</h2>
          <form
          onSubmit={handleSignUp}
            className="card-body mx-auto p-3"
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-lg">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <span className="label-text mt-2">
                <a href="./">Forget password?</a>
              </span>
              
            </div>
            <input
              className="btn btn-primary mt-5 mb-3"
              value="Sign Up"
              type="submit"
            />
            <p className="text-lg text-center mb-5">
              Already Have An Account?{" "}
              <Link to="/login" className="text-blue-600">
                Login
              </Link>{" "}
              now.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
