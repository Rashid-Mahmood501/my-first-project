"use client";
import React from "react";
import content from "./style.module.css";
export default function Button({ price }) {
  return (
    <div>
      <button
        className={content.button}
        onClick={() => {
          alert(price);
        }}
      >
        Check Price
      </button>
    </div>
  );
}
