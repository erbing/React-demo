import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from './common/Header'
import Main from './common/Main'

/**
 * 引入 redux
 */

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

/**
 * 引入 reducers
 */

import reducer from './reducers'


/**
 * 创建一个初始化的state
 */

const initState = {
    card: {
        name: 'Jack Ma',
        avator: 'a.jpg'
    },
    dialog: {
        states: false
    }
}



/**
 * 创建一个 store 仓库
 */

const store = createStore(reducer, initState)


const APP = () => (
    <div>
        <Header />
        <Main />
    </div>
)

const Element = ()=>{
    return (
        <div>
            <h1>Hello, world </h1>
        </div>
    )
}

ReactDom.render((
    <Provider store={store}>
        <BrowserRouter>
            <APP />
        </BrowserRouter>
    </Provider>
), document.getElementById('apps'))
