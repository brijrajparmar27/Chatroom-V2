import useAuthContext from "../hooks/useAuthContext";
import "./Bubble.css";

const Bubble = ({ doc, show_name_label }) => {
  const { user } = useAuthContext();
  // console.log(doc.url);
  // console.log(doc.name);
  // console.log(doc.msg);
  let isFirstmsg = show_name_label ? "block" : "none";
  return (
    <div className="bubble_contain">
      {user && <div className={doc.uid === user.uid ? "right" : "left"}>
        <div className="msg_contain">
          <div className="dpimg_contain">
            <img
              src={doc.url}
              className="chat_dp"
              style={{ display: isFirstmsg }}
            />
          </div>

          <div
            className="bubble"
            style={{
              borderBottomLeftRadius: show_name_label ? "0px" : "50px",
              borderBottomRightRadius: show_name_label ? "0px" : "50px",
            }}
          >
            {user && (
              <div>
                <p className="chat_name" style={{ display: isFirstmsg }}>
                  {doc.name}
                </p>
                <p className="chat_msg">{doc.msg}</p>
              </div>
            )}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Bubble;
