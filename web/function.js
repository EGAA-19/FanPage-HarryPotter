var fotoMostrada = "dark";

function cambiarFondoDocumento() {

    let body = document.getElementsByTagName('body')[0];
    var imagen = document.getElementById("Nox");
    var texto = document.getElementById("but");
    

    if(fotoMostrada == "dark" && texto.value == "LUMOS")
    {
        imagen.src = "assets/Lumos.png";
        fotoMostrada = "light";
        body.style.backgroundImage = 'url(assets/white.svg)';
        texto.value = "NOX";

    }

    else
    {
        imagen.src = "assets/Nox.png";
        fotoMostrada = "dark"
        body.style.backgroundImage = 'url(assets/dark.svg)';
        texto.value = "LUMOS";
    }
}