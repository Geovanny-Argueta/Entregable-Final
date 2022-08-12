import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {Homes, NewsDetails,Login, Compras} from '../pages'
import {NavBar, LoadingScreen} from '../Components'
import {useSelector} from 'react-redux'

function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <div className="App">
      <HashRouter>
        <NavBar/>
        {isLoading && <LoadingScreen/>}
        
        <Routes>
          <Route path='/' element={<Homes/>}/>
          <Route path='/news/:id' element={<NewsDetails/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/Compras' element={<Compras/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
