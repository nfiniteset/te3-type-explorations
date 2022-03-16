import "./styles.scss";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [showMargins, setShowMargins] = useState(false);

  function handleMarginCheckboxChange(e) {
    console.log(e.target.checked);
    setShowMargins(e.target.checked);
  }

  return (
    <div className={`container ${showMargins ? "show-tracer" : ""}`}>
      <div className="nav">
        <div className="nav-content">
          <h1 className="example-header">Typographical explorations</h1>

          <p className="spacer"></p>
          <h3 className="example-header">Paragraph margin</h3>
          <ul className="nav-list">
            <li>
              <Link to="/today">Today - No paragraph spacing</Link>
            </li>
            <li>
              <Link to="/future-p-w-margin">Paragraphs with margins</Link>
            </li>
            <li>
              <Link to="/future-p-wo-margin">
                Paragraphs without margins <br />
                (Blank paragraph hieght = line height)
              </Link>
            </li>
            <li>
              <Link to="/future-blank-p-narrow">
                Paragraphs without margins <br />
                (Blank paragraph hieght = 8px)
              </Link>
            </li>
          </ul>

          <p className="spacer"></p>
          <h3 className="example-header">Header size</h3>
          <ul className="nav-list">
            <li>
              <Link to="/future-small-headers">Small headers</Link>
            </li>
            <li>
              <Link to="/future-medium-headers">Medium headers</Link>
            </li>
            <li>
              <Link to="/future-large-headers">Large headers</Link>
            </li>
          </ul>

          <p className="spacer"></p>
          <h3 className="example-header">List & list item margin</h3>
          <ul className="nav-list">
            <li>
              <Link to="/future-lists-w-margin">Lists with margins</Link>
            </li>
          </ul>
          <p className="spacer"></p>

          <div className="nav-annotation">
            <label>
              <input
                type="checkbox"
                checked={showMargins}
                onChange={handleMarginCheckboxChange}
              />{" "}
              Show margins
            </label>
          </div>
        </div>
      </div>
      <div className="task-panel">
        <Outlet />
      </div>
    </div>
  );
}
