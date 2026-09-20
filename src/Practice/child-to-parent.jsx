import { useState } from "react";
export function ChildToParent() {

    const [value, setValue] = useState("")
    function handleLogin(user) {
        // console.log("Logged in:", user);
        setValue(user)
    }

  return (
    <div>
        <h1>{value.name}</h1>
        <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export function LoginForm({ onLogin }) {
  return (
    <button onClick={() =>onLogin({ id: 1, name: "Sudipta" })} className="btn btn-outline-primary">Login</button>
  );
}