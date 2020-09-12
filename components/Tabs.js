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

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response=>{
    console.log(response.data); /*returns an object with key'topics' => where the topics's value is an array */
    /*select topics class to append the created tab to */
    const topics=document.querySelector('.topics');
    let topicsArray=response.data.topics;
    topicsArray.forEach(item=>{
        topics.appendChild(tabCreator(item))
    })
})
.catch(err=>{
    console.log(err.message);
})

function tabCreator(topic){
const tabs=document.createElement('div');
tabs.classList.add('tab');
tabs.textContent=topic;

tabs.classList.add(`card_${topic}`);
tabs.addEventListener('click',()=>{
     /*display only topic clicked*/
     console.log(tabs.textContent);
     let topic=tabs.textContent;
     const card=document.querySelectorAll('.card');
     card.forEach(item=>{
        item.style.display="none";
     }); 

    const topiccard=document.querySelectorAll(`.card_${topic}`);
     topiccard.forEach(item=>{
         item.style.display="flex";
         item.style.justifyContent="space-between";
         item.style.backgroundColor="lightgrey";
     });    

 })

return tabs;
}