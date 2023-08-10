import outsideClick from "./js/outsideClick";
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});



const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('.menu-itens');



function openMenu(event) {
  menuList.classList.add('active');
  menuButton.classList.add('active');
  //outsideClick(menuList, eventos, () => {
 //   menuList.classList.remove('active');
  //  menuButton.classList.remove('active');
 // })
}

  menuButton.addEventListener('click', openMenu);

