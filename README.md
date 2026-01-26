# Full Stack React Application

A modern full stack application built with React, TypeScript, Tailwind CSS, PostCSS, and Express.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing with autoprefixer

### Backend
- **Express** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📁 Project Structure

```
CV/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── App.tsx        # Main app component
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Global styles with Tailwind
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
├── server/                 # Backend Express API
│   ├── src/
│   │   └── index.ts       # Server entry point
│   ├── package.json
│   └── tsconfig.json
├── package.json           # Root workspace config
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```
   This will start both the frontend (port 3000) and backend (port 5000) concurrently.

### Individual Commands

- **Frontend only:**
  ```bash
  npm run dev:client
  ```

- **Backend only:**
  ```bash
  npm run dev:server
  ```

- **Build for production:**
  ```bash
  npm run build
  ```

- **Start production server:**
  ```bash
  npm start
  ```

## 🌐 URLs

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **API Health Check:** http://localhost:5000/api/health
- **API Hello Endpoint:** http://localhost:5000/api/hello

## 📝 Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
NODE_ENV=development
```

## 🎨 Tailwind CSS

Tailwind is configured and ready to use. Import styles in your components:

```tsx
import './index.css' // Contains @tailwind directives
```

Use Tailwind utility classes directly in your JSX:

```tsx
<div className="flex items-center justify-center p-4 bg-blue-500">
  Hello World
</div>
```

## 🔧 Customization

### Tailwind Configuration
Edit `client/tailwind.config.js` to customize your design system.

### PostCSS Plugins
Add additional PostCSS plugins in `client/postcss.config.js`.

### API Routes
Add new routes in `server/src/index.ts` or create a routes directory structure.

## 📦 Workspace Management

This project uses npm workspaces to manage both frontend and backend packages from the root. All dependencies are installed at the root level and shared between workspaces.

## 🚀 Deployment

1. Build both applications:
   ```bash
   npm run build
   ```

2. The frontend build will be in `client/dist/`
3. The backend build will be in `server/dist/`

For production deployment, consider:
- Setting up environment variables
- Using a process manager like PM2
- Configuring reverse proxy (nginx)
- Setting up CI/CD pipeline

## 📄 License

MIT

