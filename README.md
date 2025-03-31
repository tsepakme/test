# React Authentication App

A modern React application with authentication, theme toggling, and responsive design.

## 📋 Features

- **JWT Authentication** - Secure login with JSON Web Tokens
- **Theme System** - Light & dark mode with smooth transitions
- **Responsive Design** - Works on all device sizes
- **Custom Font** - Uses Martian Mono font throughout the app
- **Form Validation** - Prevents invalid data submission
- **Custom UI Components** - Reusable, animated components
- **Mock API** - Testing without a backend

## 🛠 Technologies

- **React 18** - Modern UI library
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Hook Form** - Form state management
- **React Router** - Navigation and routing

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone git@github.com:tsepakme/test.git

# Navigate to the project directory
cd test

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🎨 UI Components

### Theme Toggle Button

A sliding toggle for switching between light and dark modes.

```typescript
// Usage
import { ThemeToggleButton } from "./shared/ui/themeToggleButton/ThemeToggleButton";

<ThemeToggleButton />
```

### Button Component

Customizable button with loading state support.

```typescript
// Usage
import { Button } from "./shared/ui/button";

<Button 
  type="submit" 
  isLoading={loading}
  onClick={handleClick}
  className="px-4 py-2"
>
  Submit
</Button>
```

## 🔑 Authentication

### Mock Auth

For development, the app uses a mock authentication service:

```typescript
// Usage in components
import { mockAuth } from "../shared/api/auth";

const handleLogin = async () => {
  try {
    const response = await mockAuth(email, password);
    // Handle successful login
  } catch (error) {
    // Handle error
  }
};
```

### Production Integration

To connect with a real backend:

- Create an API service (see api-service.ts)
- Update auth service to use real endpoints
- Configure proper JWT token handling

# 🎭 Theming System

The app uses a context-based theme system:

```typescript
// In your main App component
import { ThemeProvider } from "./shared/ui/theme-provider";

function App() {
  return (
    <ThemeProvider>
      {/* App content */}
    </ThemeProvider>
  );
}
```

```typescript
// In any component
import { useTheme } from "./shared/hooks/useTheme";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={theme === 'dark' ? 'bg-slate-900' : 'bg-white'}>
      {/* Component content */}
    </div>
  );
}
```

# 📂 Project Structure

```
/src
  /app            - App configuration and setup
  /pages          - Page components
  /features       - Feature-specific components
  /shared
    /api          - API services and mock implementations
    /assets       - Static assets (images, icons)
    /config       - App configuration
    /hooks        - Custom React hooks
    /ui           - Reusable UI components
    /types        - TypeScript types and interfaces
  /styles         - Global styles and font config
  ```

# 🖌 Custom Font

The project uses Martian Mono font, configured in:

- src/styles/fonts.css
- src/index.css
- tailwind.config.js

# 📱 Responsive Design

All components are designed to work across:

- Mobile devices
- Tablets
- Desktop screens

Breakpoints follow Tailwind CSS defaults:

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

# 🚧 Future Enhancements

- OAuth

# 📄 License

MIT License