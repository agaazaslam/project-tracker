export default function Notifications() {
  const notifications = [
    { text: "Milestone 2 deadline updated", time: "2 hours ago" },
    { text: "File contract.pdf uploaded", time: "5 hours ago" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <div className="space-y-3">
        {notifications.map((note, i) => (
          <div key={i} className="alert alert-info">
            <span>{note.text}</span>
            <span className="ml-auto text-sm opacity-70">{note.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
