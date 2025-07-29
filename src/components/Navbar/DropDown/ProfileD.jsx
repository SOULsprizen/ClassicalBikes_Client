import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FiUser, FiSettings, FiLogOut, FiMail } from 'react-icons/fi'
import { useAuth } from '../../../context/AuthContext'
import { Link } from 'react-router-dom';


export default function ProfileD() {

    const { setIsLog, setUserDashboard } = useAuth();
    const LogOutUser = () => {
        setIsLog(false)
        setUserDashboard(false)
    };
    const Data = [
        { name: 'Profile', link: '/profile', icon: <FiUser className="mr-2" /> },
        { name: 'Settings', link: '/user_dashboard', icon: <FiSettings className="mr-2" /> },
        { name: 'Sign Out', Click: LogOutUser, icon: <FiLogOut className="mr-2" /> },
    ]



    return (
        <Menu as="div" className="relative ml-3">
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">

                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                />
            </MenuButton>


            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
                <div className="px-4 py-3 text-sm text-gray-900">
                    <div className="font-medium">Ravi Singh</div>
                    <div className="flex items-center truncate text-gray-500">
                        <FiMail className="mr-2 size-4" />
                        ravisingh@gmail.com
                    </div>
                </div>

                <div className="py-1">
                    {Data.map(({ name, link, icon, Click }, index) => (
                        <MenuItem key={index}
                            onClick={Click}
                        >
                            {({ focus }) => (
                                <Link
                                    to={link}
                                    className={`flex items-center px-4 py-2 text-sm ${focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                        }`}
                                >
                                    {icon}
                                    {name}
                                </Link>
                            )}
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    )
}
