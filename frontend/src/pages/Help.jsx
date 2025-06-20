export default function HelpPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">❓ Help & FAQ</h2>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium">
          How do I update a milestone?
        </div>
        <div className="collapse-content">
          <p>
            Go to the project details page, find the milestone card, and click
            the edit icon.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium">
          How can I contact support?
        </div>
        <div className="collapse-content">
          <p>You can use the in-app chat or email us at support@obscura.io.</p>
        </div>
      </div>
    </div>
  );
}
