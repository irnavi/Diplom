import React from 'react'
import styles from "./Footer.module.css"
import insta from "../../assets/image/ic-instagram.svg"
import whatsapp from "../../assets/image/ic-whatsapp.svg"
import map from "../../assets/image/map.svg"

function Footer() {
  return (
   <footer>
        <div className={styles.container}>
            <div className={styles.footer_items}>
                <h2>Contact</h2>
                <div className={styles.footer_wrapper}>
                    <div className={styles.footer_phone}>
                        <p>Phone</p>
                        <h3>+49 999 999 99 99</h3>
                    </div>
                   
                    <div className={styles.footer_socials}>
                        <p>Socials</p>
                        <img src={insta} alt="instargram_icon" />
                        <img src={whatsapp} alt="whatsapp_icon" />
                    </div>
                    <div className={styles.footer_address}>
                        <p>Address</p>
                        <h3>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h3>
                    </div>
                    <div className={styles.footer_hours}>
                        <p>Working Hours</p>
                        <h3>24 hours a day</h3>
                    </div>
                   
                </div>
                <div className={styles.footer_map}>
                    <img src={map} alt="map" />
                </div>
            </div>
                
        </div>
        
   </footer>
  )
}

export default Footer