import styles from "./ProductCart.module.css"
import icon_x from "../../assets/image/icon-x.svg";
import minus from "../../assets/image/icon-minus.svg";
import plus from "../../assets/image/icon-plus.svg";




function ProductCart() {
  return (
    <>
    <div className={styles.product}>
                        <div className={styles.product_img}>
                            <img src="" alt="" />
                        </div>
                        <div className={styles.product_info}>
                            <div className={styles.product_title}>
                                <p>Secateurs</p>
                                <img src={icon_x} alt="x" />
                            </div>
                            <div className={styles.product_prices}>
                                <button className={styles.btn_minus}><img className={styles.minus} src={minus} alt="minus" /></button>
                                <div className={styles.counter}>1</div>
                                <button className={styles.btn_plus}><img className={styles.plus} src={plus} alt="plus" /></button>
                                <p className={styles.pr_sale}>$155</p>
                                <p className={styles.pr_through}>$240</p>
                                
                            </div>
                        </div>
    </div>

    </>
  )
}

export default ProductCart