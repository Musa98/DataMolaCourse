/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

class TweetsController {
  constructor() {
    this.tweetCollection = new TweetCollection(tweets);
    this.header = new HeaderView('user');
    this.tweetFeed = new TweetFeedView('tweet-collection');
    this.filter = new FilterView('tweet-collection');
    this.tweet = new TweetView('tweet-collection');
  }

  setCurrentUser(userName) {
    this.tweetCollection.user = userName;
    this.header.display(this.tweetCollection);
  }

  addTweet(text) {
    this.tweetCollection.add(text);
    this.tweetFeed.display(this.tweetCollection);
  }

  editTweet(id, text) {
    this.tweetCollection.edit(id, text);
    this.tweetFeed.display(this.tweetCollection);
  }

  removeTweet(id) {
    this.tweetCollection.remove(id);
    this.tweetFeed.display(this.tweetCollection);
  }

  getFeed(skip = 0, top = 10, obj = null) {
    if (obj === null) {
      this.tweetFeed.display(this.tweetCollection, skip, top);
    } else {
      this.filter.display(this.tweetCollection, obj, skip, top);
    }
  }

  showTweet(id) {
    this.tweet.display(tweetCollection, id);
  }
}

const tweetController = new TweetsController();

function loadTweetApp(event) {
  const loadTweets = (e) => {
    if (e.target.classList.contains('load-button')) {
      loadTweets.counter++;
      tweetController.getFeed(0, loadTweets.counter * 10);
    }
  };
  const addHandler = (e) => {
    loadTweets.counter = 1;
    const tweetText = document.querySelector('.textarea-add-twit').value;
    if (!tweetText) {
      return;
    }
    tweetController.addTweet(tweetText);
    document.querySelector('.textarea-add-twit').value = '';
  };
  const deleteHandler = (e) => {
    if (e.target.classList.contains('delete-img')) {
      tweetController.removeTweet(e.target.parentElement.parentElement.id);
    }
  };
  const editHandler = (e) => {
    if (e.target.classList.contains('edit-button') && e.target.textContent === 'Edit') {
      const p = e.target.parentElement.parentElement.previousElementSibling;
      const author = e.target
        .parentElement.parentElement.parentElement
        .previousElementSibling.lastElementChild;
      if (tweetController.tweetCollection.user !== author.textContent) return;
      e.target.textContent = 'Save';
      p.setAttribute('contenteditable', 'true');
      p.focus();
    } else if (e.target.classList.contains('edit-button') && e.target.textContent === 'Save') {
      const article = e.target.parentElement.parentElement.parentElement.parentElement;
      const p = e.target.parentElement.parentElement.previousElementSibling;
      tweetController.editTweet(article.id, p.textContent);
      p.setAttribute('contenteditable', 'false');
      e.target.textContent = 'Edit';
    }
  };
  const submitFilter = (e) => {
    loadTweets.counter = 1;
    e.preventDefault();
    const filterBlock = document.filter;
    const filterObj = {};
    if (filterBlock[0].value) {
      filterObj.author = filterBlock[0].value;
    }
    if (filterBlock[1].value) {
      filterObj.dateFrom = filterBlock[1].value;
    }
    if (filterBlock[2].value) {
      filterObj.dateTo = filterBlock[2].value;
    }
    if (filterBlock[4].value) {
      filterObj.hashtags = filterBlock[4].value;
    }
    if (filterBlock[3].value) {
      filterObj.text = filterBlock[3].value;
    }
    tweetController.getFeed(0, 10, filterObj);
  };
  // add
  const addTweetButton = document.querySelector('.add-twit-button');
  addTweetButton.addEventListener('click', addHandler);
  // delete
  const mainTweet = document.getElementById('tweet-collection');
  mainTweet.addEventListener('click', deleteHandler);
  // edit
  mainTweet.addEventListener('click', editHandler);
  // filter
  const saveFilterButton = document.querySelector('.save-button');
  saveFilterButton.addEventListener('click', submitFilter);
  // load button
  loadTweets.counter = 1;
  mainTweet.addEventListener('click', loadTweets);
}

window.addEventListener('load', loadTweetApp);

// const tweetCollection = new TweetCollection(tweets);

// function setCurrentUser(userName) {
//   const header = new HeaderView('user');
//   tweetCollection.user = userName;
//   header.display(tweetCollection);
// }

// function addTweet(text) {
//   const tweetFeed = new TweetFeedView('tweet-collection');
//   tweetCollection.add(text);
//   tweetFeed.display(tweetCollection);
// }

// function editTweet(id, text) {
//   const tweetFeed = new TweetFeedView('tweet-collection');
//   tweetCollection.edit(id, text);
//   tweetFeed.display(tweetCollection);
// }

// function removeTweet(id) {
//   const tweetFeed = new TweetFeedView('tweet-collection');
//   tweetCollection.remove(id);
//   tweetFeed.display(tweetCollection);
// }

// function getFeed(skip = 0, top = 10, obj = null) {
//   const tweetFeed = new TweetFeedView('tweet-collection');
//   if (obj === null) {
//     tweetFeed.display(tweetCollection, skip, top);
//   } else {
//     const filter = new FilterView('tweet-collection');
//     filter.display(tweetCollection, obj, skip, top);
//   }
// }

function showTweet(id) {
  const tweet = new TweetView('tweet-collection');
  tweet.display(tweetCollection, id);
}

// TEST CASE
// setCurrentUser('Eddi');
// addTweet('HI');
// editTweet('21', 'Cool');
// removeTweet('21');
// getFeed(0, 20, {
//   author: 'Musa',
//   dateFrom: '2022-03-09',
//   dateTo: '2022-03-10',
//   hashtags: '#js',
//   text: 'the'
// });
// showTweet('2');

// Постараюсь доделать к заврашней проверке
