import { useEffect, useState } from "react";
import {
  checkAuth,
  getCsrfToken,
  getDecodedToken,
  login,
  logout,
  register,
} from "../utils/auth";

const JsCookieDemo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(checkAuth);
  useEffect(() => {
    getCsrfToken();
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    login(email, password);
  }
  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h1>Welcome {getDecodedToken().email}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default JsCookieDemo;
