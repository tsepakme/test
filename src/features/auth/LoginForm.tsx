import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { mockAuth } from "../../shared/api/auth";
import { Input } from "../../shared/ui/Input";
import { Button } from "../../shared/ui/Button";
import { EyeIcon, EyeOffIcon } from "../../shared/assets/icons";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../shared/hooks/useTheme";

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await mockAuth(data.email, data.password);
      setMessage(response.message);
      if (response.token) {
        login(response.token, data.email);
        navigate("/dashboard");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setCapsLockOn(e.getModifierState("CapsLock"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email"
          className={`w-full px-4 py-2 rounded-lg border ${
            isDark 
              ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
              : 'bg-white border-gray-300 focus:border-blue-500'
          } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors`}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && 
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        }
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onKeyDown={handleKeyDown}
            className={`w-full px-4 py-2 rounded-lg border ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors pr-10`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters"
              }
            })}
          />
          <button
          aria-label="Toggle password visibility"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {showPassword 
              ? <EyeOffIcon width={18} height={18} /> 
              : <EyeIcon width={18} height={18} />
            }
          </button>
        </div>
        {errors.password && 
          <span className="text-red-500 text-sm">{errors.password.message}</span>
        }
        {capsLockOn && 
          <p className="text-amber-500 text-sm font-medium flex items-center">
            <span className="mr-1">⚠️</span> Caps Lock is ON
          </p>
        }
      </div>

      <div className="flex items-center">
        <input
          id="remember-me"
          type="checkbox"
          className={`h-4 w-4 rounded ${
            isDark 
              ? 'bg-gray-700 border-gray-600 text-blue-500' 
              : 'border-gray-300 text-blue-600'
          } focus:ring-blue-500`}
          {...register("rememberMe")}
        />
        <label 
          htmlFor="remember-me" 
          className={`ml-2 block text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Remember me
        </label>
      </div>

      <div className="space-y-4">
        <Button
          type="submit"
          isLoading={isLoading}
          className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${isDark
            ? 'bg-gray-500 hover:bg-gray-500 text-white'
            : 'bg-gray-500 hover:bg-gray-300 text-white'
            }`}
        >
          Login
        </Button>

        <div className="text-center">
          <button
            type="button"
            className={`text-sm ${
              isDark ? 'text-gray-400 hover:text-blue-300' : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => alert("Password recovery link sent (mock)")}
          >
            Forgot password?
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-3 rounded-md ${
          message.includes("successful") 
            ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400' 
            : 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400'
        }`}>
          <p className="text-sm font-medium">{message}</p>
        </div>
      )}
    </form>
  );
};