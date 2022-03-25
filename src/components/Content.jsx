import { useEffect } from "react";
import useAuthContext from "../hooks/useAuthContext";
import useCollection from "../hooks/useCollection";
import useRoom from "../hooks/useRoom";
import Bubble from "./Bubble";
import "./Content.css";

const Content = () => {
  const { room } = useRoom();
  const { docs, loading } = useCollection(room);
  const { user } = useAuthContext();

  console.log(docs);
  let prev_note;
  let show_name_label;
  return (
    <div className="content_contain">
      <div className="chat_contain">
        {!loading && docs && docs.length == 0 && (
          <div className="lottie_contain">
            <lottie-player
              src="https://assets3.lottiefiles.com/private_files/lf30_zzpi9oza.json"
              background="transparent"
              speed="1"
              style={{ width: "600px", height: "600px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        )}
        {loading && (
          <div className="lottie_contain">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_vpxae5vy.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        )}
        {!loading &&
          docs &&
          docs.map((doc) => {
            if (prev_note) {
              // console.log("previous exists");
              if (prev_note == doc.uid) {
                show_name_label = false;
                // console.log("--------------");
                // console.log("prev ", prev_note);
                // console.log("curr ", doc.uid);
                // console.log("nme hidn: ",doc.msg);
                // console.log("--------------");
              } else {
                show_name_label = true;
                // console.log("--------------");
                // console.log("prev ", prev_note);
                // console.log("curr ", doc.uid);
                // console.log("nme show: ",doc.msg);
                // console.log("--------------");
              }
              prev_note = doc.uid;
            } else {
              // console.log("--------------");
              // console.log("prev doesnt exist");
              // console.log("nme show: ",doc.msg);
              // console.log("--------------");
              prev_note = doc.uid;
              show_name_label = true;
            }
            // console.log("-------------------");
            // console.log("viewer ",user.uid);
            // console.log("creator ",doc.uid);
            // console.log("-------------------");
            return (
              <Bubble
                doc={doc}
                key={doc.id}
                show_name_label={show_name_label}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Content;
