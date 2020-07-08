//Enabling Strict Mode!!!
"use strict";

var hamburger = document.querySelector(".hamburger");
var menuItems = document.querySelector(".mobile-menu-items");
var mainContent = document.querySelector(".content");

hideMenu();


hamburger.addEventListener("click", function(obj){
  hamburger.classList.toggle("is-active");

  if(menuItems.classList.contains("hide-left")){
    showMenu();
  }else{
    hideMenu();
  }

});


//Allows tapping elsewhere to close the menu
mainContent.addEventListener("click", function(obj){

  if(menuItems.classList.contains("hide-left") == false){
    hideMenu();
    hamburger.classList.toggle("is-active");
  }

})

console.log(hamburger);

function hideMenu(){
  console.log("Hiding the Mobile Menu Items");
  menuItems.classList.add("hide-left");
  console.log("Mobile Menu items are hidden!");
  menuItems.setAttribute("aria-hidden", "true");
}

function showMenu(){
  console.log("Revealing the Mobile Menu Items");
  menuItems.classList.remove("hide-left");
  console.log("Mobile Menu items are Revealed!");
  menuItems.setAttribute("aria-hidden", "false");
}
