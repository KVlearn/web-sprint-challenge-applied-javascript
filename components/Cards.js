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

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response=>{
    console.log(response.data.articles)
    /*retuns an articles object . Key value articles is an object with topics as key and each of its value is an array of objects => each one of this objects has to be passed to create card */
    /*  articles is an object - that has many key:value pairs,
    For in loop to loop thru each pair ie each key
    The value of each key is an array. Loop thru each value array - which is an object(The obj to be used for creating artile!)*/
    let articles=response.data.articles;
    /*Loop thru the Objects:
    The better way to loop through objects is first to convert the object into an array. Then, you loop through the array.*/
    /* Retrieve the Array of Keys ie topics */
    let topicKey=Object.keys(articles);
    const cardsContainer=document.querySelector('.cards-container');
    console.log(topicKey);
    /* Loop over Object */
    for (let topic in articles){
        /*key is topics,value is articles[topics]*/
        // console.log(`key= ${topics} value = ${articles[topics]}`)
        let topicArray=articles[topic];
        topicArray.forEach(item=>{
            cardsContainer.appendChild(cardCreator(item,topic));/**takes article object from api , returns div card*//*property here is topic*/
        })
     }
})
.catch(err=>{
    console.log('oops something went wrong!',err.message);
    const errmsg=document.createElement('div');
    const cardContainer=document.querySelector('.cards-container');
    cardContainer.appendChild(errmsg);
    errmsg.textContent=`Oops Check error!!! ${err.message}`;
    errmsg.style.background="snow";
    errmsg.style.color="indianred";
    errmsg.style.fontSize="30px"
    const img=document.createElement('img');
    img.src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1915&q=80";
    errmsg.appendChild(img);
    img.style.width="60%";
    img.style.marginLeft="250px";
    img.style.paddingTop="25px";
})

function cardCreator(articleObj,topic){
    const card=document.createElement('div');
    card.classList.add('card');
    card.classList.add(`card_${topic}`); /*for click and filter display*/

    const headline=document.createElement('div');
    headline.classList.add('headline');
    headline.textContent=articleObj.headline;
    card.appendChild(headline);

    const author=document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);
    
    const imgContainer=document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);
    
    const authorImg=document.createElement('img');
    authorImg.src=articleObj.authorPhoto;
    imgContainer.appendChild(authorImg);


    card.addEventListener('click',()=>{
        console.log(articleObj.headline);
    })
     
    return card;
}