import { TOGGLE_MENU } from './actionTypes';

const toggleMobileMenu = (e) => (dispatch, getState) => {
  const mobileNavMenu = document.getElementById('mobile-nav'); // Mobile Menu
  const bodyShadow = document.getElementById('body-shadow'); // Shadow Overlay (Used when Menu is open. Closes Menu on click.)
  const navTrigger = document.getElementById('nav-trigger'); // Hamburger Menu button. Used to open Menu.
  
  const currentState = getState();

  if (currentState.menu.isOpen) {
    navTrigger.classList.remove('is-open'); // Animates Hamburger button to "closed" state (≡).
    dispatch({
      type: TOGGLE_MENU,
      payload: false
    });

    if (e.target.className === 'logo-button logom') { // Only if logo is clicked:
      this.setProjectState(); // Closes Project if it's open
      this.setArticleState(); // Closes Article if it's open
    }

    mobileNavMenu.style.height = '0px'; // Closes Menu
    bodyShadow.style.display = 'none';  // Removes Shadow Overlay
  } else if (!(e.target.className === 'logo-button logom')) { // If target is not logo - it's Hamburger. If so - open Menu.
    navTrigger.classList.add('is-open'); // Animates Hamburger button to "open" state (X)
    dispatch({
      type: TOGGLE_MENU,
      payload: true
    });

    mobileNavMenu.style.height = `${currentState.menu.fullHeight}px`; // Opens Menu
    bodyShadow.style.display = 'block'; // Adds Shadow Overlay
  }
};

export default toggleMobileMenu;