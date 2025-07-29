import { useState } from "react";
import { FiUser, FiMail, FiLock, FiTrash2, FiChevronRight, FiHome } from "react-icons/fi";
import Profile from "./Profle";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";
import { motion, AnimatePresence } from "framer-motion";

export default function UserHome() {
  const [activeComponent, setActiveComponent] = useState("profile");

  const menuItems = [
    {
      id: "profile",
      icon: <FiUser className="text-lg" />,
      activeIcon: <FiUser className="text-lg text-blue-600" />,
      label: "Profile",
      component: <Profile />,
    },
    {
      id: "email",
      icon: <FiMail className="text-lg" />,
      activeIcon: <FiMail className="text-lg text-blue-600" />,
      label: "Email",
      component: <ChangeEmail />,
    },
    {
      id: "password",
      icon: <FiLock className="text-lg" />,
      activeIcon: <FiLock className="text-lg text-blue-600" />,
      label: "Password",
      component: <ChangePassword />,
    },
    {
      id: "delete_account",
      icon: <FiTrash2 className="text-lg" />,
      activeIcon: <FiTrash2 className="text-lg text-blue-600" />,
      label: "Delete",
      component: <DeleteAccount />,
    },
  ];

  // Animation variants
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const iconVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen bg-gray-100">
        {/* Left Sidebar */}
        <div className="w-[20%] bg-white shadow-md p-4">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold mb-6 text-gray-800"
          >
            User Settings
          </motion.h1>

          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={`flex items-center justify-between w-full p-3 rounded-lg mb-2 ${activeComponent === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100 text-gray-700"
                }`}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: menuItems.indexOf(item) * 0.1 }}
            >
              <div className="flex items-center">
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </div>
              <FiChevronRight />
            </motion.button>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="w-[80%] px-8">
          <motion.div
            className="bg-white rounded-lg shadow-sm p-6 flex justify-center items-center h-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeComponent}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                {menuItems.find((item) => item.id === activeComponent)?.component}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col h-screen">
        {/* Header */}
        <motion.header
          className="bg-white shadow-sm p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-xl font-bold text-gray-800">User Settings</h1>
        </motion.header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 mt-30">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeComponent}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="mb-16" // Add margin to prevent content from being hidden behind bottom nav
            >
              {menuItems.find((item) => item.id === activeComponent)?.component}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <motion.nav
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex justify-around">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveComponent(item.id)}
                className={`flex flex-col items-center justify-center p-3 w-full ${activeComponent === item.id ? "text-blue-600" : "text-gray-600"
                  }`}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {activeComponent === item.id ? item.activeIcon : item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    </div>
  );
}