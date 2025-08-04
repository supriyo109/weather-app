
const apikey="001a393a32211fe811475ace80213f58";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const seachbox =document.querySelector(".search input");
const seachbtn =document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather_icon");

async function checkweather(city) {
    const response =await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display="block";
    }
    else{
        var data =await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png"
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png"
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png"
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png"
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "mMist.png"
        }
        document.querySelector(".error").style.display="none";
    }
}

seachbtn.addEventListener("click", () => {
    checkweather(seachbox.value);
})
