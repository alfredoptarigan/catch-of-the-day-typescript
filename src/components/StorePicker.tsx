import React, { Component } from 'react'

export class StorePicker extends Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please Enter a Store</h2>
                <input type="text" placeholder="Store Name" />
                <button type="button">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker
