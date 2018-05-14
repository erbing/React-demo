import React from 'react'
import { connect } from 'react-redux'

const Card = (props) => {
    return (
        <div>
            <div>姓名: {props.name}</div>
            <div>头像: {props.avator}</div>
        </div>
    )
}

function mapStateToProps(state) {
    var info = state.card

    return {
      name: info.name,
      avator: info.avator
    }
}

export default connect(mapStateToProps)(Card)
