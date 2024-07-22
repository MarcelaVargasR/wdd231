
const params = new URLSearchParams(window.location.search);
const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const phone = params.get("mobile");
const address = params.get("address");
const city = params.get("city");
const state = params.get("state");


const userInfoHTML = `
<p class="submit-info"><strong>First Name:</strong> ${params.get(
  "firstName"
)}</p>
<p class="submit-info"><strong>Last Name:</strong> ${params.get("lastName")}</p>
<p class="submit-info"><strong>Email:</strong> ${params.get("email")}</p>
<p class="submit-info"><strong>Phone Number:</strong> ${params.get(
  "mobile"
)}</p>
<p class="submit-info"><strong>Address:</strong> ${params.get("address")}</p>
<p class="submit-info"><strong>City:</strong> ${params.get("city")}</p>
<p class="submit-info"><strong>State:</strong> ${params.get("state")}</p>

`;




document.querySelector("#user-info").innerHTML = userInfoHTML;
