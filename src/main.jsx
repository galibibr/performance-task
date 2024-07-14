import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)
root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
)
