import React from 'react'
import ReactDom from 'react-dom'

const Element = (props)=>{
    return <h1>Hello, world</h1>
}


ReactDom.render(
    Element,
    document.getElementById('apps')
)