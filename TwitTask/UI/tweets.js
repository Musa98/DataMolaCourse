/* eslint-disable linebreak-style */
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

class Tweet {
  constructor({
    id,
    text,
    createdAt,
    author,
    comments
  }) {
    this._id = id;
    this.text = text;
    this._createdAt = createdAt;
    this._author = author;
    this.comments = comments;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    throw new Error('You can\'t change this property');
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    throw new Error('You can\'t change this property');
  }

  get author() {
    return this._author;
  }

  set author(value) {
    throw new Error('You can\'t change this property');
  }

  static validateTweet(tweet) {
    if (typeof tweet !== 'object') {
      throw new Error('Type is not object!');
    }

    if (Object.keys(tweet).length !== 5) return false;

    for (let key in tweet) {
      switch (key) {
        case '_id':
          if (typeof tweet[key] !== 'string') return false;
          break;
        case 'text':
          if (tweet[key].length > 280) return false;
          if (typeof tweet[key] !== 'string') return false;
          break;
        case '_createdAt':
          if (!(tweet[key] instanceof Date && !Number.isNaN(tweet[key].valueOf()))) return false;
          break;
        case '_author':
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
    this._id = id;
    this.text = text;
    this._createdAt = createdAt;
    this._author = author;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    throw new Error('You can\'t change this property');
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    throw new Error('You can\'t change this property');
  }

  get author() {
    return this._author;
  }

  set author(value) {
    throw new Error('You can\'t change this property');
  }

  static validateComment(com) {
    if (typeof com !== 'object') {
      throw new Error('Type is not object!');
    }

    if (Object.keys(com).length !== 4) return false;

    for (let key in com) {
      switch (key) {
        case '_id':
          if (typeof com[key] !== 'string') return false;
          break;
        case 'text':
          if (com[key].length > 280) return false;
          if (typeof com[key] !== 'string') return false;
          break;
        case '_createdAt':
          if (!(com[key] instanceof Date && !Number.isNaN(com[key].valueOf()))) return false;
          break;
        case '_author':
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
  _user = 'Musa';

  constructor(arr) {
    if (!(arr instanceof Array)) {
      throw new Error('Argument is not array!');
    }
    this._tweetsArr = arr.map(element => new Tweet(element));
    this._tweetsArr.forEach(element => {
      let tweet = element;
      tweet.comments = element.comments.map(elementComment => new Comment(elementComment));
    });
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
            if (element[key] !== obj[key]) return false;
            break;
          case 'dateFrom':
            if (element.createdAt < Date.parse(obj[key])) return false;
            break;
          case 'dateTo':
            if (element.createdAt > Date.parse(obj[key])) return false;
            break;
          case 'hashtags':
            for (let i = 0; i < obj[key].length; i++) {
              let trimHashtag = obj[key][i].replace(/\s+/g, ' ').trim();
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

    return array.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
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

    if (modifyTweet.author !== this._user) {
      return false;
    }

    if (Tweet.validateTweet(modifyTweet)) {
      modifyTweet.text = text;
      return true;
    }
    return false;
  }

  remove(id) {
    let isDeleted;

    if (typeof id !== 'string') {
      throw new Error('Type is not string!');
    }

    this._tweetsArr.forEach((element, index, array) => {
      if (element.id === id) {
        array.splice(index, 1);
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
          isAddComment = true;
        }
      });
    }

    return isAddComment || false;
  }
}

const obj = new TweetCollection(tweets);
obj.getTweet('1');
