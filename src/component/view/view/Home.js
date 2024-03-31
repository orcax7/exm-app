import React, { useRef, useState } from "react";
import "../ass/style.css";

export default function Home() {
  const num1Ref = useRef();
  const num2Ref = useRef();
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const n1 = parseInt(num1Ref.current.value);
    const n2 = parseInt(num2Ref.current.value);
    let s;
    if (operator === "+") {
      s = n1 + n2;
    } else if (operator === "-") {
      s = n1 - n2;
    } else if (operator === "*") {
      s = n1 * n2;
    } else if (operator === "/") {
      s = n1 / n2;
    } else {
      s = 0;
    }
    setResult(s);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container d-flex justify-content-md-center card mt-3 bg-dark"
    >
      <div className="form-group">
        <h2 className="">Calculator</h2>
        <input
          type="number"
          className="form-control"
          placeholder="Input Number"
          ref={num1Ref}
        />
      </div>
      <div className="form-group mt-4">
        <input
          type="number"
          className="form-control"
          placeholder="Input Number"
          ref={num2Ref}
        />
      </div>

      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="radio"
          name="operator"
          id="add"
          value="+"
          onChange={handleOperatorChange}
          defaultChecked
        />
        <label className="form-check-label a" htmlFor="add">
          plus
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="operator"
          id="multiply"
          value="*"
          onChange={handleOperatorChange}
        />
        <label className="form-check-label a" htmlFor="multiply">
          multiply
        </label>
      </div>

      <button type="submit" className="btn btn-primary mt-4 mb-4">
        Submit
      </button>

      {result !== null && <p className="a">Result: {result}</p>}
    </form>
  );
}
