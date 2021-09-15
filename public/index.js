const hamburgerMenu = document.querySelector('.hambugerMenu');
const closeMenu = document.querySelector('.items-con');
const iconTrigger = document.querySelector('.fas');


hamburgerMenu.addEventListener('click',()=>{
    if(iconTrigger.classList.contains("fa-bars")){
        iconTrigger.classList.remove("fa-bars")
        iconTrigger.classList.add("fa-times")
        closeMenu.classList.remove("close");
    }else{
        iconTrigger.classList.add("fa-bars")
        iconTrigger.classList.remove("fa-times")
        closeMenu.classList.add("close");
    }
   

})