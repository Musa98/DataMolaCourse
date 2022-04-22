/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

class TweetsController {
  constructor() {
    // this.tweetCollection = new TweetCollection(tweets);
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

  getFeed(result, skip = 0, top = 10, obj = null) {
    if (obj === null) {
      // this.tweetFeed.display(this.tweetCollection, skip, top);
      this.tweetFeed.display(result, skip, top);
    } else {
      this.filter.display(result, obj, skip, top);
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

class TweetFeedApiService {
  constructor(ip) {
    this.ip = ip;
  }

  async getData(from = 0, count = 10, author = '', dateFrom = '', dateTo = '', text = '', hashtags = '') {
    try {
      if (author) {
        author = `author=${author}&`;
      }

      if (text) {
        text = `text=${text}&`;
      }

      if (dateFrom) {
        dateFrom = `dateFrom=${dateFrom}T00%3A00%3A00.001Z&`;
      }

      if (dateTo) {
        dateTo = `dateTo=${dateTo}T00%3A00%3A00.001Z&`;
      }

      if (hashtags) {
        let resultTags = '';
        hashtags.split(' ').forEach((element, index, arr) => {
          if (index === arr.length - 1) {
            resultTags += `${element.substring(1)}`;
          } else {
            resultTags += `${element.substring(1)}%2C`;
          }
        });
        hashtags = `&hashtags=${resultTags}`;
      }
      // authorFil = `author=${authorFil}` || '';
      const response = await fetch(`https://jslabapi.datamola.com/tweet?${author}${text}${dateFrom}${dateTo}from=${from}&count=${count}${hashtags}`);
      const result = await response.json();
      console.log(result);
      console.log(response.status);
      const tweetCollection = new TweetCollection(result);
      // tweetController.tweetCollection.tweetsArr = result;
      // tweetController.getFeed();
      return tweetCollection;
    } catch (err) {
      console.log(err);
    }
  }

  async postLogin(data) {
    const response = await fetch('https://jslabapi.datamola.com/login', {
      method: 'POST',
      headers: {
        ['Content-Type']: 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async postRegistration(data) {
    const response = await fetch('https://jslabapi.datamola.com/registration', {
      method: 'POST',
      headers: {
        ['Content-Type']: 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async postTweet(test) {
    const response = await fetch('https://jslabapi.datamola.com/tweet', {
      method: 'POST',
      headers: {
        ['Content-Type']: 'application/json',
        authorization: `Bearer ${test.token}`
      },
      body: JSON.stringify(test)
    });
    return response.json();
  }
}

// if (!(localStorage.getItem('tweetArr') && localStorage.getItem('userArr'))) {
//   localStorage.setItem('currentUser', JSON.stringify(new TweetCollection(tweets).user));
//   localStorage.setItem('tweetArr', JSON.stringify(new TweetCollection(tweets).tweetsArr));
//   localStorage.setItem('userArr', JSON.stringify(new UserList(listUser).arrayUser));
// }

const tweetApi = new TweetFeedApiService();
const tweetController = new TweetsController();

// if (localStorage.getItem('user')) {
//   tweetController.tweetCollection.user = tweetController.tweetCollection.restoreUser();
//   tweetController.setCurrentUser(tweetController.tweetCollection.user);
// } else {
//   tweetController.tweetCollection.user = null;
// }

function loadTweetApp(event) {
  const tagArray = [];
  const loadTweets = (e) => {
    if (e.target.classList.contains('load-button')) {
      loadTweets.counter++;
      if (document['filter'][0] || document['filter'][1] || document['filter'][2] || document['filter'][3] || document['filter'][4]) {
        tweetApi.getData(0, loadTweets.counter * 10, document['filter'][0].value).then(
          result => {
            submitFilter();
            if (loadTweets.counter * 10 <= result.tweetsArr.length) {
              document.querySelector('.load-button').classList.add('active-load-button');
            }
          }
        );//
      } else {
        tweetApi.getData(0, loadTweets.counter * 10).then(
          result => {
            tweetController.getFeed(result, 0, loadTweets.counter * 10);
            if (loadTweets.counter * 10 <= result.tweetsArr.length) {
              document.querySelector('.load-button').classList.add('active-load-button');
            }
          }
        );//!
      }
      // tweetController.getFeed(0, loadTweets.counter * 10);
      // if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) { //!
      //   document.querySelector('.load-button').classList.add('active-load-button');
      // }
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
    e?.preventDefault();
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
    if (e) {
      loadTweets.counter = 1;
    }
    tweetApi.getData(0, loadTweets.counter * 10, filterBlock[0].value, filterBlock[1].value, filterBlock[2].value, filterBlock[3].value, filterObj.hashtags).then(
      result => {
        tweetController.getFeed(result, 0, 10, filterObj);
        if (loadTweets.counter * 10 <= result.tweetsArr.length) {
          document.querySelector('.load-button').classList.add('active-load-button');
        }
      }
    );//!
    // tweetController.getFeed(0, 10, filterObj);
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
      tweetApi.getData(0, loadTweets.counter * 10).then(
        result => {
          tweetController.getFeed(result);
          if (loadTweets.counter * 10 <= result.tweetsArr.length) {
            document.querySelector('.load-button').classList.add('active-load-button');
          }
        }
      );//!
      // tweetController.getFeed();
      // if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) { //!
      //   document.querySelector('.load-button').classList.add('active-load-button');
      // }
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
    // let newUser;
    e.preventDefault();
    if (e.target === document.querySelector('.registration-button')) {
      if (register[1].value !== register[2].value) {
        alert('Password and repeatpassword don\'t same');
        return null;
      }
      tweetApi.postRegistration({
        ['login']: register[0].value,
        ['password']: register[1].value
      }).then(
        result => {
          if (result.statusCode === 409) {
            alert('Login is alredy exists');
          } else {
            tweetController.loginPage.display();
          }
        }
      );
      // newUser = tweetController.userList
      //   .registerUser(register[0].value, register[1].value, register[2].value);
      // if (newUser) {
      // }
    }
    return null;
  };
  const authorizeCurrentUser = (e) => {
    // let user;
    e.preventDefault();
    if (e.target === document.querySelector('.authorize')) {
      // user = tweetController.userList
      //   .authorizeUser(authorization[0].value, authorization[1].value);
      tweetApi.postLogin({
        ['login']: authorization[0].value,
        ['password']: authorization[1].value
      }).then(result =>{
        if (result.token) {
          localStorage.setItem('user', authorization[0].value);
          tweetApi.getData(0, loadTweets.counter * 10).then(
            resultGetFeed => {
              resultGetFeed.user = localStorage.getItem('user');
              tweetController.getFeed(resultGetFeed);
              if (loadTweets.counter * 10 <= resultGetFeed.tweetsArr.length) {
                document.querySelector('.load-button').classList.add('active-load-button');
              }
            }
          );
        }
        if (result.statusCode === 403) {
          alert('Incorrect login or password');
        }
        // console.log(result);
      });
      // if (user) {
      //   tweetController.setCurrentUser(user);
      //   tweetController.getFeed();
      // } else {
      //   alert('Not found User');
      //   authorization[0].value = '';
      //   authorization[1].value = '';
      // }
    }
  };
  const exitProfile = (e) => {
    e.preventDefault();
    if (e.target === document.querySelector('.exit-button')) {
      localStorage.removeItem('user');
      tweetApi.getData(0, loadTweets.counter * 10).then(
        resultGetFeed => {
          resultGetFeed.user = null;
          tweetController.getFeed(resultGetFeed);
          document.querySelector('.container-menu-user').classList.remove('twit-container-menu-user');
          if (loadTweets.counter * 10 <= resultGetFeed.tweetsArr.length) {
            document.querySelector('.load-button').classList.add('active-load-button');
          }
        }
      );
      // tweetController.tweetCollection.user = null;
      // tweetController.userList.saveUser(null);
      // tweetController.getFeed();
      // document.querySelector('.container-menu-user').classList.remove('twit-container-menu-user');
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
  // mainTweet.addEventListener('click', loadTweets);
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
  if (localStorage.getItem('user')) {
    tweetApi.getData(0, loadTweets.counter * 10).then(
      resultGetFeed => {
        resultGetFeed.user = localStorage.getItem('user');
        tweetController.getFeed(resultGetFeed);
        if (loadTweets.counter * 10 <= resultGetFeed.tweetsArr.length) {
          document.querySelector('.load-button').classList.add('active-load-button');
        }
      }
    );
  } else {
    tweetApi.getData(0, loadTweets.counter * 10).then(
      result => {
        tweetController.getFeed(result);
        if (loadTweets.counter * 10 <= result.tweetsArr.length) {
          document.querySelector('.load-button').classList.add('active-load-button');
        }
      }
    );//!
  }
  // tweetController.getFeed();
  // if (loadTweets.counter * 10 < tweetController.tweetCollection.tweetsArr.length) {
  //   document.querySelector('.load-button').classList.add('active-load-button');
  // }
  // if (tweetController.tweetCollection.user === null) {
  //   if (document.querySelector('.container-add-twit')) {
  //     document.querySelector('.container-add-twit').remove();
  //   }
  //   document.querySelector('aside').classList.add('without-login');
  //   document.querySelector('.container-menu-user').innerHTML = '<button class="login-button">Login</button>';
  //   document.querySelector('.container-menu-user').classList.add('header-login-button');
  // } else {
  //   document.querySelector('aside').classList.remove('without-login');
  //   document.querySelector('.container-menu-user').innerHTML = `
  //     <div class="container-menu-user">
  //       <span id="user" class="text-user-name">Musa</span>
  //       <button class="exit-button">Exit</button>
  //     </div>
  //   `;
  //   document.querySelector('.container-menu-user').classList.remove('header-login-button');
  // }
}

window.addEventListener('load', loadTweetApp);

function showTweet(id) {
  const tweet = new TweetView('tweet-collection');
  tweet.display(tweetCollection, id);
}
