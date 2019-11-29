import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createStackNavigator } from 'react-navigation-stack'
import { Animated, Easing } from 'react-native'
import DetailsScreen from './src/containers/Details'
import HomeScreen from './src/containers/Home'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Ico from 'react-native-vector-icons/FontAwesome'

const AppStack = createSharedElementStackNavigator(createStackNavigator, {
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null }
  }
},
  {
    defaultNavigationOptions: () => ({
      headerBackTitle: null,
      headerTransparent: true,
    }),
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: ({ position, scene }) => {
        const { index } = scene;
        const opacity = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1]
        });
        return { opacity };
      }
    })
  })

const SimulationStack = createSharedElementStackNavigator(createStackNavigator, {
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null }
  }
},
  {
    defaultNavigationOptions: () => ({
      headerBackTitle: null,
      headerTransparent: true,
    }),
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: ({ position, scene }) => {
        const { index } = scene;
        const opacity = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1]
        });
        return { opacity };
      }
    })
  })

const TabNavigator = createBottomTabNavigator({
  Home: AppStack,
  Movies: SimulationStack
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      // let IconComponent = Ionicons;
      // let iconName;
      if (routeName === 'Home') {
        iconName = 'home';
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        // IconComponent = HomeIconWithBadge;
      } else if (routeName === 'Movies') {
        iconName = `chevron-up`;
      }

      // You can return any component that you like here!
      return <Ico name={iconName} size={20} color="#fff" />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#22252b',
      borderTopColor: '#22252b',
      height: 40
    }
  },
});

const AppNavigator = createAppContainer(TabNavigator)

export default AppNavigator