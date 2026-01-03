# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-03

### Added

- **Priority System**: Tasks now support three priority levels (High, Medium,
  Low)
  - Visual priority badges with color coding (red, orange, green)
  - Priority selector in task creation form
  - Click-to-change priority on existing tasks
  - Automatic sorting by priority (high → medium → low)
- **Fully Responsive Design**: Complete mobile, tablet, and desktop support
  - Adaptive layouts for all screen sizes (320px - 1920px+)
  - Fluid typography using CSS clamp()
  - Touch-friendly interface on mobile devices
  - Optimized spacing and component sizing
- **CI/CD Pipeline**: Automated workflows with GitHub Actions
  - Continuous Integration: ESLint, Prettier, TypeScript checks
  - Automated deployment to GitHub Pages
  - Multi-version Node.js testing (18.x, 20.x)
- **Open Source Documentation**:
  - Comprehensive CONTRIBUTING.md guide
  - CODE_OF_CONDUCT.md following Contributor Covenant
  - Detailed CHANGELOG.md
  - Enhanced README with badges and features
- **Improved Accessibility**:
  - ARIA labels on all interactive elements
  - Keyboard navigation support
  - Screen reader announcements
  - Better color contrast (WCAG AA compliant)

### Changed

- Updated TaskItem component to display priority badges
- Enhanced TaskForm with priority selection UI
- Improved TasksContext to handle priority updates
- Refactored CSS for better responsive behavior
- Updated all component styles with mobile-first approach

### Fixed

- Fixed responsive layout issues on mobile devices
- Corrected text overflow in task names
- Improved button spacing on small screens
- Fixed completed tasks section collapsible behavior

## [0.0.1] - 2024

### Initial Release

- Basic todo list functionality
- Add, remove, and toggle tasks
- Filter tasks (all, completed, incomplete)
- Local storage persistence
- React with TypeScript
- Context API for state management
- CSS Modules for styling
- ESLint and Prettier configuration

[1.0.0]: https://github.com/KevOneRedOne/Simplistic-TodoList/releases/tag/v1.0.0
[0.0.1]: https://github.com/KevOneRedOne/Simplistic-TodoList/releases/tag/v0.0.1
