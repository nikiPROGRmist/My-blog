import "../LoginForm/LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginForm = ({ SetLogIsCount, setUser }) => {
  const [userName, setUserNAme] = useState("");

  const [userPassword, setUserPassword] = useState("");

  const handleUserLogin = (e) => {
    setUserNAme(e.target.value);
  };

  const hideUserPasseord = (e) => {
    setUserPassword(e.target.value);
  };

  const LoginActive = (e) => {
    const foo = document.querySelectorAll(".input__icone ");

    for (let i = 0; i < foo.length; i++) {
      foo[i].classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  };
  const Navigate = useNavigate();

  const unavigate = (e) => {
    e.preventDefault();
    localStorage.setItem("setLocalServer", true);
    localStorage.setItem("setName", userName);
    SetLogIsCount(true);
    setUser(userName);
    Navigate("/");
  };

  return (
    <>
      <form onSubmit={unavigate} className="login__icone" action="login-form">
        <h2>Вход</h2>
        <div onClick={LoginActive} className="input__icone">
          <input
            onChange={handleUserLogin}
            value={userName}
            required
            className="input"
            type="text"
            placeholder="Имя пользователя"
          />
          <div className="input__active"></div>
        </div>
        <div onClick={LoginActive} className="input__icone">
          <input
            value={userPassword}
            onChange={hideUserPasseord}
            required
            className="input"
            type="text"
            placeholder="пароль"
          />
          <div className="input__active"></div>
        </div>
        <div className="input__btn">
          <button>войти</button>
        </div>
      </form>
    </>
  );
};
