import React from 'react'
import Home from './Home'
import { store } from './store'
import {Provider} from 'react-redux'
import Users from './Users'
function App() {
  return (
    <Provider store={store}>
    <Home/>
    <Users/>
    </Provider>
  )
}

export default App