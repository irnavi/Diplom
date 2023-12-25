import EmptyBasket from "../emptyBasket/EmptyBasket";
import HeaderFromCart from "../headerFromCart/HeaderFromCart";
import ProductCart from "../productCart/ProductCart";
import styles from "./CartItems.module.css";
import FormFromCart from "../formFromCart/FormFromCart";



function CartItems() {

   

  return (
    <section className={styles.cartItems}>
        <div className={styles.container}>
            <div className={styles.cart_wrapper}>

               <HeaderFromCart />
               <EmptyBasket />

               <div className={styles.cartWithItems}>

                    <ProductCart />

                    <div className={styles.form_items}>

                        <div className={styles.order_details}>
                            <h2 className={styles.form_header}>Order details</h2>
                            <p className={styles.count_items}>3 items</p>
                            <div className={styles.price_form}>
                                <p className={styles.total}>Total</p>
                                <p className={styles.price}>$541.00</p>
                            </div>

                            <FormFromCart />
                        </div>
                       
                    </div>

               </div>

            </div>

        </div>

    </section>
  )
}

export default CartItems