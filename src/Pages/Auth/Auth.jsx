import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import LayOut from "../../Components/LayOut/LayOut";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  // console.log(user);
  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData);
  // console.log(user)

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      // firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/");
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUP: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUP: false });
          navigate("/");
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUP: false });
        });
    }
  };

  // console.log(password, email)

  return (
    <LayOut>
      <section className={classes.login}>
        <Link to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/220px-Amazon_2024.svg.png"
            alt="Amazon-logo"
          />
        </Link>
        {/* form */}
        <div className={classes.login__container}>
          <h1>Sign In</h1>
          {navStateData?.state?.msg && (
            <small
              style={{
                padding: "5px",
                textAlign: "center",
                color: "red",
                fontWeight: "bold",
              }}
            >
              {navStateData?.state?.msg}
            </small>
          )}
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              onClick={authHandler}
              name="signin"
              className={classes.login__signInButton}
            >
              {/* {" "} */}
              {loading.signIn ? (
                <ClipLoader color="#12e6c0" size={15} />
              ) : (
                " Sign In"
              )}
            </button>
          </form>

          {/* agreement */}
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          {/* create account btn */}
          <button
            type="submit"
            name="signup"
            onClick={authHandler}
            className={classes.login__registerButton}
          >
            {/* {" "} */}
            {loading.signUP ? (
              <ClipLoader color="#12e6c0" size={15} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Auth;

// pk_test_51QzHidR0KAhqShitxXfrGHcb4PQxGHSfFWhjECHkyjEFQ8A2epZUeZBJ5yMR1FL6Mz4TnVWcL7Zt5nafKvRwj49g00QX2GOYBM;
// sk_test_51QzHidR0KAhqShitJ91LhQSnDEAwfj7UaiGvoyEJwWPlVLHoeFJo493CxMSKrbKLIMOXkhWtVHsXI1mcuRcVH7Kg00PMInsOxQ;
