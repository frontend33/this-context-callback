// this ссылка на текущий объект , ссылка на тот объект с которым сейчас происходит какое то событие 
// Напишем функцию которая будет переключать с нажатием добавлять и удалять класс item active 
window.onload=function(){
 var item = document.querySelector('.items .item');
 item.onclick=activeItem;
activeItem()
}
// Добавляем класс если нет , и удаляем если есть при помощи 
// classList.toggle
function activeItem(){
  // 
  this.classList.toggle('item active')
} 