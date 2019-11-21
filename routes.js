import { createAppContainer } from 'react-navigation'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createStackNavigator } from 'react-navigation-stack'
import { Animated, Easing } from 'react-native'
import DetailsScreen from './src/containers/Details'
import HomeScreen from './src/containers/Home'

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

const AppNavigator = createAppContainer(AppStack)

export default AppNavigator