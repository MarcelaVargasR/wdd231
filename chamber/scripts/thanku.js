
const params = new URLSearchParams(window.location.search);
const firstName = params.get('firstName');
const lastName = params.get('lastName');
const email = params.get('email');
const phone = params.get('mobile');
const organizationTitle = params.get('organizationTitle');
const orgaName = params.get('organization');
const membershiplevel = params.get('membership-level');
const timestamp = params.get('timestamp');



const userInfoHTML = `
<p class="submit-info"><strong>First Name:</strong> ${params.get('firstName')}</p>
<p class="submit-info"><strong>Last Name:</strong> ${params.get('lastName')}</p>
<p class="submit-info"><strong>Email:</strong> ${params.get('email')}</p>
<p class="submit-info"><strong>Phone Number:</strong> ${params.get('mobile')}</p>
<p class="submit-info"><strong>Organization Title:</strong> ${params.get('organizationTitle')}</p>
<p class="submit-info"><strong>Organization Name:</strong> ${params.get('organization')}</p>
<p class="submit-info"><strong>Membership option:</strong> ${params.get('membership-level')}</p>
<p class="submit-info"><strong>Date Submitted:</strong> ${params.get('timestamp')}</p>
`

document.querySelector('#user-info').innerHTML = userInfoHTML
