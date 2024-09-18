type ButtonCustomProps = {
    onClick?: () => void; 
};

export default function ButtonCustom({ onClick }: ButtonCustomProps) {
    return (
        <button
            className="p-3 shadow-lg rounded-md hover:bg-gray-200 w-[255px] h-[55px] font-bold"
            onClick={onClick} 
        >
            Process
        </button>
    );
}
