import styles from "./content.module.css";
import Advantages from "../advantages/advantages";

function Content() {
    return (
        <div className={styles.container}>
            <div>
                <p>Зарабатывайте <br />больше</p>
                <p>с WELBEX</p>
                <p>Развиваем и контролируем продажи за вас</p>
            </div>
            <Advantages />
        </div>
    );
}

export default Content;