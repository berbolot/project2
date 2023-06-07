import React from 'react'
import classes from "./footer.module.css";
import a from "./img/1.png";

const Footer = () => {
  return (
    <div>
       <footer id="footer">
        <div>
          <h2>Связаться со мной</h2>
          <p>+1(23)-45-67-890</p>
          <p>г. Москва, ул. Тверская, дом. 1</p>
          <p>mail@site.ru</p>
        </div>

        <div className={classes.ort}>
          <img className={classes.a} src={a} alt="" />
          <h1>Алексей Нестеров</h1>
        </div>

        <div>
          <h2>График работы</h2>
          <p>Пн-Пт 9:00-19:0</p>
          <p>Сб 10:00-15:00</p>
          <p>Вс выходной</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer