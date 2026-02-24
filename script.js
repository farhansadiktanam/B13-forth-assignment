// Select the dashboard numbers
const totalCard = document.getElementById("total");
const interviewCard = document.getElementById("interview");
const rejectedCard = document.getElementById("rejected");

// Select the container
const cardContainer = document.getElementById("card-container");
const allCards = cardContainer.children;

// Select filter buttons
const btnAll = document.getElementById("btn-filter-all");
const btnInterview = document.getElementById("btn-filter-interview");
const btnRejected = document.getElementById("btn-filter-rejected");

function updateDashboard() {
  let total = allCards.length;
  let interview = 0;
  let rejected = 0;

  for (let card of allCards) {
    const statusText = card.querySelector(".status-text").innerText;

    if (statusText === "Interview") {
      interview++;
    } else if (statusText === "Rejected") {
      rejected++;
    }

    totalCard.innerText = total;
    interviewCard.innerText = interview;
    rejectedCard.innerText = rejected;
  }
}
