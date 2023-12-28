import styles from "./ProductCart.module.css"
import icon_x from "../../assets/image/icon-x.svg";
import minus from "../../assets/image/icon-minus.svg";
import plus from "../../assets/image/icon-plus.svg";
import { useDispatch } from "react-redux";
import { countPlus, countMinus, deleteItem } from "../../store/slices/cartSlice";




function ProductCart({ image, title, id, price, count, discont_price}) {


   const dispatch = useDispatch();

   let sumCount = discont_price === null ? count * price : count * discont_price;
   let sumThroughCount = count * price

  return (
    <>
    <div className={styles.product}>
                        <div className={styles.product_img}>
                            <img src={`http://localhost:3333${image}`} alt="" />
                        </div>
                        <div className={styles.product_info}>
                            <div className={styles.product_title}>
                                <p>{title}</p>
                                <img src={icon_x} alt="x" onClick={() => dispatch(deleteItem(id))} />
                            </div>
                            <div className={styles.product_prices}>
                                <button className={styles.btn_minus} onClick={() => dispatch(countMinus(id))}><img className={styles.minus} src={minus} alt="minus" /></button>

                                <div className={styles.counter}>{count}</div>

                                <button className={styles.btn_plus} onClick={() => dispatch(countPlus(id))}><img className={styles.plus} src={plus} alt="plus" /></button>

                                <p className={discont_price === null ? styles.pr_style_none : styles.pr_sale}>${sumCount}</p>
                                <p className={discont_price === null ? styles.pr_sale : styles.pr_through}>${sumThroughCount}</p>
                                
                            </div>
                        </div>
    </div>

    </>
  )
}

export default ProductCart