const costat1 = ["Mare", "Pare", "Fill1", "Fill2"];
const barca = ["Filla2", "Policia", "Lladre"];
const costat2 = ["Filla1"];

const contenidorC1 = document.getElementById("personatges-c1");
const contenidorC2 = document.getElementById("personatges-c2");
const barco = document.getElementById("barca-display");
const missatgeDisplay = document.getElementById("missatge");

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
            // Exemple de lògica: passar del costat 1 a la barca
            let index = costat1.indexOf(element);

            let elementAMoure = costat1.splice(index, 1);
            barca.push(...elementAMoure)

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${index} ${element}. Hauries de moure'l a la barca!`;
            actualitzarInterficie();

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

function creuar(){
    let index = costat2.indexOf(element);

    if(){
        let elementMogut = barca.splice(0,10 );
        costat2.push(...elementMogut)
    }
}

// Inicialitzem la vista
actualitzarInterficie();



