let ApiKey = "44eadb269cba53bcac073812dacd2a18";
let ApiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const input = document.querySelector('#user')
const btn = document.querySelector('#btn')

let weather_img = document.getElementById('weather-img')

let select = document.querySelector('section')

async function checkweather(city){
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`)

    let data = await response.json()

    console.log(data);
    // console.log(`City = ${data.name}`);  
    // console.log(`Temp = ${data.main.temp}`);
    // console.log(`Speed = ${data.wind.speed}`);

    document.querySelector(".city").innerHTML = data.name 
    document.querySelector(".temp").innerHTML = data.main.temp+ ' °C'
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%'
    document.querySelector(".air-speed").innerHTML = data.wind.speed + ` km/h`

    if(data.weather[0].main == 'Clouds'){
        weather_img.src='weather-app-img/images/clouds.png'
    }
    else if(data.weather[0].main == 'Clear'){
        weather_img.src='weather-app-img/images/clear.png'
    }
    else if(data.weather[0].main == 'Snow'){
        weather_img.src='weather-app-img/images/snow.png'
    }
    else if(data.weather[0].main == 'Rain'){
        weather_img.src='weather-app-img/images/rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weather_img.src='weather-app-img/images/drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
        weather_img.src='weather-app-img/images/mist.png'
    }
    else if(data.weather[0].main == 'Wind'){
        weather_img.src='weather-app-img/images/wind.png'
    }
    select.style.display="block"
}

btn.addEventListener('click',()=>{
    checkweather(input.value)
  
})

input.addEventListener('keypress',(event)=>{
    if(event.key === "Enter"){
        checkweather(input.value)
        value == null
    }
    
})

checkweather()

// let url = "https://api.openweathermap.org/data/2.5/weather?&units=metric"

// async function my(){
//     let response = await fetch(url)

//     let data = response.json()
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name ;
//     document.querySelector(".temp").innerHTML = data.main.temp+ '°C';
// }

// my()