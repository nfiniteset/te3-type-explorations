import "./styles.scss";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useHotkeys } from "react-hotkeys-hook";

export default function Layout() {
  const [isPressed, setIsPressed] = useState(0);
  useHotkeys("m", () => setIsPressed(0), { keyup: true });
  useHotkeys("m", () => setIsPressed(1), { keydown: true });

  return (
    <div className={`container ${isPressed ? "show-tracer" : ""}`}>
      <div className="nav">
        <p>M pressed: {isPressed}</p>
        <div className="nav-content">
          <h1 className="example-header">Typographical explorations</h1>

          <p className="spacer"></p>
          <h3 className="example-header">Today</h3>
          <p>
            <Link to="/today">Task description before revamp</Link>
          </p>

          <p className="spacer"></p>

          <h3 className="example-header">Future</h3>
          <p>
            <Link to="/future-small-headers">Small headers</Link>
          </p>
          <p>
            <Link to="/future-medium-headers">Medium headers</Link>
          </p>
          <p>
            <Link to="/future-large-headers">Large headers</Link>
          </p>
          <p className="spacer"></p>

          <p>
            <Link to="/future-p-w-margin">Paragraphs with margins</Link>
          </p>
          <p>
            <Link to="/future-p-wo-margin">
              Paragraphs without margins (Blank paragraph hieght = line height)
            </Link>
          </p>
          <p>
            <Link to="/future-blank-p-narrow">
              Paragraphs without margins (Blank paragraph hieght = 8px)
            </Link>
          </p>
          <p className="spacer"></p>

          <p>
            <Link to="/future-lists-w-margin">Lists with margins</Link>
          </p>
        </div>
      </div>
      <div className="task-panel">
        <Outlet />
      </div>
    </div>
  );
}
