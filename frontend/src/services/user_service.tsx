import axios from "axios";
import authHeader from "./auth_header"; // Assuming auth-header is a function

interface User {
  // Add user properties if your API endpoint returns user data
}

const API_URL = "http://127.0.0.1:8000/api/";

class UserService {
  getPublicContent(): Promise<any> {
    return axios.get(API_URL + "all");
  }

  getUserBoard(): Promise<User[]> {
    return axios.get(API_URL + "user", { headers: authHeader() }); // Assuming response is an array of users
  }

  getModeratorBoard(): Promise<any> {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard(): Promise<any> {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
