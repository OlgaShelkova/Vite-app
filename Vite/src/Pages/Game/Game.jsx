import style from "./Game.module.scss";
import WordCards from "../../components/WordCards/WordCards";

export default function Game() {
  return (
    <div className={style.text}>
      <WordCards />
    </div>
  );
}
