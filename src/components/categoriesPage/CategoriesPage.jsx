import { useSelector } from "react-redux";
import styles from "./CategoriesPage.module.css";
import { Link } from "react-router-dom";


function CategoriesPage() {

    const categoriesList = useSelector((state) => state.categories.categoriesList)
    

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

                        {categoriesList.map((categorItem) => { 
                           return  <div className={styles.wrapper_item} key={categorItem.id}>
                             <div className={styles.wrapper_img}>
                                 <img src={`http://localhost:3333${categorItem.image}`} alt="" />
                             </div>
                             <div className={styles.wrapper_title}>
                                 <p className={styles.title_text}>{categorItem.title}</p>
                             </div>
                         </div>
})}
                        </div>
                       

                    

                </div>
            </div>
        </div>

    </section>
  )
}

export default CategoriesPage