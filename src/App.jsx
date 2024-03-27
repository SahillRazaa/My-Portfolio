import React from 'react'
import MainPage from './Pages/Main_Page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<MainPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
