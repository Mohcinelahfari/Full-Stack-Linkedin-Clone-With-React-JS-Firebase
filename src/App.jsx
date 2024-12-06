import React from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Login from './components/Pages/pages/Login'
import { Provider } from 'react-redux'
import store from './redux/app/store'
import HomePAge from './components/Pages/pages/HomePAge'


function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<HomePAge />} />
        </Routes>
      </Router>
    </Provider>



    </>
  )
}

export default App