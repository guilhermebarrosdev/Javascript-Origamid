export default function initDropDownMenu() {}

const dropDownMenus = document.querySelector('[data-dropdown]');

dropDownMenus.forEach((menu) => {
  ['touchstart', 'click'].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active');
}
