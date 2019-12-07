// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.




//card components

//=====find out where this is being appended=====

const cardsContainer = document.querySelector('.cards-container')

const cardCreator = (data) => {
  //create elements
  const card = document.createElement('div'), //n/a
        headline = document.createElement('div'), //data.headline
        author = document.createElement('div'), //n/a
          imageContainer = document.createElement('div'), //n/a
            image = document.createElement('img'), //data.authorPhoto
          name = document.createElement('span'); //data.authorName
  
  //classes and attrs
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');
  image.src = data.authorPhoto;
  
  //text content
  headline.textContent = data.headline;
  name.textContent = data.authorName;
  
  //appending
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(name);
  
  return card;
};

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {

    const articleArray = Object.values(response.data.articles);
  
    articleArray.forEach(item => {
      item.forEach(subItem => {
        const newArticle = cardCreator(subItem);
        cardsContainer.appendChild(newArticle);
      })
    })
  })
  .catch(err => {
    console.log(`ERROR WITH CARDS HERE: ${err}`);
  });