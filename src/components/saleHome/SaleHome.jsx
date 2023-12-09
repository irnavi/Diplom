import styles from "./SaleHome.module.css"
import { Link } from "react-router-dom"

function SaleHome() {
  return (
    <section className={styles.saleHome}>
        <div className={`${styles.saleHome_items} ${styles.container}`}>
            <div className={styles.header_h2}>
                    <h2 className={styles.header_title}>Sale</h2>
                    <div className={styles.line}></div>
                    <div className={styles.sales_btn}>
                        <Link to="/sales">
                            <button className={styles.btn_allSales}>All sales</button>
                        </Link>
                    </div>
            </div>
            <div className={styles.sale_carusel}>
                <div className={styles.product_card}>
                    <div className={styles.product_img}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.product_title}>
                        <p className={styles.title_text}>Decorative forged bridge</p>
                    </div>
                    <div className={styles.product_prise}>
                        <p className={styles.prise_sale}>$500</p>
                        <p className={styles.prise_default}>$1000</p>
                    </div>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default SaleHome