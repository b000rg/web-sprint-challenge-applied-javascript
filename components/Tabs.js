// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        createAllTab();
        res.data.topics.forEach(tabLabel => {
            createTab(tabLabel);
        });
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

function createTab(tabLabel) {
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.innerText = tabLabel;

    tabLabel = tabLabel.replace(/\..*/, '');
    tab.addEventListener('click', event => {
        document.querySelectorAll(`.card:not(.${tabLabel}-article)`).forEach(el => {
            if (! el.matches('.card--hidden')) el.classList.add('card--hidden');
        });
        document.querySelectorAll(`.card.${tabLabel}-article`).forEach(el => {
            if (el.matches('.card--hidden')) el.classList.remove('card--hidden');
        });
    });

    document.querySelector('.topics').appendChild(tab);
};

function createAllTab() {
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.innerText = 'all';

    tab.addEventListener('click', event => {
        document.querySelectorAll('.card').forEach(el => {
            if (el.matches('.card--hidden')) el.classList.remove('card--hidden');
        });
    });

    document.querySelector('.topics').appendChild(tab);
};
