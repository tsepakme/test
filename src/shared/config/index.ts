interface AppConfig {
  apiUrl: string;
  isProduction: boolean;
  authTokenKey: string;
}

export const config: AppConfig = {
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:5173/api",
  isProduction: import.meta.env.PROD,
  authTokenKey: "token",
};
