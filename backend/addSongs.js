// scripts/saveSongs.js
const mongoose = require('mongoose');
const Song = require('./model/songs');

const mongoURI = 'mongodb://mongo:jCJwpvJhUwnhSkDltBTnhbQbNTJmzJFz@autorack.proxy.rlwy.net:59730';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
        saveSongs();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

async function saveSongs() {
    const songs = [
        {
            title: 'Mamma Mia',
            lyrics: `
                I've been cheated by you since I don't know when
            (Alle festdeltakere)

            So I made up my mind, it must come to an end
            (Alle som er gira for kvelden)

            Look at me now, will I ever learn?
            (Alle fra Bergen)

            I don't know how, but I suddenly lose control
            There's a fire within my soul
            (Alle som har hatt sex i utlandet)

            Just one look and I can hear a bell ring
            (Alle som har hatt klamydia)

            One more look and I forget everything, w-o-o-o-oh
            (Alle som har hatt O.N.S i 2023)

            Mamma mia, here I go again
            My, my, how can I resist you?
            (Alle som drikker vin/bobler)

            Mamma mia, does it show again
            My, my, just how much I've missed you?
            (Alle som drikker øl/sprit)

            Yes, I've been brokenhearted
            (Alle brunetter)
            
            Blue since the day we parted
            (Alle som vil ligge i kveld)
            
            Why, why did I ever let you go?
            (Alle høyrehendte)
            
            Mamma mia, now I really know
            My, my, I could never let you go
            (Alle som har hatt trekant)
            
            I've been angry and sad about things that you do
            (Alle som har ligget med noen som er 3 år eldre)
            
            I can't count all the times that I've told you we're through
            (Alle som har spilt/spiller fotball)
            
            And when you go, when you slam the door
            (Alle venstrehendte)
            
            I think you know that you won't be away too long
            You know that I'm not that strong
            (Alle som har hatt korona)
            
            Just one look and I can hear a bell ring
            (Alle single)
            
            One more look and I forget everything, w-o-o-o-oh
            (Alle som har kjæreste)
            
            Mamma mia, here I go again
            My, my, how can I resist you?
            (Alle fra østlandet)
            
            Mamma mia, does it show again
            My, my, just how much I've missed you?
            (Alle som er hangover i morgen)
            
            Yes, I've been brokenhearted
            (Alle i svart)
            
            Blue since the day we parted
            (Alle som skal bli drita)
            
            Why, why did I ever let you go?
            (Alle med blå øyne)
            
            Mamma mia, even if I say
            Bye-bye, leave me now or never
            (Alle som liker Pepsi-Max best)
            
            Mamma mia, it's a game we play
            Bye-bye doesn't mean forever
            (Alle som liker Cola Zero best)
            
            Mamma mia, here I go again
            My, my, how can I resist you?
            (Alle som skal på jobb i morgen)
            
            Mamma mia, does it show again
            My, my, just how much I've missed you?
            (Alle som burde drikke mer)
            
            Yes, I've been brokenhearted
            (Alle guttene)
            
            Blue since the day we parted
            (Alle jentene)
            
            Why, why did I ever let you go?
            (Alle som har jukset på skolen)
            
            Mamma mia, now I really know
            My, my, I could never let you go
            (Alle)
            `,
            backgroundColor: '#4E97D1',
        },
        {
            title: 'Lay All Your Love On Me',
            lyrics: `
                I wasn't jealous before we met
            Now every woman I see is a potential threat
            (Alle)
            
            And I'm possessive, it isn't nice
            You've heard me saying that smoking was my only vice
            (Alle single)
            
            But now it isn't true
            Now everything is new
            (Alle med kjæreste)
            
            And all I've learned has overturned
            I beg of you
            (Alle som har ligget siste uka)
            
            Don't go wasting your emotion
            Lay all your love on me
            (Alle)
            
            It was like shooting a sitting duck
            A little small talk, a smile, and baby I was stuck
            (Alle som har stalket Snapscore)
            
            I still don't know what you've done with me
            A grown-up woman should never fall so easily
            (Alle som har blacka ut)
            
            I feel a kind of fear
            When I don't have you near
            (Alle som vil være med noen her hjem)
            
            Unsatisfied, I skip my pride
            I beg you, dear
            (Alle med drikke i hånden)
            
            Don't go wasting your emotion
            Lay all your love on me
            (Alle)
            
            Don't go sharing your devotion
            Lay all your love on me
            (Alle)
            
            I've had a few little love affairs
            They didn't last very long and they've been pretty scarce
            (Alle som har sovnet i en trapp)
            
            I used to think I was sensible
            It makes the truth even more incomprehensible
            (Alle som ikke har kommet inn på byen)
            
            'Cause everything is new
            And everything is you
            (Alle høyrehendte)
            
            And all I've learned has overturned
            What can I do?
            (Alle som har sovnet på fest)
            
            Don't go wasting your emotion
            Lay all your love on me
            (Alle som er gira for kvelden)
            
            Don't go sharing your devotion
            Lay all your love on me
            (Alle)
            
            Don't go wasting your emotion
            Lay all your love on me
            (Alle)
            
            Don't go sharing your devotion
            Lay all your love on me
            (Alle)
            
            Don't go wasting your emotion
            Lay all your love on me
            (Alle)
                ...
            `,
            backgroundColor: '#FFB39C',
        },
        {
            title: 'Take On Me',
            lyrics: `
               We're talking away
            I don't know what I'm to say
            I'll say it anyway
            (Alle)
            
            Today is another day to find you
            Shyin' away
            (Alle med drikke i hånden)
            
            Oh, I'll be comin' for your love, okay
            (Alle single)
            
            Take on me, take on me
            Take me on, take on me
            (Alle som er gira)
            
            I'll be gone
            In a day or two
            (Alle under 180cm)
            
            So needless to say
            (Alle som har spydd på vors)
            
            I'm odds and ends
            But I'll be stumblin' away
            (Alle som drikker sprit)
            
            Slowly learnin' that life is okay
            (Alle som har fått stryk på eksamen)
            
            Say after me
            It's no better to be safe than sorry
            (Alle med mobilen i hånda)
            
            Take on me, take on me
            Take me on, take on me
            (Alle som drikker rusbrus)
            
            I'll be gone
            In a day or two
            (Alle guttene)
            
            All the things that you say, yeah
            Is it life or just to play my worries away?
            (Alle som skal på byen)
            
            You're all the things I've got to remember
            You're shyin' away
            (Alle som har blitt kastet ut av et utested)
            
            I'll be comin' for you anyway
            (Alle som har sneket på bussen)
            
            Take on me, take on me
            Take me on, take on me
            (Alle jentene)
            
            I'll be gone
            In a day
            (Alle som sitter på en stol)
            
            Take on me, take on me
            Take me on, take on me
            (Alle)
            
            I'll be gone, take on me
            In a day
            Take me on, take on me
            (Alle)
            `,
            backgroundColor: '#AED688',
        }
    ];

    try {
        const savedSongs = await Song.insertMany(songs);
        console.log('Songs saved:', savedSongs);
    } catch (error) {
        console.error('Error saving songs:', error);
    }
}
