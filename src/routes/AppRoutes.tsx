import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/index";
import FoodPage from "../pages/Food/index";
import WorkoutPage from "../pages/Workout/index";
import ProfilePage from "../pages/Profile/index";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/food" element={<FoodPage />} />
      <Route path="/workout" element={<WorkoutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
