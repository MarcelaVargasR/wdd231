async function getMembers() {
  const response = await fetch("https://raw.githubusercontent.com/MarcelaVargasR/wdd231/main/chamber/data/members.json");
  const members = await response.json();
  return members;
}

async function renderMember() {
  const membersContainer = document.getElementById("members");
  const membersData = await getMembers();
  const membersHtml = membersData
    .map(
      ({
        name,
        address,
        phone_number,
        website_url,
        image_icon,
        membership_level,
        industry,
        contact_person,
        email,
      }) => `
        <div class="card">
            <div class="card-header">
                <span class="card-title">${name}</span>
                <p class="card-subtitle">Business Tag Line</p>
            </div>
            <div class="card-body">
                <div class="card-image">
                <img src="${image_icon}" alt="${name}" />
                </div>
                <div class="card-content">
                <p><span class="font-bold">Email: </span>${email}</p>
                <p><span class="font-bold">Address: </span>${address}</p>
                <p><span class="font-bold">Phone: </span>${phone_number}</p>
                <p><span class="font-bold">URL: </span>${website_url}</p>
                <p><span class="font-bold">Membership Level:           </span>${membership_level}</p>
                <p><span class="font-bold">Contact: </span>${contact_person}</p>
                <p><span class="font-bold">Industry: </span>${industry}</p>
                </div>
            </div>
        </div>
        `
    )
    
    .join("");

  membersContainer.innerHTML = membersHtml;
}

renderMember();

// Code to control the view style of the members
document.getElementById("members-view-style").addEventListener("click", (e) => {
  const cards = document.getElementsByClassName("card");
  console.log(cards);
  if (e.target.id === "grid") {
    for (let card of cards) {
      console.log(card);
      card.style.flexBasis = "30%";
    }
  }
  if (e.target.id === "list") {
    for (let card of cards) {
      console.log(card);
      card.style.flexBasis = "100%";
    }
  }
});
