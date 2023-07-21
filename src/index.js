import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app/app";
import reportWebVitals from './reportWebVitals';

import './fonts/Inter-Black.ttf';
import './fonts/Inter-Bold.ttf';
import './fonts/Inter-ExtraBold.ttf';
import './fonts/Inter-SemiBold.ttf';
import './fonts/Inter-Regular.ttf';
import './fonts/Inter-Medium.ttf';
import './fonts/Montserrat-Light.ttf';
import './fonts/Montserrat-Regular.ttf';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
