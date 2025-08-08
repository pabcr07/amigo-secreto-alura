// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = document.getElementById("listaAmigos")
const resultado = document.getElementById("resultado")
const arregloAmigos = []
 
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    
    if(amigo == ""){
    alert("Ingrese un nombre válido")
   }else{
    let li = document.createElement("li")
    li.innerText = amigo
    listaAmigos.appendChild(li)
    arregloAmigos.push(amigo)
    document.querySelector("#amigo").value = ""
   }

}



    

    




