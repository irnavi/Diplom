import { useEffect } from "react";
import styles from "./CategoriesHome.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import CategoriesCarusel from "../CategoriesCarusel/CategoriesCarusel";


function CategoriesHome() {

    const categoriesList = useSelector((state) => state.categories.categoriesList);
    
        

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchCategories());
          }, [dispatch]);

    

    

        

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
               <CategoriesCarusel />
               
            </div>
        </div>
       
    </section>
  )
}


export default CategoriesHome