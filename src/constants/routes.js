import { connectRoutes } from 'redux-first-router';

export const routes = {
    HOME: '/',
    USER: '/user'
};

const connected = connectRoutes(routes);

export const reducer = connected.reducer;

export const middleware = connected.middleware;

export const enhancer = connected.enhancer;
