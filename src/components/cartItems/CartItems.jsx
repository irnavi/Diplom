import EmptyBasket from "../emptyBasket/EmptyBasket";
import HeaderFromCart from "../headerFromCart/HeaderFromCart";
import ProductCart from "../productCart/ProductCart";
import styles from "./CartItems.module.css";
import FormFromCart from "../formFromCart/FormFromCart";
import { useSelector } from "react-redux";

function CartItems() {
  const list = useSelector((state) => state.cart.list);

  function calculateOrderTotal(items) {
    const total = items.reduce((acc, item) => {
      const price = item.discont_price || item.price;
      const itemTotal = price * item.count;
      return acc + itemTotal;
    }, 0);

    return total.toFixed(2);
  }

  const calculateCartCount = (cartItems) => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }
    return cartItems.reduce(
      (total, currentItem) => total + currentItem.count,
      0
    );
  };

  let count = calculateCartCount(list);

  return (
    <section className={styles.cartItems}>
      <div className={styles.container}>
        <div className={styles.cart_wrapper}>
          <HeaderFromCart />
          <EmptyBasket count={count} />

          <div className={styles.cartWithItems}>
            <div className={styles.productCart_wrapper}>
              {list?.map((elem) => (
                <ProductCart key={elem.id} {...elem} />
              ))}
            </div>

            <div
              className={
                count === 0 ? styles.form_items_none : styles.form_items
              }
            >
              <div className={styles.order_details}>
                <h2 className={styles.form_header}>Order details</h2>
                <p className={styles.count_items}>{count} items</p>
                <div className={styles.price_form}>
                  <p className={styles.total}>Total</p>
                  <p className={styles.price}>${calculateOrderTotal(list)}</p>
                </div>

                <FormFromCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartItems;
