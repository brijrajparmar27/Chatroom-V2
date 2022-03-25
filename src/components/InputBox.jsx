import { IoSend } from "react-icons/io5";
import useAuthContext from "../hooks/useAuthContext";
import "./InputBox.css";
import useRoom from "../hooks/useRoom";
import useCollection from "../hooks/useCollection";

const InputBox = () => {

  const { user } = useAuthContext();
  const {room} = useRoom();
  const {Send} = useCollection(room);

  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newDoc = {
      msg: e.target.newmsg.value,
      name: user.displayName,
      timestamp: date,
      url: user.photoURL,
      uid: user.uid
    };

    Send(newDoc);

    e.target.reset();

  };

  return (
    <div className="inpbox_cont">
      <div className="inputbox">
        <form onSubmit={handleSubmit}>
          <input type="text" name="newmsg" className="msg_inp" />
          <div className="subbtn_cont">
            <button type="submit" className="submit_btn">
              <IoSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputBox;
