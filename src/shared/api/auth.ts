export const mockAuth = async (email: string, password: string) => {
  return new Promise<{ token?: string; message: string }>((resolve) => {
    setTimeout(() => {
      if (email === "test@test" && password === "qwer") {
        resolve({ token: "mock-jwt-token", message: "Login successful" });
      } else {
        resolve({ message: "Invalid credentials" });
      }
    }, 2000);
  });
};
