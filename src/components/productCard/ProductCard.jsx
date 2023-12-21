import { Link, useParams } from "react-router-dom";
import styles from "./ProductCard.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchProductId from "../../store/slices/singleProduct";
import { fetchProducts } from "../../store/slices/productsSlice";




function ProductCard(props) {

    const {productsList} = props
    const visible = false;
    
    const { id } = useParams;

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch, id]);


    
    

  return (
    <>
    <div className={styles.productsPage_wrapper}>
           {productsList.map((product) => { 
               return <Link to={`/products/${product.id}`}><div key={product.id} className={styles.product_card}>
           
               <div className={styles.product_img}>
                   <img src={`http://localhost:3333${product.image}`} alt="" />
                   <div className={styles.sale_absolute}>
                       <p className={styles.absolute_text}>-50%</p>
                   </div>
                   <div className={`${styles.btn_absolute} ${styles.hide_btnCart}`}>
                       <button className={styles.addToCart_btn}>Add to cart</button>
                   </div>
               </div>
   
               <div className={styles.product_info}>
                   <div className={styles.product_title}>
                       <p className={styles.title_text}>{product.title}</p>
                   </div>
                   <div className={styles.product_prise}>
                       <p className={styles.prise_sale}>{`$${product.discont_price}`}</p>
                       <p className={styles.prise_default}>{`$${product.price}`}</p>
                   </div>
               </div>
   
             </div>
             </Link>
})}
        

    </div>
    </>
  )
}

export default ProductCard