import styles from "./main.module.css";
import { Product } from "../products/product";
import { useEffect } from "react";
import { getProducts } from "../service/fetcher";

export const Main = ( {products, setProducts, convertPrice}) => {
  useEffect(() => {
    getProducts().then((data) => {
    setProducts(data.data.products);
    })
  }, [setProducts])
  
  return (
    <>
      <main className={styles.flex_wrap}>
        {products.map((product) => {
          return  <Product key = {`key-${product.id}`} product = {product} convertPrice={convertPrice}/>
      })}
      </main>
    </>
  );
};
