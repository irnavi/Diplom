import styles from "./SingleProductCard.module.css";
import { fetchProductId } from "../../store/slices/singleProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductCard() {

  const { product_id } = useParams();

  const productIdList = useSelector((state) => state.product.productIdList[0]);
  console.log(productIdList)

  const dispatch = useDispatch();

  
    // const [showFullText, setShowFullText] = useState(false);
    // const text = productIdList.description;
  
  
    // const toggleText = () => {
    //   setShowFullText(!showFullText);
    // };

  useEffect(() => {
    dispatch(fetchProductId(product_id))
  }, [dispatch, product_id]);


    
  return (
    <section className={styles.singleProductCard}>
      <div className={styles.container}>
        <div className={styles.singleProductCard_items}>

          <div className={styles.singleProductCard_img}>
            <img className={styles.img_item}  src={`http://localhost:3333${productIdList.image}`} alt="" />
          </div>
          <div className={styles.singleProductCard_info}>
            <h3 className={styles.headerFromProduct}>{productIdList.title}</h3>
            <div className={styles.pricesFromProduct}>
              <div className={styles.basicPrice}>
                <p>${productIdList.discont_price}</p>
              </div>
              <div className={styles.throughPrice}>
                <p>${productIdList.price}</p>
              </div>
              <div className={styles.saleFromPrice}></div>
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
                      {productIdList.description}
                    </p>
                    <button className={styles.read_more}>
                      
                      Read more
                    </button>
            </div>
          </div>
          </div>
          

        </div>
      </div>
        
    </section>
  )
}

export default SingleProductCard