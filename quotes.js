const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person  = document.querySelector('.person');

const quotes = [
    {
        quote:`“Every chess master was once a beginner.” `,
        person:`— Irving Chernev`
    },
    {
        quote:`“Tactics flow from a superior position.” `,
        person: `— Bobby Fischer`
    },
    {
        quote:`“Play the opening like a book, the middlegame like a magician, and the endgame like a machine.”`,
        person:` — Rudolf Spielmann`
    },
    {
        quote:`“Chess teaches foresight, by having to plan ahead; vigilance, by having to keep watch over the whole chessboard; caution, by having to restrain ourselves from making hasty moves.” `,
        person:`— Benjamin Franklin`
    },
    {
        quote:`“When you see a good move, look for a better one.”`,
        person:` — Emanuel Lasker`
    },  
    {
        quote:`“Chess is war over the board. The object is to crush the opponent’s mind.” `,
        person:`— Bobby Fischer`
    },  
    {
        quote:`“Even the laziest king flees wildly in the face of a double check!” `,
        person:`— Aaron Nimzowitsch`
    }
];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})