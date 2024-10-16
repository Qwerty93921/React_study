// import React from 'react';
// import ReactDOM from 'react-dom/client';

// 43 min - Roman Statchuk

// DOM - Document Object Model
// SPA - Single Page Application
// NPM - Node package manager
// React использует ES6 - EcmaScript 6
// https://react.dev/learn

// 4 основных понятия React

// Component
// JSX - JavaScript Syntax Extension
// Props - свойства
// State - состояние

// Перед командами должен быть установлен Node.js -------------------------------------------------------------------------------------------------------

// React показывает html страницу через функцию render в index.js
// Функция createRoot()принимает один аргумент — HTML-элемент.

// Целью функции является определение HTML-элемента, в котором должен отображаться компонент React.

// index.js

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

//npx create-react-app my-react-app
// После npx create-react-app идет название приложения

// Если команда не работает, нужно папку "npm" создать вручную
// C:\Users\Me\AppData\Roaming\npm

// If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app.
// To uninstall, run this command: npm uninstall -g create-react-app.
// Если надо удалить и заново установить react

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// npm start
// Запускает страницу на localhost:3000

// React создает виртуальную(!!!!!!!!!) модель DOM в памяти и меняет в ней компоненты и только в конце меняет настоящую(!!!!!!!!!!!!!!) модель

// В папке public есть файл index.html с пустым div тегом, он будет отображаться в react(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)

// ----------------------------------------------------------------------------

// 2 вида функции:

// 1)

// function HelloWorld() {
//     return <h1>Hello World</h1>
// }

// 2)

// const HelloWorld = () => {
//     return <h1>Hello World</h1>
// }
