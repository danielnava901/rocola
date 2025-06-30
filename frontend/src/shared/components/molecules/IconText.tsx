const IconText = ({onClick, children, text = '', ...props}) => {
    return <div className="
        flex items-center
        rounded-lg
        px-4
        py-1
    "
    onClick={onClick}
    {...props}
    >
        <div className="
            flex
            items-center
            rounded-lg
            text-gray-600
            hover:text-red-600
            hover:bg-red-50
            transition-colors
            hover:cursor-pointer
            transition-colors
            w-full
            gap-4
            py-2
            px-4
        ">
            {children}
            {text}
        </div>
    </div>
}

export default IconText;