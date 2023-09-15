"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function BackButton() {
  const router = useRouter();
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          router.push("/productlist");
        }}
      >
        Back
      </button>
    </div>
  );
}
