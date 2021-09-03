import outsideCLick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');
  dropDownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideCLick(this, ['touchstart', 'click'], () => {
      this.classlist.remove('active');
    });
  }
}
