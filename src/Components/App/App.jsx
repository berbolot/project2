import React from "react";
import classes from "./app.module.css";
import x from "./img/2.jpg";
import k from "./img/5.jpg";
import f from "./img/6.png";
import m from "./img/7.png";
import Header from "../../pages/Header/Header";
import Footer from "../../pages/Footer/Footer";
import Main from "../../pages/Main/Main";
import Portfolio from "../../pages/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <section>
        <div className={classes.hed}>
          <img className={classes.b} src={x} alt="" />
          <div className={classes.con}>
            <h1>
              Архитектор <br /> Алексей Нестеров
            </h1>
            <br />
            <p>
              Закончил Московский Государственный Строительный Институт в 2007
              году, факультет — промышленное строительство, специализация —
              архитектурно-промышленное строительство
            </p>
            <br />
            <button className={classes.btn}>УСЛУГИ</button>
          </div>
        </div>
      </section>

      <section>
        <div className={classes.abs}>
          <h1>
            Моя задача как архитектора — создавать комфортную среду для жизни
            путем архитектурных решений
          </h1>
          <br />
          <p>
            Закончил Московский Государственный Строительный Институт в 2007
            году, факультет — промышленное строительство, специализация —
            архитектурно-промышленное строительство. С 2012 года я
            занимаюсьпроектированием многоэтажных и загородных домов. Моя задача
            как архитектора — создавать комфотртную среду для жизни путем
            архитектурных решений.
          </p>
        </div>
        <Main />
        <img className={classes.k} src={k} alt="" />
        <div className={classes.fer}>
          <div className={classes.bss}>
            <img className={classes.f} src={f} alt="" />
            <div>
              <p>
                Хотела поблагодарить за серьёзное отношение к делу и
                профессионализм. Особенно меня порадовало качество, Алексей
                помог мне подобрать необходимый проект и желания перенеслись «в
                жизнь».
              </p>
              <h2>Лариса</h2>
            </div>
          </div>

          <div className={classes.bss}>
            <img className={classes.f} src={m} alt="" />
            <div>
              <p>
                Проект готовился индивидуально по моим пожеланиям. Проект
                коттеджа подготовили точно в срок. Бригаде строителей работать с
                проектом было легко и понятно, построили в тот же год, вся
                планировка очень продумана и точна.
              </p>
              <h2>Иван</h2>
            </div>
          </div>
        </div>
        <Portfolio />
        <div className={classes.ser}>
          <h1>
            Есть вопросы? Напишите. <br /> Вместе мы создадим проект дома вашей
            мечты.
          </h1>
          <button className={classes.btn}>ЗАДАТЬ ВОПРОСЫ</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
