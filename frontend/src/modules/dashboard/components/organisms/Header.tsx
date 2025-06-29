import UserButton from "@/modules/dashboard/components/molecules/UserButton";

const Header = () => {
    return <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
            Header
        </div>
        <div>
            <UserButton />
        </div>
    </header>
}

export default Header;