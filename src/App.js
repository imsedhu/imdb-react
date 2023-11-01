import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './Components/AppBar';
import MovieMenu from './Components/MovieMenu';
import { Routes,Route } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Error from './Components/Error';



function App() {
  return (
    <>
    <AppBar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="movies" element={<MovieMenu />}/>
      <Route path="signin" element={<Signin />}/>
      <Route path="signin/signup" element={<Signup />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    </>
  );
}

export default App;
