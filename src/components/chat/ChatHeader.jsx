import React from "react";

function ChatHeader() {
  return (
    <div className="flex items-center h-16 border-b border-gray-300 px-4">
      <div className="w-12 h-12 rounded-full bg-gray-400 mr-4"></div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold">WhatsApp Web Clone</span>
        <span className="text-sm text-gray-500">Last seen today at 12:00 PM</span>
      </div>
    </div>
  );
}

export default ChatHeader;