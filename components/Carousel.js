/*
  STRETCH GOAL
  STRETCH GOAL  
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer=document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselCreator());

function carouselCreator(){
  const carousel=document.createElement('div');
  carousel.classList.add('carousel');
  
  const leftButton=document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent="<";
  carousel.appendChild(leftButton);
  
  const img1=document.createElement('img');
  img1.src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg";
  carousel.appendChild(img1);
  img1.style.display="block";

  const img2=document.createElement('img');
  img2.src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg";
  carousel.appendChild(img2);

  const img3=document.createElement('img');
  img3.src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg";
  carousel.appendChild(img3);


  const img4=document.createElement('img');
  img4.src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg";
  carousel.appendChild(img4);
   

  const rightButton=document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent=">";
  carousel.appendChild(rightButton);

  return carousel;

}

/*Handle Click event on Carousel Arrow buttons! */

let index=0;
let  displayImg=document.querySelectorAll('img');
const length=displayImg.length;
console.log('displayImg=',displayImg);

/*Scroll Carousel*/
const rightButton=document.querySelector('.right-button');
const leftButton=document.querySelector('.left-button');

leftButton.addEventListener('click',()=>{
  if (index===0){
    displayImg[index].style.display="none";
    displayImg[length-1].style.display="block";
    index=length-1; 
  }else{
  console.log('im in leftclick event');
  displayImg[index].style.display="none";
  displayImg[index-1].style.display="block";
  index--
  }
})

rightButton.addEventListener('click',()=>{
 /*Loop thru the index of image*/
  // console.log('length=',length);
  // console.log('index=',index)
  if (index===length-1){
    console.log('inside',index);
    displayImg[index].style.display="none";
    index=0
    displayImg[index].style.display="block";
  }else{
    console.log('im in rightclick event');
    displayImg[index].style.display="none";
    displayImg[index+1].style.display="block";
    index++
  }
})