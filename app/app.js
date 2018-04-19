import React from 'react'
import ReactDom from 'react-dom'

import Hello from './components/Hello'

const Element = ()=>{
    return <h1>Hello, world !!!</h1>
}


ReactDom.render(
    <Element />,
    document.getElementById('apps')
)