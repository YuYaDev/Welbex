import React from 'react'
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import Content from "../content/content";
import AppFooter from "../app-footer/app-footer";


function App() {
    return (
        <div className={styles.container}>
                <AppHeader />
                <Content />
                <AppFooter />
        </div>

    );
}

export default App;