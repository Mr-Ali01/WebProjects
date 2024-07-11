const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey="0d95488ee91d3f83dbc210cdd2ab4776"
const searchBox = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-icon");
const weatherImg = document.querySelector(".weather-img");

function checkWeather(city){

fetch(apiUrl + city +`&appid=${apiKey}`)
.then((response) => {
    return response.json()
})
.then((data) =>{

            console.log(data);

            document.querySelector(".temp").innerHTML = data.main.temp;
            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".humidity-percent").innerHTML = data.main.humidity;
            document.querySelector(".wind-percent").innerHTML = data.wind.speed + " km/h";
        
        
            if(data.weather[0].main == "Clouds") {
               weatherImg.src="images/clouds.png";
            }
            else if(data.weather[0].main == "Rain") {
                weatherImg.src="images/rain.png";
             }
             else if(data.weather[0].main == "Drizzle") {
                weatherImg.src="images/drizzle.png";
             }
             else if(data.weather[0].main == "Mist") {
                weatherImg.src="images/mist.png";
             }
             document.querySelector(".error").style.display ="none"
                document.querySelector(".weather").style.display ="flex"
            
            
})
.catch((error) => { 
    document.querySelector(".error").style.display ="block"
    document.querySelector(".weather").style.display ="none"})
}

searchBtn.addEventListener("click", function (){
         checkWeather(searchBox.value)
     })
