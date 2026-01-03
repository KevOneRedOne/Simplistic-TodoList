# Simplistic-TodoList

[![CI](https://github.com/KevOneRedOne/Simplistic-TodoList/actions/workflows/ci.yml/badge.svg)](https://github.com/KevOneRedOne/Simplistic-TodoList/actions/workflows/ci.yml)
[![Deploy](https://github.com/KevOneRedOne/Simplistic-TodoList/actions/workflows/deploy.yml/badge.svg)](https://github.com/KevOneRedOne/Simplistic-TodoList/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)

A beautiful, simplistic, and efficient todo list application built with modern
web technologies. Stay organized with priority-based task management, responsive
design, and persistent storage.

## 🚀 [Live Demo](https://kevoneredone.github.io/Simplistic-todo-list-vite/)

## ✨ Features

### Core Functionality

- ✅ **Add, Remove, and Toggle Tasks** - Manage your tasks effortlessly
- 🎯 **Priority System** - Organize tasks with three priority levels:
  - 🔴 **High Priority** - Urgent and important tasks
  - 🟡 **Medium Priority** - Standard tasks (default)
  - 🟢 **Low Priority** - Nice-to-have tasks
- 🔄 **Smart Sorting** - Tasks automatically sorted by priority
- 🎨 **Visual Priority Badges** - Color-coded badges for quick identification
- ⚡ **Click-to-Change Priority** - Easily update task priorities
- 🔍 **Filter Tasks** - View all, completed, or incomplete tasks
- 💾 **Persistent Storage** - Tasks saved in browser's local storage
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation

### User Experience

- 🎭 **Collapsible Completed Tasks** - Keep your workspace clean
- 📅 **Completion Timestamps** - Track when tasks were completed
- 🧹 **Clear All Tasks** - Quick cleanup option
- 🎯 **Task Counter** - See your progress at a glance
- 🌊 **Smooth Animations** - Polished user interactions

## 🛠️ Tech Stack

- **[React 18.3](https://reactjs.org/)** - Modern UI library with hooks
- **[TypeScript 5.6](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 5.4](https://vitejs.dev/)** - Lightning-fast build tool
- **[CSS Modules](https://github.com/css-modules/css-modules)** - Scoped styling
- **Context API** - Efficient state management
- **Local Storage API** - Client-side persistence
- **GitHub Actions** - CI/CD automation

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/KevOneRedOne/Simplistic-TodoList.git
cd Simplistic-todo-list-vite
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start development server with hot reload |
| `npm run build`        | Build optimized production bundle        |
| `npm run preview`      | Preview production build locally         |
| `npm run deploy`       | Deploy to GitHub Pages                   |
| `npm run lint`         | Run ESLint to check code quality         |
| `npm run lint:fix`     | Auto-fix ESLint issues                   |
| `npm run prettier`     | Check code formatting                    |
| `npm run prettier:fix` | Auto-format code with Prettier           |
| `npm run type:check`   | Run TypeScript type checking             |
| `npm run type:watch`   | Watch mode for type checking             |

## 🏗️ Project Structure

```
Simplistic-TodoList/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
│       ├── ci.yml          # Continuous Integration
│       └── deploy.yml      # Deployment workflow
├── public/                 # Static assets
│   ├── icon.png
│   └── vite.svg
├── src/
│   ├── assets/             # Images and icons
│   │   └── icon/
│   ├── components/         # React components
│   │   ├── Button/
│   │   ├── CompletedTasks/
│   │   ├── CurrentDate/
│   │   ├── PriorityBadge/  # NEW: Priority badge component
│   │   ├── TaskFilter/
│   │   ├── TaskForm/
│   │   ├── TaskItem/
│   │   ├── TaskList/
│   │   ├── TextInput/
│   │   └── Title/
│   ├── context/            # React Context API
│   │   └── tasksContext.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useTasks.tsx
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   ├── main.tsx            # Application entry point
│   ├── TodoList.tsx        # Main app component
│   └── *.css               # Styling files
├── CHANGELOG.md            # Version history
├── CODE_OF_CONDUCT.md      # Community guidelines
├── CONTRIBUTING.md         # Contribution guide
├── LICENSE                 # MIT License
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 How to Use

### Adding a Task

1. Type your task in the input field
2. Select a priority level (High, Medium, or Low)
3. Click "Do it." or press Enter

### Managing Tasks

- **Complete a task**: Click the ✓ button
- **Uncomplete a task**: Click the ✗ button on completed tasks
- **Change priority**: Click on the priority badge
- **Delete a task**: Click the trash icon
- **Filter tasks**: Use the dropdown to filter by status
- **Clear all**: Click the clear icon to remove all tasks

### Priority Levels

- 🔴 **High**: For urgent and important tasks
- 🟡 **Medium**: For regular tasks (default)
- 🟢 **Low**: For nice-to-have tasks

Tasks are automatically sorted with high priority tasks appearing first.

## 🧪 Advanced Techniques

### Performance Optimization

- **`useMemo`** - Memoizes filtered and sorted task lists
- **`useCallback`** - Prevents unnecessary re-renders of child components
- **React.memo** - Optimizes TaskList component rendering

### State Management

- **Context API** - Centralized task management
- **Local Storage** - Automatic persistence with error handling
- **Optimistic Updates** - Instant UI feedback

### Code Quality

- **TypeScript** - Full type safety
- **ESLint** - Airbnb configuration with TypeScript support
- **Prettier** - Consistent code formatting
- **Husky** - Pre-commit hooks for quality checks

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md)
for details.

### Quick Start for Contributors

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 🗺️ Roadmap

Future enhancements planned:

- [ ] Dark/Light mode toggle
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Drag-and-drop reordering
- [ ] Search functionality
- [ ] Export/Import tasks (JSON, CSV)
- [ ] Subtasks support
- [ ] Multi-language support (i18n)
- [ ] Progressive Web App (PWA)

## 📝 Configuration

### ESLint

The project uses ESLint with Airbnb configuration. See
[eslint.config.js](eslint.config.js).

### Prettier

Code formatting is handled by Prettier. Configuration in `package.json`.

### TypeScript

TypeScript configuration in [tsconfig.json](tsconfig.json) with strict mode
enabled.

## 🚀 Deployment

### GitHub Pages (Automatic)

Push to `main` branch triggers automatic deployment via GitHub Actions.

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

---

**Made with ❤️ by KevOneRedOne**

_Stay organized, stay productive!_
