const pesquisa = document.getElementById("pesquisa");
const cards = document.querySelectorAll(".card");

pesquisa.addEventListener("keyup", () => {

    const texto = pesquisa.value.toLowerCase();

    cards.forEach(card => {

        const conteudo = card.textContent.toLowerCase();

        if(conteudo.includes(texto)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});