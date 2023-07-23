import styles from "./advantages.module.css";
import React from 'react'

function Advantages() {
    return (
        <div className={styles.container}>
            <div className={styles.advantagesTitle}>
                <p className={styles.title}>Вместе с</p>
                <p className={styles.titleHighlighted}>бесплатной</p>
                <p className={styles.titleHighlighted}> консультацией</p>
                <p className={styles.title}>мы дарим:</p>
            </div>

            <div className={styles.desktopAdvantages}>
                <div className={styles.advantageItem}>
                    <p className={styles.itemTitle}>Виджеты</p>
                    <p className={styles.itemText}>30 готовых решений</p>
                </div>
                <div className={styles.advantageItem}>
                    <p className={styles.itemTitle}>Dashboard</p>
                    <p className={styles.itemText}>с показателями вашего бизнеса</p>
                </div>
                <div className={styles.advantageItem}>
                    <p className={styles.itemTitle}>Skype Аудит</p>
                    <p className={styles.itemText}>отдела продаж и CRM системы</p>
                </div>
                <div className={styles.advantageItem}>
                    <p className={styles.itemTitle}>35 дней</p>
                    <p className={styles.itemText}>использования CRM</p>
                </div>

            </div>

            <div className={styles.mobileAdvantages}>
                <div className={styles.advantageItemMobile}>
                    <p className={styles.titleHighlighted}>—</p>
                    <p className={styles.advantageTextMobile}>Skype аудит</p>
                </div>
                <div className={styles.advantageItemMobile}>
                    <p className={styles.titleHighlighted}>—</p>
                    <p className={styles.advantageTextMobile}>30 виджетов</p>
                </div>
                <div className={styles.advantageItemMobile}>
                    <p className={styles.titleHighlighted}>—</p>
                    <p className={styles.advantageTextMobile}>Dashboard</p>
                </div>
                <div className={styles.advantageItemMobile}>
                    <p className={styles.titleHighlighted}>—</p>
                    <p className={styles.advantageTextMobile}>Месяц аmoCRM</p>
                </div>
            </div>

            <button className={styles.button}>Получить консультацию</button>
        </div>
    );
}

export default Advantages;