import { renderHome, renderSolutions, renderCreate, renderLogout, renderLogin, renderRegister, renderHeader, renderDetails, renderEdit, renderDelete } from "./views.js";

const routes = {
    '/': renderHome,
    '/solutions': renderSolutions,
    '/create': renderCreate,
    '/logout': renderLogout,
    '/login': renderLogin,
    '/register': renderRegister,
    '/solutions/:solutionId/details': renderDetails,
    '/solutions/:solutionId/edit': renderEdit,
    '/solutions/:solutionId/delete': renderDelete,
}

function matchRoute(path) {
    for (const route in routes) {
        const routeSegments = route.split('/');
        const pathSegments = path.split('/');

        if (routeSegments.length !== pathSegments.length) {
            continue;
        }

        let params = {};
        let match = true;

        for (let i = 0; i < routeSegments.length; i++) {
            if (routeSegments[i].startsWith(':')) {
                params[routeSegments[i].slice(1)] = pathSegments[i];
            } else if (routeSegments[i] !== pathSegments[i]) {
                match = false;
                break;
            }
        }

        if (match) {
            return routes[route].bind(null, params);
        }
    }

    // If no match return not found render function
}

export function handleLocation(path) {
    hideAllSections();
    renderHeader();

    matchRoute(path)();

    window.addEventListener('popstate', (e) => {
        hideAllSections();
        renderHeader();

        matchRoute(path)();
    })

    history.pushState(null, null, path);
}

function hideAllSections() {
    const allSections = document.querySelectorAll('main > section');
    allSections.forEach(section => section.style.display = 'none');
}

