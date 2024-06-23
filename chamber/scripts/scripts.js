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
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `© <span class="highlight">${today.getFullYear()} BuzzCo</span>`;

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
document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}` ;
