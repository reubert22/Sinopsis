import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MyStatusBar from './src/components/StatusBar'
import { store, persistor } from './store'
import AppNavigator from './routes'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyStatusBar backgroundColor="#000105" barStyle="light-content" />
          <AppNavigator />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App