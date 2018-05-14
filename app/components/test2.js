import React from 'react'
import { connect } from 'react-redux'

const Dialog = (props) => {
    if(!props.status)  return null

    return (
        <div className="dialog">
            <div> dialog </div>
            <button onClick={props.hideDialog}>close</button>
        </div>
    )
}

function mapStateToProp(state) {
    var info = state.dialog
    return {
        status: info.status 
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        hideDialog() {
            dispatch({
                type: 'CLOSE_DIALOG'
            })
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Dialog)