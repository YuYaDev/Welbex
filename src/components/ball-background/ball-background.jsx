import styles from "./ball-background.module.css";
import decorBigRedBall from "../../images/red ball.svg"
import decorMiniRedBall from "../../images/red ball mini.svg"
import decorPurpleBall from "../../images/purple ball.svg"

function BallBackground() {
    return (
        <div className={styles.container}>
            <img className={styles.decorBigRedBall} src={decorBigRedBall} alt="Big red ball" />
            <img className={styles.decorMiniRedBall} src={decorMiniRedBall} alt="Mini red ball" />
            <img className={styles.decorPurpleBall} src={decorPurpleBall} alt="Purple ball" />
            <div className={styles.blurPurpleBall}></div>
            <div className={styles.blurRedBall}></div>
        </div>
    );
}

export default BallBackground;