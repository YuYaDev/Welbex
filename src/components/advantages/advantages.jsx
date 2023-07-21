import styles from "./advantages.module.css";

function Advantages() {
    return (
        <div className={styles.container}>
            <p>Вместе с бесплатной консультацией мы дарим:</p>

            <div className={styles.desktopAdvantages}>
                <div className={styles.advantageItem}>
                    <p>Виджеты</p>
                    <p>30 готовых решений</p>
                </div>
                <div className={styles.advantageItem}>
                    <p>Dashboard</p>
                    <p>с показателями вашего бизнеса</p>
                </div>
                <div className={styles.advantageItem}>
                    <p>Skype Аудит</p>
                    <p>отдела продаж и CRM системы</p>
                </div>
                <div className={styles.advantageItem}>
                    <p>35 дней</p>
                    <p>использования CRM</p>
                </div>

            </div>

            <div className={styles.mobileAdvantages}>
                <div className={styles.advantageItemMobile}>
                    <p>-</p>
                    <p>Skype аудит</p>
                </div>
                <div className={styles.advantageItemMobile}>
                    <p>-</p>
                    <p>30 виджетов</p>
                </div>
                <div className={styles.advantageItemMobile}>
                    <p>-</p>
                    <p>Dashboard</p>
                </div>
                <div className={styles.advantageItemMobile}>
                    <p>-</p>
                    <p>Месяц аmoCRM</p>
                </div>
            </div>

            <button className={styles.button}>Получить консультацию</button>
        </div>
    );
}

export default Advantages;