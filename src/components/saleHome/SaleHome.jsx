import styles from "./SaleHome.module.css";
import { Link } from "react-router-dom";

function SaleHome() {
  return (
    <section className={styles.saleHome}>
        <div className={styles.container}>
            <div className={styles.saleHome_items}>
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
                            <div className={styles.sale_absolute}>
                                <p className={styles.absolute_text}>-50%</p>
                            </div>
                        </div>
                        <div className={styles.product_info}>
                             <div className={styles.product_title}>
                                 <p className={styles.title_text}>Decorative forged bridge</p>
                             </div>
                             <div className={styles.product_prise}>
                                 <p className={styles.prise_sale}>$500</p>
                                 <p className={styles.prise_default}>$1000</p>
                             </div>
                        </div>
                    </div>
                    <div className={styles.product_card}>
                    <div className={styles.product_img}>
                        <img src="" alt="" />
                        <div className={styles.sale_absolute}>
                        <p className={styles.absolute_text}>-34%</p>
                        </div>
                    </div>
                    <div className={styles.product_info}>
                        <div className={styles.product_title}>
                        <p className={styles.title_text}>Flower basket</p>
                        </div>
                        <div className={styles.product_prise}>
                        <p className={styles.prise_sale}>$100</p>
                        <p className={styles.prise_default}>$150</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.product_card}>
                    <div className={styles.product_img}>
                        <img src="" alt="" />
                        <div className={styles.sale_absolute}>
                        <p className={styles.absolute_text}>-25%</p>
                        </div>
                    </div>
                    <div className={styles.product_info}>
                        <div className={styles.product_title}>
                        <p className={styles.title_text}>Aquarium lock</p>
                        </div>
                        <div className={styles.product_prise}>
                        <p className={styles.prise_sale}>$150</p>
                        <p className={styles.prise_default}>$200</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.product_card}>
                    <div className={styles.product_img}>
                        <img src="" alt="" />
                        <div className={styles.sale_absolute}>
                        <p className={styles.absolute_text}>-17%</p>
                        </div>
                    </div>
                    <div className={styles.product_info}>
                        <div className={styles.product_title}>
                        <p className={styles.title_text}>Secateurs</p>
                        </div>
                        <div className={styles.product_prise}>
                        <p className={styles.prise_sale}>$199</p>
                        <p className={styles.prise_default}>$240</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SaleHome;
