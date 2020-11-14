import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import AppNavigator from './navigation/AppNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'quicksand': require('./assets/fonts/Quicksand-Regular.ttf'),
    'quicksand-semibold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
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
  return <AppNavigator />;
};

export default App;
