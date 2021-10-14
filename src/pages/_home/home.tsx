import * as React from 'react';
import { HomeTitle } from './HomeTitle'
import { HomeOutline } from './HomeOutline'
import { HomeSpecs } from './HomeSpecs'
import './Home.scss'

function Home(props) {
    return (
        <div >
            <HomeTitle />
            <HomeOutline />
            <HomeSpecs />
        </div>
    );
}

export default React.memo(Home);