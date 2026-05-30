import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import FoodPage from "../pages/Food";
import WorkoutPage from "../pages/Workout";
import ProfilePage from "../pages/Profile";

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