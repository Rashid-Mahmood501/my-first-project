"use client";

import Link from "next/link";
import { useState } from "react";
import profile from "../../public/vercel.svg";
import Image from "next/image";
import { Roboto } from "next/font/google";
const inter = Roboto({
  weight: "500",
  subsets: ["latin"],
});
export default function Home() {
  const [colorone, setcolor] = useState(true);
  const styles = {
    backgroundColor: colorone === true ? "white" : "black",
    color: colorone === true ? "black" : "white",
    padding: "1.3rem",
    margin: "1rem 0rem",
    borderRadius: "1rem",
  };
  return (
    <main style={{ padding: "1.3rem", margin: "1rem" }}>
      <Link href="/productlist">Product List Page</Link>
      <h3 className={inter.className} style={styles}>
        I am heading three...
      </h3>
      <Image
        style={{ cursor: "pointer", marginTop: "-1.5rem" }}
        src={profile}
        alt="Vercel Image"
        width={100}
        height={100}
        onClick={() => {
          setcolor(!colorone);
        }}
      />
    </main>
  );
}
