import React from "react";
import "./header.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

export const Header = ({ LogIsCount, SetLogIsCount }) => {
  const navigate = useNavigate();

  const hideSetLogIsCount = () => {
    localStorage.setItem("setLocalServer", false);
    navigate("login");
    SetLogIsCount(false);
  };

  return (
    <header className="header">
      {LogIsCount ? (
        <>
          <div className="header__left">
            <nav className="nav__menu">
              <ul className="nav__list">
                <li>
                  <a href="/" className="nav__link">
                    главная
                  </a>
                </li>
                <li>
                  <a href="/" className="nav__link">
                    статьи
                  </a>
                  <ul className="nav__sub-list">
                    <li>
                      <a href="/" className="nav__sub-link">
                        Создание сайтов
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav__sub-link">
                        Интернет-маркетинг
                      </a>
                    </li>
                    <li>
                      <a href="/" className="nav__sub-link">
                        Продвижение видео
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/" className="nav__link">
                    обо мне
                  </a>
                </li>
                <li>
                  <a href="/" className="nav__link">
                    реклама
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <button className="exit__btn" onClick={hideSetLogIsCount}>
              <ExitToAppIcon />
              выйти
            </button>
            <ul className="nav__list">
              <li>
                <a href="#" className="nav__link">
                  профиль
                </a>
              </li>
            </ul>
            <form className="serch" action="/" method="post">
              <input className="serch__form" type="text" placeholder="Поиск к блогу"></input>
            </form>
          </div>
        </>
      ) : (
        <header className="login__header">
          <h1 style={{ color: "white" }}>Добро пожаловать</h1>
        </header>
      )}
    </header>
  );
};
