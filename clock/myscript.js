//-------------------->Inicio-funcao-relogio<-----------------------//

function clock(){

    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();

    var hms = h + ':' + m + ':' + s;

    var x = document.getElementById('time');
    x.innerText = hms;   

}

//-------------------->final-funcao-relogio<-----------------------//
//
//
//
//
//-------------------->Inicio-funcao-pausar<-----------------------//

function pausar(){

    clearTimeout(y);
    
}

//-------------------->final-funcao-pausar<-----------------------//
//
//
//
//
//-------------------->Inicio-funcao-Iniciar<-----------------------//

function iniciar(){

    y = setInterval(clock, 1000);

}

//-------------------->Final-funcao-iniciar<-----------------------//