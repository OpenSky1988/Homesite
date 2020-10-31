import { Dispatch } from 'redux';
import { TOGGLE_MENU } from './actionTypes';
import { setProjectState } from './projectActions';
import { setArticleState } from './articleActions';
import { IState } from '../reducers/initialState';

interface IToggleMobileMenuAction {
  type: string;
  payload: boolean;
}

const toggleMobileMenu = (event: React.MouseEvent) => (
  dispatch: Dispatch<IToggleMobileMenuAction>,
  getState: () => IState,
) => {
  // Mobile Menu
  const mobileNavMenu = document.querySelector('.mobile-nav') as HTMLElement;
  // tslint:disable-next-line:max-line-length
  // Shadow Overlay (Used when Menu is open. Closes Menu on click.)
  const bodyShadow = document.querySelector('.body-shadow') as HTMLElement;
  // Hamburger Menu button. Used to open Menu.
  const navTrigger = document.querySelector('.nav-trigger') as HTMLElement;

  const { menu } = getState();
  const targetLogoElementClass = (event.target as HTMLElement).className;

  if (menu.isOpen) {
    // Animates Hamburger button to "closed" state (≡).
    navTrigger.classList.remove('is-open');
    dispatch({
      type: TOGGLE_MENU,
      payload: false,
    });

    // Only if logo is clicked:
    if (targetLogoElementClass === 'logo-button logom') {
      // Closes Project if it's open
      setProjectState();
      // Closes Article if it's open
      setArticleState();
    }

    // Closes Menu
    mobileNavMenu.style.height = '0px';
    // Removes Shadow Overlay
    bodyShadow.style.display = 'none';
  // If target is not logo - it's Hamburger. If so - open Menu.
  } else if (!(targetLogoElementClass === 'logo-button logom')) {
    // Animates Hamburger button to "open" state (X)
    navTrigger.classList.add('is-open');
    dispatch({
      type: TOGGLE_MENU,
      payload: true,
    });

    // Opens Menu
    mobileNavMenu.style.height = `${menu.fullHeight}px`;
    // Adds Shadow Overlay
    bodyShadow.style.display = 'block';
  }
};

export default toggleMobileMenu;
export { IToggleMobileMenuAction };
