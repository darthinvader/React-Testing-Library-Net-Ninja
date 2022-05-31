import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header" data-testid="header1">
        {title}
      </h1>
      <h3 className="header" title="header">
        Cats
      </h3>
    </>
  );
}
