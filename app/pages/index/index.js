import React from 'react'
import { connect } from 'react-redux'

import Test1 from '../../components/test1'
import Test2 from '../../components/test2'

// class Index extends React.Component {
//     constructor(props) {
//         super(props)
//         // console.log(1234)
//     }

//     render() {
//         return (
//             <div className="router">
//                 this is index and my pages && test

//                 <Test1 />
//                 <Test2 />
//             </div>
//         )
//     }
// }

const Index = (props) => {
    return (
        <h2 className="propClass">hello. props = {props.name} + ages = {props.avator}</h2>
    )
}

// const Index = React.createClass({
//     render () {
//         return (
//             <div className="router">
//                 this is index and my pages && test
//                 <Test1 />
//                 <Test2 />
//             </div>
//         )
//     }
// })

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        changeName() {
            dispatch({
                type: "CHANGE_NAME",
                name: 'xxx'
            })
        },
        showDialog() {
            dispatch({
                type: 'SHOW_DIALOG'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)