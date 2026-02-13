const costat1 = ["👩🏻", "🧔🏻", "👦🏻", "👦🏼", "👧🏼", "👧🏻", "👮🏻‍♂️", "🥷🏽"];
const barca = [];
const costat2 = [];

const contenidorC1 = document.getElementById("personatges-c1");
const contenidorC2 = document.getElementById("personatges-c2");
const barco = document.getElementById("barca-display");
const missatgeDisplay = document.getElementById("missatge");

let costat = "esquerre"

function actualitzarInterficie() {
    // Netejar el contenidor abans de tornar a dibuixar
    contenidorC1.innerHTML = "";
    contenidorC2.innerHTML = "";
    barco.innerHTML = "";
    missatgeDisplay.innerHTML = "";


    //quan pitjam cada persona surti del costat 1

    costat1.forEach(element => {
        const boto = document.createElement("button");
        boto.appendChild(document.createElement('image'));
        boto.textContent = element;

        boto.addEventListener("click", () => {
            if (costat === "esquerre") {
                // Exemple de lògica: passar del costat 1 a la barca
                let index = costat1.indexOf(element);
                let elementAMoure = costat1.splice(index, 1);
                barca.push(...elementAMoure)

                // Mostram el missatge del que ha passat.  Recomanat només els errors
                missatgeDisplay.textContent = `Has clicat: ${index} ${element}. Hauries de moure'l a la barca!`;
                actualitzarInterficie();
            } else {
                missatgeDisplay.textContent = `La barca esta a l'altre costat!`;
            }

        });

        contenidorC1.appendChild(boto);
    });
//quan pitjam cada persona surti de la barca
    barca.forEach(element => {
        const boto = document.createElement("button");
        boto.appendChild(document.createElement('image'));
        boto.textContent = element;

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca
            let index = barca.indexOf(element);
            let elementAMoure = barca.splice(index, 1);
            if (costat === "esquerre") {
                costat1.push(...elementAMoure)
            } else {
                costat2.push(...elementAMoure)
                comprovarGuanyat();
            }
            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}. Hauries de moure'l a la barca!`;
            actualitzarInterficie();
        });

        barco.appendChild(boto);
    });

    //quan pitjam cada persona surti del costat 2

    costat2.forEach(element => {
        const boto = document.createElement("button");
        boto.appendChild(document.createElement('image'));
        boto.textContent = element;

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca
            let index = costat2.indexOf(element);

            let elementAMoure = costat2.splice(index, 1);
            barca.push(...elementAMoure)

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}. Hauries de moure'l a la barca!`;
            actualitzarInterficie();
        });

        contenidorC2.appendChild(boto);
    });
}
  //totes les normes
function creuar() {

    //no hi pot haver més de dues persones a la barca
    if (barca.length <= 2) {

        //hi ha d'haver un conductor a la barca per creuar
        if (barca.includes('👩🏻') || barca.includes('🧔🏻') || barca.includes('👮🏻‍♂️')) {

            //el 🥷🏽 no pot estar amb la familia sense el 👮🏻‍♂️ al costat 1
            if (!costat1.includes("🥷🏽") || (costat1.includes("🥷🏽") && (costat1.includes("👮🏻‍♂️") || costat1.length === 1))) {

                //el 🥷🏽 no pot estar amb la familia sense el 👮🏻‍♂️ al costat 2
                if (!costat2.includes("🥷🏽") || (costat2.includes("🥷🏽") && (costat2.includes("👮🏻‍♂️") || costat2.length === 1))) {

                    //el 🧔🏻 no pot estar amb les filles sense la 👩🏻 al costat 1
                    if (!costat1.includes("🧔🏻") || (costat1.includes("🧔🏻") && costat1.includes("👩🏻")) || (costat1.includes('🧔🏻') && !costat1.includes('👩🏻') && (!costat1.includes('👧🏼') && (!costat1.includes('👧🏻'))))) {

                        //el 🧔🏻 no pot estar amb les filles sense la 👩🏻 al costat 2
                        if (!costat2.includes("🧔🏻") || (costat2.includes("🧔🏻") && costat2.includes("👩🏻")) || (costat2.includes('🧔🏻') && !costat2.includes('👩🏻') && (!costat2.includes('👧🏼') && (!costat2.includes('👧🏻'))))) {

                            //la 👩🏻 no pot estar amb els fills sense el 🧔🏻 al costat 1
                            if (!costat1.includes("👩🏻") || (costat1.includes("👩🏻") && costat1.includes("🧔🏻")) || (costat1.includes('👩🏻') && !costat1.includes('🧔🏻') && (!costat1.includes('👦🏻') && (!costat1.includes('👦🏼'))))) {

                                //la 👩🏻 no pot estar amb els fills sense el 🧔🏻 al costat 2
                                if (!costat2.includes("👩🏻") || (costat2.includes("👩🏻") && costat2.includes("🧔🏻")) || (costat2.includes('👩🏻') && !costat2.includes('🧔🏻') && (!costat2.includes('👦🏻') && (!costat2.includes('👦🏼'))))) {

                                    moure()

                                } else {
                                    missatgeDisplay.textContent = `La mare no pot estar amb els fills sense el pare!`;
                                }
                            } else {
                                missatgeDisplay.textContent = `La mare no pot estar amb els fills sense el pare!`;
                            }
                        } else {
                            missatgeDisplay.textContent = `El pare no pot estar amb les filles sense la mare!`;
                        }
                    } else {
                        missatgeDisplay.textContent = `El pare no pot estar amb les filles sense la mare!`;
                    }
                } else {
                    missatgeDisplay.textContent = `El lladre no pot estar amb la família si no hi ha el policia!`;
                }
            } else {
                missatgeDisplay.textContent = `El lladre no pot estar amb la família si no hi ha el policia!`;
            }
        } else {
            missatgeDisplay.textContent = `Falta un conductor! (pare,mare,policia)`;
        }
    } else {
        missatgeDisplay.textContent = `Hi ha massa gent!`;
    }


}

function comprovarGuanyat(){
    if (costat.length === 8) {
        missatgeDisplay.textContent = `HAS GUANYAT!!!!!`
    }
}


//es canvia la barca de costat si totes les normes estan correctes
function moure() {

    const boto = document.getElementById("btn-creuar");
    if (costat === "esquerre") {
        // Només movem el botó a la dreta
        boto.style.alignSelf = "flex-end";
        boto.textContent = "⬅️ CREUAR";
        costat = "dreta";
    } else {

        // Tornem el botó a l'esquerra
        boto.style.alignSelf = "flex-start";
        boto.textContent = "CREUAR ➡️";
        costat = "esquerre";
    }

}

// Inicialitzem la vista
actualitzarInterficie();



