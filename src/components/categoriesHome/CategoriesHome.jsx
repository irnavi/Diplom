import styles from "./CategoriesHome.module.css";
import { Link } from "react-router-dom";



function CategoriesHome() {
  return (
    <section className={styles.categoriesHome}>
        <div className={`${styles.container} ${styles.categories_items}`}>
            <div className={styles.header_h2}>
                <h2 className={styles.header_title}>Categories</h2>
                <div className={styles.line}></div>
                <div className={styles.categories_btn}>
                    <Link to="/categories">
                        <button className={styles.btn_allCategories}>All categories</button>
                    </Link>
                </div>
            </div>
            <div className={styles.carusel_items}>
                <div className={styles.carusel_item}>
                    <div className={styles.carusel_img}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.carusel_title}>
                        <p className={styles.title_text}>Fertilizer</p>
                    </div>
                </div>
                <div className={styles.carusel_item}>
                    <div className={styles.carusel_img}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.carusel_title}>
                        <p className={styles.title_text}>Protective products and septic tanks</p>
                    </div>
                </div>
                <div className={styles.carusel_item}>
                    <div className={styles.carusel_img}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.carusel_title}>
                        <p className={styles.title_text}>Planting material	</p>
                    </div>
                </div>
                <div className={styles.carusel_item}>
                    <div className={styles.carusel_img}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.carusel_title}>
                        <p className={styles.title_text}>Tools and equipment</p>
                    </div>
                </div>
               
            </div>
        </div>
       
    </section>
  )
}

export default CategoriesHome