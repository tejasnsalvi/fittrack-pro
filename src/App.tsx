import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import BottomNav from "./components/layout/BottomNav";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
