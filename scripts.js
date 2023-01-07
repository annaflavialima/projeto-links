// alternar entre o modo light/dark
function toggleMode() {
    // pegar o body
    const body = document.body

    // verifica se o body contem a class 'light'
    if (body.classList.contains("light")) {
        // caso contenha, então remove
        body.classList.remove("light")
    } else {
        // caso não contenha, então adiciona
        body.classList.add("light")
    }
    // a condicional acima pode ser resumida em uma linha de código, utilizando a função 'toggle':
    // body.classList.toggle('light')


    // tocar a imagem do perfil de acrodo com o modo escolhido
    // pegar a tag 'img' através do seletor CSS
    const img = document.querySelector("#profile img")
    // substituir a imagem
    if (body.classList.contains("light")) {
        // se estiver no modo light, add a foto do perfil
        img.setAttribute('src', 'img/avatar-light.png')
    } else {
        // se estiver no modo dark, mantém a foto
        img.setAttribute("src", "img/avatar.png")
    }
}


