import React from "react";
import Avatar from "./Avatar";

function Card(p) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{p.name}</h2>
        <Avatar imgSrc={p.imgSrc} />
      </div>
      <div className="bottom">
        <p className="info">{p.phone}</p>
        <p className="info">{p.email}</p>
      </div>
    </div>
  );
}

export default Card;
