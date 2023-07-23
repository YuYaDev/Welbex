import React from 'react';
import ReactDOM from 'react-dom/client';

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


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

reportWebVitals();


