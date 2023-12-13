import styles from "./ProductCard.module.css"



function ProductCard(props) {

    const productsList = props.productsList

  return (
    <>
    <div className={styles.productsPage_wrapper}>
           {productsList.map((product) => { 
               return <div key={product.id} className={styles.product_card}>
           
                <div className={styles.product_img}>
                    <img src={`http://localhost:3333${product.image}`} alt="" />
                    <div className={styles.sale_absolute}>
                        <p className={styles.absolute_text}>-50%</p>
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
})}
        

    </div>
    </>
  )
}

export default ProductCard