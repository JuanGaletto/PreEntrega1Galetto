import './App.css'
import Brand from './components/Brand'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
        <div className="header_container">
          <Brand/>
          <NavBar/>
      </div>
      <ItemListContainer saludo="Hola profe"/>

    </div>
   
  )
}

export default App
