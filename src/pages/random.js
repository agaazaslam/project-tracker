      <h1 className="text-2xl font-bold mb-4">Chat</h1>

      <div className="border p-4 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <p key={index} className="mb-2">
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>