function toogleBtn (id) {
  const allBtn = document.getElementById('all-btn');
  const appliedBtn = document.getElementById('applied-btn');
  const interviewBtn = document.getElementById('interview-btn');
  const rejectedBtn = document.getElementById('rejected-btn');

  allBtn.classList.add('bg-gray-200')
  appliedBtn.classList.add('bg-gray-200')
  interviewBtn.classList.add('bg-gray-200')
  rejectedBtn.classList.add('bg-gray-200')

  allBtn.classList.remove('btn-primary');
  appliedBtn.classList.remove('btn-primary');
  interviewBtn.classList.remove('btn-primary');
  rejectedBtn.classList.remove('btn-primary');

  const selected = document.getElementById(id);
  
  selected.classList.add('btn-primary');
  selected.classList.remove('bg-gray-200');
}


document.getElementById('card-applied').addEventListener('click', function() {
  const status = document.getElementById('status');
  status.innerText = 'Applied';
})
