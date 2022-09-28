import './App.css';
import Headerunit from './components/Headerunit';
import Mainday from './components/Mainday';
import Infodetail from './components/Infodetail';
import Searchbar from './components/Searchbar';
import Citiesandmore from './components/Citiesandmore';
import getFormattedWeatherData from './services/weatherServices';



function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "tokyo"});
    console.log(data);
  };

  fetchWeather();
  
  return (
              <div class="container-fluid px-1 px-sm-3 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="row card0">
                        <div class="card1 col-lg-8 col-md-7">
                          <Headerunit/>
                          <Mainday/>
                          <Infodetail/>
                        </div>
                        <div class="card2 col-lg-4 col-md-5">
                          <Searchbar/>
                          <Citiesandmore name="Weather Details" sunny="poto" other="rrr"/>
                        </div>
                    </div>
                </div>
              </div>

    
  );
}

export default App;
