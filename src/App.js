
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Viewstudent from './components/Viewstudent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Addstudent></Addstudent>}/>
        <Route path='/Viewstudent' element={<Viewstudent></Viewstudent>}/>
      </Routes>
      
    </div>
  );
}

export default App;
