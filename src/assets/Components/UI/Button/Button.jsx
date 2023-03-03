import React, { useEffect, useState } from "react";

function Button({ style, text }) {
  console.log(style, text);
  const [count, setCount] = useState(0);
  const [styleColor, setStyleColor] = useState("orange");

  useEffect(()=>{
    if (count>=10) {
        setStyleColor("green")
    }else{
        setStyleColor("orange")
    }
  },[count]);

  return (
    <div className="container-count">
      <h2 className={styleColor}>{count}</h2>
      <div className="container-btns">
        <button onClick={() => setCount(count + 1)} className={style}>
          {(text = "Add")}
        </button>
        <button onClick={() => setCount(0)} className={style}>
          {(text = "Reset")}
        </button>
        <button onClick={() => setCount(count - 1)} className={style}>
          {(text = "Abstract")}
        </button>
      </div>
    </div>
  );
}

export default Button;
