import useAuthContext from "../../hooks/useAuthContext";
import useRoom from "../../hooks/useRoom";
import { FiLogOut } from "react-icons/fi";
import "./Navig.css";

const Navig = () => {
  const { user, setUser, AuthIsReady } = useAuthContext();
  const { room, setRoom, allRooms } = useRoom();
  // console.log(user);

  const handleRoomChange = (data) => {
    // console.log("clicked on ", data);
    setRoom(data);
  };

  return (
    <div className="navig">
      <h1 className="app_title">Chatroom.</h1>
      <div className="navig_cont">
        <div className="room_contain">
          {allRooms.map((each) => {
            return (
              <div
                className={room===each.name?"active room":"room"}
                key={each.name}
                onClick={() => {
                  handleRoomChange(each.name);
                }}
              >
                <div className="room_ico">{each.icon}</div>
                <div className="room_name">{each.name}</div>
              </div>
            );
          })}
        </div>

        <div className="prof_cont">
          <img src={user.photoURL} className="dp" />
          <h2 className="name">{user.displayName}</h2>
          <div className="logout_cont">
            <FiLogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navig;
