import React, { useEffect } from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Login from './components/Pages/pages/Login'
import { connect } from 'react-redux'
import HomePAge from './components/Pages/pages/HomePAge'
import { getAuthUser } from './redux/actions'
import RequireAuth from './components/RequireAuth'


function App(props) {
  useEffect(() => {
    props.getAuthUser()
  },[])
  return (
    <>

    <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={
            <RequireAuth>
              <HomePAge />
            </RequireAuth>
          } />
        </Routes>
      </Router>



    </>
  )
}
const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return{
    getAuthUser : () => dispatch(getAuthUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)