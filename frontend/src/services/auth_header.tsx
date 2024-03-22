export default function authHeader(): { Authorization?: string } {
  const user = JSON.parse(localStorage.getItem("user") as string); // Type assertion

  if (user && user.accessToken) {
    return { Authorization: `Bearer ${user.accessToken}` }; // Template literal
  } else {
    return {};
  }
}
