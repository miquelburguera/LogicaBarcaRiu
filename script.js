const costat1 = ["Mare", "Pare", "Fill1", "Fill2", "Filla1", "Filla2", "Policia", "Lladre"];
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
            // let creuarBarca = costat1.splice(index, 1);
            // barca.push(...creuarBarca)
            // console.log(costat1);
            // console.log(barca);

        });

        contenidorC1.appendChild(boto);
    });

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

function creuar() {

    if (barca.length <= 2) {

        if (barca.includes('Mare') || barca.includes('Pare') || barca.includes('Policia')) {

            if (!costat1.includes("Lladre") || (costat1.includes("Lladre") && (costat1.includes("Policia") || costat1.length === 1))) {

                if (!costat2.includes("Lladre") || (costat2.includes("Lladre") && (costat2.includes("Policia") || costat2.length === 1))) {

                    if (!costat1.includes("Pare") || (costat1.includes("Pare") && costat1.includes("Mare")) || (costat1.includes('Pare') && !costat1.includes('Mare') && (!costat1.includes('Filla1') && (!costat1.includes('Filla2'))))) {

                        if (!costat2.includes("Pare") || (costat2.includes("Pare") && costat2.includes("Mare")) || (costat2.includes('Pare') && !costat2.includes('Mare') && (!costat2.includes('Filla1') && (!costat2.includes('Filla2'))))) {

                            if (!costat1.includes("Mare") || (costat1.includes("Mare") && costat1.includes("Pare")) || (costat1.includes('Mare') && !costat1.includes('Pare') && (!costat1.includes('Fill1') && (!costat1.includes('Fill2'))))) {

                                if (!costat2.includes("Mare") || (costat2.includes("Mare") && costat2.includes("Pare")) || (costat2.includes('Mare') && !costat2.includes('Pare') && (!costat2.includes('Fill1') && (!costat2.includes('Fill2'))))) {

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
    if (costat2.length === 8) {
        missatgeDisplay.textContent = `HAS GUANYAT!!!!!`
    }
}

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



