import { fireauth } from "../firebase/fireconfig";
import useAuthContext from "./useAuthContext"

const useLogout = () =>{
    const { user, setUser, AuthIsReady } = useAuthContext();
    const Logout = async () =>{
        try{
            await fireauth.signOut();
            setUser(null);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    return {Logout};
}

export default useLogout