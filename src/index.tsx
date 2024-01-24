import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider as ReduxProvider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { rootReducer, rootSaga } from 'src/modules';

import App from './App';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer: typeof compose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(rootReducer(), composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

defineCustomElements(window);

root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </React.StrictMode>
);
