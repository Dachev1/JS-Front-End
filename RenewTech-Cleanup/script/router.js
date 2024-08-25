import { handleLocation } from "./routerUnits.js";

handleLocation(location.pathname);

export function route() {
    const wrapperElement = document.querySelector('#wrapper');
    wrapperElement.addEventListener('click', (e) => {
        e = e || window.e;
        e.preventDefault();
        window.history.pushState(null, null, e.target.href);
        if (e.target.tagName === 'A') {
            handleLocation(location.pathname);
        } else if (e.target.parentElement.tagName === 'A') {
            handleLocation('/');
        }
    });
}
