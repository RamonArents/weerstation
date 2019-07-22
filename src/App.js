// import required libraries
import React from 'react';
// import components
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
    componentDidMount() {
        this.getMyLocation()
    }
    // initialize the initial state
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        latitude: '',
        longitude: '',
        main: undefined,
        shouldHide: true
    }
    getMyLocation = async (e) => {
        // get current location
        const location = window.navigator && window.navigator.geolocation;
        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            }, (error) => {
                this.setState({
                    latitude: 'err-lattitude',
                    longitude: 'err-longitude'
                })
            })
        }
    }

    // makes the API request to the weather API
    getWeather = async (e) => {
        //prevent default refresh
        e.preventDefault();
        // get values from input
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        // make API request
        const api_key = 'be48a508d7a9db3f91857c315f978ff7';
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`);
        const response = await api_call.json();
        // set the state to the actual value from the response
        if(response.name === undefined || response.sys.country === undefined){
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "There was no data to be found.",
                main:undefined,
                shouldHide:true
            })
        }else{
            this.setState({
                temperature: response.main.temp,
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                error: "",
                main: response.weather[0].main,
                shouldHide: false
            })
        }
    }
  render() {
        return (
            <div>
                <div className="wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="form-container">
                                    <Titles />
                                    <br />
                                    Get the weather from your current location: <button onClick={async () => {
                                    const api_key = 'be48a508d7a9db3f91857c315f978ff7';
                                    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=&lon=${this.state.longitude}&lat=${this.state.latitude}&appid=${api_key}&units=metric`);
                                    const response = await api_call.json();
                                    if (response) {
                                    this.setState({
                                        temperature: response.main.temp,
                                        city: response.name,
                                        country: response.sys.country,
                                        humidity: response.main.humidity,
                                        description: response.weather[0].description,
                                        main: response.weather[0].main,
                                        error: undefined,
                                        shouldHide:false
                                })
                                }
                                }
                                }><FontAwesomeIcon icon={faLocationArrow} /></button>
                                    <br />
                                    <br />
                                    <Form loadWeather={this.getWeather} />
                                    <br />
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                        main={this.state.main}
                                        shouldHide={this.state.shouldHide}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
  }
}
export default App;