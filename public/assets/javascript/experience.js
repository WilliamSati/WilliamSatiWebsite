document.addEventListener('DOMContentLoaded', function() {
 var elems1 = document.querySelectorAll('.sidenav');
 var instancesSideNav = M.Sidenav.init(elems1);
 changeSizes();
});



var dynamicListItems = document.getElementsByClassName('dynamicList');

var dynamicImageItems = document.getElementsByClassName('dynamicImage');

var projectOutcomes = document.getElementsByClassName('projectOutcomes');

var projectImageAndOutcomes = document.getElementsByClassName('projectImageAndOutcomes');

window.addEventListener("resize", changeSizes);

function changeSizes() {

//Set the new list Font sizes
 var newListFontSize;
 var windowWidth= $(window).width();
 newListFontSize= windowWidth/100 + 10;

 var i;
 for (i=0; i<dynamicListItems.length ; i++){
   dynamicListItems[i].style.fontSize = newListFontSize + "px";
 }
//set the new Image changeSizes
 var newImageWidth;
 var newImageHeight;
 newImageWidth = windowWidth/4;
 //don't let the image get smaller than 200px
 if(newImageWidth<200){
   newImageWidth=200;
 }
 newImageHeight = newImageWidth;

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


  //set the height of each experience card
    for(i=0 ; i < projectImageAndOutcomes.length ; i++){
      if(projectOutcomes[i].clientHeight > dynamicImageItems[i].clientHeight){
        projectImageAndOutcomes[i].style.height = projectOutcomes[i].clientHeight + 20 + "px";
      }else{
        projectImageAndOutcomes[i].style.height = dynamicImageItems[i].clientHeight + 20 + "px";
      }
    }

}
