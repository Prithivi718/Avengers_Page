// Function to create and show the loading screen
function showLoadingMessage(hero) {
  // Check if the loading message has already been shown for this hero
  if (sessionStorage.getItem(`loading-shown-${hero}`)) {
      // Redirect immediately to the hero's page
      redirectToHeroPage(hero);
      return;
  }

  // Create the loading div dynamically
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'loading';
  loadingDiv.className = 'loading';

  // Create an h2 element to display the message
  const loadingMessage = document.createElement('h2');
  const messages = {
      ironman: "Say! I am Ironman",
      thor: "Say! Odin's Beard",
      spiderman: "Say! With Great Powers comes Great Responsibility",
      cap: "Say! I can do this all day"
  };

  // Set the message for the selected hero
  loadingMessage.innerText = messages[hero];
  loadingDiv.appendChild(loadingMessage);

  // Append the loading div to the body
  document.body.appendChild(loadingDiv);

  // Mark the loading message as shown for this hero
  sessionStorage.setItem(`loading-shown-${hero}`, true);

  // Wait for 5 seconds before redirecting
  setTimeout(() => {
      redirectToHeroPage(hero);
  }, 5000);
}

// Helper function to redirect to the hero's page
function redirectToHeroPage(hero) {
  const heroPages = {
      ironman: 'ironman.html',
      thor: 'thor.html',
      spiderman: 'spider.html',
      cap: 'cap.html'
  };

  // Redirect to the corresponding hero page
  window.location.href = heroPages[hero];
}