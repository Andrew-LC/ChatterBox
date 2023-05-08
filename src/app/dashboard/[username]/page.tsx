import SidePane from './SidePane'
import MainPane from './MainPane'

const zoro = {
    user_name: "Zoro",
    last_seen: "10:33"
}

export default async function name({ params }: any) {
    return (
        <div className="h-full w-full flex">
            <SidePane />
            <MainPane user_friend={zoro} />
        </div>
    );
}
