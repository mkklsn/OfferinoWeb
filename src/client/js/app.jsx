import ReactDOM from 'react-dom';
import { baseRoutes } from './routes.js';

const routes = baseRoutes();

ReactDOM.render(
    routes,
    document.getElementById("app")
);
