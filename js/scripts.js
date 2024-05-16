const $btn = document.querySelectorAll(".btn");
const $player = document.querySelector(".player2");
const $results= document.querySelector(".results");

const imagenes = ['img/img1.png', 'img/img2.png', 'img/img3.png'];

function random() {
    const randomNumber= Math.floor(Math.random() * 3);
     return imagenes[randomNumber];
 }

 
$btn.forEach(btn => {
    btn.addEventListener("click" , e =>{

        $player.innerHTML = "";
        $results.innerHTML ="";

        const $img = document.createElement("img");
        $img.classList.add("img", "img-players");

        const $p = document.createElement("p");
        $p.textContent = "VS";
        $p.classList.add("players");


        // Imagenes seleccionadas por el jugador

        let playerSelect;

        if (e.target.id === "rock") {
            playerSelect = "img/img1.png";
        } else if (e.target.id === "paper") {
            playerSelect = "img/img2.png";
        } else if (e.target.id === "scissors") {
            playerSelect = "img/img3.png";
        }
         
        //imagen selecionada por la computadora
        const computer = random();

        // Mostrar imágenes seleccionadas
        $img.src = playerSelect;
        const $imgComputer = document.createElement("img");
        $imgComputer.src = computer;
        $imgComputer.classList.add("img", "img-players");

        $player.appendChild($img);
        $player.appendChild($p);
        $player.appendChild($imgComputer);

        // Determinar el resultado 
        let result;

        if (playerSelect === computer) {
            result = "¡Empate!";
        } else if (
            (playerSelect === "img/img1.png" && computer === "img/img3.png") ||
            (playerSelect === "img/img2.png" && computer === "img/img1.png") ||
            (playerSelect === "img/img3.png" && computer === "img/img2.png")
        ) {
            result = "¡Ganaste!";
        } else {
            result = "¡Perdiste!";
        }

        // Mostrar el resultado del juego
        const $result = document.createElement("p");
        $result.textContent = result;
        $result.classList.add("results", "no-margin");
        $results.appendChild($result);


    })
});

