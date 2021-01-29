import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {Room} from './components';
import HomePage from './components/Pages/HomePage'
import JoinRoomPage from './components/Pages/JoinRoomPage'
import CreateRoomPage from './components/Pages/CreateRoomPage'
import GamePage from './components/Pages/GamePage'

const ROUTES = [
    {
        path: '/',
        key: 'APP',
        component: props =>{
            return <RenderRoutes {...props} />;
        },
        routes: [
            {
                path: '/',
                key: 'APP_ROOT',
                exact: true,
                component: HomePage
            },
            {
                path: '/join',
                key: 'APP_JOIN',
                exact: false,
                component: JoinRoomPage
            },
            {
                path: '/create',
                key: 'APP_CREATE',
                exact: true,
                component: CreateRoomPage
            },
            {
                path: '/game',
                key: 'APP_LOBBY',
                exact: true,
                component: GamePage
            }
        ]
    }
]

export default ROUTES;

const RouteWithSubRoutes = route => {
    return (
        <Route 
            path={route.path}
            exact={route.exact} 
            render={props => <route.component {...props} routes={route.routes}/>}
        />
    );
}

export const RenderRoutes = ({ routes }) => {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    )
}