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

class Carousel {
  constructor() {
    this.html = document.createElement('div');
    this.images = [
      document.createElement('img'),
      document.createElement('img'),
      document.createElement('img'),
      document.createElement('img')
    ];
    this.index = 0;
    this.images[this.index].classList.add('active');
    let imgSrcs = [
      "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg",
      "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg",
      "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg",
      "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg"
    ]
    this.images.forEach((image, i) => {
      image.setAttribute('src', imgSrcs[i]);
    });
    let leftButton = document.createElement('div');
    leftButton.classList.add('left-button');
    leftButton.innerText = '<';
    let rightButton = document.createElement('div');
    rightButton.classList.add('right-button');
    rightButton.innerText = '>';
    leftButton.addEventListener('click', event => {
      this.moveCarousel(-1);
    });
    rightButton.addEventListener('click', event => {
      this.moveCarousel(1);
    });
    this.html.appendChild(leftButton);
    this.images.forEach(image => {
      this.html.appendChild(image);
    });
    this.html.appendChild(rightButton);
  };

  moveCarousel(n) {
    if ((this.index += n) === -1) this.index = this.images.length - 1;
    else if (this.index === this.images.length) this.index = 0;
    this.images.forEach((image, i) => {
      if (this.index == i) {
        image.classList.add('active');
        image.animate([{
          opacity: 0.2
        },
        {
          opacity: 1
        }], 500);
      }
      else image.classList.remove('active');
    });
  }
};

document.querySelector('.carousel-container').appendChild(new Carousel().html);
