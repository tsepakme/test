import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { Loader } from '../shared/ui/loader';
import PrivateRoute from "../components/PrivateRoute";
import { AuthProvider } from "../context/AuthContext";
import ErrorBoundary from './error-boundary';
import { ThemeProvider } from "../shared/ui/theme";

const LoginPage = lazy(() => import("../pages/login"));
const DashboardPage = lazy(() => import("../pages/dashboard"));

const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <AuthProvider>
          <HashRouter>
            <Suspense fallback={<div className="page-loader"><Loader /></div>}>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                } />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </HashRouter>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;