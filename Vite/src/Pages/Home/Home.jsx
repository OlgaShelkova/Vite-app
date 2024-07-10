import mainImg from "../../assets/img/lion-in-suit.jpg";
import style from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={style.main}>
        <img className={style.mainImg} src={mainImg} alt="lion-in-suit" />
        <div className={style.text}>Главная</div>
      </div>
    </>
  );
}
