import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated, Easing } from 'react-native';

import DetailsScreen from './src/containers/Details';
import HomeScreen from './src/containers/Home';
import MovieScreen from './src/containers/Movies';
import SerieScreen from './src/containers/Series';

const transitionConfig = {
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
}

const HomeStack = createSharedElementStackNavigator(createStackNavigator, {
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null }
  }
}, {
  defaultNavigationOptions: () => ({
    headerBackTitle: null,
    headerTransparent: true,
  }),
  transitionConfig: () => (transitionConfig)
});

const MovieStack = createSharedElementStackNavigator(createStackNavigator, {
  Movie: {
    screen: MovieScreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null }
  }
}, {
  defaultNavigationOptions: () => ({
    headerBackTitle: null,
    headerTransparent: true,
  }),
  transitionConfig: () => (transitionConfig)
});

const SerieStack = createSharedElementStackNavigator(createStackNavigator, {
  Serie: {
    screen: SerieScreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null }
  }
}, {
  defaultNavigationOptions: () => ({
    headerBackTitle: null,
    headerTransparent: true,
  }),
  transitionConfig: () => (transitionConfig)
});

const WishStack = createSharedElementStackNavigator(createStackNavigator, {
  Wish: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null }
  }
}, {
  defaultNavigationOptions: () => ({
    headerBackTitle: null,
    headerTransparent: true,
  }),
  transitionConfig: () => (transitionConfig)
});

const SearchStack = createSharedElementStackNavigator(createStackNavigator, {
  Search: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null }
  }
}, {
  defaultNavigationOptions: () => ({
    headerBackTitle: null,
    headerTransparent: true,
  }),
  transitionConfig: () => (transitionConfig)
});

const TabNavigator = createBottomTabNavigator(
  {
    Movies: {
      screen: MovieStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="film" size={15} color={tintColor} />
        )
      })
    },
    Series: {
      screen: SerieStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="tv" size={17} color={tintColor} />
        )
      })
    },
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      })
    },
    Wish: {
      screen: WishStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" size={17} color={tintColor} />
        )
      })
    },
    Search: {
      screen: SearchStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" size={17} color={tintColor} />
        )
      })
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#22252b',
        borderTopColor: '#22252b',
        height: 40
      }
    },
  }
);

const AppNavigator = createAppContainer(TabNavigator)

export default AppNavigator