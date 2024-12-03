
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import About from './views/About'
import Products from './views/Products'
import Contact from './views/Contact'
import SingleProduct from './views/SingleProduct'
import Cart from './views/Cart'
import Error from './views/Error'

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/products' element={<Products/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/singleProduct/:id' element={<SingleProduct/>}></Route>
           <Route path='/cart' element={<Cart/>}></Route>
           <Route path='*' element={<Error/>}></Route>


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
