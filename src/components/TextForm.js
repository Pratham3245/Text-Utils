import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted ", "success");
  };
  const clear = () => {
    let newText = "";
    setText(newText);
  };
  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const change = (event) => {
    console.log("on chnage");
    setText(event.target.value);
  };
  const copy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <h2
        className="container my-5"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        {props.heading}
      </h2>
      <div className="container my-5">
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#212529",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={change}
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={upperCase}
        >
          Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={copy}
        >
          Copy text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={clear}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={extraSpace}
        >
          Remove Extra Spaces
        </button>
        <div
          className="container"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2>Summary</h2>
          <p>
            <ul>
              <li>
                {
                  text.split(" ").filter((element) => {
                    return element.length !== 0;
                  }).length
                }{" "}
                Words
              </li>
              <li>{text.length} Characters</li>
            </ul>
          </p>
        </div>
        <div
          className="container"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing To Preview !!"}</p>
        </div>
      </div>
    </>
  );
}
