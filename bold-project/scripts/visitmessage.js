const visitMessageElement = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const nowDate = Date.now();

function calculateDaysBetweenVisits(lastVisit, now) {
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  return Math.round((now - lastVisit) / oneDay);
}

let message;
if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const daysBetweenVisits = calculateDaysBetweenVisits(
    parseInt(lastVisit),
    nowDate
  );
  if (daysBetweenVisits < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysBetweenVisits === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysBetweenVisits} days ago.`;
  }
}

visitMessageElement.innerText = message;
localStorage.setItem('lastVisit', nowDate.toString());