import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding.js';
import LandingScreen from '../screens/LandingScreen.js';
import MobileLogin from '../screens/MobileLogin';
import OtpScreen from '../screens/OtpScreen';

import Restaurant from '../screens/Restaurant.js';
import OrderDelivery from '../screens/OrderDelivery.js';

import Tabs from './tabs'

const Stack = createStackNavigator();

function AuthNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="MobileLogin" component={MobileLogin} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        {/* <Stack.Screen name="OrderDelivery" component={OrderDelivery} /> */}
      </Stack.Navigator>

      {/* <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'} >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default AuthNav;
