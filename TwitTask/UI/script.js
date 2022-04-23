/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

class TweetsController {
  constructor() {
    this.userList = new UserList();
    this.header = new HeaderView('user');
    this.tweetFeed = new TweetFeedView('tweet-collection');
    this.filter = new FilterView('tweet-collection');
    this.tweet = new TweetView('tweet-collection');
    this.loginPage = new LoginPageView('tweet-collection');
    this.registerPage = new RegisterPageView('tweet-collection');
    this.errorPage = new Error('tweet-collection');
  }

  setCurrentUser(userName) {
    this.tweetCollection.user = userName;
    this.header.display(this.tweetCollection);
  }

  addTweet(text) {
    return tweetApi.postTweet(text);
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
      this.tweetFeed.display(result, skip, top);
    } else {
      this.filter.display(result, obj, skip, top);
    }
  }

  showTweet(result, id) {
    this.tweet.display(result, id);
  }

  addComment(result, id) {
    this.tweet.display(result, id);
  }
}

class TweetFeedApiService {
  constructor(id) {
    this.id = id;
  }

  getToken() {
    return localStorage.getItem('token');
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
      const response = await fetch(`${this.id}tweet?${author}${text}${dateFrom}${dateTo}from=${from}&count=${count}${hashtags}`);
      const result = await response.json();
      if (response.status > 200) {
        if (document.querySelector('aside')) {
          document.querySelector('aside').remove();
        }
        if (localStorage.getItem('user')) {
          const container = document.querySelector('.container-menu-user');
          container.innerHTML = `<span id="user" class="text-user-name">${localStorage.getItem('user')}</span>
                                <button class="exit-button">Exit</button>`;
        } else {
          const container = document.querySelector('.container-menu-user');
          container.innerHTML = '<button class="login-button">Login</button>';
        }
        tweetController.errorPage.display(result.statusCode, result.error);
      }
      const tweetCollection = new TweetCollection(result);
      return tweetCollection;
    } catch (err) {
      if (localStorage.getItem('user')) {
        document.querySelector('.main-button').remove();
        document.querySelector('.container-menu-user').style.width = '11.1rem';
        document.querySelector('main').style.marginTop = '0rem';
        console.log(err);
      } else {
        document.querySelector('.main-button').remove();
        document.querySelector('.container-menu-user').style.width = 'auto';
        document.querySelector('main').style.marginTop = '0rem';
        console.log(err);
      }
    }
  }

  async postLogin(data) {
    const response = await fetch(`${this.id}login`, {
      method: 'POST',
      headers: {
        ['Content-Type']: 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (result.statusCode > 200 && result.statusCode !== 403 && result.statusCode !== 400) {
      tweetController.errorPage.display(result.statusCode, result.error);
      document.querySelector('main').style.marginTop = '0rem';
    }
    return result;
  }

  async postRegistration(data) {
    const response = await fetch(`${this.id}registration`, {
      method: 'POST',
      headers: {
        ['Content-Type']: 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (result.statusCode > 200 && result.statusCode !== 409 && result.statusCode !== 400 && result.statusCode !== 401) {
      tweetController.errorPage.display(result.statusCode, result.error);
      document.querySelector('main').style.marginTop = '0rem';
    }
    return result;
  }

  async postTweet(textTweet) {
    const response = await fetch(`${this.id}tweet`, {
      method: 'POST',
      headers: {
        ['Content-Type']: 'application/json',
        authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({ text: textTweet })
    });
    const result = await response.json();
    if (result.statusCode > 200) {
      tweetController.errorPage.display(result.statusCode, result.error);
    }
    return result;
  }

  async putTweet(id, editTextTweet) {
    const response = await fetch(`${this.id}tweet/${id}`, {
      method: 'PUT',
      headers: {
        ['Content-Type']: 'application/json',
        authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({ text: editTextTweet })
    });
    const result = await response.json();
    if (result.statusCode > 200) {
      if (document.querySelector('aside')) {
        document.querySelector('aside').remove();
      }
      let isTweet = false;
      if (document.querySelector('.twit-comment-page')) {
        isTweet = true;
      }
      tweetController.errorPage.display(result.statusCode, result.error);
      if (isTweet) {
        document.querySelector('.container-main-enter').style.marginTop = '0rem';
      }
    }
    return result;
  }

  async deleteTweet(id) {
    const response = await fetch(`${this.id}tweet/${id}`, {
      method: 'DELETE',
      headers: {
        ['Content-Type']: 'application/json',
        authorization: `Bearer ${this.getToken()}`
      }
    });
    const result = await response.json();
    if (result.statusCode > 200) {
      if (document.querySelector('aside')) {
        document.querySelector('aside').remove();
      }
      let isTweet = false;
      if (document.querySelector('.twit-comment-page')) {
        isTweet = true;
      }
      tweetController.errorPage.display(result.statusCode, result.error);
      if (isTweet) {
        document.querySelector('.container-main-enter').style.marginTop = '0rem';
      }
    }
  }

  async postComment(id, textComment) {
    const response = await fetch(`${this.id}tweet/${id}/comment`, {
      method: 'POST',
      headers: {
        ['Content-Type']: 'application/json',
        authorization: `Bearer ${this.getToken()}`
      },
      body: JSON.stringify({ text: textComment })
    });
    const result = await response.json();
    if (result.statusCode > 200) {
      tweetController.errorPage.display(result.statusCode, result.error);
      document.querySelector('.container-main-enter').style.marginTop = '0rem';
    }
    return result;
  }
}

const tweetApi = new TweetFeedApiService('https://jslabapi.datamola.com/');
const tweetController = new TweetsController();
function loadTweetApp(event) {
  const tagArray = [];
  const loadTweets = (e) => {
    if (e.target.classList.contains('load-button')) {
      loadTweets.counter++;
      if (document.filter[0].value || document.filter[1].value || document.filter[2].value || document.filter[3].value || document.filter[4].value) {
        tweetApi.getData(0, loadTweets.counter * 10, document.filter[0].value).then(
          result => {
            if (localStorage.getItem('user')) {
              result.user = localStorage.getItem('user');
            }
            submitFilter();
            if (loadTweets.counter * 10 <= result.tweetsArr.length) {
              document.querySelector('.load-button').classList.add('active-load-button');
            }
          }
        );//
      } else {
        tweetApi.getData(0, loadTweets.counter * 10).then(
          result => {
            if (localStorage.getItem('user')) {
              result.user = localStorage.getItem('user');
            }
            tweetController.getFeed(result, 0, loadTweets.counter * 10);
            if (loadTweets.counter * 10 <= result.tweetsArr.length) {
              document.querySelector('.load-button').classList.add('active-load-button');
            }
          }
        );
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
      tweetController.addTweet(tweetText).then(resultAdd =>{
        if (resultAdd.statusCode) {
          document.querySelector('aside').remove();
          return;
        }
        tweetApi.getData(0, loadTweets.counter * 10).then(
          result => {
            result.user = localStorage.getItem('user');
            tweetController.tweetFeed.display(result);
            if (loadTweets.counter * 10 <= result.tweetsArr.length) {
              document.querySelector('.load-button').classList.add('active-load-button');
            }
            document.querySelector('.textarea-add-twit').value = '';
          }
        );
      });
    }
  };
  const deleteHandler = (e) => {
    if (e.target.classList.contains('delete-img')) {
      tweetApi.deleteTweet(e.target.parentElement.parentElement.id).then(resultDeleteTweet => {
        if (resultDeleteTweet.statusCode) {
          return;
        }
        if (document.filter[0].value || document.filter[1].value || document.filter[2].value || document.filter[3].value || document.filter[4].value) {
          tweetApi.getData(0, loadTweets.counter * 10, document.filter[0].value).then(
            result => {
              if (localStorage.getItem('user')) {
                result.user = localStorage.getItem('user');
              }
              submitFilter();
              if (loadTweets.counter * 10 <= result.tweetsArr.length) {
                document.querySelector('.load-button').classList.add('active-load-button');
              }
            }
          );
        } else {
          tweetApi.getData(0, loadTweets.counter * 10).then(
            result => {
              if (localStorage.getItem('user')) {
                result.user = localStorage.getItem('user');
              }
              tweetController.getFeed(result, 0, loadTweets.counter * 10);
              if (loadTweets.counter * 10 <= result.tweetsArr.length) {
                document.querySelector('.load-button').classList.add('active-load-button');
              }
            }
          );
        }
      });
    }
  };
  const editHandler = (e) => {
    if (e.target.classList.contains('edit-button') && e.target.textContent === 'Edit') {
      const p = e.target.parentElement.parentElement.previousElementSibling;
      const author = e.target
        .parentElement.parentElement.parentElement
        .previousElementSibling;
      if (localStorage.getItem('user') !== author.textContent) return;
      e.target.textContent = 'Save';
      p.setAttribute('contenteditable', 'true');
      p.focus();
    } else if (e.target.classList.contains('edit-button') && e.target.textContent === 'Save') {
      const article = e.target.parentElement.parentElement.parentElement.parentElement;
      const p = e.target.parentElement.parentElement.previousElementSibling;
      tweetApi.putTweet(article.id, p.textContent).then(resultEditTweet => {
        p.setAttribute('contenteditable', 'false');
        e.target.textContent = 'Edit';
      });
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
        if (localStorage.getItem('user')) {
          result.user = localStorage.getItem('user');
        }
        tweetController.getFeed(result, 0, 10, filterObj);
        if (loadTweets.counter * 10 <= result.tweetsArr.length) {
          document.querySelector('.load-button').classList.add('active-load-button');
        }
      }
    );
    filterBlock[4].value = '';
  };
  const showTweetPage = (e) => {
    if (e.target.tagName === 'ARTICLE') {
      if (document.filter[0].value || document.filter[1].value || document.filter[2].value || document.filter[3].value || document.filter[4].value) {
        tweetApi.getData(0, loadTweets.counter * 10, document.filter[0].value).then(
          result => {
            if (localStorage.getItem('user')) {
              result.user = localStorage.getItem('user');
            }
            tweetController.showTweet(result, e.target.id);
          }
        );
      } else {
        tweetApi.getData(0, loadTweets.counter * 10).then(
          result => {
            if (localStorage.getItem('user')) {
              result.user = localStorage.getItem('user');
            }
            tweetController.showTweet(result, e.target.id);
          }
        );
      }
    }
  };
  const addCommentTweet = (e) => {
    if (e.target.classList.contains('button-add-comment')) {
      const article = e.target.parentElement.parentElement.parentElement.previousElementSibling;
      tweetApi.postComment(article.id, e.target.previousElementSibling.value).then(resultComment => {
        if (resultComment.statusCode) {
          return;
        }
        tweetApi.getData(0, loadTweets.counter * 10).then(
          result => {
            if (localStorage.getItem('user')) {
              result.user = localStorage.getItem('user');
            }
            tweetController.addComment(result, article.id);
          }
        );
      });
    }
  };

  const returnMainTweet = (e) => {
    if (e.target.classList.contains('main-button') || e.target.parentElement.classList.contains('main-button')) {
      tweetApi.getData(0, loadTweets.counter * 10).then(
        result => {
          if (localStorage.getItem('user')) {
            result.user = localStorage.getItem('user');
          }
          tweetController.getFeed(result);
          if (loadTweets.counter * 10 <= result.tweetsArr.length) {
            document.querySelector('.load-button').classList.add('active-load-button');
          }
        }
      );
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
          if (result.statusCode === 400) {
            alert('Empty some fields');
          } else if (result.statusCode === 409) {
            alert('Login is alredy exists');
          } else if (result.statusCode === 401) {
            tweetController.loginPage.display();
          } else if (!result.statusCode) {
            tweetController.loginPage.display();
          }
        }
      );
    }
    return null;
  };
  const authorizeCurrentUser = (e) => {
    e.preventDefault();
    if (e.target === document.querySelector('.authorize')) {
      tweetApi.postLogin({
        ['login']: authorization[0].value,
        ['password']: authorization[1].value
      }).then(result =>{
        if (result.token) {
          tweetApi.token = result.token;
          localStorage.setItem('user', authorization[0].value);
          localStorage.setItem('token', result.token);
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
        if (result.statusCode === 400) {
          alert('Empty login or password');
        }
      });
    }
  };
  const exitProfile = (e) => {
    e.preventDefault();
    if (e.target === document.querySelector('.exit-button')) {
      localStorage.removeItem('user');
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
    if (e.target.classList.contains('delete-img')) {
      const index = tagArray.indexOf(e.target.parentElement.previousElementSibling.textContent);
      tagArray.splice(index, 1);
      e.target.parentElement.parentElement.remove();
    }
  };
  document.body.addEventListener('click', addHandler);
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
  // add tag
  const buttonAddTag = document.querySelector('.button-add-tag');
  buttonAddTag.addEventListener('click', addHashTag);
  const filter = document.querySelector('.container-filter');
  filter.addEventListener('click', deleteHashTag);
  if (localStorage.getItem('user')) {
    tweetApi.getData(0, loadTweets.counter * 10).then(
      resultGetFeed => {
        if (!resultGetFeed) {
          return;
        }
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
    );
  }
}

window.addEventListener('load', loadTweetApp);

function showTweet(id) {
  const tweet = new TweetView('tweet-collection');
  tweet.display(tweetCollection, id);
}
