import { fireauth, googleProvider } from "../firebase/fireconfig";
import useAuthContext from "./useAuthContext";

const useSignIn = ()=>{
    const { user, setUser } = useAuthContext();
    const Signin = async () =>{
        try{
            fireauth.signInWithPopup(googleProvider).then((res)=>{
                console.log(res.user);
                setUser(res.user);
            }).catch((err)=>{
                console.log(err)
            })
        }
        catch(err){
            console.log(err)
        }
    }
    return {Signin};
}

export default useSignIn;