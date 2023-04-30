import React, { useState, FC } from "react";

const Calculator: FC = () => {
  const [inNumber, setInNumber] = useState<number>(0);
  const [operation, setOperation] = useState<string>("");
  const [calculatedNum, setCalculatedNum] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isDecimal, setIsDecimal] = useState<boolean>(false);
  const [decimalPosition, setDecimalPosition] = useState<number>(10);

  const calculate = (): void => {
    if (calculatedNum === 0 && inNumber === 0) return;
    if (inNumber === 0) return;
    switch (operation) {
      case "+":
        setCalculatedNum(calculatedNum + inNumber);
        break;
      case "-":
        setCalculatedNum(calculatedNum - inNumber);
        break;
      case "*":
        setCalculatedNum(calculatedNum * inNumber);
        break;
      case "/":
        setCalculatedNum(calculatedNum / inNumber);
        break;
    }
    if (operation === "") {
      setCalculatedNum(inNumber);
    }
  };

  const handleOperation = (currentOperation: string): void => {
    setOperation(currentOperation);
    calculate();
    setInNumber(0);
    setIsDecimal(false);
    setDecimalPosition(10);
  };

  const handleNumber = (number: number): void => {
    setSubmitted(false);
    if (isDecimal) {
      setInNumber(inNumber + number / decimalPosition);
      setDecimalPosition(decimalPosition * 10);
    } else {
      setInNumber(inNumber * 10 + number);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setInNumber(calculatedNum);
  };

  const equal = (): void => {
    calculate();
    setInNumber(0);
    setSubmitted(true);
    setIsDecimal(false);
    setDecimalPosition(10);
  };

  const reset = (): void => {
    setInNumber(0);
    setSubmitted(false);
    setIsDecimal(false);
    setCalculatedNum(0);
    setOperation("");
    setDecimalPosition(10);
  };

  return (
    <div className="calculator">
      <div className="blur">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            title="screen"
            value={submitted === true ? calculatedNum : inNumber}
            onChange={() => {}}
            type="number"
            id="equation"
            autoComplete="off"
          />
          <section className="buttons">
            <button
              type="button"
              onClick={() => {
                reset();
              }}
            >
              C
            </button>
            <button
              type="button"
              onClick={() => {
                submitted === true
                  ? setCalculatedNum(calculatedNum * -1)
                  : setInNumber(inNumber * -1);
              }}
            >
              ±
            </button>
            <button
              type="button"
              onClick={() => {
                submitted === true
                  ? setCalculatedNum(calculatedNum / 100)
                  : setInNumber(inNumber / 100);
              }}
            >
              %
            </button>
            <button
              type="button"
              onClick={() => {
                handleOperation("/");
              }}
            >
              /
            </button>
            <button
              type="button"
              onClick={() => {
                handleNumber(7);
              }}
            >
              7
            </button>
            <button
              type="button"
              onClick={() => {
                handleNumber(8);
              }}
            >
              8
            </button>
            <button
              type="button"
              onClick={() => {
                handleNumber(9);
              }}
            >
              9
            </button>
            <button
              type="button"
              onClick={() => {
                handleOperation("*");
              }}
            >
              *
            </button>
            <button
              type="button"
              onClick={() => {
                handleNumber(4);
              }}
            >
              4
            </button>
            <button
              type="button"
              onClick={() => {
                handleNumber(5);
              }}
            >
              5
            </button>
            <button
              type="button"
              onClick={() => {
                handleNumber(6);
              }}
            >
              6
            </button>
            <button
              type="button"
              onClick={() => {
                handleOperation("-");
              }}
            >
              -
            </button>
            <button
              type="button"
              onClick={() => {
                handleNumber(1);
              }}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => {
                handleNumber(2);
              }}
            >
              2
            </button>
            <button
              type="button"
              onClick={() => {
                handleNumber(3);
              }}
            >
              3
            </button>
            <button
              type="button"
              onClick={() => {
                handleOperation("+");
              }}
            >
              +
            </button>
            <button
              type="button"
              id="number0"
              onClick={() => {
                handleNumber(0);
              }}
            >
              0
            </button>
            <button
              type="button"
              onClick={() => {
                setIsDecimal(true);
              }}
            >
              .
            </button>
            <button
              onClick={() => {
                equal();
              }}
              type="button"
            >
              =
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
