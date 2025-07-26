import { useState } from "react";
import { FiUser, FiMail, FiLock, FiChevronRight } from "react-icons/fi";
import Profile from "./Profle";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

export default function UserHome() {
  const [activeComponent, setActiveComponent] = useState("profile");

  const menuItems = [
    {
      id: "profile",
      icon: <FiUser className="mr-3" />,
      label: "Profile",
      component: <Profile />,
    },
    {
      id: "email",
      icon: <FiMail className="mr-3" />,
      label: "Change Email",
      component: <ChangeEmail />,
    },
    {
      id: "password",
      icon: <FiLock className="mr-3" />,
      label: "Change Password",
      component: <ChangePassword />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-[20%] bg-white shadow-md p-4">
        <h1 className="text-xl font-bold mb-6 text-gray-800">User Settings</h1>
        
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveComponent(item.id)}
            className={`flex items-center justify-between w-full p-3 rounded-lg mb-2 ${
              activeComponent === item.id
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <div className="flex items-center">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <FiChevronRight />
          </button>
        ))}
      </div>

      {/* Right Content Area */}
      <div className="w-[80%] p-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {menuItems.find((item) => item.id === activeComponent)?.component}
        </div>
      </div>
    </div>
  );
}