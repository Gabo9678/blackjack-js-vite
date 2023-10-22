 
/**
 * 
 * @param {String} carta La carta que se recibe
 * @returns {HTMLImageElement}
 */
export const crearCartaHTML = (carta) =>{


    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `public/assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta

}
