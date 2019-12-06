// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

const tabsComp = (topic) => {
  //create elements
  const tab = document.createElement('div');

  //text content
  tab.textContent = topic;

  //classes
  tab.classList.add('tab');

  return tab;
};

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    let topicsArr = response.data.topics;
    topicsArr.forEach(item => {
      const newTab = tabsComp(item);
      topics.appendChild(newTab); 
    })
  })
  .catch(err => {
    console.log(`ERROR FOR TABS HERE: ${err}`);
  })