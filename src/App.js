import {Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Create from './Create';
import View from './View';
import Update from './Update';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} naol/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      </Routes>
   </div>
  );
}

export default App;
