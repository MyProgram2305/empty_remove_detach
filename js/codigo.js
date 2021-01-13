$(document).ready(function(){
//Ese Es el ejercicio 1 de html()
    $('#elemento1').html("Aqui va aparecer todo lo que pongas(escribas) en el elemento que selecionastes por <br> metodo <i>html()</i>");
    //Ese es el Ejercicio 2 de html()
    $('#buton1').click(function(){
        $("#elemento2").html("Aqui va a paracer todo lo que escribas cuando le des click al button");
    });
    $('#buton2').click(function(){
        $("#elemento3").html(function(n){
            return "el sillon es" + " rojo ";
        });
    });
});