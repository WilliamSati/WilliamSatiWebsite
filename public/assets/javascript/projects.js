var carouselDescription1 = "This is a boat-simulator me and my partner built using only C for an end-of-year course project at university. "
                           + "The boat follows realistic acceleration and deceleration and utilies a gyroscope to get user input. "
                           + "It uses a game loop format to update, draw and erase the boat and it's rings."
                           + " Bresenham's circle algorithm is used to draw a circle to the screen and the data for the rings are kept in an array.";

var carouselDescription2 = "This game is programmed entirely in Verilog: a hardware description language. This game is a big finite state machine with"
                           + " a controller module for the player and both falling blocks. Each controller module determines the state in which the object"
                           + " should find itself next based on user input and a clock input (for example, pressing the right button should have the controller"
                           + " push the machine into the ‘move right’ state). The controller then feeds that state into the object’s datapath, which is a series"
                           + " of sequential circuits that will make the object move where it’s supposed to (for example, given the ‘move right’ state, it should "
                           + "move the player one pixel to the right and draw them to the screen again)."

var carouselDescription3 = "This game was programmed in C++ and uses an old-fashioned AI to control the space-ship. The AI keeps the data of each asteroid in a linked"
                         + " list, then prioritizes the list based on the perceived danger of each asteroid. For the most dangerous asteroid, it solves a quadratic equation"
                         + " to find the nearest angle at which it could shoot to have the bullet intercept the asteroid.";
var carouselDescriptionArray = [carouselDescription1,carouselDescription2, carouselDescription3];

var buttonPrev = document.getElementById("buttonPrev");
var buttonNext = document.getElementById("buttonNext");

var carouselItem1 = document.getElementById('boatSimulator');
var carouselItem2 = document.getElementById('dodgeBlock');
var carouselItem3 = document.getElementById('asteroidShooter');
var carouselItemArray = [carouselItem1, carouselItem2, carouselItem3];

var carouselDescription = document.getElementById('carouselDescription');

var currentCarouselItem = 0; //there are currently 3 carousel items; item 0, 1 and 2

document.addEventListener('DOMContentLoaded', function() {
 var elems1 = document.querySelectorAll('.sidenav');
 var instancesSideNav = M.Sidenav.init(elems1);

 carouselDescription.innerHTML = carouselDescriptionArray[0];
 carouselItem1.style.display = "block";
 changeSizes();
});

buttonPrev.addEventListener('click', function() {

//hide the currently visible carouselItem;
carouselItemArray[currentCarouselItem].style.display = "none";

//change the currentCarouselItem counter:
 //if we've reached the first carousel item
 if(currentCarouselItem == 0){
   //then we move onto the last carousel item
   currentCarouselItem = carouselDescriptionArray.length - 1;
 }else{
 //else, we move onto the previous carousel item
   currentCarouselItem -= 1;
 }

//change the description of the carouselItem:
 carouselDescription.innerHTML = carouselDescriptionArray[currentCarouselItem];

//change the currently visible carouselItem;
 carouselItemArray[currentCarouselItem].style.display = "block";
 changeSizes();

});

buttonNext.addEventListener('click', function(){

 //hide the currently visible carouselItem;
 carouselItemArray[currentCarouselItem].style.display = "none";

 //change the currentCarouselItem counter:
   //if we've reached the last carousel item
   if(currentCarouselItem == (carouselDescriptionArray.length - 1) ){
     //then we move onto the first carousel item
     currentCarouselItem = 0;
   }else{
     //else, we move onto the previous carousel item
     currentCarouselItem += 1;
   }
 //change the description of the carouselItem:
   carouselDescription.innerHTML = carouselDescriptionArray[currentCarouselItem];

 //change the currently visible carouselItem;
   carouselItemArray[currentCarouselItem].style.display = "block";
   changeSizes();
});




var carouselControls = document.getElementsByClassName('carouselControls');

var dynamicListItems = document.getElementsByClassName('dynamicList');

var dynamicDescriptionItems = document.getElementsByClassName('dynamicDescription');

var dynamicImageItems = document.getElementsByClassName('dynamicImage');

var projectOutcomes = document.getElementsByClassName('projectOutcomes');

var projectImageAndOutcomes = document.getElementsByClassName('projectImageAndOutcomes');


window.addEventListener("resize", changeSizes);

function changeSizes() {
//Move the carousel Video to the center
 carouselItemArray[currentCarouselItem].style.marginLeft = ($(window).width()/2 - 200) + "px";
//move the carousel Controls to the center
 carouselControls[0].style.marginLeft = ($(window).width()/2 - 200) + "px";

//Set the new list Font sizes
 var newListFontSize;
 var windowWidth= $(window).width();
 newListFontSize= windowWidth/100 + 10;

 var i;
 for (i=0; i<dynamicListItems.length ; i++){
   dynamicListItems[i].style.fontSize = newListFontSize + "px";
 }
//set the new Description font sizes
 var newDescriptionFontSize;
 newDescriptionFontSize = windowWidth/100 + 10;

 for (i=0; i<dynamicDescriptionItems.length ; i++){
   dynamicDescriptionItems[i].style.fontSize = newDescriptionFontSize + "px";
 }
//set the new Image changeSizes
 var newImageWidth;
 var newImageHeight;
 newImageWidth = windowWidth/4;
 //don't let the image get smaller than 200px
 if(newImageWidth<200){
   newImageWidth=200;
 }
 newImageHeight = newImageWidth*0.85;

 for (i=0; i<dynamicImageItems.length ; i++){
   dynamicImageItems[i].style.width = newImageWidth + "px";
   dynamicImageItems[i].style.height = newImageHeight + "px";
 }
//set the new margins for the project projectOutcomes
 var newMargin;
 newMargin = newImageWidth;
 for (i=0; i<projectOutcomes.length ; i++){
   projectOutcomes[i].style.marginLeft = newMargin + "px";
 }

 //set the height of each project card
   for(i=0 ; i < projectImageAndOutcomes.length ; i++){
     if(projectOutcomes[i].clientHeight > dynamicImageItems[i].clientHeight){
       projectImageAndOutcomes[i].style.height = projectOutcomes[i].clientHeight + 20 + "px";
     }else{
       projectImageAndOutcomes[i].style.height = dynamicImageItems[i].clientHeight + 20 + "px";
     }
   }

}
