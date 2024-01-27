import ChatList from "@/components/ui/ChatList";

type Props = {
    params:{};
    searchParams: {
        error:string;
    }
};

function chatsPage({searchParams:{error}}:Props) {
  return (
    <div>
      <ChatList/>
    </div>
  )
}

export default chatsPage
