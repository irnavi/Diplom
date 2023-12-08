import React from 'react'
import style from "./DicsountForm.module.css"
import gardenTools from "..//../assets/image/garden-tools.svg"

function DiscountForm() {
  return (
    <section className={style.discountForm}>
        <div className={`${style.container} ${style.discountForm_items}`}>
            <div className={style.item_h2}>
                <h2>5% off on the first order</h2>
            </div>
            <div className={style.flex_wrapper}>
                <div className={style.item_img}>
                    <img src={gardenTools} alt="" />
                </div>
                <div className={style.item_form}>
                    <form className={style.discountForm_form}>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Phone number' />
                        <input type="text" placeholder='Email' />
                    </form>
                    <button className={style.btn_submit} type='submit'>Get a discount</button>
                    
            
                    
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default DiscountForm