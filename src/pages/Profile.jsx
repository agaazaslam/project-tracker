import { useState } from "react";
import { Pencil, Save } from "lucide-react";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Yash Anand",
    email: "yashanand@example.com",
    role: "Client",
    joined: "March 2025",
    bio: "Passionate about building great products!",
    profilePic: "https://img.daisyui.com/images/profile/demo/anakeen@192.webp",
    profilePic2:
      "https://imgs.search.brave.com/oXbTRDTtvPJg7K7-uZOI7wIZFX_QNBURIoFprfal8mQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL3ByZW1p/dW0vdGh1bWIvcHJv/ZmlsZS0zZC1pY29u/LWRvd25sb2FkLWlu/LXBuZy1ibGVuZC1m/YngtZ2x0Zi1maWxl/LWZvcm1hdHMtLXVz/ZXItYXZhdGFyLWFj/Y291bnQtY2hhcmFj/dGVyLXBlcnNvbi1l/c3NlbnRpYWwtb2Jq/ZWN0LXY0LXBhY2st/aW50ZXJmYWNlLWlj/b25zLTEwMzE2MzY3/LnBuZz9mPXdlYnA",
  });

  const [newPic, setNewPic] = useState(null);

  const handleEdit = () => setEditing((prev) => !prev);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewPic(imageUrl);
    }
  };

  return (
    <div className="min-h-screen pt-1 pb-3 bg-base-300">
      <div className="max-w-3xl mx-auto mt-8 bg-base-100 text-base-content p-3 rounded-box shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">User Profile</h2>
          <p className="text-sm text-gray-500">
            Manage your account information
          </p>
        </div>

        {/* Avatar */}
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="profilePic" className="cursor-pointer">
            <img
              src={newPic || profile.profilePic2}
              alt="Profile"
              className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 object-cover"
            />
          </label>
          <input
            type="file"
            id="profilePic"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          <span className="text-sm text-gray-500">Click image to change</span>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            {editing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            ) : (
              <p className="text-lg">{profile.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <p className="text-lg">{profile.email}</p>
          </div>

          {/* Role */}
          <div>
            <label className="label">
              <span className="label-text">Role</span>
            </label>
            <p className="text-lg">{profile.role}</p>
          </div>

          {/* Joined */}
          <div>
            <label className="label">
              <span className="label-text">Joined</span>
            </label>
            <p className="text-lg">{profile.joined}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-4">
          <label className="label">
            <span className="label-text">Bio</span>
          </label>
          {editing ? (
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
            />
          ) : (
            <p className="text-lg">{profile.bio}</p>
          )}
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <button onClick={handleEdit} className="btn btn-primary gap-2">
            {editing ? <Save size={18} /> : <Pencil size={18} />}
            {editing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Recent Activity</h3>
          <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact text-gray-600">
            <li>
              <div className="timeline-middle">📂</div>
              <div className="timeline-end">
                <div className="timeline-title">Uploaded contract.pdf</div>
                <div className="text-sm text-gray-400">2 hours ago</div>
              </div>
            </li>
            <li>
              <div className="timeline-middle">✅</div>
              <div className="timeline-end">
                <div className="timeline-title">
                  Completed "Phase 1" milestone
                </div>
                <div className="text-sm text-gray-400">1 day ago</div>
              </div>
            </li>
            <li>
              <div className="timeline-middle">💬</div>
              <div className="timeline-end">
                <div className="timeline-title">Messaged project manager</div>
                <div className="text-sm text-gray-400">3 days ago</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
