import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

let store: Store;

const initStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })

        store = undefined;
    }


    if (typeof window === 'undefined') return _store;

    if (!store) store = _store;

    return _store;
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}