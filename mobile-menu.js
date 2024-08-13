function updateAriaHidden() {
  const navLinks = document.getElementById('nav-links').children;
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    for (var i = 0; i < navLinks.length; i++) {
      const link = navLinks[i].querySelector('a');
      link.setAttribute('aria-hidden', 'true');
      link.setAttribute('tab-index', '-1');
    }
  } else {
    for (var i = 0; i < navLinks.length; i++) {
      const link = navLinks[i].querySelector('a');
      link.setAttribute('aria-hidden', 'false');
      link.setAttribute('tab-index', '0');
    }
  }
}

// Add event listener for window resize
window.addEventListener('resize', updateAriaHidden);
// Call the function initially
// window.addEventListener('load', updateAriaHidden());
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    updateAriaHidden();
    console.log('Document is ready!');
  }
};

function toggleFunction() {
  const navBar = document.getElementById('navbar');
  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const linkToFocus = navLinks.querySelector('a');
  if (navBar.classList.contains('open')) {
    toggleButton.setAttribute('aria-expanded', 'false');
    navBar.classList.remove('open');
    navLinks.setAttribute('aria-hidden', true);
  } else {
    navBar.classList.add('open');
    toggleButton.setAttribute('aria-expanded', 'true');
    linkToFocus.focus();
    navLinks.setAttribute('aria-hidden', false);
  }
}
