import styles from './app-header.module.css';
import Logo from '../logo/logo'
import telegramIcon from "../../images/telegram-icon.svg";
import whatsappIcon from "../../images/whatsapp-icon.svg";
import viberIcon from "../../images/viber-icon.svg";

function AppHeader() {

    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.desktopMenu}>
                <ul className={styles.navbar}>
                    <li><a href="#" className={styles.navText}>Услуги</a></li>
                    <li><a href="#" className={styles.navText}>Виджеты</a></li>
                    <li><a href="#" className={styles.navText}>Интеграции</a></li>
                    <li><a href="#" className={styles.navText}>Кейсы</a></li>
                    <li><a href="#" className={styles.navText}>Сертификаты</a></li>
                </ul>
            </nav>
            <nav className={styles.mobileMenu}>
                <ul className={styles.navbar}>
                    <li><a href="#" className={styles.navText}>Услуги</a></li>
                    <li><a href="#" className={styles.navText}>Виджеты</a></li>
                    <li><a href="#" className={styles.navText}>Интеграции</a></li>
                    <li><a href="#" className={styles.navText}>Кейсы</a></li>
                </ul>
            </nav>
            <div className={styles.contacts}>
                <p>+7 555 555-55-55</p>
                <ul className={styles.social}>
                    <li><img src={telegramIcon} alt="telegram" /></li>
                    <li><img src={whatsappIcon} alt="whatsapp" /></li>
                    <li><img src={viberIcon} alt="viber" /></li>
                </ul>
            </div>
        </header>
    );
}

export default AppHeader;