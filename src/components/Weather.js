import React from 'react';
const Weather = (props) => {
    // display image
    document.getElementsByTagName('button');
    // set weather icon for conditions
    let conditions = '';
    //variable for image source
    let imgsrc = '';
    let date = new Date();
    //check icons for day
    if(date.getHours() >= 6 && date.getHours() < 18){
        if(props.description === 'clear sky'){
            imgsrc = 'images/clear.jpeg';
            conditions = 'http://openweathermap.org/img/w/01d.png';
        }else if(props.description === 'few clouds'){
            imgsrc = 'images/clouds.jpeg';
            conditions = 'http://openweathermap.org/img/w/02d.png';
        }else if(props.description === 'scattered clouds'){
            imgsrc = 'images/clouds.jpeg';
            conditions = 'http://openweathermap.org/img/w/03d.png';
        }else if(props.description === 'broken clouds' || props.description === 'overcast clouds'){
            imgsrc = 'images/clouds.jpeg';
            conditions = 'http://openweathermap.org/img/w/04d.png';
        }else if(props.main === 'Drizzle' || props.description === 'light intensity shower rain' || props.description === 'shower rain' || props.description === 'heavy intensity shower rain' || props.description === 'ragged shower rain'){
            imgsrc = 'images/rain.jpg';
            conditions = 'http://openweathermap.org/img/w/09d.png';
        }else if(props.description === 'rain' || props.description === 'light rain' || props.description === 'moderate rain' || props.description === 'heavy intensity rain' || props.description === 'very heavy rain' || props.description === 'extreme rain'){
            imgsrc = 'images/rain.jpg';
            conditions = 'http://openweathermap.org/img/w/10d.png';
        }else if(props.main === 'Thunderstorm'){
            imgsrc = 'images/rain.jpg';
            conditions = 'http://openweathermap.org/img/w/11d.png';
        }else if(props.main === 'Snow' || props.description === 'freezing rain'){
            imgsrc = 'images/snow.jpg';
            conditions = 'http://openweathermap.org/img/w/13d.png';
        }else if(props.main === 'Atmosphere'){
            conditions = 'http://openweathermap.org/img/w/50d.png';
        }
    }else{
        // check icons for night
        if(props.description === 'clear sky'){
            imgsrc = 'images/clear.jpeg';
            conditions = 'http://openweathermap.org/img/w/01n.png';
        }else if(props.description === 'few clouds'){
            imgsrc = 'images/clouds.jpeg';
            conditions = 'http://openweathermap.org/img/w/02n.png';
        }else if(props.description === 'scattered clouds'){
            imgsrc = 'images/clouds.jpeg';
            conditions = 'http://openweathermap.org/img/w/03n.png';
        }else if(props.description === 'broken clouds' || props.description === 'overcast clouds'){
            imgsrc = 'images/clouds.jpeg';
            conditions = 'http://openweathermap.org/img/w/04n.png';
        }else if(props.main === 'Drizzle' || props.description === 'light intensity shower rain' || props.description === 'shower rain' || props.description === 'heavy intensity shower rain' || props.description === 'ragged shower rain'){
            imgsrc = 'images/rain.jpg';
            conditions = 'http://openweathermap.org/img/w/09n.png';
        }else if(props.description === 'rain' || props.description === 'light rain' || props.description === 'moderate rain' || props.description === 'heavy intensity rain' || props.description === 'very heavy rain' || props.description === 'extreme rain'){
            imgsrc = 'images/rain.jpg';
            conditions = 'http://openweathermap.org/img/w/10n.png';
        }else if(props.main === 'Thunderstorm'){
            imgsrc = 'images/rain.jpg';
            conditions = 'http://openweathermap.org/img/w/11n.png';
        }else if(props.main === 'Snow' || props.description === 'freezing rain'){
            imgsrc = 'images/snow.jpg';
            conditions = 'http://openweathermap.org/img/w/13n.png';
        }else if(props.main === 'Atmosphere'){
            conditions = 'http://openweathermap.org/img/w/50n.png';
        }
    }

    return(
        <div className="weather-info">
            {
                props.description &&
                    <span className="weather__value"><img src={conditions} alt={props.description} /><br />{props.description}<br /><br /></span>
            }
            {
                props.temperature && <p className="weather__key weather_temp">
                    <span className="weather__value"> {props.temperature} <span className="celsiusSign"> &#8451; </span></span>
                </p>
            }
            {
                props.country && props.city && <p className="weather__key">Location:
                    <span className="weather__value"> {props.city},    {props.country}</span>
                </p>
            }
            {
                props.humidity && <p className="weather__key">Humidity:
                    <span className="weather__value"> {props.humidity} %</span>
                </p>
            }
            {
                props.error && <p className="weather__error">{props.error}</p>
            }
            <div className={props.shouldHide || imgsrc === '' ? 'hidden' : ''}>
                <img className="weatherBanner" src={imgsrc}  alt={props.description} />
            </div>
        </div>

    )
}
export default Weather;