const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="2f914cc1353fc1eff6ecee7ba8cc8bb3";


let seacrh=document.getElementById("cityInput")
let btn=document.getElementById("searchBtn")

const weatherIcon=document.querySelector(".weatherIcon");

async function weather(city) {
const response=await fetch(apiUrl+city +&appid=${apiKey});
  let data= await response.json();
  console.log(data);

  document.querySelector("#cityName").innerHTML=data.name;
  document.querySelector("#temperature").innerHTML=Math.round(data.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".speed").innerHTML=data.wind.speed+"km/h";

  if(data.weather[0].main==="Cloud"){
    weatherIcon.src = "cloud.png"
  }
  else if(data.weather[0].main==="Snow"){
    weatherIcon.src = "snow.png"
  } 
  else if(data.weather[0].main==="Clear"){
    weatherIcon.src = "clear.png"
  } 
  else if(data.weather[0].main==="Rain"){
    weatherIcon.src = "rain.png"
  } 
  else if(data.weather[0].main==="Drizzle"){
    weatherIcon.src = "drizzle.png"
  } 
  else if(data.weather[0].main==="Mist"){
    weatherIcon.src = "mist.png"
  } 

}

btn.addEventListener("click",()=>{
  weather(seacrh.value);
});
