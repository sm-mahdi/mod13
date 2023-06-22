// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

// Pagination functionality
const paginationItems = document.querySelectorAll('.pagination-item');

paginationItems.forEach(item => {
  item.addEventListener('click', () => {
    // Handle pagination logic here
  });
});

// Modal functionality
const modalTrigger = document.getElementById('modal-trigger');
const modalClose = document.getElementById('modal-close');
const modal = document.getElementById('modal');

modalTrigger.addEventListener('click', () => {
  modal.classList.add('show');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
});


// Custom JavaScript code

// Add custom JavaScript code here

// Example code to create a chart using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
