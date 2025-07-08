# Personal Portfolio Website

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Component Details](#component-details)
- [Styling & Theming](#styling--theming)
- [Deployment](#deployment)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

---

## Introduction
This is a fully responsive, multi-page personal portfolio website built with React.js. It is designed to showcase projects, technical skills, and a resume, and can be easily customized for any developer or professional. The project features a modern UI, smooth navigation, and a clean codebase for easy maintenance and extension.

## Features
- Multi-page layout (Home, About, Projects, Resume)
- Responsive design for all devices
- Animated particle background
- Project showcase with live demo and GitHub links
- Downloadable resume (PDF)
- Technical skills and tools section
- Preloader animation
- Scroll-to-top functionality
- Social media links in the footer

## Project Structure
```
Personal_Portfolio/
├── public/
│   ├── favicon.png
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── index.js
│   ├── style.css
│   ├── App.css
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Pre.js
│   │   ├── Particle.js
│   │   ├── ScrollToTop.js
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── Home2.js
│   │   │   └── Type.js
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   ├── AboutCard.js
│   │   │   ├── Techstack.js
│   │   │   ├── Toolstack.js
│   │   │   └── Github.js
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   └── ProjectCards.js
│   │   └── Resume/
│   │       └── ResumeNew.js
│   └── Assets/
│       └── ...
├── package.json
└── README.md
```

## Technology Stack
- **Frontend:** React.js, React-Bootstrap, CSS3
- **Routing:** React Router DOM
- **State Management:** React Hooks
- **PDF Rendering:** @react-pdf/renderer, react-pdf
- **Icons:** react-icons
- **Particle Animation:** react-tsparticles
- **Other Libraries:** axios, typewriter-effect, react-github-calendar

## Installation & Setup
### Prerequisites
- Node.js (v14 or above)
- npm (v6 or above)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Personal_Portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage Guide
- All main components are in `src/components/`.
- Edit content in the Home, About, Projects, and Resume sections to personalize.
- Add or update projects in `src/components/Projects/Projects.js`.
- Update skills and tools in `src/components/About/Techstack.js` and `Toolstack.js`.
- Replace the resume PDF in `src/Assets/` and update the import in `ResumeNew.js`.
- Customize styles in `src/style.css` and `src/App.css`.

## Component Details
- **App.js:** Main entry, handles routing and layout.
- **Navbar.js:** Responsive navigation bar with links to all pages.
- **Footer.js:** Social media links and copyright.
- **Pre.js:** Preloader animation shown on initial load.
- **Particle.js:** Animated background effect.
- **ScrollToTop.js:** Scrolls to top on route change.
- **Home/**: Landing page, introduction, and animated typewriter effect.
- **About/**: About section, skills (`Techstack.js`), tools (`Toolstack.js`), and GitHub calendar.
- **Projects/**: Project showcase with cards, GitHub/demo links, and images.
- **Resume/**: Displays and allows download of a PDF resume.

## Styling & Theming
- Uses CSS custom properties for easy color and theme changes.
- Responsive design with media queries for mobile support.
- Custom styles in `src/style.css` and `src/App.css`.
- Uses Bootstrap for layout and components.

## Deployment
- To build for production:
  ```bash
  npm run build
  ```
- Deploy the contents of the `build/` directory to any static hosting service (e.g., Vercel, Netlify, GitHub Pages).

## Contribution Guidelines
1. Fork the repository and create your branch from `main`.
2. Make your changes and test thoroughly.
3. Submit a pull request with a clear description of your changes.

## License
This project is open source and available under the [MIT License](LICENSE).
