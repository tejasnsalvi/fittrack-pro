import {
  Home,
  Utensils,
  Dumbbell,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className="nav-item">
        <Home size={22} />
        <span>Home</span>
      </NavLink>

      <NavLink to="/food" className="nav-item">
        <Utensils size={22} />
        <span>Food</span>
      </NavLink>

      <NavLink to="/workout" className="nav-item">
        <Dumbbell size={22} />
        <span>Workout</span>
      </NavLink>

      <NavLink to="/profile" className="nav-item">
        <User size={22} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}