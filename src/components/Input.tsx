type Input = {
    type: string,
    name?: string,
    value?: string,
    placevalue?: string
}

export default function Input({ type, name, value, placevalue }: Input) {
    return (
        <>
            {type == 'submit' ?
                <input className="p-2 bg-[#fcc785] rounded-md cursor-pointer font-semibold" type={type} name={name} value={value} placeholder={placevalue} /> :
                <input className="p-2 border-2 border-slate-200 rounded-md" type={type} name={name} value={value} placeholder={placevalue} />
            }
        </>
    );
}
