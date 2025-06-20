import { Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Updated the navbar according to requirements", sender: "Yash" },
    { text: "Thanks, looks good!", sender: "You" },
  ]);
  const [input, setInput] = useState("");

  const bottomRef = useRef(null);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-base-100">
      {/* Header */}
      <header className="bg-base-200 px-6 py-4 shadow">
        <h1 className="text-2xl font-bold text-primary">Project Chat</h1>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, index) => {
          const isUser = msg.sender === "You";
          return (
            <div
              key={index}
              className={`chat ${isUser ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="avatar"
                    src={
                      isUser
                        ? "https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                        : "https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    }
                  />
                </div>
              </div>
              <div className="chat-header font-semibold text-sm">
                {msg.sender}
                <time className="ml-2 text-xs text-gray-400">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </div>
              <div
                className={`chat-bubble ${
                  isUser
                    ? "bg-primary text-primary-content"
                    : "bg-base-300 text-base-content"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input Bar */}
      <div className="bg-base-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message…"
            className="input input-bordered w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="btn btn-primary btn-square">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
