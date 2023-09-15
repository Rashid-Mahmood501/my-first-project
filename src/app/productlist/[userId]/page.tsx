import Image from "next/image";
import React from "react";
import BackButton from "../backButton";

export default async function page({ params }) {
  const asynfunc = async () => {
    const fetchedURL = await fetch(
      `https://dummyjson.com/products/${params.userId}`
    );
    const data = await fetchedURL.json();
    // console.log(data);
    return data;
  };
  const mydata = await asynfunc();
  console.log(params);

  return (
    <div style={{ margin: "1rem" }}>
      <h3>{params.userId}: User Details</h3>
      <div style={{ margin: "1.5rem" }}>
        <h3>{mydata.title}</h3>
        <p>{mydata.description}</p>
        <Image
          style={{ marginTop: "0.6rem", borderRadius: "1rem" }}
          src={mydata.thumbnail}
          alt="Iphone"
          width={340}
          height={200}
        />
      </div>
      <BackButton />
    </div>
  );
}
