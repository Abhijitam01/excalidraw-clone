import axios from "axios"
import { BACKEND_URL } from "../../config";

async function getRoomId(slug:string){
  const response =   axios.get(`${BACKEND_URL}/room/${slug}`)
  return (await response).data.room.id ;
}

export default async function ChatRoom({
    params
}:{
    params : {
        slug : string
    }
}) {
    const slug = (await params).slug;
    const roomId = await getRoomId(slug) ;

    return <ChatRoom1 id={roomId}></ChatRoom1>

}