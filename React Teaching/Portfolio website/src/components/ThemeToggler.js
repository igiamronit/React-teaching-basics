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