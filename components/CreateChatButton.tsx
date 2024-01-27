"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { MessageSquarePlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useSubscriptionStore } from '@/store/store'
import { useToast } from './ui/use-toast'
import LoadingSpinner from './ui/LoadingSpinner'



function CreateChatButton({isLarge}:{isLarge?:boolean}) {

const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const subscription = useSubscriptionStore((state) => state.subscription);

    




const createNewChat = async () => {
 if (!session?.user.id) return;

 setLoading(true);
 toast ({
  title:"creating new chat...",
  description:"hold tight while we create your new chat",
  duration:3000,
 });



            router.push("/chat/abc")
    };

if (isLarge)
return (
  <div>
    <Button>
      {loading? <LoadingSpinner/> : "Create a new chat"}
    </Button>
  </div>
)
    





  return (
    <Button onClick={createNewChat} variant={"ghost"}>
        <MessageSquarePlusIcon/>
    
    </Button>
      
    
  )
}

export default CreateChatButton


