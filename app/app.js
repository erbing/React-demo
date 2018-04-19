import React from 'react'
import ReactDom from 'react-dom'

import Hello from './components/Hello'
import CompProp from './components/Prop'

const Element = ()=>{
    return (
        <div>
            <h1>Hello, world </h1>
            <Hello />
            <CompProp name="hahahha" />
        </div>
    )
}

ReactDom.render(
    <Element />,
    document.getElementById('apps')
)