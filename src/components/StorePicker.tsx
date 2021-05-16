import React, { Component, BaseSyntheticEvent, useState } from 'react'
import { RouteComponentProps } from 'react-router';
import { getFunName } from '../helpers'
export class StorePicker extends Component<RouteComponentProps> {
    myInput = React.createRef<HTMLInputElement>();

    handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        const storeName = this.myInput.current?.value;
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.handleSubmit}>
                <h2>Please Enter a Store</h2>
                <input ref={this.myInput} required type="text" placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker
