import React, { useEffect } from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from '../store/actions/user';
import { auth, createUserProfileDocument } from '../firebase/firebase';

import Colours from '../constants/colours';
import HomeScreen from '../screens/HomeScreen';
import FlatsScreen from '../screens/FlatsScreen';
import FlatDetailScreen from '../screens/FlatDetailScreen';
import ContactScreen from '../screens/ContactScreen';
import AccountScreen from '../screens/AccountScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import CustomButton from '../components/CustomButton';
import HomeIcon from '../assets/images/HomeIcon';
import SearchIcon from '../assets/images/SearchIcon';
import AccountIcon from '../assets/images/AccountIcon';

const Root = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultNavOptions = {
  headerTitleStyle: {
    fontFamily: 'quicksand',
    fontSize: 19,
  },
  headerTintColor: Colours.primary,
  headerTitleAlign: 'center',
};

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        if (route.name === 'Flats') {
          return <SearchIcon color={color} />;
        } else if (route.name === 'Account') {
          return <AccountIcon color={color} />;
        }

        return <HomeIcon color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Colours.darkAccent,
      inactiveTintColor: 'grey',
      labelStyle: {
        fontSize: 15,
        marginBottom: 5,
      },
      style: {
        height: 55,
        padding: 5,
      },
    }}
  >
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Flats' component={FlatsScreen} />
    <Tab.Screen name='Account' component={AccountScreen} />
  </Tab.Navigator>
);

const FlatDetailTab = () => (
  <Tab.Navigator
    showLabel='false'
    tabBarOptions={{
      style: {
        height: 97,
        alignItems: 'center',
        paddingTop: 10
      },
    }}
  >
    <Tab.Screen
      name='Detail'
      component={FlatDetailScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <CustomButton
            style={{ width: '85%' }}
            onPress={() => navigation.navigate('Contact')}
          >
            Contact now!
          </CustomButton>
        ),
      })}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }

      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

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
      <Root.Navigator screenOptions={defaultNavOptions}>
        <Root.Screen
          name='Home'
          component={HomeTabs}
          options={({ route }) => getHeaderTitle(route)}
        />
        <Root.Screen
          name='Detail'
          component={FlatDetailTab}
          options={{ headerTitle: 'Flat detail' }}
        />
        <Root.Screen name='Contact' component={ContactScreen} />
        <Root.Screen
          name='SignUp'
          component={SignUpScreen}
          options={{ headerTitle: 'Sign up' }}
        />
        <Root.Screen
          name='SignIn'
          component={SignInScreen}
          options={{ headerTitle: 'Log in' }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
