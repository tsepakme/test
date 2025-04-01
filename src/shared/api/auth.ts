export const mockAuth = async (email: string, password: string) => {
  // Here you would typically make an API call to your authentication service
  // For this example, we'll just simulate a successful login with a timeout
  // and return a mock token
  // In a real-world scenario, you would replace this with an actual API call
  // and handle the response accordingly.
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
