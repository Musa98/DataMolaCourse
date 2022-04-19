/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

'use strict';

// ARRAY OF TWEETS
const tweets = [{
  id: '1',
  text: 'Hello it is my first tweet!',
  createdAt: new Date('2022-03-09T11:00:00'),
  author: 'Musa',
  comments: []
},
{
  id: '2',
  text: 'Who knows how to clean ketchup on a shirt? #Help',
  createdAt: new Date('2022-03-09T12:13:00'),
  author: 'Alex',
  comments: [{
    id: '01',
    text: 'Try to clean with your saliva.',
    createdAt: new Date('2022-03-09T12:15:10'),
    author: 'Musa'
  }]
},
{
  id: '3',
  text: 'When I play Russian roulette, I have 6 rounds in my clip, but you will be the first to shoot...',
  createdAt: new Date('2022-03-09T15:06:11'),
  author: 'CrazyMan',
  comments: []
},
{
  id: '4',
  text: 'A stupid student is afraid of mistakes, a wise student makes mistakes and learns from them. #Wisdom',
  createdAt: new Date('2022-03-09T16:43:26'),
  author: 'Master',
  comments: [{
    id: '02',
    text: 'If I bought wine, pizza and sushi, and I should have bought dumbbells for training, have I made a mistake?',
    createdAt: new Date('2022-03-09T16:44:10'),
    author: 'SuperGlutton'
  },
  {
    id: '03',
    text: 'Oh my gosh...',
    createdAt: new Date('2022-03-09T16:46:17'),
    author: 'Master'
  }
  ]
},
{
  id: '5',
  text: 'Airsales! Search for cheap flights!',
  createdAt: new Date('2022-03-09T17:01:38'),
  author: 'BestAdvertiser',
  comments: []
},
{
  id: '6',
  text: 'I ordered a cake, fries, 20 burgers, 10 sandwiches and 8 cakes. What else would you recommend ordering?',
  createdAt: new Date('2022-03-09T17:39:27'),
  author: 'SuperGlutton',
  comments: [{
    id: '04',
    text: 'Get yourself some dumbbells!',
    createdAt: new Date('2022-03-09T17:42:16'),
    author: 'Alex'
  }]
},
{
  id: '7',
  text: 'The Javascript language is so exciting! #js #Start',
  createdAt: new Date('2022-03-09T17:55:53'),
  author: 'Musa',
  comments: []
},
{
  id: '8',
  text: 'If a person puts a bag on his head, he can hold out for 10 minutes.',
  createdAt: new Date('2022-03-09T18:32:23'),
  author: 'CrazyMan',
  comments: [{
    id: '05',
    text: 'Someone turn off his internet!',
    createdAt: new Date('2022-03-09T18:35:18'),
    author: 'Alex'
  },
  {
    id: '06',
    text: 'TruePacket presents the best airtight bags!',
    createdAt: new Date('2022-03-09T18:38:21'),
    author: 'BestAdvertiser'
  }
  ]
},
{
  id: '9',
  text: 'The ancestor of polar bears is the brown bear. #Animals',
  createdAt: new Date('2022-03-09T20:05:32'),
  author: 'Zoologist',
  comments: []
},
{
  id: '10',
  text: 'A fighter is strong when his spirit is strong #Wisdom',
  createdAt: new Date('2022-03-09T21:59:22'),
  author: 'Master',
  comments: [{
    id: '07',
    text: 'Cool said!',
    createdAt: new Date('2022-03-09T22:01:18'),
    author: 'Musa'
  }]
},
{
  id: '11',
  text: 'My evening snack is chocolate donuts. Life is good!',
  createdAt: new Date('2022-03-09T23:54:26'),
  author: 'SuperGlutton',
  comments: []
},
{
  id: '12',
  text: '1Xbet sports betting, big payouts, reliable bookmaker',
  createdAt: new Date('2022-03-10T00:39:21'),
  author: 'BestAdvertiser',
  comments: [{
    id: '08',
    text: 'Advertisers usually go missing...',
    createdAt: new Date('2022-03-10T00:41:07'),
    author: 'CrazyMan'
  },
  {
    id: '09',
    text: 'Oh no, and here 1xbet!',
    createdAt: new Date('2022-03-10T00:45:41'),
    author: 'Alex'
  }
  ]
},
{
  id: '13',
  text: 'In one bee hive lives 20-60 thousand bees. #Animals',
  createdAt: new Date('2022-03-10T05:32:16'),
  author: 'Zoologist',
  comments: []
},
{
  id: '14',
  text: 'The language was developed by Brendan Eich in 10 days. #js',
  createdAt: new Date('2022-03-10T07:55:43'),
  author: 'Musa',
  comments: []
},
{
  id: '15',
  text: 'An ostrich egg can weigh up to 1.5 kg. #Animals',
  createdAt: new Date('2022-03-10T09:43:12'),
  author: 'Zoologist',
  comments: [{
    id: '010',
    text: 'And is it tasty?',
    createdAt: new Date('2022-03-10T09:46:51'),
    author: 'SuperGlutton'
  }]
},
{
  id: '16',
  text: 'There are no speed limits in Germany. Therefore, this country will appeal to fans of driving. #Adventure',
  createdAt: new Date('2022-03-10T12:01:48'),
  author: 'Traveler',
  comments: []
},
{
  id: '17',
  text: 'I love SocialNote!',
  createdAt: new Date('2022-03-10T14:03:17'),
  author: 'Alex',
  comments: []
},
{
  id: '18',
  text: 'Only ducks can quack: males are deprived of this ability. #Animals',
  createdAt: new Date('2022-03-10T16:23:41'),
  author: 'Zoologist',
  comments: [{
    id: '011',
    text: 'I love ducks!',
    createdAt: new Date('2022-03-10T16:24:31'),
    author: 'Alex'
  }]
},
{
  id: '19',
  text: 'On the second day of travel, human stress is reduced to 89%. Since most of the problems and negative emotions are forgotten. #Adventure',
  createdAt: new Date('2022-03-10T19:22:02'),
  author: 'Traveler',
  comments: []
},
{
  id: '20',
  text: 'When speaking to the wise, use few words. #Wisdom',
  createdAt: new Date('2022-03-10T21:09:33'),
  author: 'Master',
  comments: [{
    id: '012',
    text: 'Interesting Quote!',
    createdAt: new Date('2022-03-10T21:11:08'),
    author: 'Musa'
  },
  {
    id: '013',
    text: 'Another quote...',
    createdAt: new Date('2022-03-10T21:12:43'),
    author: 'Alex'
  }
  ]
}
];

const listUser = [{ ['Musa']: '123' }];

class Tweet {
  constructor({
    id,
    text,
    createdAt,
    author,
    comments
  }) {
    this.id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
    this.comments = comments;
  }

  static validateTweet(tweet) {
    if (typeof tweet !== 'object') {
      throw new Error('Type is not object!');
    }

    if (Object.keys(tweet).length !== 5) return false;

    for (let key in tweet) {
      switch (key) {
        case 'id':
          if (typeof tweet[key] !== 'string') return false;
          break;
        case 'text':
          if (tweet[key].length > 280) return false;
          if (typeof tweet[key] !== 'string') return false;
          break;
        case 'createdAt':
          if (!(tweet[key] instanceof Date && !Number.isNaN(tweet[key].valueOf()))) return false;
          break;
        case 'author':
          if (typeof tweet[key] !== 'string') return false;
          break;
        case 'comments':
          if (!Array.isArray(tweet[key])) return false;
          break;
        default:
          return false;
      }
    }
    return true;
  }
}

class Comment {
  constructor({
    id,
    text,
    createdAt,
    author
  }) {
    this.id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
  }

  static validateComment(com) {
    if (typeof com !== 'object') {
      throw new Error('Type is not object!');
    }

    if (Object.keys(com).length !== 4) return false;

    for (let key in com) {
      switch (key) {
        case 'id':
          if (typeof com[key] !== 'string') return false;
          break;
        case 'text':
          if (com[key].length > 280) return false;
          if (typeof com[key] !== 'string') return false;
          break;
        case 'createdAt':
          if (!(com[key] instanceof Date && !Number.isNaN(com[key].valueOf()))) return false;
          break;
        case 'author':
          if (typeof com[key] !== 'string') return false;
          break;
        default:
          return false;
      }
    }
    return true;
  }
}

class TweetCollection {
  _user = null;

  constructor(arr) {
    if (!(arr instanceof Array)) {
      throw new Error('Argument is not array!');
    }
    if (localStorage.getItem('tweetArr')) {
      const test = this.restore();
      this._tweetsArr = test.map(element => new Tweet(element));
      this._tweetsArr.forEach(element => {
        let tweet = element;
        tweet.comments = element.comments.map(elementComment => new Comment(elementComment));
      });
    } else {
      this._tweetsArr = arr.map(element => new Tweet(element));
      this._tweetsArr.forEach(element => {
        let tweet = element;
        tweet.comments = element.comments.map(elementComment => new Comment(elementComment));
      });
    }
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value;
  }

  get tweetsArr() {
    return this._tweetsArr;
  }

  set tweetsArr(value) {
    throw new Error('You can\'t change this property');
  }

  get filterTwits() {
    return this._filterTwits;
  }

  set filterTwits(value) {
    throw new Error('You can\'t change this method');
  }

  _filterTwits(array, obj) {
    return array.filter(element => {
      for (let key in obj) {
        switch (key) {
          case 'author':
            if (element[key].toLowerCase() !== obj[key].toLowerCase()) return false;
            break;
          case 'dateFrom':
            if (element.createdAt < Date.parse(obj[key])) return false;
            break;
          case 'dateTo':
            if (element.createdAt > Date.parse(obj[key])) return false;
            break;
          case 'hashtags':
            for (let i = 0; i < obj[key].length; i++) {
              let trimHashtag = obj[key].replace(/\s+/g, ' ').trim();
              if (trimHashtag.substring(0, 1) !== '#') return false;
              if (!element.text.toLowerCase().includes(trimHashtag.toLowerCase())) return false;
            }
            break;
          case 'text':
            if (!element[key].toLowerCase().includes(obj[key].toLowerCase())) return false;
            break;
          default:
            throw new Error('Incorrect object!');
        }
      }

      return true;
    });
  }

  addAll(arr) {
    if (!(arr instanceof Array)) {
      throw new Error('Argument is not array!');
    }
    let mistakeArr = [];

    const arrCollection = arr.map(element => new Tweet(element));
    arrCollection.forEach(element => {
      let tweet = element;
      tweet.comments = element.comments.map(elementComment => new Comment(elementComment));
    });

    arr.forEach(element => {
      if (Tweet.validateTweet(element) && !(this.get(element._id))) {
        this._tweetsArr.push(element);
      } else {
        mistakeArr.push(element);
      }
    });

    return mistakeArr;
  }

  clear() {
    while (this._tweetsArr.length !== 0) {
      this._tweetsArr.pop();
    }
  }

  getPage(skip = 0, top = 10, obj = null) {
    let array = this._tweetsArr.slice();

    if (typeof skip !== 'number' || typeof top !== 'number') {
      throw new Error('Type is not number!');
    } else if (typeof obj !== 'object') {
      throw new Error('Type is not object!');
    }

    if (obj) {
      array = this._filterTwits(array, obj);
    }

    return array.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
      .splice(skip, top);
  }

  get(id) {
    if (typeof id !== 'string') {
      throw new Error('Type is not string!');
    }

    return this._tweetsArr.find(element => element.id === id);
  }

  add(str) {
    const tweet = new Tweet({
      id: String(+this._tweetsArr[this._tweetsArr.length - 1].id + 1),
      text: str,
      createdAt: new Date(new Date().toISOString()),
      author: this._user,
      comments: []
    });

    if (Tweet.validateTweet(tweet)) {
      this._tweetsArr.push(tweet);
      this.save();
      return true;
    }
    return false;
  }

  edit(id, text) {
    let modifyTweet = this.get(id);

    if (typeof text !== 'string') {
      throw new Error('Type is not string!');
    }

    if (text.length > 280) return false;

    if (modifyTweet.author.toLowerCase() !== this._user.toLowerCase()) {
      return false;
    }

    if (Tweet.validateTweet(modifyTweet)) {
      modifyTweet.text = text;
      this.save();
      return true;
    }
    return false;
  }

  remove(id) {
    let isDeleted;

    if (typeof id !== 'string') {
      throw new Error('Type is not string!');
    }

    if (this.get(id).author.toLowerCase() !== this._user.toLowerCase()) {
      return false;
    }

    this._tweetsArr.forEach((element, index, array) => {
      if (element.id === id) {
        array.splice(index, 1);
        this.save();
        isDeleted = true;
      }
    });

    return isDeleted || false;
  }

  addComment(id, text) {
    let isAddComment;

    if (typeof id !== 'string' || typeof text !== 'string') {
      throw new Error('Type is not string!');
    }

    const commentIdNumber = this._tweetsArr.reduce((acc, element) => {
      const maxTweetCommentId = element.comments.reduce((accComment, elementComment) => {
        if (+elementComment.id > accComment) {
          return +elementComment.id;
        }
        return accComment;
      }, 0);
      if (maxTweetCommentId > acc) {
        return maxTweetCommentId;
      }
      return acc;
    }, 0);

    const comment = new Comment({
      id: `0${String(commentIdNumber + 1)}`,
      text: text,
      createdAt: new Date(new Date().toISOString()),
      author: this._user
    });

    if (Comment.validateComment(comment)) {
      this._tweetsArr.forEach((element) => {
        if (element.id === id) {
          element.comments.push(comment);
          this.save();
          isAddComment = true;
        }
      });
    }

    return isAddComment || false;
  }

  save() {
    localStorage.setItem('tweetArr', JSON.stringify(this.tweetsArr));
  }

  restore() {
    const newTweet = JSON.parse(localStorage.getItem('tweetArr'));
    newTweet.forEach(element => {
      element.createdAt = new Date(element.createdAt);
      element.comments.forEach(elementComment => {
        elementComment.createdAt = new Date(elementComment.createdAt);
      });
    });
    return newTweet;
  }

  restoreUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}

// DOM task

class HeaderView {
  constructor(id) {
    this.id = document.getElementById(id);
    if (!document.getElementById(id)) {
      throw new Error('Incorrect id!');
    }
  }

  display(tweetFeed) {
    if (!(tweetFeed instanceof TweetCollection)) {
      throw new Error('Data is not correct!');
    }
    this.id.textContent = tweetFeed.user;
  }
}

class TweetFeedView {
  constructor(id) {
    this.id = document.getElementById(id);
    if (!document.getElementById(id)) {
      throw new Error('Incorrect id!');
    }
  }

  display(tweetFeed, skip, top) {
    function parseDate(date) {
      const dateStore = {
        resultDate: '',
        resultTime: ''
      };
      dateStore.resultDate += date.getDate() > 9 ? `${date.getDate()}.` : `0${date.getDate()}.`;
      dateStore.resultDate += (date.getMonth() + 1) > 9 ? `${date.getMonth() + 1}.` : `0${date.getMonth() + 1}.`;
      dateStore.resultDate += String(date.getFullYear()).slice(2);
      dateStore.resultTime += date.getHours() > 9 ? `${date.getHours()}:` : `0${date.getHours()}:`;
      dateStore.resultTime += date.getMinutes() > 9 ? `${date.getMinutes()}` : `0${date.getMinutes()}`;
      return dateStore;
    }

    const container = this.id;
    container.style.minHeight = 'calc(100vh - 4.3rem - 4.3rem - 12.1rem)';
    container.style.marginTop = '0rem';
    let result = '';
    const arr = tweetFeed.getPage(skip, top);
    arr.forEach(element => {
      const text = element.text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
      const editUser = tweetFeed.user === element.author ? '<button class="edit-button">Edit</button>' : '';
      const removeUser = tweetFeed.user === element.author ? `
                                                            <button class="delete-button">
                                                              <img class="delete-img" src="img/delete.svg" alt="delete">
                                                            </button>`
        : '';
      const tweetsEditEmpty = tweetFeed.user === element.author ? '' : 'tweets-edit-empty';
      const tweetsRemoveEmpty = tweetFeed.user === element.author ? '' : 'tweets-remove-empty';
      result += `<article id="${element.id}" class="tweet-element ${tweetsRemoveEmpty}">
                      ${removeUser}
                      
                          <span class="name-avatar">${element.author}</span>
                      
                      <div class="twit-information">
                          <p class="twit-text" contenteditable="false" >${text}</p>
                          <div class="twit-dates">
                              <div class="twit-date-and-time">
                                  <img src="img/calendar.svg">
                                  <span class="date-information">${parseDate(element.createdAt).resultDate}</span>
                                  <span class="time-information">${parseDate(element.createdAt).resultTime}</span>
                              </div>
                              <div class="edit-and-comment ${tweetsEditEmpty}">
                                  ${editUser}
                                  <div class="twit-comments">
                                      <img class="comment-img" src="img/comment.svg" alt="comment">
                                      <span class="comment-count">${element.comments.length}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </article>`;
    });
    const button = '<button class="load-button">Load more</button>';
    this.id.innerHTML = result + button;
    if (!document.querySelector('aside') && tweetFeed.user !== null) {
      const template = document.getElementById('template');
      let aside = document.createElement('aside');
      aside = template.content.cloneNode(true);
      const header = document.querySelector('header');
      document.querySelector('.container-main').classList.remove('margin-main');
      document.querySelector('.container-main').classList.remove('tweet-view');
      header.after(aside);
    } else if (!document.querySelector('aside') && tweetFeed.user === null) {
      const template = document.getElementById('template');
      let aside = document.createElement('aside');
      aside = template.content.cloneNode(true);
      const header = document.querySelector('header');
      document.querySelector('.container-main').classList.remove('margin-main');
      document.querySelector('.container-main').classList.remove('tweet-view');
      header.after(aside);
      document.querySelector('.container-add-twit').remove();
      document.querySelector('aside').classList.add('without-login');
      document.querySelector('.container-menu-user').innerHTML = '<button class="login-button">Login</button>';
      document.querySelector('.container-menu-user').classList.add('header-login-button');
    }
    let filterBlock = document.querySelector('.container-filter');
    for (let input of filterBlock.querySelectorAll('input')) {
      if (input.classList.contains('save-button')) continue;
      input.value = '';
    }
    if (document.querySelector('.main-button')) {
      document.querySelector('.container-menu-user').classList.remove('twit-container-menu-user');
      document.querySelector('.main-button').remove();
    }
    if (tweetFeed.user === null) {
      if (document.querySelector('.container-add-twit')) {
        document.querySelector('.container-add-twit').remove();
      }
      document.querySelector('aside').classList.add('without-login');
      document.querySelector('.container-menu-user').innerHTML = '<button class="login-button">Login</button>';
      document.querySelector('.container-menu-user').classList.add('header-login-button');
    } else {
      document.querySelector('aside').classList.remove('without-login');
      document.querySelector('.container-menu-user').innerHTML = `
        <div class="container-menu-user">
          <span id="user" class="text-user-name">${tweetFeed.user}</span>
          <button class="exit-button">Exit</button>
        </div>
      `;
      document.querySelector('.container-menu-user').classList.remove('header-login-button');
    }
  }
}

class FilterView {
  constructor(id) {
    this.id = document.getElementById(id);
    if (!document.getElementById(id)) {
      throw new Error('Incorrect id!');
    }
  }

  display(tweetFeed, filter, skip = 0, top = 10) {
    function parseDate(date) {
      const dateStore = {
        resultDate: '',
        resultTime: ''
      };
      dateStore.resultDate += date.getDate() > 9 ? `${date.getDate()}.` : `0${date.getDate()}.`;
      dateStore.resultDate += (date.getMonth() + 1) > 9 ? `${date.getMonth() + 1}.` : `0${date.getMonth() + 1}.`;
      dateStore.resultDate += String(date.getFullYear()).slice(2);
      dateStore.resultTime += date.getHours() > 9 ? `${date.getHours()}:` : `0${date.getHours()}:`;
      dateStore.resultTime += date.getMinutes() > 9 ? `${date.getMinutes()}` : `0${date.getMinutes()}`;
      return dateStore;
    }
    const container = this.id;
    container.style.minHeight = 'calc(100vh - 4.3rem - 4.3rem - 6rem)';
    let result = '';
    const filterTweets = tweetFeed.getPage(skip, top, filter);
    const username = document.querySelector('.choose-user-name');
    const dateFrom = document.getElementById('date-from');
    const dateTo = document.getElementById('date-to');
    const contextInput = document.querySelector('.context-input');
    const tag = document.querySelector('.input-tag');
    username.value = filter.author || '';
    dateFrom.value = filter.dateFrom?.slice(0, 10);
    dateTo.value = filter.dateTo?.slice(0, 10);
    contextInput.value = filter.text || '';
    tag.value = filter.hashtags || '';
    filterTweets.forEach(element => {
      const text = element.text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
      const editUser = tweetFeed.user === element.author ? '<button class="edit-button">Edit</button>' : '';
      const removeUser = tweetFeed.user === element.author ? `
                                                            <button class="delete-button">
                                                              <img class="delete-img" src="img/delete.svg" alt="delete">
                                                            </button>`
        : '';
      const tweetsEditEmpty = tweetFeed.user === element.author ? '' : 'tweets-edit-empty';
      const tweetsRemoveEmpty = tweetFeed.user === element.author ? '' : 'tweets-remove-empty';
      result += `<article id="${element.id}" class="tweet-element ${tweetsRemoveEmpty}">
                      ${removeUser}
                          <span class="name-avatar">${element.author}</span>
                      <div class="twit-information">
                          <p class="twit-text" contenteditable="false" >${text}</p>
                          <div class="twit-dates">
                              <div class="twit-date-and-time">
                                  <img src="img/calendar.svg">
                                  <span class="date-information">${parseDate(element.createdAt).resultDate}</span>
                                  <span class="time-information">${parseDate(element.createdAt).resultTime}</span>
                              </div>
                              <div class="edit-and-comment ${tweetsEditEmpty}">
                                  ${editUser}
                                  <div class="twit-comments">
                                      <img class="comment-img" src="img/comment.svg" alt="comment">
                                      <span class="comment-count">${element.comments.length}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </article>`;
    });
    const button = '<button class="load-button">Load more</button>';
    this.id.innerHTML = result + button;
    if (!document.querySelector('aside')) {
      const template = document.getElementById('template');
      let aside = document.createElement('aside');
      aside = template.content.cloneNode(true);
      const header = document.querySelector('header');
      document.querySelector('.container-main').classList.remove('margin-main');
      document.querySelector('.container-main').classList.remove('tweet-view');
      header.after(aside);
    }
    if (document.querySelector('.main-button')) {
      document.querySelector('.container-menu-user').classList.remove('twit-container-menu-user');
      document.querySelector('.main-button').remove();
    }
  }
}

class TweetView {
  constructor(id) {
    this.id = document.getElementById(id);
    if (!document.getElementById(id)) {
      throw new Error('Incorrect id!');
    }
  }

  display(tweetFeed, id) {
    const tweet = tweetFeed.get(id);
    function parseDate(date) {
      const dateStore = {
        resultDate: '',
        resultTime: ''
      };
      dateStore.resultDate += date.getDate() > 9 ? `${date.getDate()}.` : `0${date.getDate()}.`;
      dateStore.resultDate += (date.getMonth() + 1) > 9 ? `${date.getMonth() + 1}.` : `0${date.getMonth() + 1}.`;
      dateStore.resultDate += String(date.getFullYear()).slice(2);
      dateStore.resultTime += date.getHours() > 9 ? `${date.getHours()}:` : `0${date.getHours()}:`;
      dateStore.resultTime += date.getMinutes() > 9 ? `${date.getMinutes()}` : `0${date.getMinutes()}`;
      return dateStore;
    }
    const text = tweet.text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
    let viewOfComments;
    let resultComments = '';
    const editUser = tweetFeed.user === tweet.author ? '<button class="edit-button">Edit</button>' : '';
    const removeUser = tweetFeed.user === tweet.author ? `
                                                          <button class="delete-button">
                                                            <img class="delete-img" src="img/delete.svg" alt="delete">
                                                          </button>`
      : '';
    const tweetsEditEmpty = tweetFeed.user === tweet.author ? '' : 'tweets-edit-empty';
    const tweetsRemoveEmpty = tweetFeed.user === tweet.author ? '' : 'tweets-remove-empty';
    let result = `<article id="${tweet.id}" class="tweet-element ${tweetsRemoveEmpty}">
                      ${removeUser}
                          <span class="name-avatar">${tweet.author}</span>
                      <div class="twit-information">
                          <p class="twit-text" contenteditable="false" >${text}</p>
                          <div class="twit-dates">
                              <div class="twit-date-and-time">
                                  <img src="img/calendar.svg">
                                  <span class="date-information">${parseDate(tweet.createdAt).resultDate}</span>
                                  <span class="time-information">${parseDate(tweet.createdAt).resultTime}</span>
                              </div>
                              <div class="edit-and-comment ${tweetsEditEmpty}">
                                  ${editUser}
                                  <div class="twit-comments">
                                      <img class="comment-img" src="img/comment.svg" alt="comment">
                                      <span class="comment-count">${tweet.comments.length}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </article>`;

    tweet.comments.forEach(element => {
      resultComments += `
        <div class="user-comment">
            <div class="user-comment-information">
                <div class="twit-dates comment-dates">
                    <span>${element.author}</span>
                    <div class="twit-date-and-time comment-calendar">
                        <img src="img/calendar.svg">
                        <span class="date-information date-information-comment">${parseDate(element.createdAt).resultDate}</span>
                        <span class="time-information time-information-comment">${parseDate(element.createdAt).resultTime}</span>
                    </div>
                </div>
                <textarea class="twit-text" maxlength="280" readonly>${element.text}</textarea>
            </div>
        </div>`;
    });
    resultComments += tweetFeed.user !== null ? `
    <div class="add-user-comment">
      <div class="user-comment-information">
          <div class="twit-dates comment-dates">
              <span>${tweetFeed.user}</span>
          </div>
          <textarea class="twit-text add-comment-input" maxlength="280" placeholder="Add comment..."></textarea>
          <button class="button-add-comment">Add comment</button>
      </div>
    </div>`
      : '';
    viewOfComments = `
    <article class="twit-comment-page">
      <span>Comments</span>
      <hr>
      ${resultComments}
    </article>`;
    this.id.innerHTML = result + viewOfComments;
    if (document.querySelector('aside')) {
      document.querySelector('aside').remove();
    }
    document.querySelector('.container-main').classList.add('margin-main');
    document.querySelector('.container-main').classList.add('tweet-view');
    let filterBlock = document.querySelector('.container-filter');
    if (filterBlock.classList.contains('show-block')) {
      filterBlock.classList.remove('show-block');
    }
    for (let input of filterBlock.querySelectorAll('input')) {
      input.value = '';
    }
    if (!document.querySelector('.main-button')) {
      const mainButtonTemplate = document.getElementById('button-main-template');
      const mainButton = mainButtonTemplate.content.cloneNode(true);
      if (tweetFeed.user) {
        const titleUserName = document.querySelector('.text-user-name');
        titleUserName.after(mainButton);
        document.querySelector('.container-menu-user').classList.add('twit-container-menu-user');
        document.querySelector('.container-menu-user').querySelector('.container-menu-user').style.width = '17rem';
      } else {
        const containerMenu = document.querySelector('.container-menu-user');
        containerMenu.prepend(mainButton);
        document.querySelector('.main-button').style.marginRight = '1rem';
      }
    }
    document.querySelector('.save-button').value = 'Save';
    return null;
  }
}

class LoginPageView {
  constructor(id) {
    this.id = document.getElementById(id);
    if (!document.body) {
      throw new Error('Incorrect id!');
    }
  }

  display() {
    const container = this.id;
    container.innerHTML = `
        <form name="authorization">
            <div class="authorization-block">
                <span>Authorization</span>
                <div class="container-login">
                    <span>Login</span>
                    <input class="input-login">
                </div>
                <div class="container-password">
                    <span>Password</span>
                    <input class="input-password">
                </div>
                <div class="enter-buttons">
                    <button id="register-button">Registration</button>
                    <input type="submit" value="Authorization">
                </div>
            </div>
        </form>
    `;
    container.classList.add('main-enter-block');
    container.style.minHeight = 'calc(100vh - 4.3rem - 4.3rem)';
    if (document.querySelector('aside')) {
      document.querySelector('aside').remove(); //!
    }
    document.querySelector('.container-menu-user').innerHTML = `
      <button class="main-button" style="margin-right:1.5rem">
        <span class="iconify" data-icon="mdi:home-import-outline"></span>
        <span>Main</span>
      </button>
      <button class="login-button">Login</button>
    `;
  }
}

class RegisterPageView {
  constructor(id) {
    this.id = document.getElementById(id);
    if (!document.body) {
      throw new Error('Incorrect id!');
    }
  }

  display() {
    const container = this.id;
    container.innerHTML = `
      <form name="register">
      <div class="authorization-block registration-block">
          <span>Registration</span>
          <div class="container-login">
              <span>Login</span>
              <input class="input-login">
          </div>
          <div class="container-password">
              <span>Password</span>
              <input class="input-password">
          </div>
          <div class="container-password repeat-password">
              <span>Repeat Password</span>
              <input class="input-password">
          </div>
          <div class="enter-buttons one-button">
              <input type="submit" value="Registration" class="registration-button">
          </div>
      </div>
      </form>
    `;
    container.classList.add('main-enter-block');
    container.style.minHeight = 'calc(100vh - 4.3rem - 4.3rem)';
    document.querySelector('.container-menu-user').innerHTML = `
    <button class="main-button">      
      <span class="iconify" data-icon="mdi:home-import-outline"></span>
      <span>Main</span>
    </button>
    <button class="login-button">Login</button>
    `;
    document.querySelector('.main-button').style.marginRight = '1.5rem';
  }
}

class UserList {
  arrayUser = [{ ['Musa']: '123' }];

  constructor(list) {
    if (localStorage.getItem('userArr')) {
      this.arrayUser = this.restore();
    } else {
      this.arrayUser = list;
    }
  }

  registerUser(username, password, repeatPassword) {
    let repeatUser = false;
    if (password !== repeatPassword) {
      alert('Password and repeatpassword don\'t same');
      return null;
    }
    if (/^[^a-zA-Z]/.test(username)) {
      alert('Incorrect username');
      return null;
    }
    if (username === '' || password === '' || repeatPassword === '') {
      alert('Empty field');
      return null;
    }
    this.arrayUser.forEach(element => {
      for (let key in element) {
        if (key === username && element[key] === password) {
          alert('This user is alredy register');
          repeatUser = true;
        }
      }
    });
    if (repeatUser) return null;
    const userInfo = {};
    userInfo[username] = password;
    this.arrayUser.push(userInfo);
    this.save();
    return username;
  }

  authorizeUser(username, password) {
    let isAuthorize = false;
    if (username === '' || password === '') {
      alert('Empty field');
      return null;
    }
    this.arrayUser.forEach(element => {
      for (let key in element) {
        if (key === username && element[key] === password) {
          isAuthorize = true;
          return;
        }
      }
    });
    if (isAuthorize) {
      this.saveUser(username);
      return username;
    }
    return null;
  }

  save() {
    localStorage.setItem('userArr', JSON.stringify(this.arrayUser));
  }

  restore() {
    return JSON.parse(localStorage.getItem('userArr'));
  }

  saveUser(userName) {
    localStorage.setItem('currentUser', JSON.stringify(userName));
  }
}
