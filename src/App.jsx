import React from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Login from './components/Pages/Login'
import { Provider } from 'react-redux'
import store from './redux/app/store'

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </Provider>

    </>
  )
}

export default App