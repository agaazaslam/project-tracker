export default function Settings() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">⚙️ User Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Email Notifications</span>
          </label>
          <select className="select select-bordered w-full">
            <option>All</option>
            <option>Only Important</option>
            <option>None</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Theme</span>
          </label>
          <select className="select select-bordered w-full">
            <option>System</option>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Change Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="New password"
          />
        </div>
        <button className="btn btn-primary">Save Settings</button>
      </form>
    </div>
  );
}
