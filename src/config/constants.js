export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://market-server-uheeking.herokuapp.com"
    : "http://localhost:8080";
