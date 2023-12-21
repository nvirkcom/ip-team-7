import "./ProgressBar";
import { NavLink } from "react-router-dom";

function ProgressBar() {
  return (
    <nav className="progress-bar">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active breadcrumb-item" : "breadcrumb-item"
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active breadcrumb-item" : "breadcrumb-item"
            }
            to="/home"
          >
            Location
          </NavLink>
        </li>
      </ol>
    </nav>
  );
}

export default ProgressBar;
