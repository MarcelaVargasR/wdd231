// ///////////////////////////////////////////////////////////////////////////
// HAMBURGER MENU
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// ///////////////////////////////////////////////////////////////////////////
// CURRENT YEAR
const yearOfCalendar = document.querySelector("#currentyear");
const today = new Date();
yearOfCalendar.innerHTML = `© <span class="highlight">${today.getFullYear()} BizzCo</span>`;

// /////////////////////////////////////////////////////////////////////////////
// LAST UPDATE
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // La hora '0' debe ser '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + ampm;
  return strTime;
}

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1; // Los meses van de 0 a 11
  let year = date.getFullYear();
  return `${month}/${day}/${year} ${formatAMPM(date)}`;
}

let now = new Date();
let formattedDate = formatDate(now);
document.getElementById(
  "lastModified"
).textContent = `Last Modification: ${formattedDate}`;
// ///////////////////////////////////////////////////////////////////////////////////////////

// Weather Section
const mytown = document.querySelector("#town");
const myDescription = document.querySelector("#description-weather");
const myTemperature = document.querySelector("#temperature-weather");
const myGraphic = document.querySelector("#graphic");

const forestCast = document.querySelector("#forestCast");
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const apiKey = "1ca326ae32c593ce6698b857e803be2e";
const latitude = "34.05190227968152";
const longitude = "-118.33213877275458";

async function apiFetch() {
  const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  const myURlForecast = `//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  try {
    const response = await fetch(myURL);
    const forestCastResponse = await fetch(myURlForecast);
    if (response.ok && forestCastResponse.ok) {
      const data = await response.json();
      const dataF = await forestCastResponse.json();

      console.log(data);
      console.log(dataF);

      displayResults(data);
      displayForestCast(dataF);
    } else {
      throw Error(await response.text());
      throw Error(await forestCastResponse.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  mytown.innerHTML = data.name;
  myDescription.innerHTML = data.weather[0].description;
  myTemperature.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  myGraphic.setAttribute("src", iconsrc);
  myGraphic.setAttribute("alt", data.weather[0].description);
}

function displayForestCast(data) {
  const tomorrowTemp = document.createElement("p");
  const tempTomorrow = converterTem(data.list[4].main.temp);
  const getDay = selectDay(data.list[4].dt);
  tomorrowTemp.textContent = `${getDay}: ${tempTomorrow}`;
  forestCast.appendChild(tomorrowTemp);

  const dayAfterTomorrow = document.createElement("p");
  const temp2 = converterTem(data.list[12].main.temp);
  const getDay2 = selectDay(data.list[12].dt);
  dayAfterTomorrow.textContent = `${getDay2}: ${temp2}`;
  forestCast.appendChild(dayAfterTomorrow);

  const dayAfterTomorro2 = document.createElement("p");
  const temp3 = converterTem(data.list[20].main.temp);
  const getDay3 = selectDay(data.list[20].dt);
  dayAfterTomorro2.textContent = `${getDay3}: ${temp3}`;
  forestCast.appendChild(dayAfterTomorro2);
}

let converterTem = (value) => {
  let result = ((value - 273.15) * 9) / 5 + 32;
  return `${Math.round(result)}  ℉`;
};

let selectDay = (value) => {
  const day = new Date(value * 1000);
  const dayText = daysOfWeek[day.getDay()];
  return dayText;
};

apiFetch();

