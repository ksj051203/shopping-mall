import styles from "./cart.module.css";

export const CartList = ({cart, convertPrice}) =>{
    console.log(cart);
    return(
    <section className={styles.cart_product_list}>
        <input type="checkbox" />
        <div className={styles.cart_product_wrap}>
          <div className={styles.cart_product_image}>
            <img src={cart.image} alt="product-img" />
          </div>

          <div className={styles.cart_product_info}>
            <p className={styles.seller_store}>{cart.provider}</p>
            <p className={styles.product_name}>{cart.name}</p>
            <p className={styles.price}>{convertPrice(cart.price)}</p>
            <p className={styles.delivery}>찾아가기 / 배송하기</p>
          </div>
        </div>

        <div className={styles.cart_product_count}>
        <div className = {styles.minus} onClick = {() => handleQuantity("minus")}>
              -
            </div>

          <div className={styles.count}>
            <span>{cart.quantity}</span>
          </div>
          <div className={styles.plus} onClick = {() => handleQuantity("plus")}>
              +
            </div>
        </div>

        <div className={styles.cart_product_price}>
          <p className={styles.total_price}></p>
          <button className={styles.btn_submit}>주문하기</button>
        </div>

      </section>
    )
}