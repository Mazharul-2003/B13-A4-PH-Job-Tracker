let currentTab = 'all-tab';

const allTab = document.getElementById('all-tab');
const appliedTab = document.getElementById('applied-tab');
const interviewTab = document.getElementById('interview-tab');
const rejectedTab = document.getElementById('rejected-tab');

const allContainer = document.getElementById("all-container");
const appliedContainer = document.getElementById("applied-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

const emptyState = document.getElementById("empty-state");


// Switching Tab
function toogleTab(id) {
  const tabs = [allTab, appliedTab, interviewTab, rejectedTab];
  currentTab = id;

  for (const tab of tabs) {
    tab.classList.add('bg-gray-200');
    tab.classList.remove('btn-primary');
  }

  const selectedTab = document.getElementById(id);

  selectedTab.classList.add('btn-primary');
  selectedTab.classList.remove('bg-gray-200');

  const pages = [allContainer, appliedContainer, interviewContainer, rejectedContainer]

  for (const section of pages) {
    section.classList.add('hidden');
  }

  emptyState.classList.add("hidden");

  if (selectedTab === allTab) {
    allContainer.classList.remove('hidden');
    if (allContainer.children.length == 0) {
      emptyState.classList.remove("hidden");
    }
  }
  else if (selectedTab === appliedTab) {
    appliedContainer.classList.remove('hidden');
    if (appliedContainer.children.length == 0) {
      emptyState.classList.remove("hidden");
    }
  }
  else if (selectedTab === interviewTab) {
    interviewContainer.classList.remove('hidden');
    if (interviewContainer.children.length == 0) {
      emptyState.classList.remove("hidden");
    }
  }
  else {
    rejectedContainer.classList.remove('hidden');
    if (rejectedContainer.children.length == 0) {
      emptyState.classList.remove("hidden");
    }
  }
  updateStat();
}

// Status Update
const totalStat = document.getElementById("stat-total");
const appliedStat = document.getElementById("stat-applied");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");
const availableStat = document.getElementById("available");

toogleTab(currentTab);

// Event Delegation on All Card (Card Container)
document.getElementById("job-container")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const cardParent = card.parentNode;
    const innerCardStat = document.querySelector(".card-stats");

    if (clickedElement.classList.contains('applied')) {
      card.querySelector(".card-stats").innerText = "Applied";

      if (card.parentNode.id !== "applied-container") {
        const clone = card.cloneNode(true);
        appliedContainer.appendChild(clone);
      }
    }

    if (clickedElement.classList.contains('interview')) {
      card.querySelector(".card-stats").innerText = "Interviewed";

      if (card.parentNode.id !== "interview-container") {
        const clone = card.cloneNode(true);
        interviewContainer.appendChild(clone);
      }
    }

    if (clickedElement.classList.contains('rejected')) {
      card.querySelector(".card-stats").innerText = "Rejected";

      if (card.parentNode.id !== "rejected-container") {
        const clone = card.cloneNode(true);
        rejectedContainer.appendChild(clone);
      }
    }
    if (clickedElement.classList.contains('delete-btn')) {
      cardParent.removeChild(card);
    }
    updateStat();
  });

function updateStat() {
  // totalStat.innerText = allContainer.children.length;
  // appliedStat.innerText = appliedContainer.children.length;
  // interviewStat.innerText = interviewContainer.children.length;
  // rejectedStat.innerText = rejectedContainer.children.length;

  const counts = {
    "all-tab": allContainer.children.length,
    "applied-tab": appliedContainer.children.length,
    "interview-tab": interviewContainer.children.length,
    "rejected-tab": rejectedContainer.children.length
  }
  totalStat.innerText = counts["all-tab"];
  appliedStat.innerText = counts["applied-tab"];
  interviewStat.innerText = counts["interview-tab"];
  rejectedStat.innerText = counts["rejected-tab"];

  availableStat.innerText = counts[currentTab];

  if (counts[currentTab] == 0) {
    emptyState.classList.remove("hidden");
  }
  else {
    emptyState.classList.add("hidden");
  }
}

updateStat();