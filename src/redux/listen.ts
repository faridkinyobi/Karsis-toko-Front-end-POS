import { store } from "./store";

let authPrev = store.getState().auth;

function listener() {
    const authCurrent = store.getState().auth;

    if (authPrev !== authCurrent) {
        localStorage.setItem("auth", JSON.stringify(authCurrent.accessToken));
        localStorage.setItem("user", JSON.stringify(store.getState().auth.user));
        authPrev = authCurrent;
    }
}
function listen() {
    store.subscribe(listener);
}

export { listen };
