import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useAuthContext from "../../hooks/useAuthContext";
import useLogout from "../../hooks/useLogout";
import Navig from "../nav/Navig";
import InputBox from "../../components/InputBox";
import "./Home.css";
import Content from "../../components/Content";
import useCollection from "../../hooks/useCollection";

const Home = () => {
  const { user } = useAuthContext();
  const { Logout } = useLogout();
  const navig = useNavigate();
  // console.log(user);
  useEffect(() => {
    if (!user) {
      navig("/");
    }
    
  }, [user]);

  const handleLogout = () => {
    Logout();
  };
  return (
    <div className="home">
      <Navig />
      <div className="content">
        <Header/>
        <Content/>
        <InputBox/>
      </div>
    </div>
  );
};

export default Home;
