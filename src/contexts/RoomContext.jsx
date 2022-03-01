import { createContext, useState } from "react";

import { FaGlobeAmericas } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { MdMovieFilter } from "react-icons/md";
import { GiFeather } from "react-icons/gi";
import { IoNewspaper } from "react-icons/io5";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [room, setRoom] = useState("General");
  const allRooms = [
    {
      name: "General",
      icon: <FaGlobeAmericas />,
    },
    {
      name: "Gaming",
      icon: <IoGameController />,
    },

    {
      name: "Movies",
      icon: <MdMovieFilter />,
    },

    {
      name: "Poetry",
      icon: <GiFeather />,
    },

    {
      name: "Politics",
      icon: <IoNewspaper />,
    },
  ];
  return (
    <RoomContext.Provider value={{ room, setRoom, allRooms }}>
      {children}
    </RoomContext.Provider>
  );
};
