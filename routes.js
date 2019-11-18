import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/containers/Home'
import DetailsScreen from './src/containers/Details'
import Player from './src/containers/Player'

const AppNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Player: {
    screen: Player,
    navigationOptions: { header: null, tabBarVisible: false }
  }
},
  {
    defaultNavigationOptions: () => ({
      headerBackTitle: null,
      headerTransparent: true,
    })
  }
))

export default AppNavigator