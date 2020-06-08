import React from "react";

export default function EditorialInfo(props) {
  return (
    <div className="editorial-info">
      <img className="info-img" src="/info.png" />
      <div className="editorial-info-text">{props.children}</div>
    </div>
  );
}