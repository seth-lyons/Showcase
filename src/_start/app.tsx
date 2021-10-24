//ADDING THIS AS A FEATURE BRANCH TEST, COMMIT 2
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//Using HashRouter instead of BrowserRouter for GitHub Pages support
//import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
import '../styles/app.scss'
import '../styles/_fontfaces.scss'

ReactDOM.render(
    <HashRouter key="content">
        {RoutesModule.routes}
    </HashRouter>,
    document.getElementById('root')
);

