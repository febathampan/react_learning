import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  return (
    <>
      <div>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passw">Password</label>
            <input
              type="password"
              name="passw"
              id="passw"
              value={passw}
              onChange={(e) => setPassw(e.target.value)}
            />
          </div>
          <button type="submit" onClick={() => console.log(email)}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
