
import './App.css';
import{Route,Routes}from "react-router-dom"
import Home from './Home';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import Create from './Create';
import About from './About';
import Contactus from './Contactus';
import Read from './Read';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      <Route path='/read' element={<Read/>}/>

      </Routes>
    </div>
  );
}

export default App;
