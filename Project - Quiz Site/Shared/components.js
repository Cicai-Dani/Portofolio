function toggleTheme() {
    const button = document.getElementById("flexSwitchCheckDefault");
    const container = document.body;
  
    if (button.checked) {
      container.classList.add("theme-switch-dark");
      localStorage.setItem('theme', 'dark');
    } else {
      container.classList.remove("theme-switch-dark");
      localStorage.setItem('theme', 'light');
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add("theme-switch-dark");
      document.getElementById("flexSwitchCheckDefault").checked = true;
    }
  });
  

function swapClass(elementId, currentClass, newClass) {
    const element = document.getElementById(elementId);

    if (element) {
        if (element.classList.contains(currentClass)) {
            element.classList.replace(currentClass, newClass);
        } else {
            return;
        }
    }

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}