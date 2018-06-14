import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import route from './router/index.jsx'
import store from './asycredux/store'
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import 'antd/dist/antd.css';
import './scss/index.scss'

// import { hot } from 'react-hot-loader'

// const App = () => route

// let root = hot(module)(<Provider store={store}>
//     <LocaleProvider locale={zhCN}>
//         {route}
//     </LocaleProvider>

// </Provider>)
// console.log(root)

// render(
//     { root}
//     ,
//     document.getElementById('app')
// )

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <LocaleProvider locale={zhCN}>
                {route}
            </LocaleProvider>
        </Provider>
        ,
        document.getElementById('app')
    )
}

if (module.hot) {
    const renderApp = render
    render = () => {
        try {
            renderApp()
        } catch (error) {
            console.error(error);
        }
    }
    const rerender = () => {
        setTimeout(render)
    }
    module.hot.accept(render, rerender)
}

render()




