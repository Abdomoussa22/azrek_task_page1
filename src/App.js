import './App.css';
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
import NavbarG from './components/navbar/NavbarG';
import Home from './components/home/Home';
// import Notfound from './components/notfound/Notfound';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <Router>
      <NavbarG/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Home/>}/> {/*until this pages are complete */}
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
