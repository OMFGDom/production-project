import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Suspense, useContext } from 'react'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useState } from 'react'
import { Theme, ThemeContext  } from './theme/ThemeContext'
import {useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'


const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames( 'app', {hovered: true, selected: false}, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to='/'>MainPage</Link>
      <Link to='/about'>AboutPage</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync/>} />
          <Route path='/' element={<MainPageAsync/>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

function setTheme(arg0: Theme) {
  throw new Error('Function not implemented.')
}
