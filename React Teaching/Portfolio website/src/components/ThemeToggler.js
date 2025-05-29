function ThemeToggler({ darkMode, toggleTheme }) {
  return (
    <div className="theme-toggler">
      <h2>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>
      <button className="theme-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggler;