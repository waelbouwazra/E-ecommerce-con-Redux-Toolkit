import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, CategoryProduct, ProducSingle, Search, Cart } from './pages'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
// import { Footer } from './components/Footer/Footer'
import store from "./store/store"
import { Provider } from "react-redux"


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
