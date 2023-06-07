import x from "./img/2.jpg";
import b from "./img/3.jpg";
import q from "./img/8.jpg";
import w from "./img/9.jpg";
import e from "./img/10.jpg";
import t from "./img/11.jpg";
import classes from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
          <div className={classes.jk}>
          <img src={q} alt="" />
          <img src={w} alt="" />
          <img src={e} alt="" />
        </div>
        <div className={classes.jk}>
          <img src={b} alt="" />
          <img src={t} alt="" />
          <img src={x} alt="" />
        </div>
    </div>
  )
}

export default Portfolio