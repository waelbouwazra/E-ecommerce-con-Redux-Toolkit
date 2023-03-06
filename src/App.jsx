import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, CategoryProduct, ProducSingle, Search, Cart } from './pages'
import { Header } from './components/Header/Header'
// import Sidebar from './components/Sidebar/Sidebar'
// import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  )
}

export default App
