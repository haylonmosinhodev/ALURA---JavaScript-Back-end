// //COMO ERA FEITOS ANTIGAMENTO COM FUNÇOES

// const Livro = function (nome, editora, paginas){
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas
    

//     this.getNome = function (){
//         return gNome
//     }
//     this.getEditora = function(){
//         return gEditora
//     }
//     this.getPaginas = function(){
//         return gPaginas
//     }
// }



// const GraphQl = new Livro ("GraphQl", "Casa do Codigo", 143)
// console.log (GraphQl.getNome())
// console.log(GraphQl.getEditora())
// console.log(GraphQl.getPaginas())


//CRIANDO CLASSES

class Livro {
    constructor (nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo (){
        console.log (`Titulo: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas`)
    }
}

const NodeJs = new Livro("Primeiros passos com NodeJS", "Casa do codigo", 195)
NodeJs.anunciarTitulo()
NodeJs.descreverTitulo()

console.log (typeof Livro)