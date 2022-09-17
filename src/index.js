import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginScreen from './screens/LoginScreen';
import SchedulesScreen from './screens/SchedulesScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SchedulesScreen />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

