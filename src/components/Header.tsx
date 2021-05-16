import React from 'react'

interface IPropsHeader {
    tagline: string;
}

const Header = (props: IPropsHeader) => (
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
            <span>{props.tagline}</span>
        </h3>
    </header>
)

export default Header
