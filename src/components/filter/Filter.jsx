import styles from "./Filter.module.css"

function Filter() {
  return (
    <>
     <div className={styles.productsPage_filter}>
                    <p className={styles.filter_price}>Price</p>
                    <input className={styles.inp_from} type="text" placeholder='from'/>
                    <input className={styles.inp_to} type="text" placeholder='to' />
                    <label className={styles.label_discount} htmlFor="products_checkbox">Discounted items</label>
                    <input className={styles.inp_checkbox} id="products_checkbox" type="checkbox" />
                    <label className={styles.label_sort} htmlFor="products_select">Sorted</label>
                    <select className={styles.select_sort} name="products_select" id="products_select">
                        <option value="by default">by default</option>
                        <option value="newest">newest</option>
                        <option value="price: high-low">price: high-low</option>
                        <option value="price: low-high">price: low-high</option>
                    </select>
                </div>
    </>
  )
}

export default Filter