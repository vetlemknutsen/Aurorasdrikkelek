const mongoose = require('mongoose');

// Hardkodet MongoDB URI
const mongoURI = 'mongodb://mongo:jCJwpvJhUwnhSkDltBTnhbQbNTJmzJFz@autorack.proxy.rlwy.net:59730';

// Koble til MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
        createGameWithCards();

    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

const Game = require('./model/games');
const Card = require('./model/cards');

async function createGameWithCards() {
        // 1. Opprett en lek
        const newGame = new Game({
                name: "Snusboksen",
                description: "Kaster snusboksen til hverandre",
        });

        const savedGame = await newGame.save();
        console.log('Game created:', savedGame);

        // 2. Legg til kortene til leken
        const cardData = [
                { "title": "er den dårligste taperen?", "color": "#FABED9" },
                { "title": "blir oftest flau?", "color": "#96E0AD" },
                { "title": "har den sykeste fetisjen?", "color": "#84B6F4" },
                { "title": "virket mest bitch ved første møte?", "color": "#77DD77" },
                { "title": "hadde kledd å være emo?", "color": "#FF6961" },
                { "title": "får de sterkeste ølbrillene?", "color": "#FFB347" },
                { "title": "er dårligst på å bruke prevensjon?", "color": "#B19CD9" },
                { "title": "har hatt sex på det sykeste stedet?", "color": "#974C5E" },
                { "title": "bør utredes for en diagnose?", "color": "#008080" },
                { "title": "har hatt lengst tørkeperiode?", "color": "#3D426B" },
                { "title": "ville du aldri bodd med?", "color": "#F6C1B2" },
                { "title": "har ikke drukket nok?", "color": "#BCBC82" },
                { "title": "tåler minst alkohol?", "color": "#FABED9" },
                { "title": "tåler mest alkohol?", "color": "#96E0AD" },
                { "title": "er rommets Mr. Worldwide?", "color": "#84B6F4" },
                { "title": "er lettest på tråden?", "color": "#77DD77" },
                { "title": "sitt søsken ville du ligget med?", "color": "#FF6961" },
                { "title": "er mor/far i gjengen?", "color": "#FFB347" },
                { "title": "trenger å få seg noe i kveld?", "color": "#B19CD9" },
                { "title": "vil du ha som wingman?", "color": "#974C5E" },
                { "title": "hadde du vunnet over i en slåsskamp?", "color": "#FF00FF" },
                { "title": "ville du hatt med på en trekant?", "color": "#3D426B" },
                { "title": "er dårligst på matlaging?", "color": "#F6C1B2" },
                { "title": "er mest handy?", "color": "#BCBC82" },
                { "title": "er den verste jukseren?", "color": "#FABED9" },
                { "title": "er klar for å få barn?", "color": "#96E0AD" },
                { "title": "er mest gjerrig?", "color": "#84B6F4" },
                { "title": "er rommets blikkfang?", "color": "#77DD77" },
                { "title": "er den morsomste?", "color": "#FF6961" },
                { "title": "er den frekkeste?", "color": "#FFB347" },
                { "title": "spyr i kveld?", "color": "#B19CD9" },
                { "title": "har mest nakenbilder av seg selv?", "color": "#974C5E" },
                { "title": "er den største fylliken?", "color": "#BA110C" },
                { "title": "forsvinner alltid på byen?", "color": "#3D426B" },
                { "title": "gråter oftest av filmer?", "color": "#F6C1B2" },
                { "title": "er mest sta?", "color": "#BCBC82" },
                { "title": "lager best stemning?", "color": "#FABED9" },
                { "title": "er størst tindertøs?", "color": "#96E0AD" },
                { "title": "er oftest på helseklinikken?", "color": "#84B6F4" },
                { "title": "er den siste ut av utestedet?", "color": "#77DD77" },
                { "title": "får dele ut 10 slurker?", "color": "#FF6961" },
                { "title": "sender de verste fylla-meldingene?", "color": "#FFB347" },
                { "title": "bruker mest penger på byen?", "color": "#B19CD9" },
                { "title": "dør først?", "color": "#974C5E" },
                { "title": "er dårligst i beerpong?", "color": "#FFBF00" },
                { "title": "har mest skjermtid?", "color": "#3D426B" },
                { "title": "har høyest IQ?", "color": "#F6C1B2" },
                { "title": "er den beste chuggeren?", "color": "#BCBC82" },
                { "title": "har størst kjendisfaktor?", "color": "#FABED9" },
                { "title": "har den mest skitne nettleserloggen?", "color": "#96E0AD" },
                { "title": "har lettest for å klikke?", "color": "#FABED9" },
                { "title": "ligger mest?", "color": "#96E0AD" },
                { "title": "stønner høyest?", "color": "#84B6F4" },
                { "title": "er mest renslig?", "color": "#77DD77" },
                { "title": "er mest nerd?", "color": "#FF6961" },
                { "title": "er ærligst?", "color": "#FFB347" },
                { "title": "kunne kysset noen for en drink på byen?", "color": "#B19CD9" },
                { "title": "kunne spydd av tre shots? (Gjerne test ut)", "color": "#974C5E" },
                { "title": "får mest oppmerksomhet på byen?", "color": "#008080" },
                { "title": "får flest barn?", "color": "#3D426B" },
                { "title": "har drukket mest i løpet av livet?", "color": "#F6C1B2" },
                { "title": "er størst dramaqueen?", "color": "#BCBC82" },
                { "title": "må lese siste tindermelding? (Personen må ha tinder)", "color": "#FABED9" },
                { "title": "er flinkest til å diskutere?", "color": "#96E0AD" },
                { "title": "ville du valgt til å styre landet?", "color": "#84B6F4" },
                { "title": "er mest woke?", "color": "#77DD77" },
                { "title": "ser yngst ut?", "color": "#FF6961" },
                { "title": "byr mest på seg selv?", "color": "#FFB347" },
                { "title": "drikker for sakte?", "color": "#B19CD9" },
                { "title": "er den største grisen?", "color": "#974C5E" },
                { "title": "ville hatt sex først på Paradise Hotel", "color": "#FABED9" },
                { "title": "er den beste sjekkeren?", "color": "#96E0AD" },
                { "title": "er mest glemsk?", "color": "#84B6F4" },
                { "title": "kommer alltid for sent?", "color": "#77DD77" },
                { "title": "er svigermors eller svigerfars drøm?", "color": "#FF6961" },
                { "title": "har størst sjanse for å bli arrestert?", "color": "#FFB347" }
            ]

        ;

        // Lag kortene og lagre dem
        const cards = await Promise.all(
            cardData.map(data => {
                    const card = new Card({
                            game_id: savedGame._id, // Knytter kortene til det nye spillet
                            ...data,
                    });
                    return card.save();
            })
        );

        console.log('Cards created:', cards);

        // Oppdater lekens kortreferanser
        savedGame.cards = cards.map(card => card._id);
        await savedGame.save();

        console.log('Game with cards saved');
        await mongoose.disconnect()
}

