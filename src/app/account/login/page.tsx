import Input from "../../../components/Input"

export default function Page() {
    return (
        <div className="bg-[#f5f2ea] flex flex-col items-center justify-center h-full">
            <form className="bg-white flex flex-col justify-center gap-4 rounded-lg w-[400px] h-[400px] p-4" method="submit" action="">
                <h1 className="font-bold text-xl text-center">Login</h1>
                <Input type="text" name="email" placevalue="Enter Email" />
                <Input type="password" name="password" placevalue="Enter Password" />
                <Input type="submit" value="Sign up" />
            </form>
        </div>
    );
}

