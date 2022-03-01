import useSignIn from "../../hooks/useSignIn";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Login = () => {

  const {user, setUser, AuthisReady} = useAuthContext();

  const { Signin } = useSignIn();
  const navig = useNavigate();

  const handleLogin = () => {
    Signin();
  };

  useEffect(() => {
    // console.log(user);
    user && navig("/home");
  }, [user]);

  return (
    <div className="login">
      <div className="login_contain">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_5e7wgehs.json"
          background="transparent"
          speed="1"
          style={{ width: "400px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
        <div onClick={handleLogin} className="signin_btn">
          <p className="Gicon">
            <FcGoogle />
          </p>
          Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
