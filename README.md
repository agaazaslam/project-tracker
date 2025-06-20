# Project Tracker

This web application is designed to streamline communication and progress tracking between clients and project managers in real-time.

---

## Overview

A web-based platform that enables clients to:

- Track multiple project statuses.
- View project milestones and files.
- Communicate in real-time with project managers.
- Receive updates and manage settings.

---

## Tech Stack

### Frontend

- **React** – Component-based UI library
- **Tailwind CSS** – Utility-first CSS framework
- **DaisyUI** – Component library based on Tailwind for rapid UI development
- **Lucide React** – Icon library for modern UI components
- **React Router** – For SPA page routing

### Backend

- **Node.js & Express** – RESTful APIs
- **MongoDB** – Database
- **Socket.io** – Real-time communication (chat)

---

## Key Features

### Client Dashboard

- List of all client’s projects
- Status badges (In Progress, On Hold, Completed)

### Milestone Tracking

- Show completed, pending, and upcoming phases
- Status + deadline + descriptions

### File Upload/Download

- Upload and download files related to specific projects

### Live Chat (WebSocket powered)

- Chat with project managers in real-time

### Notifications

- Updates for milestone changes, file uploads, and messages

### Authentication

- Login/Register for clients and managers

### Help Page

- Contains FAQs and troubleshooting info

### Settings Page

- Change password, theme, and notification preferences

---

## File Structure Explanation

```bash
.
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
├── src
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components
│   │   ├── Footer.jsx          # Common footer for all pages
│   │   ├── Navbar.jsx          # Top navigation bar with app title and links
│   │   ├── ProjectCard.jsx     # Visual summary of each project
│   │   ├── Sidebar.jsx         # Sidebar navigation for dashboard pages
│   │   └── TopBar.jsx          # Page-specific toolbar (can contain breadcrumbs, filters)
│   ├── layout
│   │   └── layout.jsx          # Combines Navbar and Sidebar for protected routes
│   └── pages
│       ├── Chat.jsx            # Real-time messaging between clients and managers
│       ├── Dashboard.jsx       # Client’s main dashboard with project list
│       ├── Forgot.jsx          # Password reset page (future scope)
│       ├── Help.jsx            # FAQ and support page
│       ├── Home.jsx            # Landing page with app overview
│       ├── IndexPage.jsx       # Redirect/logic handler page (optional)
│       ├── Login.jsx           # Login screen
│       ├── Notifications.jsx   # Notification feed of all alerts
│       ├── Profile.jsx         # User profile and recent activity
│       ├── ProjectDetails.jsx  # In-depth project view with milestones/files/chat
│       ├── ProjectOverview.jsx # Summary + timeline for a project
│       ├── random.js           # Miscellaneous (temporary scripts)
│       ├── Register.jsx        # User signup form
│       └── Settings.jsx        # User preferences like theme, password, etc.
```

---

## API Endpoints (Future Backend Integration)

### Authentication

- `POST /api/auth/login` – User login
- `POST /api/auth/register` – Create new user

### Project Management

- `GET /api/projects` – Fetch all projects
- `GET /api/projects/:id` – Project detail

### Milestones

- `GET /api/projects/:id/milestones` – List of milestones for a project

### File Uploads

- `POST /api/projects/:id/upload` – Upload new file
- `GET /api/projects/:id/files` – List all uploaded files

### Chat System (WebSocket)

- `ws://yourserver.com/chat` – Connect to live chat channel

---

## How to Run Locally

```bash
git clone https://github.com/your-username/project-tracker.git
cd project-tracker
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---
