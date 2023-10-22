
/**
 * Esta funcion pide una carta
 * @param {array<String>} deck Agarra una carta del deck
 * @returns {String} retorna un string con la carta
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}