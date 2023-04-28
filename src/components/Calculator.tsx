import React, { useState, FC } from "react";

const Calculator: FC = () => {
  const [firstEquation, setFirstEquation] = useState(0);
  const [operation, setOperation] = useState("");

  return (
    <div className="calculator">
      <form>
        <input
          placeholder="..."
          value={firstEquation}
          type="number"
          id="equation"
          autoComplete="off"
        />
        <section className="buttons">
          <button
            onClick={() => {
              setFirstEquation(0);
            }}
          >
            C
          </button>
          <button>±</button>
          <button>%</button>
          <button>/</button>
          <button>9</button>
          <button>8</button>
          <button>7</button>
          <button>*</button>
          <button>6</button>
          <button>5</button>
          <button>4</button>
          <button>-</button>
          <button>3</button>
          <button>2</button>
          <button>1</button>
          <button>+</button>
          <button id="number0">0</button>
          <button>.</button>
          <button>=</button>
        </section>
      </form>
    </div>
  );
};

export default Calculator;
