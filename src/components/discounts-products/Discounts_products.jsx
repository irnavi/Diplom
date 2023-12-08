import React from 'react'
import style from "./Disc_prod.module.css"

function DiscountsProducts() {
  return (
    <section className={style.discounts_products}>
        <div className={`${style.container} ${style.presentation}`}>
           
                <h1 className={style.section_text}>
                Amazing Discounts on Garden Products!
                </h1>
                <button className={style.section_btn}>Check out</button> 
            
            
        </div>

    </section>
  )
}

export default DiscountsProducts