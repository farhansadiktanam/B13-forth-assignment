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

for (let card of allCards) {
  const status = card.querySelector(".status-text");
  const interviewBtn = card.querySelector(".btn-success");
  const rejectedBtn = card.querySelector(".btn-secondary");
  const deleteBtn = card.querySelector(".fa-trash-can").parentElement;

  interviewBtn.addEventListener("click", function () {
    status.innerText = "Interview";
    status.style.color = "green";
    updateDashboard();
  });

  rejectedBtn.addEventListener("click", function () {
    status.innerText = "Rejected";
    status.style.color = "red";
    updateDashboard();
  });

  deleteBtn.addEventListener("click", function () {
    card.remove();
    updateDashboard();
  });
}

btnAll.addEventListener("click", function () {
  for (let card of allCards) {
    card.style.display = "block";
  }
  btnInterview.classList.remove("btn-primary");
  btnRejected.classList.remove("btn-primary");
  btnAll.classList.add("btn-primary");
});

btnInterview.addEventListener("click", function () {
  for (let card of allCards) {
    const status = card.querySelector(".status-text").innerText;

    if (status === "Interview") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
  btnAll.classList.remove("btn-primary");
  btnRejected.classList.remove("btn-primary");
  btnInterview.classList.remove("btn-soft");
  btnInterview.classList.add("btn-primary");
});

btnRejected.addEventListener("click", function () {
  for (let card of allCards) {
    const status = card.querySelector(".status-text").innerText;

    if (status === "Rejected") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
  btnInterview.classList.remove("btn-primary");
  btnAll.classList.remove("btn-primary");
  btnRejected.classList.remove("btn-soft");
  btnRejected.classList.add("btn-primary");
});

updateDashboard();
