import styles from "./logo.module.css";
import logo_part1 from "../../images/logo_part1.svg"
import logo_part2 from "../../images/logo_part2.svg"
import React from 'react'

function Logo() {
    return (
        <div className={styles.containerColumn}>
            <div className={styles.containerRow}>
                <img src={logo_part1} alt="Logo" />
                <img src={logo_part2} alt="Logo" />
            </div>
            <p className={styles.text}>крупный интегратор CRM <br /> в Росcии и ещё 8 странах</p>
        </div>

    );
}

export default Logo;