import classes from "./header.module.css";
import a from "./img/1.png";


const Header = () => {
  return (
    <div>
         <header className={classes.header}>
        <div className={classes.content}>
          <img className={classes.a} src={a} alt="" />
          <h2>architect</h2>
        </div>
        <div className={classes.text}>
        <a href="#main"><p>Услуги</p></a>  
          <p>Отзывы</p>
         <a href="#portfolio"><p>Портфолио</p></a> 
         <a href='#footer'><p >Контакты</p></a> 
        </div>
        <button>ОСТАВИТЬ ЗАЯВКУ</button>
      </header>
    </div>
  )
}

export default Header