import React from 'react'
import { Platform } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MyStatusBar from './src/components/StatusBar'
import { store, persistor } from './store'
import AppNavigator from './routes'
import { backGroundColor } from './src/utils/constants'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyStatusBar backgroundColor={backGroundColor} barStyle="light-content" />
        <AppNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App