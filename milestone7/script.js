function navigateTo(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });

  // Show the selected screen
  document.getElementById(screenId).classList.remove('hidden');
}
