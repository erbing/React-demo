import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from './common/Header'
import Main from './common/Main'
// import Hello from './components/Hello'
// import CompProp from './components/Prop'
// import Clock from './components/Clock'
// import OnClick from './components/OnClick'
// import IfRender from './components/IfRender'
// import SanMu from './components/SanMu'
// import StopRenderCpt from './components/StopRenderCpt'
// import List from './components/List'
// import Form from './components/Form'

// import Tisheng from './components/Tisheng'
// import SplitPane from './components/SplitPane'
// import PropsChildren from './components/PropsChildren'

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
            {/* <Hello /> */}
            {/* <CompProp name="hahahha" age="123123"/>
            <Clock time="2000"/>
            <Clock time="4000"/>
            <Clock time="6000"/>
            <OnClick />
            <IfRender />
            <SanMu />
            <StopRenderCpt />
            <List />
            <Form /> */}
            {/* <Tisheng />
            <SplitPane />
            <PropsChildren /> */}
        </div>
    )
}

ReactDom.render((
    <BrowserRouter>
        <APP />
    </BrowserRouter>
), document.getElementById('apps'))