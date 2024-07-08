// //////////////////////////////////
// membership levels
// const membershipsData = [
//   {
//     id: "no-membership",
//     name: "No Membership (No Fee)",
//     level: 1,
//     description:
//       "This membership level offers limited access to BizzCo's premium services and resources.",
//   },
//   {
//     id: "bronze",
//     name: "Bronze",
//     level: 2,
//     description:
//       "This membership level provides basic access to BizzCo's premium services and resources. You can join the BizzCo community and participate in our events and activities.",
//   },
//   {
//     id: "silver",
//     name: "Silver",
//     level: 3,
//     description:
//       "This membership level offers advanced access to BizzCo's premium services and resources. You can join the BizzCo community and participate in our events and activities",
//   },
//   {
//     id: "gold",
//     name: "Gold",
//     level: 4,
//     description:
//       "This membership level offers unlimited access to BizzCo's premium services and resources. You can join the BizzCo community and participate in our events and activities, as well as access to exclusive resources and benefits.",
//   },
// ];

// function displayMembershipLevels() {
//   const membershipButtons = document.getElementById("membership-button");

//   membershipButtons.innerHTML = `
//         <button id="no-membership">No Membership</button>
//         <button id="bronze">Bronze</button>
//         <button id="silver">Silver</button>
//         <button id="gold">Gold</button>
//     `;

//   membershipButtons.addEventListener("click", (event) => {
//     console.log(event.target.id);
//     const membership = membershipsData.find((membership) => {
//         return membership.id === event.target.id;
//     });
//     console.log(membership);

//     if (event.target.id === membership.id) {
//       console.log("hola");
//       displayMembershipDetails(membership);
//     }
//   });
// }

// function displayMembershipDetails(membership) {
//   const membershipLevel = document.getElementById("membership-details");

//   membershipLevel.innerHTML = `
//     <button id="closeModal">X</button>
//     <h2>Our Membership Levels</h2>
//     <h3>Membership Level ${membership.level}: ${membership.name}</h3>
//     <p>${membership.description}</p>
//     `;

//   membershipLevel.showModal();

//   const closeModal = document.querySelector("#closeModal");

//   closeModal.addEventListener("click", () => {
//     membershipLevel.close();
//   });
// }

// displayMembershipLevels();


// memberships selections
const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
