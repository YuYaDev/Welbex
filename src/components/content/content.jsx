import styles from "./content.module.css";
import Advantages from "../advantages/advantages";
import BallBackground from "../ball-background/ball-background";
import React from "react";


function Content() {
    return (
           <div className={styles.container}>
               <div>
                   <BallBackground />
                   <p className={styles.title}>Зарабатывайте <br />больше</p>
                   <p className={styles.titleLogo}>с WELBEX</p>
                   <p className={styles.subtitle}>Развиваем и контролируем<br />продажи за вас</p>
               </div>
               <Advantages />
           </div>
    );
}

export default Content;