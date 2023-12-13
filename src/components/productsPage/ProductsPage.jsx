import Filter from "../filter/Filter";
import ProductCard from "../productCard/ProductCard";
import styles from "./ProductsPage.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



function ProductsPage() {

    const productsList = useSelector((state) => state.products.productsList);
    console.log(productsList)

  return (
    <section className={styles.productsPage}>
        <div className={styles.container}>
            <div className={styles.productsPage_items}>

                <div className={styles.productsPage_nav}>
                    <Link to='/'><button className={styles.nav_btn_mainPage}>Main page</button></Link>
                    <div className={styles.nav_line}></div>
                    <button className={styles.nav_btn_products}>All products</button>
                </div>

                <div className={styles.productsPage_header_h2}>
                        <h2 className={styles.h2_text}>All products</h2>
                </div>

                <Filter />
                <ProductCard productsList={productsList}/>
            
                
            </div>
        </div>

    </section>
  )
}

export default ProductsPage