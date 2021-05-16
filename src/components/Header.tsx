import { string } from 'prop-types'
import React, { Component } from 'react'

interface IPropsHeader {
    tagline: string;
}


export class Header extends Component<IPropsHeader> {
    render() {
        return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        )
    }
}

export default Header
