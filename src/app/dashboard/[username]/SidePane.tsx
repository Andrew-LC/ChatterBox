import { GiHamburgerMenu } from 'react-icons/gi'

export default function SidePane() {
    return (
        <div className="w-full flex flex-col bg-[#f5f2ea] p-2 lg:w-[30%]">
            <div className="bg-[#f4e2b4] border-2 rounded-lg flex justify-between items-center p-4">
                <div
                    className="bg-slate-300 w-[55px] h-[55px] rounded-full"
                />
                <GiHamburgerMenu size="2rem" className="cursor-pointer" />
            </div>
        </div>
    );
}
