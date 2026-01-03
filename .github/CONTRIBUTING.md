# Contributing to Simplistic-TodoList

Thank you for your interest in contributing to **Simplistic-TodoList**! We
welcome contributions from everyone.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- A GitHub account

### Setup

1. **Fork the repository**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Simplistic-TodoList.git
   cd Simplistic-TodoList
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start development server:**
   ```bash
   npm run dev
   ```

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear, descriptive title
- Steps to reproduce the bug
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node version)

### Suggesting Features

Feature requests are welcome! Please:

- Check if it already exists in issues
- Explain the use case and benefits
- Be open to discussion

### Pull Requests

1. **Create a branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes:**

   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes:**

   ```bash
   git commit -m "feat: add amazing feature"
   ```

   Follow conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`,
   `test:`, `chore:`

5. **Push and create a PR:**
   ```bash
   git push origin feature/your-feature-name
   ```

## Coding Standards

- Use TypeScript for all components
- Follow ESLint and Prettier configurations
- Write semantic, accessible HTML
- Use CSS Modules for styling
- Add meaningful comments for complex logic
- Ensure responsive design (mobile, tablet, desktop)

## Project Structure

```
src/
├── components/     # React components
├── context/        # Context API
├── hooks/          # Custom hooks
├── types/          # TypeScript types
└── assets/         # Images and icons
```

## Questions?

Feel free to open an issue with the `question` label or reach out to the
maintainers.

Thank you for contributing! 🎉
