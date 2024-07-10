import logoImg from "../../assets/img/logo.jpg";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.logo}>
            <NavLink to="/">
              <img className={style.logoImg} src={logoImg} alt="Logo" />
            </NavLink>
            <span> ШАГ ЗА ШАГОМ К СВОБОДНОМУ ОБЩЕНИЮ на английском!</span>
          </div>
          <nav className={style.nav}>
            <ul>
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink to="/game">Игра</NavLink>
              </li>
              <li>
                <NavLink to="/table">Таблица</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
