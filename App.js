import React from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './routes'
import store from './store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  )
}

export default App