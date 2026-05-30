import { Home, Utensils, Dumbbell, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav>
      <NavLink to="/">
        <Home />
      </NavLink>

      <NavLink to="/food">
        <Utensils />
      </NavLink>

      <NavLink to="/workout">
        <Dumbbell />
      </NavLink>

      <NavLink to="/profile">
        <User />
      </NavLink>
    </nav>
  );
}