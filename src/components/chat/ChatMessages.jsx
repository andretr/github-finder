import React from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto px-4">
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </div>
  );
}

export default ChatMessages;