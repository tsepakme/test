import { LoginForm } from "../../features/auth/LoginForm";
import { useTheme } from "../../shared/hooks/useTheme";
import { ThemeToggleButton } from "../../shared/ui/themeToggleButton/ThemeToggleButton";

const LoginPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="w-full p-4 flex justify-end">
        {/* <button
          onClick={toggleTheme}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${theme === 'dark'
              ? 'bg-gray-700 hover:bg-gray-600'
              : 'bg-white hover:bg-gray-200 shadow'
            }`}
        >
          <span>{theme === 'light' ? '🌙' : '☀️'}</span>
          <span className="text-sm font-medium">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </button> */}
        <ThemeToggleButton/>
      </div>

      <div className="flex-grow flex items-center justify-center p-4">
        <div className={`w-full max-w-md p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
          <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;