const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const searchIcon = document.getElementById('search-icon');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const contentSection = document.getElementById('content-section');

// Toggle between light and dark theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  // Toggle between moon and sun icons
  if (body.classList.contains('dark-theme')) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// Show/Hide search input when magnifying glass is clicked
searchIcon.addEventListener('click', () => {
  searchContainer.style.display = searchContainer.style.display === 'none' || !searchContainer.style.display ? 'flex' : 'none';
  searchInput.focus(); // Focus on the input field when shown
});

// Search functionality
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const content = contentSection.querySelectorAll('p, h1, h5'); // You can include more tags here

  content.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = 'block'; // Show the matching items
    } else {
      item.style.display = 'none'; // Hide the non-matching items
    }
  });
});
