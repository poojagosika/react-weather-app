import "./WeatherLeft.css";

function WeatherLeft()
{
    var today = new Date();
    const Time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    const hours = today.getHours();
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"]

    let wish = "";
    let icon = "";
    if (hours >= 6 && hours < 12) {
        wish = "Morning";
        icon = "fa-solid fa-cloud-sun";
    }
    else if (hours >= 12 && hours < 16) {
        wish = "Afternoon";
        icon = "fa-solid fa-sun";
    }
    else if (hours >= 16 && hours < 19) {
        wish = "Evening";
        icon = "fa-regular fa-sun";
    }
    else {
        wish = "Night";
        icon = "fa-solid fa-moon";
    }

    return(
        <div className="weather-info">
            <h2>{Time}</h2>
            <p>{date}-{months[month]}-{year}</p>
            <div className="weather-info-icon">
                <i className={icon}></i>
                <h3>Good {wish}, Buddy!</h3>
            </div>
        </div>
    )
}

export default WeatherLeft;