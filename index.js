const menu = document.getElementById('menu');
h = document.getElementById('h');
var isShow = false;
menu.onclick = function(){
  if (!isShow) {
    h.style.height = '238px';
    menu.src = 'close.svg'
    isShow = true;
  }else{
    h.style.height = '60px';
    menu.src = 'menu.svg'
    isShow = false;
  }
}
window.oncontextmenu = function() { return false; }