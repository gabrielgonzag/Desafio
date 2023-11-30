let continuar = true;
while (continuar) {
    let nomeHeroi = prompt("Digite o nome do herói (ou digite 'sair para encerrar):")

    if(nomeHeroi.toLowerCase()==="sair"){
        continuar = false
        continue
    }

    let NivelDoHeroi = prompt("digite o rank do seu Heroi")

if(NivelDoHeroi<=1000)[
    console.log("O ranking do seu héroi é Ferro!")
]
else if(NivelDoHeroi>=1001 && NivelDoHeroi <=2000){
    console.log("O ranking do seu héroi é Bronze")
}
else if(NivelDoHeroi>=2001 && NivelDoHeroi <=5000){
    console.log("O ranking do seu héroi é Prata!")
}
else if(NivelDoHeroi>=5001 && NivelDoHeroi<=7000){
    console.log("O ranking do seu héroi é Ouro!")
}
else if(NivelDoHeroi>=7001 && NivelDoHeroi<=8000){
    console.log("O ranking do seu héroi é Platina!")
}
else if(NivelDoHeroi>=8001 && NivelDoHeroi<=9000){
    console.log("O ranking do seu héroi é Ascendente!")
}
else if(NivelDoHeroi>=9001 && NivelDoHeroi<=10000){
    console.log("O ranking do seu héroi é Imortal!")
}else("O ranking do sue héroi é Radiante")

}