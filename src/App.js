import './App.css';
import Create from './Components/Create.js'
import Read from './Components/Read.js'
import Update from './Components/Update.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Create}/>
          <Route path='/read' Component={Read}/>
          <Route path='/update' Component={Update}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
