import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
  const { user, setUser, AuthIsReady } = useContext(AuthContext);
  return { user, setUser, AuthIsReady };
};

export default useAuthContext;
