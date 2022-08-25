import React from "react";
import "../Storis/storis.css";
import storis1 from "../../assets/img/story1.png";
import storis2 from "../../assets/img/story2.png";
import storis3 from "../../assets/img/story3.png";
import storis4 from "../../assets/img/story4.png";

export const Storis = () => {
  return (
    <div class="storis">
      <div class="storis__link">
        <img src={storis1} alt="" />
        <div class="storis__text">Отдыхаю на природе</div>
        <div class="storis__date">21.09.2020</div>
      </div>
      <div class="storis__link">
        <img src={storis2} alt="" />
        <div class="storis__text">заканчиваю сложный проект</div>
        <div class="storis__date">15.09.2020</div>
      </div>
      <div class="storis__link">
        <img src={storis3} alt="" />
        <div class="storis__text">Поехали в новую квартиру</div>
        <div class="storis__date">11.09.2020</div>
      </div>
      <div class="storis__link">
        <img src={storis4} alt="" />
        <div class="storis__text">Осень пришла</div>
        <div class="storis__date">08.08.2020</div>
      </div>
    </div>
  );
};
