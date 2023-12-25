import styles from "./SingleProductCard.module.css";
import { fetchProductId } from "../../store/slices/singleProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProductCard() {

  const { product_id } = useParams();

  const productIdList = useSelector((state) => state.product.productIdList);
  console.log(productIdList)

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchProductId(product_id))
  }, [dispatch, product_id]);


    
  return (
    <section className={styles.singleProductCard}>
      {productIdList.map((product) => {
        return <div className={styles.container}>
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
                <button className={styles.btn_minus}>-</button>
                <div className={styles.quantity_of_product}>1</div>
                <button className={styles.btn_plus}>+</button>
                <button className={styles.btn_addToCart}>Add to cart</button>
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