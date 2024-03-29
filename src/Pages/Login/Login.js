import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../Assests/login.png";
import { AuthProvider } from "../../Context/AuthContext";

const Login = () => {
  const { signIn, setLoading } = useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        if (user) {
          navigate(from, { replace: true });
        } else {
          toast.error("Invalid Login Details");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className="w-full" src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <h2 className="text-3xl text-center mt-5">Login</h2>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-lg">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
            </div>
            <input
              className="btn btn-primary mb-3 mt-7"
              value="Login"
              type="submit"
            />
            <p className="text-lg text-center mb-2">
              New To JPTTask?
              <Link className="link link-primary" to="/signup">
                Sign Up now.
              </Link>
            </p>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
