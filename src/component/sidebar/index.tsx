'use client';
import React, { useState } from 'react';
import {
  FiChevronDown,
  FiChevronRight,
  FiChevronsDown,
  FiChevronsUp,
  FiFileText,
} from 'react-icons/fi';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    'Contract Management': true,
  });
  const [selectedItem, setSelectedItem] = useState('Brand Onboarding');

  const menuItems = [
    {
      title: 'Contract Management',
      icon: <FiFileText className="w-5 h-5 text-blue-600" />,
      items: ['Brand Onboarding', 'Document Review', 'Approvals'],
    },
    {
      title: 'User Management',
      icon: <FiFileText className="w-5 h-5 text-gray-600" />,
      items: ['Add User', 'Roles', 'Permissions'],
    },
    {
      title: 'Settings',
      icon: <FiFileText className="w-5 h-5 text-gray-600" />,
      items: ['General', 'Notifications', 'Security'],
    },
  ];

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="w-64 min-h-screen bg-white">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">EPIG</h2>
        <div className="space-y-1">
          {menuItems.map((menu) => (
            <div key={menu.title}>
              <button
                onClick={() => toggleMenu(menu.title)}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  openMenus[menu.title]
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  {menu.icon}
                  <span className="font-medium">{menu.title}</span>
                </div>
                {openMenus[menu.title] ? (
                  <FiChevronsDown className="w-4 h-4" />
                ) : (
                  <FiChevronsUp className="w-4 h-4" />
                )}
              </button>

              {openMenus[menu.title] && (
                <div className="space-y-1">
                  {menu.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => setSelectedItem(item)}
                      className={`w-full text-left py-2 px-9 transition-colors ${
                        selectedItem === item
                          ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
