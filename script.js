const menu=document.getElementById('sideMenu');
const scrim=document.getElementById('scrim');
function closeMenu(){menu.classList.remove('open');scrim.classList.remove('show')}
document.getElementById('menuButton').addEventListener('click',()=>{menu.classList.add('open');scrim.classList.add('show')});
document.getElementById('closeMenu').addEventListener('click',closeMenu);
scrim.addEventListener('click',closeMenu);
