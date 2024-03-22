import axios from "axios";

interface AuthResponse {
  accessToken?: string;
  // Add other properties returned by the API if needed
}

interface User {
  username?: string;
  email?: string;
  // Add other user properties if needed
}

const API_URL = "http://127.0.0.1:8000/api/";

class AuthService {
  login(email: string, password: string): Promise<AuthResponse> {
    return axios
      .post(API_URL + "login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data as AuthResponse; // Type assertion
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string): Promise<void> {
    return axios.post(API_URL + "register", {
      username,
      email,
      password,
    });
  }

  getCurrentUser(): User | null {
    try {
      const userString = localStorage.getItem("user");
      if (userString) {
        return JSON.parse(userString) as User;
      }
      return null;
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return null;
    }
  }
}

export default new AuthService();
    