import style from "./Error.module.scss";
import errorImg from "../../assets/img/lion.jpg";

export default function Error() {
  return (
    <>
      <div className={style.error}>
        <img className={style.error_img} src={errorImg} alt="lion" />;
        <div className={style.title}>Что-то пошло не так.</div>;
      </div>
      <div className={style.button_container}>
        <button className={style.error_button}>На главную</button>
      </div>
      ;
    </>
  );
}
