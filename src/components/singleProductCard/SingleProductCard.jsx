import styles from "./SingleProductCard.module.css";
import { fetchProductId } from "../../store/slices/singleProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import minus from "../../assets/image/icon-minus.svg";
import plus from "../../assets/image/icon-plus.svg";
import { Link } from "react-router-dom";
import { addItemCart } from "../../store/slices/cartSlice";
// import { countMinus, countPlus } from "../../store/slices/cartSlice";

function SingleProductCard() {

 

  const { product_id } = useParams();
  
  const productIdList = useSelector((state) => state.product.productIdList);
  
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  function countPlus() {
    setCount(count + 1)
  }

  useEffect(() => {
    dispatch(fetchProductId(product_id));
    
  }, [dispatch, product_id]);


    
  return (
    <section className={styles.singleProductCard}>
      {productIdList.map((product) => {
        return <div key={product.id} className={styles.container}>
        <div className={styles.categoriesPage_nav}>
                    <Link to='/'><button className={styles.nav_btn_mainPage}>Main page</button></Link>
                    <div className={styles.nav_line}></div>
                    <Link to="/categories"><button className={styles.nav_btn_categories}>Categories</button></Link>
                    <div className={styles.nav_line}></div>
                    
                    <Link to={`/categories/${product.categoryId}`}><button className={styles.nav_btn_categories}>{product.categoryId}</button></Link>

                    <div className={styles.nav_line}></div>
                    <button className={styles.nav_btn_product}>{product.title}</button>
                  
                    
        </div>


        <div className={styles.singleProductCard_items}>

          <div className={styles.singleProductCard_img}>
            <img className={styles.img_item}  src={`http://localhost:3333${product.image}`} alt="" />
          </div>
          <div className={styles.singleProductCard_info}>
            <h3 className={styles.headerFromProduct}>{product.title}</h3>

            <div className={styles.pricesFromProduct}>

              <div className={product.discont_price === null ? styles.prise_sale_none : styles.basicPrice}>
                <p className={product.discont_price === null ? styles.prise_sale_none : styles.basicPrice}>
                  ${product.discont_price}</p>
              </div>

              <div className={product.discont_price === null ? styles.basicPrice : styles.throughPrice}>
                <p className={product.discont_price === null ? styles.basicPrice : styles.throughPrice}>
                  ${product.price}</p>
              </div>
              
              <div className={product.discont_price === null ? styles.prise_sale_none : styles.saleFromPrice}>
                 <p className={product.discont_price === null ? styles.prise_sale_none : styles.saleFromPrice}>
                        -{(((product.price - product.discont_price) / product.price) * 100).toFixed(1)}%
                  </p>
              </div>
            </div>

            <div className={styles.btns_from_cart}>
                <button className={styles.btn_minus} ><img src={minus} alt="minus" /></button>

                <div className={styles.quantity_of_product}>{count}</div>

                <button className={styles.btn_plus} onClick={countPlus} ><img src={plus} alt="plus" /></button>

                <button className={styles.btn_addToCart} onClick={() => dispatch(addItemCart(product))}>Add to cart</button>

            </div>

            <div className={styles.description_items}>
                  <h4 className={styles.description_header}>Description</h4>
                  <div className={styles.description_text}>
                    <p className={styles.text}>
                      {product.description}
                    </p>
                    <button className={styles.read_more}>
                      
                      Read more
                    </button>
            </div>
          </div>
          </div>
          

        </div>
      </div>
      })}
      
        
    </section>
  )
}

export default SingleProductCard