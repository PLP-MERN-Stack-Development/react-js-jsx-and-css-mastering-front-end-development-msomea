# 🎨 Week 3 – React.js, JSX, and Tailwind CSS Project

## 🚀 Objective
Build a responsive React application using **Vite** and **Tailwind CSS** that demonstrates component architecture, state management with hooks, and local data persistence.

---

## 🧩 Features

- ⚛️ **React + Vite** fast-refresh development
- 🎨 **Tailwind CSS** responsive styling
- 🧠 **State Management** using `useState`, `useEffect`, `useContext`
- 💾 **LocalStorage Persistence** via a custom hook
- 📋 **Task Manager** with Add / Complete / Delete / Filter
- 🔍 **Search and Pagination**
- 🌗 **Dark / Light Theme Toggle**
- 🧱 **Reusable Components**: Button, Card, Navbar, Footer
- 📱 Fully responsive layout (mobile → desktop)

---

## 📂 Project Structure
        
            src/
            ├── components/
            │ ├── ui/
            │ │ ├── Button.jsx
            │ │ ├── Card.jsx
            │ │ └── ...
            │ ├── Navbar.jsx
            │ └── Footer.jsx
            │
            ├── features/
            │ ├── TaskManager.jsx
            │ └── Tasks.jsx
            │
            ├── hooks/
            │ └── useLocalStorage.js
            │
            ├── App.jsx
            ├── main.jsx
            └── index.css
        


## ⚙️ Setup & Installation

### Clone the Repository
```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-msomea.gitweek3-react-tailwind.git
```

### Enter project directory
```

cd week3-react-tailwind
```

### Install Dependents
```
npm install
```

### Ren Server
```
npm run dev
```

## 🏗️ Build for Production
```
npm run build
```
## 🌐 Deploy to GitHub Pages
### Install GitHub Pages Package
```
npm install gh-pages --save-dev
```

### Edit package.json
```
"homepage": "https://<your-username>.github.io/week3-react-tailwind/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Run Deploy
``
npm run deploy
```

### Live Link

