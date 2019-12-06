/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.***
    2. You will need to grab a reference to all of the images***
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const carouselCont = document.querySelector('.carousel-container');

const carouselCreator = () => {
  //create elements
  const carousel = document.createElement('div'),
          leftButton = document.createElement('div'),
          imageOne = document.createElement('img'),
          imageTwo = document.createElement('img'),
          imageThree = document.createElement('img'),
          imageFour = document.createElement('img'),
          rightButton = document.createElement('div');

  //classes and attrs
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  imageOne.src = './assets/carousel/mountains.jpeg';
  imageTwo.src = './assets/carousel/computer.jpeg';
  imageThree.src = './assets/carousel/trees.jpeg';
  imageFour.src = './assets/carousel/turntable.jpeg';
  rightButton.classList.add('right-button');

  //appending
  carousel.appendChild(leftButton);
  carousel.appendChild(imageOne);
  carousel.appendChild(imageTwo);
  carousel.appendChild(imageThree);
  carousel.appendChild(imageFour);
  carousel.appendChild(rightButton);

  //events for buttons
  let slideIndex = 0;

  const showSlides = (n) => {
    slideIndex += n;

    if(slideIndex >= 5){
      slideIndex = 1;
    }

    if(slideIndex <= 0){
      slideIndex = 4;
    }

    if (slideIndex === 1){
      imageOne.style.display = 'block';
      imageTwo.style.display = 'none';
      imageThree.style.display = 'none';
      imageFour.style.display = 'none';
    } else if (slideIndex === 2){
      imageTwo.style.display = 'block';
      imageOne.style.display = 'none';
      imageThree.style.display = 'none';
      imageFour.style.display = 'none';
    }
    else if (slideIndex === 3){
      imageThree.style.display = 'block';
      imageOne.style.display = 'none';
      imageTwo.style.display = 'none';
      imageFour.style.display = 'none';
    }
    else if (slideIndex === 4){
      imageFour.style.display = 'block';
      imageOne.style.display = 'none';
      imageTwo.style.display = 'none';
      imageThree.style.display = 'none';
    }
  }

  showSlides(1);

  // const moveSlider = (cb, n) => {
  //   let index = 1;
  //   index += n;
  //   showSlides(index);
  // };

  leftButton.addEventListener('click', () => {
    showSlides(-1);
  });

  rightButton.addEventListener('click', () => {
    showSlides(1);
  });

  return carousel;
};

carouselCont.appendChild(carouselCreator());

