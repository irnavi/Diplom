
import EmptyBasket from "../emptyBasket/EmptyBasket";
import HeaderFromCart from "../headerFromCart/HeaderFromCart";
import ProductCart from "../productCart/ProductCart";
import styles from "./CartItems.module.css";
import FormFromCart from "../formFromCart/FormFromCart";
import { useDispatch, useSelector } from "react-redux";
import close from "../../assets/image/icon-modalClose.svg"
import { useEffect, useState } from "react";
import { resetOrderStatus } from "../../store/slices/orderPost";
import { resetCart } from "../../store/slices/cartSlice";
import { calculateCartCount, calculateOrderTotal } from "../../utils";

function CartItems() {
  let list = useSelector((state) => state.cart.list);

  let status = useSelector((state) => state.order.status);

  const dispatch = useDispatch();

  
  let count = calculateCartCount(list);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    dispatch(resetOrderStatus());
    dispatch(resetCart());
  };

  useEffect(() => {
    setModalOpen(true);
  }, [status]);

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

                <FormFromCart count={count} />
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div
          className={
            status === "fulfilled" && isModalOpen
              ? styles.modal_container
              : styles.modal_close
          }
        >
          {isModalOpen && (
            <div className={styles.modal}>
              <div className={styles.modal_h}>
                
                <h2>Congratulations!</h2>
                <img src={close} alt="closeX" onClick={handleCloseModal} />
              </div>
              
              <div className={styles.modal_p}>
                  <p>
                    Your order has been successfully placed on the website. 
                  </p>
                  <p className={styles.p2}>A
                    manager will contact you shortly to confirm your order.</p>
              </div>
             
            </div>
          )}
        </div>
    </section>
    
    
  );
}

export default CartItems;
