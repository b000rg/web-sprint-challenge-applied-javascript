// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        let cardContainer = document.querySelector('.cards-container');
        Object.keys(res.data.articles).forEach(topic => {
            res.data.articles[topic].forEach(article => {
                cardContainer.appendChild(createCard(topic, article));
            });
        });
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

function createCard(topic, article) {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let image = document.createElement('img');
    let credit = document.createElement('span');

    card.classList.add('card', `${topic.replace(/\./g, '')}-article`);
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    image.setAttribute('src', article.authorPhoto);

    headline.innerText = article.headline;
    credit.innerText = `By ${article.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(credit);

    card.addEventListener('click', event => {
        console.log(article.authorName);
    });

    return card;
};
