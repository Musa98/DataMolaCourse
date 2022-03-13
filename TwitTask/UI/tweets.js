const tweets = [
    {
        id: '1',
        text: 'Hello it is my first tweet!',
        createdAt: new Date('2022-03-09T11:00:00'),
        author: 'Musa',
        comments: []
    },
    {
        id: '2',
        text: 'Who knows how to clean ketchup on a shirt? #Help',
        createAt: new Date('2022-03-09T12:13:00'),
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
        createAt: new Date('2022-03-09T16:43:26'),
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
        }]
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
        createAt: new Date('2022-03-09T17:39:27'),
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
        createAt: new Date('2022-03-09T18:32:23'),
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
        }]
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
        createAt: new Date('2022-03-09T21:59:22'),
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
        createAt: new Date('2022-03-10T00:39:21'),
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
        }]
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
        createAt: new Date('2022-03-10T09:43:12'),
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
        createAt: new Date('2022-03-10T16:23:41'),
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
        createAt: new Date('2022-03-10T21:09:33'),
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
        }]
    },
]