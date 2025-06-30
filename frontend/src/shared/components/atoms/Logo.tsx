import logo from '../../../../public/rocola_logo.png';
const Logo = ({onClick}) => {
    return (
        <div className="w-[60px] h-[60px] flex items-center
            cursor-pointer hover:opacity-75"
            onClick={onClick}
        >
            <img src={logo} alt="logo"
                 className="w-full h-full "

            />
            <h1 className="text-2xl font-bold text-red-600">Rocola</h1>
        </div>
    )
}

export default Logo;