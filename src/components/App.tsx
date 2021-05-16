import React, { Component } from 'react';
import Inventory from './Inventory';
import Order from './Order';
import Header from './Header';

export class App extends Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh from the market" />
                </div>
                <Order />
                <Inventory />
            </div>

        )
    }
}

export default App
