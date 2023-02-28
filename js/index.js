
document.getElementById("boton1").addEventListener("click", function (){
    document.getElementById("header").style.backgroundColor = "#3498db"; 
    document.getElementById("contenedor-principal").style.backgroundColor = "white";
    document.getElementById("contenedor-secundario").style.backgroundColor = "#34495e";
    document.getElementById("color1").style.backgroundColor = "#148f77";
    document.getElementById("color2").style.backgroundColor = "#148f77";
    document.getElementById("color3").style.backgroundColor = "#148f77";
    document.getElementById("cajaE1").style.backgroundColor = "white";
    document.getElementById("cajaE2").style.backgroundColor = "white";
});
document.getElementById("boton2").addEventListener("click", function (){
    document.getElementById("header").style.backgroundColor = "#148f77"; 
    document.getElementById("contenedor-principal").style.backgroundColor = "#2980b9";
    document.getElementById("contenedor-secundario").style.backgroundColor = "white";
    document.getElementById("color1").style.backgroundColor = "white";
    document.getElementById("color2").style.backgroundColor = "white";
    document.getElementById("color3").style.backgroundColor = "white";
    document.getElementById("cajaE1").style.backgroundColor = "#148f77";
    document.getElementById("cajaE2").style.backgroundColor = "#148f77";
});
document.getElementById("boton").addEventListener("click", function(){
    let grupo = document.getElementsByClassName("botones");
        for(let i = 0; i< grupo.length;i++){
            grupo[i].style.display = "initial";
        }
    document.getElementById("boton").style.display = "none";
});
document.getElementById("boton3").addEventListener("click", function(){
    let grupo = document.getElementsByClassName("botones");
        for(let i = 0; i< grupo.length;i++){
            grupo[i].style.display = "none";
        }
    document.getElementById("boton").style.display = "initial";
});