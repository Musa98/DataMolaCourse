/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const tweetCollection = new TweetCollection(tweets);

function setCurrentUser(userName) {
  const header = new HeaderView('user');
  tweetCollection.user = userName;
  header.display(tweetCollection);
}

function addTweet(text) {
  const tweetFeed = new TweetFeedView('tweet-collection');
  tweetCollection.add(text);
  tweetFeed.display(tweetCollection);
}

function editTweet(id, text) {
  const tweetFeed = new TweetFeedView('tweet-collection');
  tweetCollection.edit(id, text);
  tweetFeed.display(tweetCollection);
}

function removeTweet(id) {
  const tweetFeed = new TweetFeedView('tweet-collection');
  tweetCollection.remove(id);
  tweetFeed.display(tweetCollection);
}

function getFeed(skip = 0, top = 10, obj = null) {
  const tweetFeed = new TweetFeedView('tweet-collection');
  if (obj === null) {
    tweetFeed.display(tweetCollection, skip, top);
  } else {
    const filter = new FilterView('tweet-collection');
    filter.display(tweetCollection, obj, skip, top);
  }
}

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
