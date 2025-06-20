export function TopBar() {
  return (
    <div className="h-16 bg-gray-700 text-white flex justify-between items-center px-4">
      <input className="bg-gray-600 p-2 rounded" placeholder="Search..." />
      <div className="flex items-center">
        <span className="mr-4">🔔</span>
        <span className="mr-4">👤</span>
      </div>
    </div>
  );
}
export default TopBar;
