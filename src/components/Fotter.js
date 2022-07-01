import React from "react";

export default function Fotter(props) {
  return (
    <>
      <div className="card fixed-bottom">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </>
  );
}
