import React from "react";

interface Message {
  id: number;
  name: string;
  message: string;
  time: string;
}

const ClientMessages: React.FC = () => {
  const messages: Message[] = [
    {
      id: 1,
      name: "Manasseh",
      message: "Hi, I need help with my last order...",
      time: "2m ago",
    },
    {
      id: 1,
      name: "Manasseh",
      message: "Hi, I need help with my last order...",
      time: "2m ago",
    },
  
    {
      id: 1,
      name: "Manasseh",
      message: "Hi, I need help with my last order...",
      time: "2m ago",
    },
  
    {
      id: 1,
      name: "Manasseh",
      message: "Hi, I need help with my last order...",
      time: "2m ago",
    },
  {
      id: 1,
      name: "Manasseh",
      message: "Hi, I need help with my last order...",
      time: "2m ago",
    },
  {
      id: 1,
      name: "Manasseh",
      message: "Hi, I need help with my last order...",
      time: "2m ago",
    },
  {
      id: 1,
      name: "Manasseh",
      message: "Hi, I need help with my last order...",
      time: "2m ago",
    },
  
  
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-[80%] ml-[17%] mt-10">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        Client Messages
      </h3>
      <ul className="divide-y divide-slate-200">
        {messages.map((msg) => (
          <li
            key={msg.id}
            className="py-3 flex items-start justify-between hover:bg-slate-50 rounded-lg px-2"
          >
            <div>
              <p className="font-medium text-slate-700">{msg.name}</p>
              <p className="text-sm text-slate-600 truncate max-w-xs">
                {msg.message}
              </p>
            </div>
            <span className="text-xs text-slate-500">{msg.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientMessages;
