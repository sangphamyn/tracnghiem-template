var joinClass = document.querySelector('.joinClass');
var joinClass_modal = document.querySelector('.joinClass-modal');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.close');
joinClass.addEventListener('click', ()=>{
    joinClass_modal.classList.add('show');
    overlay.classList.add('show');
})
for (a of [close, overlay]) {
    a.addEventListener('click', ()=>{
        joinClass_modal.classList.remove('show');
        overlay.classList.remove('show');
    })
}

var header_profile = document.querySelector('.profile-name');
header_profile.addEventListener('click', (event)=>{
    event.preventDefault();
    document.querySelector('.user-action').classList.toggle('show');
    event.preventDefault();
})
window.onclick = function(event) {
    if (!event.target.matches('.profile-name')) {
      var dropdowns = document.getElementsByClassName("user-action");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }