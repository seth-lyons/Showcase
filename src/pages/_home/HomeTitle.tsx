import * as React from 'react';

export function HomeTitle(props) {
    return (
        <div className="topArea">
            <div className="mask"></div>
            <div className="content">
                <h1 className="title">DELOREAN</h1>
                <div className="notes">
                    <ul>
                        <li>style</li>
                        <li>comfort</li>
                        <li>power</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}