import React, { useState } from "react";
import Navbar from "../../components/navbar";

const Settings = () => {
  const [username, setUsername] = useState("Mohan Krishna");
  const [email, setEmail] = useState("mohankrishnamohankrishna28@gmail.com");
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <form onSubmit={handleSave} className="space-y-6">
         
          <div className="flex flex-col">
            <label className="mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 text-blue-500 rounded"
            />
            <label>Enable Notifications</label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-2 rounded"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
