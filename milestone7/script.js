function navigateTo(screenId) {
  // Get all screens
  const screens = document.querySelectorAll('.screen');

  // Hide all screens
  screens.forEach(screen => {
    screen.classList.remove('visible');
  });

  // Show the selected screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('visible');
  }
}
