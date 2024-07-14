import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.tsx'
import Main from './components/Main.tsx'
import Footer from './components/Footer.tsx'
const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl)
root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
)
