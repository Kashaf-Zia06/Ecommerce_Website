import React from 'react'
import { Route,Router ,Routes} from 'react-router-dom'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Collection from './pages/Collection'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
const App = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='collection' element={<Collection/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
      </Routes>

    </div>
  )
}

export default App
