import { useEffect } from "react";
import useCollection from "../hooks/useCollection";
import useRoom from "../hooks/useRoom";
import Bubble from "./Bubble";
import "./Content.css";

const Content = () => {
  const { room } = useRoom();
  const { docs } = useCollection(room);

  console.log(docs);
  return (
    <div className="content_contain">
      <div className="chat_contain">
        {docs &&
          docs.map((doc) => {
            return <Bubble doc={doc} key={doc.id} />;
          })}
      </div>
    </div>
  );
};

export default Content;
