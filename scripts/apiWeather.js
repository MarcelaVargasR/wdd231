const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const description = document.querySelector('#description');

const apiKey = "1ca326ae32c593ce6698b857e803be2e";
const latitude = "13.67220960216594"
const longitude ="-89.2893218777607"
13.67220960216594, -89.2893218777607

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data); 
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function displayResults(data){
    description.innerHTML = data.weather[0].description;
    currentTemp.innerHTML =`${data.main.temp}&deg;F`;  
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',data.weather[0].description); 
    captionDesc.textContent = data.weather[0].description;
}

apiFetch();