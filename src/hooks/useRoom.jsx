import { useContext } from "react"
import { RoomContext } from "../contexts/RoomContext"

const useRoom = ()=>{
    const {room, setRoom, allRooms} = useContext(RoomContext);
    return {room, setRoom, allRooms};
}

export default useRoom;