# 📋 Task Tracker App

A simple, beginner-friendly task management application built with **vanilla HTML, CSS, and JavaScript**. Designed as a final project for a Software Engineering course, this app demonstrates fundamental front-end development concepts including DOM manipulation, event handling, local storage, and responsive design — without any frameworks or libraries.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Add Task** | Create new tasks via input field (button click or Enter key) |
| **Mark Complete** | Toggle tasks between active and completed states |
| **Delete Task** | Remove tasks permanently from the list |
| **Filter Tasks** | View tasks by category: All, Active, or Completed |
| **Persistent Storage** | Tasks are saved to `localStorage` and survive page reloads |
| **Responsive Design** | Fully responsive layout for desktop and mobile devices |

---

## 🛠️ Tech Stack

| Technology | Role |
|------------|------|
| **HTML5** | Semantic page structure |
| **CSS3** | Styling, animations, responsive layout |
| **JavaScript (ES5+)** | Application logic, DOM manipulation, localStorage API |
| **Google Fonts** | Inter typeface for modern typography |

---

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Git (optional, for cloning)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-tracker-app.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd task-tracker-app
   ```

3. **Open the app**
   ```bash
   # Simply open the HTML file in your browser:
   start src/index.html        # Windows
   open src/index.html          # macOS
   xdg-open src/index.html      # Linux
   ```

   Or drag-and-drop `src/index.html` into your browser window.

---

## 📁 Project Structure

```
task-tracker-app/
├── README.md               # Project documentation
├── src/
│   ├── index.html          # Main HTML page
│   ├── css/
│   │   └── style.css       # All styles (dark theme, animations, responsive)
│   └── js/
│       └── app.js          # Application logic (CRUD, filtering, localStorage)
```

### File Overview

- **`index.html`** — Contains the semantic HTML structure: header, form, filter bar, task list, and empty state.
- **`style.css`** — Implements a dark theme with CSS custom properties, gradient accents, slide-in animations, and mobile-first responsive design.
- **`app.js`** — Manages the task array, renders the DOM, handles user events, and persists data with `localStorage`.

---

## 🗺️ Roadmap

- [x] Add task functionality
- [x] Mark task as completed
- [x] Delete task
- [x] Filter by All / Active / Completed
- [x] Persist tasks with localStorage
- [x] Responsive design
- [ ] Edit task text inline
- [ ] Drag-and-drop reordering
- [ ] Due dates and priority levels
- [ ] Dark / light theme toggle
- [ ] Export / import tasks as JSON
- [ ] Unit tests with Jest

---

## 🔀 Git Workflow

This project follows a simplified **Git Flow** branching strategy suitable for small teams and coursework.

### Branches

| Branch | Purpose |
|--------|---------|
| `main` | Stable, production-ready code |
| `develop` | Integration branch for features in progress |
| `feature/*` | Individual feature branches (e.g., `feature/add-task`) |
| `bugfix/*` | Bug fix branches (e.g., `bugfix/filter-count`) |

### Workflow Steps

1. **Create a feature branch** from `develop`:
   ```bash
   git checkout develop
   git checkout -b feature/your-feature-name
   ```

2. **Make commits** with clear, descriptive messages:
   ```bash
   git add .
   git commit -m "feat: add task filtering by status"
   ```

3. **Push** and **open a Pull Request** to `develop`:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Code review** → merge into `develop`.

5. When ready for release, merge `develop` → `main`.

### Commit Message Convention

Use the [Conventional Commits](https://www.conventionalcommits.org/) format:

| Prefix | Usage |
|--------|-------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | CSS / formatting changes (no logic change) |
| `refactor:` | Code restructuring |

---

## 📊 Self-Assessment Rubric

| Criteria | Weight | Score (1-5) | Notes |
|----------|--------|-------------|-------|
| **Functionality** | 25% | | All CRUD operations and filtering work correctly |
| **Code Quality** | 20% | | Clean, well-commented, beginner-readable code |
| **UI/UX Design** | 15% | | Polished dark theme, animations, responsive layout |
| **Project Structure** | 10% | | Organized file/folder structure with separation of concerns |
| **Documentation** | 10% | | Comprehensive README with setup instructions |
| **Git Usage** | 10% | | Meaningful commits, branching strategy, PR workflow |
| **Creativity & Extras** | 10% | | Custom design, smooth transitions, empty state handling |
| **Total** | **100%** | | |

### Scoring Guide

| Score | Meaning |
|-------|---------|
| 5 | Excellent — exceeds expectations |
| 4 | Good — meets all requirements |
| 3 | Satisfactory — meets most requirements |
| 2 | Needs improvement — partially meets requirements |
| 1 | Unsatisfactory — does not meet requirements |

---

## 📄 License

This project is created for educational purposes as part of a Software Engineering course.

---