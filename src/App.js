
import Navbar from './components/Navbar';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Accueil/>}/>
    <Route path="/navbar" element={ <Navbar />}/> 
    <Route path="/footer" element={ <Footer />}/> 
    <Route path="/articles" element={ <Articles />}/> 
   < Route path="/tt" element={ <Test />}/>
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
