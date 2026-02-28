const allTab = document.getElementById('all-tab');
const appliedTab = document.getElementById('applied-tab');
const interviewTab = document.getElementById('interview-tab');
const rejectedTab = document.getElementById('rejected-tab');

// Switching Tab
function toogleTab(id) {
  allTab.classList.add('bg-gray-200')
  appliedTab.classList.add('bg-gray-200')
  interviewTab.classList.add('bg-gray-200')
  rejectedTab.classList.add('bg-gray-200')

  allTab.classList.remove('btn-primary');
  appliedTab.classList.remove('btn-primary');
  interviewTab.classList.remove('btn-primary');
  rejectedTab.classList.remove('btn-primary');

  const selectedTab = document.getElementById(id);

  selectedTab.classList.add('btn-primary');
  selectedTab.classList.remove('bg-gray-200');
}


