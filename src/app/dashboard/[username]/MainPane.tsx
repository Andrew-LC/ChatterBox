import { AiOutlineSend } from 'react-icons/ai'
import ChatBubble from '../../../components/chatbubble'

export default function MainPane({ user_friend }: any) {
    return (
        <div className="flex-1 flex flex-col p-4 hidden lg:flex md:flex">
            <div className="rounded-lg p-3 flex items-center gap-2 border-2">
                <div
                    className="bg-slate-300 w-[55px] h-[55px] rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-bold text-lg">{user_friend.user_name}</span>
                    <span>Last seen at {user_friend.laste_seen}</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col-reverse p-2">
                <ChatBubble isUser={true} user_name="Andrew" message="Hello ! 👋" />
                <ChatBubble isUser={false} user_name="Zoro" message="Hello Andrew ! 👋" />
            </div>
            <div className="flex items-center p-2 border-2">
                <input placeholder="Type a message.."
                    className="p-4 flex-1 bg-transparent focus-visible:outline-none"
                />
                <AiOutlineSend size="1.5rem" className="ml-4 cursor-pointer" />
            </div>
        </div>
    );
}
