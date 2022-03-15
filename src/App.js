import { Route, Routes, useLocation } from "react-router-dom";
import JobModal from "./components/JobModal";
import LoginModal from "./components/LoginModal";
import Layout from "./Layout/Layout";
import RequireAuth from "./Layout/RequireAuth";
import HomePage from "./pages/HomePage";
import AuthProvider from "./routes/AuthProvider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<HomePage />} />
            <Route path="/jobs/:id" element={<HomePage />} />
          </Route>
        </Routes>
        <Routes>
          <Route>
            <Route path="/sign-in" element={<LoginModal />} />
            <Route
              path="/jobs/:id"
              element={
                <RequireAuth>
                  <JobModal />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
