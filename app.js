// Select the dashboard numbers
const totalDisplay = document.getElementById("total");
const interviewDisplay = document.getElementById("interview");
const rejectedDisplay = document.getElementById("rejected");

// Select the container and all current cards
const cardContainer = document.getElementById("card-container");
const allCards = cardContainer.children;

// Select the filter buttons
const btnAll = document.getElementById("btn-filter-all");
const btnInterview = document.getElementById("btn-filter-interview");
const btnRejected = document.getElementById("btn-filter-rejected");

function updateDashboard() {
  let total = allCards.length;
  let interviewCount = 0;
  let rejectedCount = 0;

  // Loop through every card to see its current status
  for (let i = 0; i < allCards.length; i++) {
    const statusText = allCards[i].querySelector("h2.font-medium").innerText;

    if (statusText === "Interview") {
      interviewCount++;
    } else if (statusText === "Rejected") {
      rejectedCount++;
    }
  }

  // Update the dashboard text
  totalDisplay.innerText = total;
  interviewDisplay.innerText = interviewCount;
  rejectedDisplay.innerText = rejectedCount;
}

for (let i = 0; i < allCards.length; i++) {
  const card = allCards[i];
  const statusHeading = card.querySelector("h2.font-medium");

  // Find buttons inside this specific card
  const interviewBtn = card.querySelector(".btn-success");
  const rejectedBtn = card.querySelector(".btn-secondary");
  const deleteBtn = card.querySelector(".fa-trash-can").parentElement;

  // When "Interview" is clicked
  interviewBtn.onclick = function () {
    statusHeading.innerText = "Interview";
    statusHeading.style.color = "green";
    updateDashboard(); // Recalculate everything
  };

  // When "Rejected" is clicked
  rejectedBtn.onclick = function () {
    statusHeading.innerText = "Rejected";
    statusHeading.style.color = "red";
    updateDashboard(); // Recalculate everything
  };

  // When "Delete" is clicked
  deleteBtn.onclick = function () {
    card.remove();
    updateDashboard(); // Recalculate everything
  };
}

// Show All Tab
btnAll.onclick = function () {
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.display = "block";
  }
};

// Interview Tab
btnInterview.onclick = function () {
  for (let i = 0; i < allCards.length; i++) {
    const status = allCards[i].querySelector("h2.font-medium").innerText;
    if (status === "Interview") {
      allCards[i].style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }
};

// Rejected Tab
btnRejected.onclick = function () {
  for (let i = 0; i < allCards.length; i++) {
    const status = allCards[i].querySelector("h2.font-medium").innerText;
    if (status === "Rejected") {
      allCards[i].style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }
};

// Run once on page load to set initial "0" counts
updateDashboard();
