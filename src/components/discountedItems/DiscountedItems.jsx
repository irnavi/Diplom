import { useSelector } from "react-redux";
import styles from "./DiscountedItem.module.css";
import { Link } from "react-router-dom";



function DiscountedItems() {
  const productsList = useSelector((state) => state.products.productsList);

  const discountList = productsList.filter(
    (product) => product.discont_price !== null
  );

  return (
    <section className={styles.discountedItems}>
      <div className={styles.container}>
        <div className={styles.discountedItems_items}>
          <div className={styles.discountedItems_nav}>
            <Link to="/">
              <button className={styles.nav_btn_mainPage}>Main page</button>
            </Link>
            <div className={styles.nav_line}></div>
            <button className={styles.nav_btn_products}>All sales</button>
          </div>

          <div className={styles.discountedItems_header_h2}>
            <h2 className={styles.h2_text}>Discounted items</h2>
          </div>

          <div className={styles.discountedItems_filter}>
            <p className={styles.filter_price}>Price</p>
            <input className={styles.inp_from} type="text" placeholder="from" />
            <input className={styles.inp_to} type="text" placeholder="to" />

            <label className={styles.label_sort} htmlFor="products_select">
              Sorted
            </label>
            <select
              className={styles.select_sort}
              name="products_select"
              id="products_select"
            >
              <option value="by default">by default</option>
              <option value="newest">newest</option>
              <option value="price: high-low">price: high-low</option>
              <option value="price: low-high">price: low-high</option>
            </select>
          </div>



          <div className={styles.productsPage_wrapper}>
            {discountList.map((product) => {
              return (
                <Link key={product.id} to={`/products/${product.id}`} className={styles.product_link}><div key={product.id} className={styles.product_card}>
                <div className={styles.product_img}>
                  <img src={`http://localhost:3333${product.image}`} alt="" />
                  <div className={product.discont_price === null ? styles.prise_sale_none : styles.sale_absolute}>
                       <p className={product.discont_price === null ? styles.prise_sale_none : styles.absolute_text}>
                        -{(((product.price - product.discont_price) / product.price) * 100).toFixed(1)}%
                        </p>
                   </div>
                </div>

                <div className={styles.product_info}>
                  <div className={styles.product_title}>
                    <p className={styles.title_text}>{product.title}</p>
                  </div>
                  <div className={styles.product_prise}>
                    <p
                      className={styles.prise_sale}
                    >{`$${product.discont_price}`}</p>
                    <p
                      className={styles.prise_default}
                    >{`$${product.price}`}</p>
                  </div>
                </div>
              </div></Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountedItems;