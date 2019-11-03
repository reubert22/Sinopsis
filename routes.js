import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/containers/Home'

const AppNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: HomeScreen,
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