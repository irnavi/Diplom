import { Link, useParams } from "react-router-dom";
import styles from "./ProductCard.module.css"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/slices/productsSlice";




function ProductCard(props) {

    const {productsList} = props
    const visible = true;
    
    const { id } = useParams;

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch, id]);


    
    

  return (
    <>
    <div className={styles.productsPage_wrapper}>
           {productsList.map((product) => { 
               return <div key={product.id} className={styles.product_card}>
           
               <div className={styles.product_img}>
                   <img src={`http://localhost:3333${product.image}`} alt="" />
                   <div className={product.discont_price === null ? styles.prise_sale_none : styles.sale_absolute}>
                       <p className={product.discont_price === null ? styles.prise_sale_none : styles.absolute_text}>
                        -{(((product.price - product.discont_price) / product.price) * 100).toFixed(1)}%
                        </p>
                   </div>
                   <div className={visible === false ? styles.btn_absolute : styles.hide_btnCart} >
                       <button className={styles.addToCart_btn}>Add to cart</button>
                   </div>
               </div>
   
               <Link to={`/products/${product.id}`} className={styles.product_link}>
                <div className={styles.product_info}>
                   <div className={styles.product_title}>
                       <p className={styles.title_text}>{product.title}</p>
                   </div>
                   
                   <div className={styles.product_prise}>
                       <p className={product.discont_price === null ? styles.prise_sale_none : styles.prise_sale}>
                        {`$${product.discont_price}`}
                        </p>
                       <p className={product.discont_price === null ? styles.prise_sale : styles.prise_default}>
                        {`$${product.price}`}
                        </p>
                   </div>
               </div></Link>
   
             </div>
             
})}
        

    </div>
    </>
  )
}

export default ProductCard