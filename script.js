const showMoreBtn = document.querySelector("#ler-mais")
const conteudo = document.querySelector("#conteudo-hidden")

showMoreBtn.addEventListener("click", () => {
    conteudo.classList.toggle("hidden")
    showMoreBtn.classList.add("hidden")
})