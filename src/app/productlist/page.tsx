import Button from "./button";
import content from "./style.module.css";
import BackButton from "./backButton";
import Link from "next/link";
// import { useRouter } from "next/navigation";
const asynfunc = async () => {
  const fetchedURL = await fetch("https://dummyjson.com/products");
  const data = await fetchedURL.json();
  return data.products;
};

export default async function Page() {
  const mydata = await asynfunc();

  return (
    <div style={{ marginLeft: "20px", marginTop: "20px" }}>
      <h3>Products List Items</h3>
      <BackButton />
      {mydata.map((item: any) => {
        return (
          <div style={{ marginTop: "10px" }} key={item.id}>
            <Link href={`/productlist/${item.id}`}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Product List Items",
  };
}
