// api link here : https://ipapi.co/json


const inputIp = document.querySelector(".ip");
const inputLocation  = document.querySelector(".location");
const button = document.querySelector(".btn");
const inputLatitude = document.querySelector(".latitude");
const inputLongitude = document.querySelector(".longitude");
const inputTimezone = document.querySelector(".timezone");
const inputCountryarea = document.querySelector(".country-area");
const inputCountryPopulation = document.querySelector(".country-population");
const inputLoading = document.querySelector(".loading")



inputIp.style.display= "none"
inputLocation.style.display= "none"
inputLatitude.style.display= "none"
inputLongitude.style.display= "none"
inputTimezone.style.display= "none"
inputCountryarea.style.display= "none"
inputCountryPopulation.style.display= "none"
inputLoading.style.display="none"








button.addEventListener("click",getData);

async function getData(){
    inputLoading.style.display="flex";
   
    const url = await fetch("https://ipapi.co/json");
    const data = await url.json();
    // console.log(data);
    getInfo(data);
}

function getInfo(data){

    inputIp.innerText = `IP- ${data.ip}`
    inputLocation.innerText = `Location- ${data.region},${data.country_name}`;
    inputLatitude.innerText = `Latitude- ${data.latitude}`;
    inputLongitude.innerText = `Longitude- ${data.longitude}`;
    inputTimezone.innerText = `TimeZone- ${data.timezone}`;
    inputCountryarea.innerText = `Country Area- ${data.country_area}`;
    inputCountryPopulation.innerText = `Country Population- ${data.country_population}`;

    inputIp.style.display= "block"
    inputLocation.style.display= "block"
    inputLatitude.style.display= "block"
    inputLongitude.style.display= "block"
    inputTimezone.style.display= "block"
    inputCountryarea.style.display= "block"
    inputCountryPopulation.style.display= "block"
    inputLoading.style.display="none"

    
    
}