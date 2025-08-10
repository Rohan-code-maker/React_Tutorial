import { useState } from 'react'
import Left from './home/leftside/left'
import Right from './home/rightside/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AuthProvider'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <Routes>
      <Route path='/' element={
        authUser ? <div className='flex h-screen'><Left />
          <Right /></div> : <Navigate to={"/login"}/>
      } />
      <Route path='/signup' element={authUser ? <Navigate to={"/"}/> : <Signup/>}/>
      <Route path='/login' element={authUser ? <Navigate to={"/"}/> : <Login/>}/>
    </Routes>
  )
}

export default App
