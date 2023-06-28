const progressBar = document.querySelector('.progress');
  const donationInput = document.querySelector('.donation-input');

  // Set the initial progress to 0%
  let progress = 0;

  // Update the progress bar based on the donated amount
  function updateProgressBar() {
    const donationAmount = parseInt(donationInput.value) || 0;
    progress = Math.min((donationAmount / 100) * 100, 100); // Assuming the target is $100
    progressBar.style.width = progress + '%';
  }

  // Add event listener to the donate button
  const donateButton = document.querySelector('.donate-button');
  donateButton.addEventListener('click', updateProgressBar);