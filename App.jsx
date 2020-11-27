import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import AppNavigator from './navigation/AppNavigator';
import userReducer from './store/reducers/user';
import flatsReducer from './store/reducers/flats';

const rootReducer = combineReducers({
  flats: flatsReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    quicksand: require('./assets/fonts/Quicksand-Regular.ttf'),
    'quicksand-semibold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'quicksand-bold': require('./assets/fonts/Quicksand-Bold.ttf'),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
