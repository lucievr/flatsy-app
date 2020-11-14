import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Root = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'quicksand-semibold' }}>Flatsy</Text>
      <Button title='See flats' onPress={() => navigation.navigate('Flats')} />
    </View>
  );
};

const FlatsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Flats Screen</Text>
      <Button
        title='See flat detail'
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

function AccountScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account Screen</Text>
    </View>
  );
}

const FlatDetailScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Flat Detail Screen</Text>
      <Button
        title='Contact now!'
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
};

function ContactScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen
        name='Flats'
        component={FlatsScreen}
        options={{ headerTitle: 'Flats' }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{ headerTitle: 'Account' }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  
    switch (routeName) {
      case 'Home':
        return {
          headerShown: false,
        };
      case 'Flats':
        return {
          headerTitle: 'Lisbon, Portugal',
        };
      case 'Account':
        return {
          headerTitle: 'My account',
        };
    }
  };
  
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen
          name='Home'
          component={HomeTabs}
          options={({ route }) => getHeaderTitle(route)}
        />
        <Root.Screen
          name='Detail'
          component={FlatDetailScreen}
          options={{ title: 'Flat detail' }}
        />
        <Root.Screen name='Contact' component={ContactScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
