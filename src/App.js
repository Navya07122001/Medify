
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import TopInfo from './Components/TopInfo/TopInfo';
import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import SearchHospital from './Components/SearchHospital/SearchHospital';
function App() {
  return (
    <div className="App">
       <TopInfo/>
      <Routes>
        <Route  path="/" element={<HeroSection/>}/>
        <Route  path="/search" element={<SearchHospital/>}/>
      </Routes>
     

      
      <Footer/>
    </div>
  );
}

export default App;
