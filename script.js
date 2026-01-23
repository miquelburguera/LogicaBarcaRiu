const costat1 = ["Mare", "Pare", "Fill1", "Fill2", "Filla1"];
const barca = ["Filla2", "Policia", "Lladre"];
const costat2 = [];

const contenidorC1 = document.getElementById("personatges-c1");
const contenidorC2 = document.getElementById("personatges-c2");
const barco = document.getElementById("barca-display");

const missatgeDisplay = document.getElementById("missatge");

function actualitzarInterficie() {
    // Netejar el contenidor abans de tornar a dibuixar
    contenidorC1.innerHTML = "";

    costat1.forEach(element => {
        const boto = document.createElement("button");
        boto.textContent = element;

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca
            let index = costat1.indexOf(element);

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${index} ${element}. Hauries de moure'l a la barca!`;

            let creuarBarca = costat1.splice(index, 1);
            barca.push(...creuarBarca)
            console.log(costat1);
            console.log(barca);

        });

        contenidorC1.appendChild(boto);
    });

    barca.forEach(element => {
        const boto = document.createElement("button");
        boto.textContent = element;

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca
            let index = barca.indexOf(element);

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}. Hauries de moure'l a la barca!`;
            creuar()
        });

        barco.appendChild(boto);
    });

    costat2.forEach(element => {
        const boto = document.createElement("button");
        boto.textContent = element;

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca
            let index = costat2.indexOf(element);

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}. Hauries de moure'l a la barca!`;

        });

        contenidorC2.appendChild(boto);
    });
}

function creuar(){
    let index = barca.indexOf(element);
    let creuarcostat2 = barca.splice(index, 1);
    console.log(barca);
    console.log(costat2);
    barca.push(...creuarcostat2)

}

// function repintar(){
//     costat1.splice(1,0,  )
// }

// Inicialitzem la vista
actualitzarInterficie();
