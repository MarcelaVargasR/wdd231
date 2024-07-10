// //////////////////////////////////
// membership levels
const membersData = [
  {
    id: "no-membership",
    name: "No Membership (No Fee)",
    level: 1,
    description:
      "This membership level offers limited access to BizzCo's premium services and resources. This membership is for organizations, you can participate in our premium services and resources",
  },
  {
    id: "bronze",
    name: "Bronze",
    level: 2,
    description:
      "This membership level provides basic access to BizzCo's premium services and resources. You can join the BizzCo community and participate in our events and activities.",
  },
  {
    id: "silver",
    name: "Silver",
    level: 3,
    description:
      "This membership level offers advanced access to BizzCo's premium services and resources. You can join the BizzCo community and participate in our events and activities",
  },
  {
    id: "gold",
    name: "Gold",
    level: 4,
    description:
      "This membership level offers unlimited access to BizzCo's premium services and resources. You can join the BizzCo community and participate in our exclusive resources and benefits.",
  },
];

const dialog = document.querySelector("#dialog");
const showButton = document.querySelector("#openBttn");

function displayMembershipInfo() {
  dialog.innerHTML = `
    <button class="dialog-bttn" id="closeBttn" type="button">&times;</button>
    <div class="dialog-container">
    <h2 class="dialog-card-title">Our membership levels</h2>
    <div class="dialog-card-container">
      ${membersData
        .map((member) => {
          const { id, name, level, description } = member;
          return `
        <div class="dialog-card">
          <h3 class="dialog-card-subtitle">${level}. ${name}</h3>
          <p class="dialog-card-content">${description}</p>
        </div>
        `;
        })
        .join(" ")}
    </div>
  </div>
  `;

  const closeButton = document.querySelector("#closeBttn");
  closeButton.addEventListener("click", () => {
    console.log("hola");
    dialog.close();
  });
}

showButton.addEventListener("click", () => {
  dialog.showModal();
});

displayMembershipInfo();

// function displayMembershipDetails(membership) {
//     const membershipLevel = document.getElementById("membership-details");

//     membershipLevel.innerHTML = `
//       <button id="closeModal">X</button>
//       <h2>Our Membership Levels</h2>
//       <h3>Membership Level ${membership.level}: ${membership.name}</h3>
//       <p>${membership.description}</p>
//       `;

//     membershipLevel.showModal();

//     const closeModal = document.querySelector("#closeModal");

//     closeModal.addEventListener("click", () => {
//       membershipLevel.close();
//     });
//   }

//   displayMembershipDetails();
