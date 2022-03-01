import useRoom from "../hooks/useRoom";
import "./Header.css";

const Header = ()=>{
    const {room} = useRoom();
    return <div className="header_contain">
        <div className="header">
            <h2>{room}</h2>
        </div>
    </div>
}

export default Header;