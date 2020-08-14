// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let header = document.createElement('div');
    let date = document.createElement('span');
    let heading = document.createElement('h1');
    let temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.innerText = 'MARCH 28, 2020';
    heading.innerText = 'Lambda Times';
    temp.innerText = '98°';

    header.appendChild(date);
    header.appendChild(heading);
    header.appendChild(temp);

    return header;
}

document.querySelector('.header-container').appendChild(Header());
