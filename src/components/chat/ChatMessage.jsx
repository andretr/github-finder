import React from "react";

function ChatMessage() {
  return (
    <div className="flex mb-4">
      <div className="w-10 h-10 rounded-full bg-gray-400 mr-4"></div>
      <div className="flex flex-col">
        <span className="text-sm font-medium">Sender Name</span>
        <span className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget ligula vitae erat viverra semper vel nec turpis. Donec hendrerit semper lacus, non finibus mi hendrerit at. Duis aliquam suscipit turpis ac malesuada.</span>
        <span className="text-xs text-gray-500 mt-1">12:00 PM</span>
      </div>
    </div>
  );
}

export default ChatMessage;