import logo from '../assets/logo.svg';

export function Header() {
    return (
        <div className="w-full bg-gray-700 h-2 flex items-center justify-center">
            <img src={logo} alt="" />
        </div>
    )
}

export default Header