import React, { Component } from 'react';
import Router from './src/config/router';
import { Provider } from 'react-redux';
import {store,persistor} from './src/config/redux';
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router/>
        </PersistGate>
      </Provider>
    );
  }
}
