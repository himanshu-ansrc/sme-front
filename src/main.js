import React from 'react';
import App from './App'
import {hydrate} from 'react-dom';

import { Provider } from 'react-redux'
import { createStore,applyMiddleware  } from 'redux'
import reduxThunk from 'redux-thunk';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
hydrate(
	<Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
	</Provider>
    ,
    document.getElementById('root')
)
