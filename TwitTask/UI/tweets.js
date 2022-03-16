//ARRAY OF TWEETS
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
    },
]

//MODULE
const module = (function () {
    let _user = 'Musa';

    const _filterTwits = (array, obj) => {

        return array.filter(element => {
            for (key in obj) {
                switch (key) {
                    case 'author':
                        if (element[key] !== obj[key]) return false;
                        break;
                    case 'dateFrom':
                        if (element['createdAt'] < Date.parse(obj[key])) return false;
                        break;
                    case 'dateTo':
                        if (element['createdAt'] > Date.parse(obj[key])) return false;
                        break;
                    case 'hashtags':
                        for (let i = 0; i < obj[key].length; i++) {
                            obj[key][i] = obj[key][i].replace(/\s+/g, ' ').trim();
                            if (obj[key][i].substring(0, 1) !== '#') return false;
                            if (!element['text'].toLowerCase().includes(obj[key][i].toLowerCase())) return false;
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
        })
    }

    const getTweets = function (skip = 0, top = 10, obj = null) { 
        let array = tweets.slice();

        if (typeof skip !== 'number' || typeof top !== 'number') {
            throw new Error('Type is not number!');
        } else if (typeof obj !== 'object') {
            throw new Error('Type is not object!');
        }

        if (obj) {
            array = _filterTwits(array, obj);
        }

        return array.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)).splice(skip, top);
    }

    const getTweet = function (id) {

        if (typeof id !== 'string') {
            throw new Error('Type is not string!')
        }

        return tweets.find(element => element.id === id);
    }

    const validateTweet = function (tweet) {

        if (typeof tweet !== 'object') {
            throw new Error('Type is not object!')
        }

        if (Object.keys(tweet).length !== 5) return false;

        for (key in tweet){
            switch (key) {
                case 'id':
                    if (typeof tweet[key] !== 'string') return false;
                    break;
                case 'text':
                    if (tweet[key].length > 280) return false;
                    if (typeof tweet[key] !== 'string') return false;
                    break;
                case 'createdAt':
                    if (!(tweet[key] instanceof Date && !isNaN(tweet[key].valueOf()))) return false;
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

    const addTweet = function(str){
        let newTwit = {};

        newTwit.id = String(+tweets[tweets.length - 1].id + 1);
        newTwit.text = str;
        newTwit.createdAt = new Date( new Date().toISOString() );
        newTwit.author = _user;
        newTwit.comments = [];

        if(validateTweet(newTwit)){
            tweets.push(newTwit);
            return true;
        } else {
            return false;
        }
    }

    const editTweet = function(id, text){
        let modifyTweet = getTweet(id);

        if(typeof text !== 'string'){
            throw new Error('Type is not string!');
        }

        if(text.length > 280) return false;

        if(validateTweet(modifyTweet)){
            modifyTweet.text = text;
            return true;
        } else{
            return false;
        }
    }

    const removeTweet = function(id){
        let isDeleted;

        if(typeof id !== 'string'){
            throw new Error('Type is not string!');
        }

        tweets.forEach((element, index, array) => {
            if(element.id === id){
                array.splice(index, 1);
                isDeleted = true;
            }
        })

        return isDeleted || false;
    }

    const validateComment = function(com){
        if (typeof com !== 'object') {
            throw new Error('Type is not object!')
        }

        if (Object.keys(com).length !== 4) return false;

        for (key in com){
            switch (key) {
                case 'id':
                    if (typeof com[key] !== 'string') return false;
                    break;
                case 'text':
                    if (com[key].length > 280) return false;
                    if (typeof com[key] !== 'string') return false;
                    break;
                case 'createdAt':
                    if (!(com[key] instanceof Date && !isNaN(com[key].valueOf()))) return false;
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

    const addComment = function(id, text){
        let isAddComment;
        let comment = {};

        if(typeof id !== 'string' || typeof text !== 'string'){
            throw new Error('Type is not string!');
        }

        comment.id = `0${String(+tweets[tweets.length - 1].id + 1)}`;
        comment.text = text;
        comment.createdAt = new Date( new Date().toISOString() );
        comment.author = _user;

        if (validateComment(comment)){
            tweets.forEach((element) => {
                if (element.id === id){
                    element.comments.push(comment);
                    isAddComment = true;
                }
            })
        }

        return isAddComment || false;
    }

    const changeUser = function(usr){
        if(typeof usr !== 'string'){
            throw new Error('Type is not string!');
        }

        _user = usr;
    }

    return {
        getTweets,
        getTweet,
        validateTweet,
        addTweet,
        editTweet,
        removeTweet,
        validateComment,
        addComment,
        changeUser,
    };
})();


// Check
try {
    console.log(module.getTweets(0, 20, {
        author: 'Musa',
        dateFrom: new Date('2022-03-09T17:42:16'),
        dateTo: new Date('2022-03-09T18:32:23'),
        hashtags: ['#js', '#Start'],
        text: 'The Javascript language',
    }));

    console.log(module.getTweet('2'));

    console.log(module.validateTweet({
        id: '19',
        text: 'On the second day of travel, human stress is reduced to 89%. Since most of the problems and negative emotions are forgotten. #Adventure',
        createdAt: new Date('2022-03-10T19:22:02'),
        author: 'Traveler',
        comments: [],
    }))

    console.log(module.addTweet('This is new test tweet!'));

    console.log(module.editTweet('7', 'newtext'));

    console.log(module.removeTweet('21'));

    console.log(module.validateComment({
        id: '013',
        text: 'Another quote...',
        createdAt: new Date('2022-03-10T21:12:43'),
        author: 'Alex',
    }));

    console.log(module.addComment('7', 'It is test comment'));

    console.log(module.changeUser('Alex'));

} catch (err) {
    console.log(err);
}



