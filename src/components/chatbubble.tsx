export default function ChatBubble({ isUser, user_name, message }: any) {
    if (isUser) {
        return (
            <div className="flex flex-col self-end p-3 rounded-lg bg-slate-100">
                <span>{message}</span>
            </div>
        );
    }
    return (
        <div className="flex flex-col self-baseline p-3 rounded-lg bg-slate-100">
            <span>{user_name}</span>
            <span>{message}</span>
        </div>
    );
}
