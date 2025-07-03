# 🛠️ Helpdesk Web App

A modern, responsive, and role-based Helpdesk Ticket Management System built using **React.js**, **Tailwind CSS**, and **SSR-friendly frontend practices**. This project simulates a real-world enterprise-grade support system with clean UI/UX, scalable architecture, and rich role-based functionality.

---

## 🔍 Overview

> **Helpdesk** allows four types of users to interact with a shared ticketing ecosystem:
- 👤 **User** – Submit and track tickets
- ⚙️ **Operations Team** – Monitor and resolve tickets
- 🛠️ **Technical Support** – Provide fixes and mark ticket status
- 🧑‍💼 **Admin** – Manage users, settings, and view logs

---

## 🎨 Color Palette

| Color Name        | Hex Code  | Used For                          |
|-------------------|-----------|------------------------------------|
| Salmon Pink       | `#F49097` | Error/Warning, Escalated Tickets   |
| Mauve             | `#DFB2F4` | Section Backgrounds                |
| Corn              | `#F5E960` | Alerts, Highlights                 |
| Ghost White       | `#F2F5FF` | Base Background                    |
| Turquoise         | `#55D6C2` | Success Messages, Status Badges   |
| Violet Crayola    | `#963484` | Headers, Icons                     |
| True Blue         | `#3066BE` | Sidebar Icons, Avatar              |
| French Sky Blue   | `#60AFFF` | Tab Indicators, Info Highlight    |
| Capri             | `#28C2FF` | Primary Buttons, CTA               |
| Electric Blue     | `#2AF5FF` | Open Tickets, Accent Tags         |

---

## ✨ Features

- 🧾 **Role-based Dashboards** with colored metric cards & analytics
- 📝 **Ticket Management** (Create, View, Track, Update status)
- 👤 **Editable Profile Pages** and settings for each user
- ⚙️ **Admin Controls**: User management, logs, database view
- 🔒 **Authentication Flow**: Login, Signup, Forgot Password
- 📱 **Fully Responsive** layout with mobile support
- 🧠 **SSR-Ready Architecture**: Simulated data loading + meta tags
- 🎨 **Polished UI** using TailwindCSS and custom design tokens

---

## 🧱 Tech Stack

| Area            | Stack                                 |
|-----------------|----------------------------------------|
| Frontend        | React.js + Tailwind CSS                |
| State Management| Zustand / Context API                  |
| Routing         | React Router v6                        |
| Auth            | JWT or Firebase (optional)             |
| API (optional)  | Axios or Fetch                         |
| Styling         | Tailwind CSS + Custom Theme Colors     |
| Deployment      | Vercel (Frontend), Render (Backend)    |

---

## ⚡ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/VarenyamSharma/helpdesk.git
cd helpdesk
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🚀 Deployment

- You can deploy this project on platforms like **Vercel**, **Netlify**, or **Render**.
- Make sure to configure environment variables if you’re using authentication or backend APIs.

---

## 📁 Folder Structure

```
helpdesk/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── store/
│   └── utils/
├── .env.example
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🧪 Future Enhancements

- [ ] Backend Integration (Node.js/Express or Firebase)
- [ ] Email Notifications
- [ ] Ticket Assignment Logic
- [ ] Dark Mode Support
- [ ] Accessibility Enhancements (WCAG)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
