import React from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './routes'
import store from './store'
import MyStatusBar from './src/components/StatusBar'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MyStatusBar backgroundColor="#000105" barStyle="light-content"/>
        <AppNavigator />
      </Provider>
    </>
  )
}

export default App