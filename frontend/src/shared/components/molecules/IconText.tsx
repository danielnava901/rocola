const IconText = ({onClick, children, text = '', px = "px-4", py = "py-1", ...props}) => {
    return <div className={`
        flex items-center
        rounded-lg
        ${px}
        ${py}
    `}
    onClick={onClick}
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
        "
            {...props}
        >
            {children}
            {text}
        </div>
    </div>
}

export default IconText;