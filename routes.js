import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/containers/Home'
import DetailsScreen from './src/containers/Details'

const AppNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
},
  {
    defaultNavigationOptions: () => ({
      headerBackTitle: null,
      headerTransparent: true,
    })
  }
))

export default AppNavigator