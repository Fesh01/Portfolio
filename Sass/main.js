const menuBtn = document.querySelector('.burger-menu');

const burgerIcon = document.querySelector('.burger-menu_item');

const navmenu = document.querySelector('.menu');
const navmenuitem = document.querySelector('.menu-items');

const itemname = document.querySelectorAll('.menu-items_name');

let showMenu = false;

menuBtn.addEventListener('click', ()=>{
    toggleMenu();
})

const toggleMenu = () =>{
    if (!showMenu) {
        burgerIcon.classList.add('open');
        navmenu.classList.add('open');
        navmenuitem.classList.add('open');
        itemname.forEach(item=>item.classList.add('open'));
        showMenu = true;
    }else {
        burgerIcon.classList.remove('open');
        navmenu.classList.remove('open');
        navmenuitem.classList.remove('open');
        itemname.forEach(item=>item.classList.remove('open'));
        showMenu = false;
    }
}