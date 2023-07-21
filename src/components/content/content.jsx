import styles from "./content.module.css";
import Advantages from "../advantages/advantages";
import BallBackground from "../ball-background/ball-background";
import React from "react";


function Content() {
    return (
           <div className={styles.container}>
               <div>
                   <BallBackground />
                   <p>Зарабатывайте <br />больше</p>
                   <p>с WELBEX</p>
                   <p>Развиваем и контролируем продажи за вас</p>
               </div>
               <Advantages />
           </div>
    );
}

export default Content;