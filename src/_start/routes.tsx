import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './layout';
import Home from '../pages/_home/Home';

export const routes = <Layout>
    <Switch>
        <Route exact path='/' component={Home} />
        <Redirect to="/" />
    </Switch>
</Layout>;