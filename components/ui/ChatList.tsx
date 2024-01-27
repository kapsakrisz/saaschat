import { authOptions } from "@/auth"
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth"


async function ChatList() {
    const session = await getServerSession(authOptions);
    //const chatsSnapshot = await getDocs(
      //  chatMemberCollectionGroupRef(session?.user.id!)
    //)
  return (
    <div>
      
    </div>
  )
}

export default ChatList
