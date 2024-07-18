import React, { useState, useEffect, useRef } from "react";
import data from "../../data";
import styles from "./WordCards.module.scss";

const WordCards = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [wordsLearned, setWordsLearned] = useState(0); // Используем useState для счетчика изученных слов
  const translationButtonRef = useRef(null); // Ссылка на кнопку для фокуса

  const handleNextCard = () => {
    const nextIndex = (currentWordIndex + 1) % data.length;
    setCurrentWordIndex(nextIndex);
    setShowTranslation(false);
    setButtonVisible(true);
  };

  const handlePrevCard = () => {
    const prevIndex = (currentWordIndex - 1 + data.length) % data.length;
    setCurrentWordIndex(prevIndex);
    setShowTranslation(false);
    setButtonVisible(true);
  };

  const handleClick = () => {
    setShowTranslation(true);
    setButtonVisible(false);
    setWordsLearned((prevLearned) => prevLearned + 1); // Обновляем счетчик изученных слов
  };

  useEffect(() => {
    // Устанавливаем фокус на кнопку «Показать перевод» при рендеринге новой карточки
    if (buttonVisible && translationButtonRef.current) {
      translationButtonRef.current.focus();
    }
  }, [currentWordIndex, buttonVisible]);

  const currentWord = data[currentWordIndex];

  if (data.length === 0) {
    return (
      <p>
        Извините, данные с сервера временно недоступны. <br /> Пожалуйста,
        попробуйте обновить страницу позже <br /> или проверьте подключение к
        интернету.
      </p>
    );
  }

  return (
    <div className={styles.word_card_container}>
      <div className={styles.button_container}>
        <button onClick={handlePrevCard} className={styles.prev_button}>
          Назад
        </button>
      </div>
      <div className={styles.word_card}>
        <div key={currentWord.id} className={styles.word_item}>
          <p>Количество изученных слов: {wordsLearned}</p>{" "}
          {/* Используем useState для отображения */}
          <h3>{currentWord.english}</h3>
          <p>{currentWord.transcription}</p>
          {buttonVisible && (
            <button onClick={handleClick} ref={translationButtonRef}>
              Показать перевод
            </button>
          )}
          {showTranslation && <p>{currentWord.russian}</p>}
        </div>
      </div>
      <div className={styles.button_container}>
        <button onClick={handleNextCard} className={styles.next_button}>
          Вперед
        </button>
      </div>
    </div>
  );
};

export default WordCards;
