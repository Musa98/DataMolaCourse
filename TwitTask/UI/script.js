/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

class TweetsController {
  constructor() {
    this.tweetCollection = new TweetCollection(tweets);
    this.userList = new UserList();
    this.header = new HeaderView('user');
    this.tweetFeed = new TweetFeedView('tweet-collection');
    this.filter = new FilterView('tweet-collection');
    this.tweet = new TweetView('tweet-collection');
    this.loginPage = new LoginPageView('tweet-collection');
    this.registerPage = new RegisterPageView('tweet-collection');
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
    this.tweet.display(this.tweetCollection, id);
  }

  addComment(id, text) {
    this.tweetCollection.addComment(id, text);
    this.tweet.display(this.tweetCollection, id);
  }
}

if (!(localStorage.getItem('tweetArr') && localStorage.getItem('userArr'))) {
  localStorage.setItem('currentUser', JSON.stringify(new TweetCollection(tweets).user));
  localStorage.setItem('tweetArr', JSON.stringify(new TweetCollection(tweets).tweetsArr));
  localStorage.setItem('userArr', JSON.stringify(new UserList(listUser).arrayUser));
}

const tweetController = new TweetsController();

if (localStorage.getItem('currentUser')) {
  tweetController.tweetCollection.user = tweetController.tweetCollection.restoreUser();
  tweetController.setCurrentUser(tweetController.tweetCollection.user);
} else {
  tweetController.tweetCollection.user = null;
}

function loadTweetApp(event) {
  const tagArray = [];
  const loadTweets = (e) => {
    if (e.target.classList.contains('load-button')) {
      loadTweets.counter++;
      tweetController.getFeed(0, loadTweets.counter * 10);
      if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) { //!
        document.querySelector('.load-button').classList.add('active-load-button');
      }
    }
  };
  const addHandler = (e) => {
    if (e.target.classList.contains('add-twit-button')) {
      loadTweets.counter = 1;
      const tweetText = document.querySelector('.textarea-add-twit').value;
      if (!tweetText) {
        return;
      }
      tweetController.addTweet(tweetText);
      document.querySelector('.textarea-add-twit').value = '';
      if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) {
        document.querySelector('.load-button').classList.add('active-load-button');
      }
    }
  };
  const deleteHandler = (e) => {
    if (e.target.classList.contains('delete-img')) {
      tweetController.removeTweet(e.target.parentElement.parentElement.id);
      if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) { //!
        document.querySelector('.load-button').classList.add('active-load-button');
      }
    }
  };
  const editHandler = (e) => {
    if (e.target.classList.contains('edit-button') && e.target.textContent === 'Edit') {
      const p = e.target.parentElement.parentElement.previousElementSibling;
      const author = e.target
        .parentElement.parentElement.parentElement
        .previousElementSibling;
      if (tweetController.tweetCollection.user !== author.textContent) return;
      e.target.textContent = 'Save';
      p.setAttribute('contenteditable', 'true');
      p.focus();
      if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) { //!
        document.querySelector('.load-button').classList.add('active-load-button');
      }
    } else if (e.target.classList.contains('edit-button') && e.target.textContent === 'Save') {
      const article = e.target.parentElement.parentElement.parentElement.parentElement;
      const p = e.target.parentElement.parentElement.previousElementSibling;
      tweetController.editTweet(article.id, p.textContent);
      p.setAttribute('contenteditable', 'false');
      e.target.textContent = 'Edit';
      if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) { //!
        document.querySelector('.load-button').classList.add('active-load-button');
      }
    }
  };
  const submitFilter = (e) => {
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
    if (tagArray.length) {
      filterObj.hashtags = tagArray.join(' ');
    }
    if (filterBlock[3].value) {
      filterObj.text = filterBlock[3].value;
    }
    tweetController.getFeed(0, 10, filterObj);
    filterBlock[4].value = '';
  };
  const showTweetPage = (e) => {
    if (e.target.tagName === 'ARTICLE') {
      tweetController.showTweet(e.target.id);
    }
  };
  const addCommentTweet = (e) => {
    if (e.target.classList.contains('button-add-comment')) {
      const article = e.target.parentElement.parentElement.parentElement.previousElementSibling;
      tweetController.addComment(article.id, e.target.previousElementSibling.value);
    }
  };

  const returnMainTweet = (e) => {
    if (e.target.classList.contains('main-button') || e.target.parentElement.classList.contains('main-button')) {
      tweetController.getFeed();
      if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) { //!
        document.querySelector('.load-button').classList.add('active-load-button');
      }
    }
  };
  const loginPage = (e) => {
    if (e.target.classList.contains('login-button')) {
      if (tweetController.loginPage.id.lastElementChild.classList.contains('twit-comment-page')) {
        tweetController.loginPage.id.style.marginTop = '0rem';
      } else {
        tweetController.loginPage.id.style.marginTop = '4.3rem';
      }
      tweetController.loginPage.display();
    }
  };
  const registerPage = (e) => {
    if (e.target === document.getElementById('register-button')) {
      tweetController.registerPage.display();
    }
  };
  const registerNewUser = (e) => {
    let newUser;
    e.preventDefault();
    if (e.target === document.querySelector('.registration-button')) {
      newUser = tweetController.userList
        .registerUser(register[0].value, register[1].value, register[2].value);
      if (newUser) {
        tweetController.loginPage.display();
      }
    }
  };
  const authorizeCurrentUser = (e) => {
    let user;
    e.preventDefault();
    if (e.target === document.querySelector('.enter-buttons')?.lastElementChild) {
      user = tweetController.userList
        .authorizeUser(authorization[0].value, authorization[1].value);
      if (user) {
        tweetController.setCurrentUser(user);
        tweetController.getFeed();
      } else {
        alert('Not found User');
        authorization[0].value = '';
        authorization[1].value = '';
      }
    }
  };
  const exitProfile = (e) => {
    e.preventDefault();
    if (e.target === document.querySelector('.exit-button')) {
      tweetController.tweetCollection.user = null;
      tweetController.userList.saveUser(null);
      tweetController.getFeed();
      document.querySelector('.container-menu-user').classList.remove('twit-container-menu-user');
    }
  };
  const checkLengthText = (e) => {
    if (e.target === document.querySelector('.twit-text')) {
      if (e.target.textContent.length > 280) {
        e.target.textContent = e.target.textContent.substring(0, 280);
        e.preventDefault();
      }
    }
  };
  const addHashTag = (e) => {
    let isRepeat = false;
    e.preventDefault();
    const inputTag = document.querySelector('.input-tag');
    if (inputTag.value[0] !== '#') {
      return null;
    }
    tagArray.forEach(element => {
      if (element === inputTag.value) {
        isRepeat = true;
      }
    });
    if (!isRepeat) {
      tagArray.push(inputTag.value);
      const div = document.createElement('div');
      div.innerHTML = `
    <span>${inputTag.value.substring(1)}</span>
    <button class="delete-small-button">
        <img class="delete-img" src="img/delete.svg" alt="delete">
    </button>
    `;
      document.querySelector('.tags-list').append(div);
    }
    return null;
  };

  const deleteHashTag = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('delete-img')) {
      const index = tagArray.indexOf(e.target.parentElement.previousElementSibling.textContent);
      tagArray.splice(index, 1);
      e.target.parentElement.parentElement.remove();
    }
  };
  document.body.addEventListener('click', addHandler);
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
  // show tweet
  mainTweet.addEventListener('click', showTweetPage);
  // add comment
  mainTweet.addEventListener('click', addCommentTweet);
  // main button
  const header = document.querySelector('header');
  header.addEventListener('click', returnMainTweet);
  // login button
  header.addEventListener('click', loginPage);
  // register button
  mainTweet.addEventListener('click', registerPage);
  mainTweet.addEventListener('click', registerNewUser);
  // authorization
  mainTweet.addEventListener('click', authorizeCurrentUser);
  // exit
  header.addEventListener('click', exitProfile);
  // keypress
  mainTweet.addEventListener('input', checkLengthText);
  // mainTweet.addEventListener('paste', pasteText);
  // add tag
  const buttonAddTag = document.querySelector('.button-add-tag');
  buttonAddTag.addEventListener('click', addHashTag);
  const filter = document.querySelector('.container-filter');
  filter.addEventListener('click', deleteHashTag);
  tweetController.getFeed();
  if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) {
    document.querySelector('.load-button').classList.add('active-load-button');
  }
  if (tweetController.tweetCollection.user === null) {
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
        <span id="user" class="text-user-name">Musa</span>
        <button class="exit-button">Exit</button>
      </div>
    `;
    document.querySelector('.container-menu-user').classList.remove('header-login-button');
  }
}

window.addEventListener('load', loadTweetApp);

function showTweet(id) {
  const tweet = new TweetView('tweet-collection');
  tweet.display(tweetCollection, id);
}
