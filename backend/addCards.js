const mongoose = require('mongoose');

const mongoURI = 'mongodb://mongo:jCJwpvJhUwnhSkDltBTnhbQbNTJmzJFz@autorack.proxy.rlwy.net:59730';


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
                name: "blikjent",
                description: "Lek for å bli kjent",
        });

        const savedGame = await newGame.save();
        console.log('Game created:', savedGame);

        // 2. Legg til kortene til leken
        const cardData = [
                    { "title": "Pek på den du tror hadde høyest snitt på videregående", "color": "#cadffc" },
                    { "title": "Pek på den du tror er den beste kokken i rommet", "color": "#fdcddb" },
                    { "title": "Jeg har aldri jukset på en eksamen", "color": "#fbdbce" },
                    { "title": "Jeg har aldri skulket skolen", "color": "#d5cbed" },
                    { "title": "Ananas på pizza. Ja eller nei?", "color": "#ffb39c" },
                    { "title": "De som foretrekker øl fremfor vin - drikk 3 slurker", "color": "#dcedff" },
                    { "title": "Dersom noen i rommet heter Aurora må alle drikke 5 slurker. Aurora, du chugger.", "color": "#b0d7c5" },
                    { "title": "Jeg har aldri fullført en bok", "color": "#d1ecc1" },
                    { "title": "Den høyeste i rommet kan dele ut antall slurker hun/han drikker selv. Drikker du 10 slurker, kan du dele ut 10!", "color": "#f9b079" },
                    { "title": "Den eldste i rommet må ha chuggekonkurranse med den yngste!", "color": "#974C5E" },
                    { "title": "Pek på den du tror bruker mest på byen", "color": "#008080" },
                    { "title": "Drikk dersom du liker Cola bedre enn Pepsi", "color": "#ff00ff" },
                    { "title": "Alle med brunt hår drikker!", "color": "#ba110c" },
                    { "title": "Har du oransje hår? Da kan du dele ut 5 slurker", "color": "#ffbf00" },
                    { "title": "Ville du helst kunne fly eller være usynlig?", "color": "#cadffc" },
                    { "title": "Pek på den du tror sover mest", "color": "#fdcddb" },
                    { "title": "Byferie eller strandferie?", "color": "#fbdbce" },
                    { "title": "Dersom dere er i fadderuken, må alle faddere drikke!", "color": "#d5cbed" },
                    { "title": "Jeg har aldri eid en spillkonsoll", "color": "#ffb39c" },
                    { "title": "Kategori: Ord på spansk. Alle i rommet må si én ting innenfor kategorien inntil en person ikke klarer, denne personen tar 5 slurker. Ord kan ikke gjentas.", "color": "#dcedff" },
                    { "title": "Pek på den du tror har høyest promille nå", "color": "#b0d7c5" },
                    { "title": "Kategori: Matretter. Alle i rommet må si én ting innenfor kategorien inntil en person ikke klarer, denne personen tar 5 slurker. Ord kan ikke gjentas.", "color": "#d1ecc1" },
                    { "title": "Personen(e) med det lengste etternavnet må drikke antall slurker som det er bokstaver i fornavnet", "color": "#f9b079" },
                    { "title": "Alle fra Bergen drikker 2 slurker", "color": "#974C5E" },
                    { "title": "Kom du for sent til vorset? Chugg resten av glasset. Skjerp deg!", "color": "#008080" },
                    { "title": "Drikk én slurk dersom du har en deltidsjobb", "color": "#ff00ff" },
                    { "title": "Kategori: Artister. Alle i rommet må si én ting innenfor kategorien inntil en person ikke klarer, denne personen tar 5 slurker. Ord kan ikke gjentas.", "color": "#ba110c" },
                    { "title": "Vin er godt. Ja eller nei?", "color": "#ffbf00" },
                    { "title": "Har noen på seg noe blått? Hvis ja, må personen til høyre for den personen drikke 3 slurker.", "color": "#cadffc" },
                    { "title": "Personen som bor lengst unna byen's sentrum, del ut 5 slurker", "color": "#fdcddb" }
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

