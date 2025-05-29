# Lecture 1 – React Basics: JSX, Components, and Portfolio Layout

This lecture covers JSX, components, props, and setting up the structure of a basic portfolio website.

---

### Step 1: Create a React App

1. Open terminal and run:

    ```bash
    mkdir firstapp
    cd firstapp
    npx create-react-app .
    ```

2. Once setup is complete, remove boilerplate:
    - Delete: `App.css`, `logo.svg`, `reportWebVitals.js`, `setupTests.js`
    - Clean `App.js` and `index.js` for a fresh start

---

### Step 2: Write Your First JSX

Edit `src/App.js` with the following:

```jsx
function App() {
  const name = "Ronit";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is JSX in action.</p>
    </div>
  );
}

export default App;
```

---

### Step 3: Run the App

Start the development server:

```bash
npm start
```

Open your browser and visit:

```
http://localhost:3000
```

---

### Step 4: Create a Functional Component

Create `src/components/Navbar.js`:

```jsx
function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <h2>My Portfolio</h2>
    </nav>
  );
}

export default Navbar;
```

---

### Step 5: Use Navbar in App

Edit `src/App.js`:

```jsx
import Navbar from './components/Navbar';

function App() {
  const name = "Ronit";
  return (
    <div>
      <Navbar />
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default App;
```

---

### Step 6: Props with ProjectCard

Create `src/components/ProjectCard.js`:

```jsx
function ProjectCard({ title, description }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
```

Use in `App.js`:

```jsx
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Projects</h1>
      <ProjectCard title="Portfolio Site" description="A React-based portfolio site" />
      <ProjectCard title="ToDo App" description="A simple task manager using React" />
    </div>
  );
}

export default App;
```

---

### Step 7: Add Static Sections (Hero, About, Footer)

Create `src/components/Hero.js`:

```jsx
function Hero() {
  return (
    <section>
      <h1>Hello, I’m Ronit 👋</h1>
      <p>I'm a Web Developer passionate about building beautiful UIs.</p>
    </section>
  );
}

export default Hero;
```

Create `src/components/About.js`:

```jsx
function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>I love coding, design, and building cool stuff.</p>
    </section>
  );
}

export default About;
```

Create `src/components/Footer.js`:

```jsx
function Footer() {
  return (
    <footer>
      <p>© 2025 Ronit. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
```

---

### Step 8: Final App.js

```jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <h2>Projects</h2>
      <ProjectCard title="Portfolio Site" description="A React-based portfolio site" />
      <ProjectCard title="ToDo App" description="A simple task manager using React" />
      <Footer />
    </div>
  );
}

export default App;
```

---
### Step 9: Add Dark Mode Toggle

Create `src/components/ThemeToggler.js`:

```jsx
function ThemeToggler({ darkMode, toggleTheme }) {
  const themeStyle = {
    padding: "1rem",
    textAlign: "center",
    borderBottom: darkMode ? "1px solid #555" : "1px solid #ddd"
  };

  return (
    <div style={themeStyle}>
      <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggler;
```

---

### Step 10: Add State Management for Dark Mode

Import `useState` and create dark mode state in `src/App.js`:

```jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import ThemeToggler from './components/ThemeToggler';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const appStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  return (
    <div style={appStyle}>
      <ThemeToggler darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="App">
        <Navbar darkMode={darkMode} />
        <Hero />
        <About />
        <h1>Projects</h1>
        <ProjectCard title="Portfolio Site" description="A React-based portfolio site" />
        <ProjectCard title="ToDo App" description="A simple task manager using React" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
```
---
