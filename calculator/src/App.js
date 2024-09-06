import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [values, setValue] = useState('');
  const [ans, setAns] = useState('');

  const handleValues = (value) => {
    if (value !== null) {
      let final = values + value.toString();
      setValue(final);
    } else {
      setValue('');
      setAns('');
    }
  }

  const evaluate = () => {
    try {
      let result = eval(values);
      setAns(result.toString());
      setValue(result.toString());
    } catch (error) {
      setAns('Error');
      setValue('');
    }
  }

  return (
    <>
      <div className={styles.numbers}>
        <div className={styles.outerBox}>
          <div className={styles.display}>
            {values || ans}
          </div>
        </div>
        <div className={styles.innerNumbers}>
          <div className={styles.firstRow}>
            <div className={styles.clear} onClick={() => handleValues(null)}>C</div>
            <div className={styles.divide} onClick={() => handleValues('/')}>/</div>
          </div>

          <div className={styles.secondRow}>
            <div className={styles.seven} onClick={() => handleValues(7)}>7</div>
            <div className={styles.eight} onClick={() => handleValues(8)}>8</div>
            <div className={styles.nine} onClick={() => handleValues(9)}>9</div>
            <div className={styles.multiply} onClick={() => handleValues('*')}>*</div>
          </div>

          <div className={styles.thirdRow}>
            <div className={styles.four} onClick={() => handleValues(4)}>4</div>
            <div className={styles.five} onClick={() => handleValues(5)}>5</div>
            <div className={styles.six} onClick={() => handleValues(6)}>6</div>
            <div className={styles.subtract} onClick={() => handleValues('-')}>-</div>
          </div>

          <div className={styles.fourthRow}>
            <div className={styles.one} onClick={() => handleValues(1)}>1</div>
            <div className={styles.two} onClick={() => handleValues(2)}>2</div>
            <div className={styles.three} onClick={() => handleValues(3)}>3</div>
            <div className={styles.plus} onClick={() => handleValues('+')}>+</div>
          </div>

          <div className={styles.finalRow}>
            <div className={styles.zero} onClick={() => handleValues(0)}>0</div>
            <div className={styles.equals} onClick={evaluate}>=</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;