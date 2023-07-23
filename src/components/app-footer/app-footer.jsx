import styles from "./app-footer.module.css";
import telegramIcon from "../../images/telegram-icon.svg";
import whatsappIcon from "../../images/whatsapp-icon.svg";
import viberIcon from "../../images/viber-icon.svg";
import React from 'react'

function AppFooter() {
    return (
        <>
            <div className={styles.container}>
                <nav>
                    <p className={styles.navTitleText}>О компании</p>
                    <ul className={styles.navbar}>
                        <li><a href="#" className={styles.navText}>Партнёрская программа</a></li>
                        <li><a href="#" className={styles.navText}>Вакансии</a></li>
                    </ul>
                </nav>

                <nav>
                    <p className={styles.navTitleText}>Меню</p>
                    <div className={styles.twoColumns}>
                        <ul className={styles.navbar}>
                            <li><a href="#" className={styles.navText}>Расчёт стоимости</a></li>
                            <li><a href="#" className={styles.navText}>Услуги</a></li>
                            <li><a href="#" className={styles.navText}>Виджеты</a></li>
                            <li><a href="#" className={styles.navText}>Интеграции</a></li>
                            <li><a href="#" className={styles.navText}>Наши клиенты</a></li>
                        </ul>
                        <ul className={styles.navbar}>
                            <li><a href="#" className={styles.navText}>Кейсы</a></li>
                            <li><a href="#" className={styles.navText}>Благодарственные письма</a></li>
                            <li><a href="#" className={styles.navText}>Сертификаты</a></li>
                            <li><a href="#" className={styles.navText}>Блог на Youtube</a></li>
                            <li><a href="#" className={styles.navText}>Вопрос / Ответ</a></li>
                        </ul>
                    </div>
                </nav>

                <div className={styles.contact}>
                    <p className={styles.navTitleText}>Контакты</p>
                    <p className={styles.phoneText}>+7 555 555-55-55</p>
                    <ul className={styles.social}>
                        <li><img src={telegramIcon} alt="telegram" /></li>
                        <li><img src={viberIcon} alt="viber" /></li>
                        <li><img src={whatsappIcon} alt="whatsapp" /></li>
                    </ul>
                    <p className={styles.navText}>Москва, Путевой проезд 3с1, к 902</p>

                    <div className={styles.copyright}>
                        <p>&copy;WELBEX 2022. Все права защищены.</p>
                        <a href="#" className={styles.copyrightLink}>Политика конфиденциальности</a>
                    </div>

                </div>
            </div>

        </>
    );
}

export default AppFooter;