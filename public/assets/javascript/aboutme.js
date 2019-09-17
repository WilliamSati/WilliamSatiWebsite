document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.sidenav');
   var instancesSideNav = M.Sidenav.init(elems);
   changeSizes();

 });

 window.addEventListener("resize", changeSizes);


 var aboutMeSectionList = document.getElementsByClassName('aboutMeSection');
 var dynamicImageList = document.getElementsByClassName('dynamicImage');
 var aboutMeSectionTextList = document.getElementsByClassName('AboutMeSectionText');

 function changeSizes() {

   var i;

//set the image height. Width should be set aautomatically according to the height.
   var newImageHeight = $(window).width()/7;

   if(newImageHeight < 100){
     newImageHeight=100;
   }

   for(i=0 ; i < dynamicImageList.length ; i++){
     dynamicImageList[i].style.height = newImageHeight + "px";
   }


//set the margin and font for the text
  var newTextMargin = newImageHeight + 20;
  var newFontSize = $(window).width()/100 + 10;

  for(i=0 ; i < aboutMeSectionTextList.length ; i++){
    aboutMeSectionTextList[i].style.marginLeft = newTextMargin+ "px";
    aboutMeSectionTextList[i].style.marginRight = newTextMargin+ "px";
    aboutMeSectionTextList[i].style.fontSize = newFontSize + "px";
  }

//set the height of each aboutMeSection
  for(i=0 ; i < aboutMeSectionList.length ; i++){
    if(aboutMeSectionTextList[i].clientHeight > dynamicImageList[i].clientHeight){
      aboutMeSectionList[i].style.height = aboutMeSectionTextList[i].style.height;
    }else{
      aboutMeSectionList[i].style.height = dynamicImageList[i].style.height;
    }
  }

}
