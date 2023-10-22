import _ from 'underscore';


/**
 * Esta funcion crea un deck
 * @param {array<String>} typeOfCards Ejemplo: ['C','D','H','S'];
 * @param {array<String>} specialCards Ejemplo: ['A','J','Q','K'];
 * @returns {array<String>} Regresa un array de cartas
 */ 
// Esta función crea un nuevo deck
export const crearDeck = (typeOfCards, specialCards) => {

    if(!typeOfCards) throw new Error('TypeofCards is necessary');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of typeOfCards ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of typeOfCards ) {
        for( let esp of specialCards ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}

// export default crearDeck;