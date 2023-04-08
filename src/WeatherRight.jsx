import "./WeatherRight.css";

function WeatherRight(props)
{
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth();
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"]
    
    return(
            <div class="weather-right">
                <div className="weather-right-details">{
                    props.data?
                    <>

                    <div className="weather-right-details-info">
                        <i className="fa-solid fa-location-dot" />
                        <p>{props.data?.name} {props.data?.sys?.country}</p>
                        <i className="fa-solid fa-angle-down" />
                    </div>
                    <div className="weather-details-info">
                        <img src={`http://openweathermap.org/img/w/${props.data?.weather[0].icon}.png`} alt="" />
                        <p className="p4">Today, {date} {months[month]}</p>
                        <p className="p5">{Math.trunc(props.data?.main?.temp - 273.15)}<sup>o</sup></p>
                        <p className="p6">{props.data?.weather[0].main}</p>
                        <div className="weather-details-info-iphr">
                            <i className="fa-solid fa-wind" />
                            <p>Wind | </p>
                            <p> {Math.trunc(props.data?.wind?.speed)} km/hr</p>
                        </div>
                        <div className="weather-details-info-iphr">
                            <i className="fa-solid fa-droplet" />
                            <p>Hum |</p>
                            <p>{props.data?.main?.humidity} %</p>
                        </div>
                    </div>
                    </> : <h1 className="weather-h1">Enter Your City</h1>}
                    
                </div>
            </div>
    );
}

export default WeatherRight;