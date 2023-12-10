import styles from "./CategoriesPage.module.css";
import { Link } from "react-router-dom";


function CategoriesPage() {
  return (
    <section className={styles.categoriesPage}>
        <div className={styles.container}>
            <div className={styles.categoriesPage_items}>
                <div className={styles.categoriesPage_nav}>
                    <Link to='/'><button className={styles.nav_btn_mainPage}>Main page</button></Link>
                    <div className={styles.nav_line}></div>
                    <button className={styles.nav_btn_categories}>Categories</button>
                </div>
                <div className={styles.categoriesPage_wrapper}>
                    <div className={styles.categoriesPage_header_h2}>
                        <h2 className={styles.h2_text}>Categories</h2>
                    </div>
                    <div className={styles.wrapper_items}>
                        <div className={styles.wrapper_item}>
                            <div className={styles.wrapper_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.wrapper_title}>
                                <p className={styles.title_text}>Fertilizer</p>
                            </div>
                        </div>

                        <div className={styles.wrapper_item}>
                            <div className={styles.wrapper_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.wrapper_title}>
                                <p className={styles.title_text}>Protective products and septic tanks</p>
                            </div>
                        </div>

                        <div className={styles.wrapper_item}>
                            <div className={styles.wrapper_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.wrapper_title}>
                                <p className={styles.title_text}>Planting material</p>
                            </div>
                        </div>

                        <div className={styles.wrapper_item}>
                            <div className={styles.wrapper_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.wrapper_title}>
                                <p className={styles.title_text}>Tools and equipment</p>
                            </div>
                        </div>

                        <div className={styles.wrapper_item}>
                            <div className={styles.wrapper_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.wrapper_title}>
                                <p className={styles.title_text}>Home Goods</p>
                            </div>
                        </div>

                        <div className={styles.wrapper_item}>
                            <div className={styles.wrapper_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.wrapper_title}>
                                <p className={styles.title_text}>Pots and planters</p>
                            </div>
                        </div>

                        <div className={styles.wrapper_item}>
                            <div className={styles.wrapper_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.wrapper_title}>
                                <p className={styles.title_text}>For indoor plants</p>
                            </div>
                        </div>

                        <div className={styles.wrapper_item}>
                            <div className={styles.wrapper_img}>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.wrapper_title}>
                                <p className={styles.title_text}>Garden figures</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
  )
}

export default CategoriesPage