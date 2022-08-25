import React from "react";
import "./sitebar.css";
import social from "../../assets/img/social.jpg";
import instagram from "../../assets/img/instagram.svg";
import vk from "../../assets/img/vk.svg";
import pinterest from "../../assets/img/pinterest.svg";
import unnamed from "../../assets/img/unnamed.jpg";

export const Sitebar = ({ LogIsCount, user }) => {
  return (
    <sitebar className="sitebar">
      {LogIsCount ? (
        <>
          <div className="social__img">
            <img src={social} alt="social" />
          </div>
          <div className="profile">
            <img className="profile__img" src={unnamed} alt="" />
            <div className="profile__name">{user}</div>
            <div className="profile__blog">блог front-end разработчика</div>
          </div>
          <div className="profile__item">
            <a class="profile__link" href="/" target="_blank">
              <img src={instagram} alt="" />
            </a>
            <a class="profile__link" href="/" target="_blank">
              <img src={vk} alt="" />
            </a>
            <a class="profile__link" href="/" target="_blank">
              <img src={pinterest} alt="" />
            </a>
          </div>
          <hr />
          <div class="profile__content">
            Начинающий Front-end разработчик. В этом блоге я расскажу что изучил, какие технологии
            использовал
          </div>
          <div class="profile__button">
            <button class="profile__btn">Мои работы </button>
            <button class="profile__btn">Написать мне</button>
          </div>
        </>
      ) : (
        <>
          <div className="social__img">
            <img src={social} alt="social" />
          </div>
          <div className="profile">
            <img className="profile__img" src={unnamed} alt="" />
            <div className="profile__blog">блог front-end разработчика</div>
          </div>
          <hr />
          <div className="login__content">
            <div>
              {" "}
              Начинающий Front-end разработчик. В этом блоге я расскажу что изучил, какие технологии
              использовал
            </div>
          </div>
        </>
      )}
    </sitebar>
  );
};
