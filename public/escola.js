class Media{
    constructor(Nota1, Nota2, Nota3, media){
        this.Nota1 = Nota1
        this.Nota2 = Nota2
        this.Nota3 = Nota3
        this.media=(Nota1+Nota2+Nota3)/3
    }
    med(){if(this.media>=7){
        return "Parabéns, você foi APROVADO!"

    }else{if(this.media>= 4 && this.media<7){
        return "Exame Final!"

    }else{ return "Reprovado"
    }    }    }
}
function calcularMedia(){
    
    let a = new Media(parseFloat(document.getElementById("n1").value),
    parseFloat(document.getElementById("n2").value),
    parseFloat(document.getElementById("n3").value))
    Texto.innerHTML = `<div>${a.med()}</div>`
}