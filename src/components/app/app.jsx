import React from 'react'
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import Content from "../content/content";
import AppFooter from "../app-footer/app-footer";


function App() {
    return (
        <div className={styles.container}>
            <div style={{position: "relative"}}>
                <AppHeader />
                <Content />
                <AppFooter />
            </div>
        </div>

    );
}

export default App;