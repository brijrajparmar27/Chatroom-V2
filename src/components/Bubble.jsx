import "./Bubble.css";

const Bubble = ({ doc }) => {
  return (
    <div className="bubble_contain">
      <img src={doc.url} className="dp" />
      <div className="bubble">
        <p className="chat_name">{doc.name}</p>
        <p className="chat_msg">{doc.msg}</p>
      </div>
    </div>
  );
};

export default Bubble;
