let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    //menu fechado tem a class "menu-fechado"
    //menu aberto ele nao tem a class "menu fechado"




    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        //mostrar icones barras
        iconeBarras.style.display = "none"
        //esconder o icone do x
        iconeX.style.display = "inline"
    } else {
        //fechar o menu - adicionar a class menu fechado
        menu.classList.add("menu-fechado")

        //mostrar icone x
        iconeX.style.display = "none"
        //esconder o icone de barras
        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    iconeBarras.style.display = "none"

    iconeX.style.display = "inline"

}

let banner = document.querySelector(".banner")

// let slides = [0, 1, 2]
// slides[0] -> primeiro-banner
// slides[1] -> segundo-banner
// slides[2] -> terceiro-banner

let slides = [
    "primeiro-banner", // 0
    "segundo-banner",  // 1
    "terceiro-banner"  // 2
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        // Somar 1 na variavel slideAtual
        slideAtual++        
    } else {
        // Voltar para o primeiro banner
        slideAtual = 0
    }

    // Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior() {
    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        // Subtrair 1 na variavel slideAtual
        slideAtual--
    } else {
        // Voltar para o ultimo slide
        slideAtual = 2
    }

    // Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {
    // Remove o slide atual
    banner.classList.remove(slides[slideAtual])
    
    // Atualiza a variavel com o indice de slide selecionado
    slideAtual = indiceSlide

    // Mostra o slide selecionado e salvo na variavel slideAtual
    banner.classList.add(slides[slideAtual])
}


function solicitarOrcamento(event) {
    // Pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-texto").value

    // Organizar os valores em um objeto
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar a requisição para a API
    // Método HTTP POST - Create/Criar -> Cadastrar um novo registro (solicitacao)
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    // CASO SUCESSO
    .then(resposta => {   
        console.log(resposta);     
        
        // Limpar os inputs
        document.querySelector("#contato form").reset()

        // Mostrar um alert de sucesso
        alert("Solicitação enviada com sucesso!!! 👍")
    })
    // CASO ERRO
    .catch(erro => {
        console.log(erro);
        // Mostrar alert com msg de erro
        alert("Erro na requisição ")
    })
          
    event.preventDefault()
}