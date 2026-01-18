import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <input
      type="checkbox"
      className="toggle"
      checked={theme === "dark"}
      onChange={(e) =>
        setTheme(e.target.checked ? "dark" : "light")
      }
    />
  );
};

export default ThemeToggle;
