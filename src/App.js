import React, { useState, useEffect } from "react";
import "./App.css";
import TodoPage from "./components/TodoPage";
import LoginForm from "./components/LoginForm";

let userData = [
  {
    name: "Jack",
    username: "jj123K",
    password: "123456",
  },
  {
    name: "David",
    username: "david",
    password: "123456",
  },
];

function App() {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(userData));
  }, []);

  const localDatas = JSON.parse(localStorage.getItem("data"));

  const [user, setUser] = useState({username: "", password: "" });
  const [names, setNames] = useState("");
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    localDatas.forEach((users) => {
      console.log(users);
      if (
        details.username === users.username &&
        details.password === users.password
      ) {
        console.log("Login");
        setUser({
          username: details.username,
          password: details.password,
        });
        setNames(users.name);
      } else {
        console.log("Error");
      }
    });
  };

  return (
    <div className="container">
      {user.username !== "" ? (
        <TodoPage names={names} />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
