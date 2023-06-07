import React from "react";
import d from "./img/4.jpg";
import classes from "./main.module.css";

const Main = () => {
  return (
    <div id="main">
      <div className={classes.man}>
        <img className={classes.get} src={d} alt="" />
        <div className={classes.c}>
          <p>от 40 000 ₽</p>
          <h2>Эскизный проект</h2>
          <p>
            На этом этапе определяется стилистика и внешний вид будущего здания,
            его размеры, форма, внутренняя планировка, зонирование.
          </p>
          <br /> <br />
          <div>
            <p>от 40 000 ₽</p>
            <h2>Конструктивный проект</h2>
            <p>
              Расчет несущей способности и детальные чертежи всех конструктивных
              элементов проектируемого здания.
            </p>
          </div>
        </div>

        <div className={classes.cc}>
          <p>от 60 000 ₽</p>
          <h2>Архитектурный проект</h2>
          <p>
            На этом этапе определяются архитектурные решения, которые комплексно
            учитывают желания заказчика, условия строительства.
          </p>
          <br />
          <br />
          <div>
            <p>от 55 000 ₽</p>
            <h2>Дизайн фасадов</h2>
            <p>
              Дизайн фасадов для коттеджей и ресторанов. Интересные решения с
              использованием современных отделочных материалов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
