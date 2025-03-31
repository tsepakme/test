import { LogoutButton } from "../../features/auth/LogoutButton";
import { useTheme } from "../../shared/hooks/useTheme";
import { ThemeToggleButton } from "../../shared/ui/themeToggleButton/ThemeToggleButton";

const DashboardPage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`w-full ${isDark ? 'bg-slate-800' : 'bg-white shadow'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <ThemeToggleButton />
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`mb-8 p-6 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white shadow'}`}>
          <h2 className="text-2xl font-bold mb-2">Welcome!</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            You are successfully logged in to your account.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={`p-6 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white shadow'}`}>
            <div className="flex justify-between items-start">
              <div>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Total Users
                </p>
                <p className="mt-1 text-2xl font-semibold">1,284</p>
              </div>
              <div className={`p-2 rounded-md ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                👥
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white shadow'}`}>
            <div className="flex justify-between items-start">
              <div>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Active Projects
                </p>
                <p className="mt-1 text-2xl font-semibold">12</p>
              </div>
              <div className={`p-2 rounded-md ${isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                📊
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white shadow'}`}>
            <div className="flex justify-between items-start">
              <div>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Notifications
                </p>
                <p className="mt-1 text-2xl font-semibold">24</p>
              </div>
              <div className={`p-2 rounded-md ${isDark ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-600'}`}>
                🔔
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;