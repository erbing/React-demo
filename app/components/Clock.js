import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: 'this is state'}
    }

    render() {
        return (
            <div>
                <h2>this is clock components</h2>
                <h3> It's {this.state.date} </h3>
            </div>
        )
    }
}

export default Clock
