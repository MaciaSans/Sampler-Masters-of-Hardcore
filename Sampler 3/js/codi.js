var ultimBoto;




//Funcions per executar Play / Pause

document.getElementById("v1").onclick = playPause1;

function playPause1() {

    if (document.getElementById("boto1").paused) {

        document.getElementById("boto1").play();
        document.getElementById("boto1").currentTime = 0;
        //Current time es per que quan paris, torni a començar de 0.

    } else {
        document.getElementById("boto1").pause();
    }
    
    ultimBoto = "boto1";

}


document.getElementById("v2").onclick = playPause2;

function playPause2() {

    if (document.getElementById("boto2").paused) {

        document.getElementById("boto2").play();
        document.getElementById("boto2").currentTime = 0;
        //Current time es per que quan paris, torni a començar de 0.

    } else {
        document.getElementById("boto2").pause();
    }

     ultimBoto = "boto2";
}


document.getElementById("v3").onclick = playPause3;

function playPause3() {

    if (document.getElementById("boto3").paused) {

        document.getElementById("boto3").play();
        document.getElementById("boto3").currentTime = 0;
        //Current time es per que quan paris, torni a començar de 0.

    } else {
        document.getElementById("boto3").pause();
    }
 ultimBoto = "boto3";
}


document.getElementById("v4").onclick = playPause4;

function playPause4() {

    if (document.getElementById("boto4").paused) {

        document.getElementById("boto4").play();
        document.getElementById("boto4").currentTime = 0;
        //Current time es per que quan paris, torni a començar de 0.

    } else {
        document.getElementById("boto4").pause();
    }
 ultimBoto = "boto4";
}


document.getElementById("l1").onclick = playPause5;

function playPause5() {

    if (document.getElementById("boto5").paused) {

        document.getElementById("boto5").play();
        document.getElementById("boto5").currentTime = 0;
        //Current time es per que quan paris, torni a començar de 0.

    } else {
        document.getElementById("boto5").pause();
    }
 ultimBoto = "boto5";
}


document.getElementById("l2").onclick = playPause6;

function playPause6() {

    if (document.getElementById("boto6").paused) {

        document.getElementById("boto6").play();
        document.getElementById("boto6").currentTime = 0;
        //Current time es per que quan paris, torni a començar de 0.

    } else {
        document.getElementById("boto6").pause();
    }
 ultimBoto = "boto6";
}


document.getElementById("l3").onclick = playPause7;

function playPause7() {

    if (document.getElementById("boto7").paused) {

        document.getElementById("boto7").play();
        document.getElementById("boto7").currentTime = 0;
        //Current time es per que quan paris, torni a començar de 0.

    } else {
        document.getElementById("boto7").pause();
    }
 ultimBoto = "boto7";
}


document.getElementById("l4").onclick = playPause8;

function playPause8() {

    if (document.getElementById("boto8").paused) {

        document.getElementById("boto8").play();
        document.getElementById("boto8").currentTime = 0;
        //Current time es per que quan paris, torni a començar de 0.

    } else {
        document.getElementById("boto8").pause();
    }
 ultimBoto = "boto8";
}




// Funció volum general

//Fem que quan es toqui l'slider volum s'executi la funció canviarVolum
document.getElementById("myRange").oninput = canviarVolum;



function canviarVolum() {
    //Assignem el valor de l'slider al volum de l'audio
    document.getElementById("boto1").volume = document.getElementById("myRange").value;

    document.getElementById("boto2").volume = document.getElementById("myRange").value;

    document.getElementById("boto3").volume = document.getElementById("myRange").value;

    document.getElementById("boto4").volume = document.getElementById("myRange").value;

    document.getElementById("boto5").volume = document.getElementById("myRange").value;

    document.getElementById("boto6").volume = document.getElementById("myRange").value;

    document.getElementById("boto7").volume = document.getElementById("myRange").value;

    document.getElementById("boto8").volume = document.getElementById("myRange").value;

}



document.getElementById("Play").onclick = playVideo;

function playVideo() {

    if (document.getElementById("video").paused) {
        document.getElementById("video").play()

    }

}

document.getElementById("Pause").onclick = pauseVideo;

function pauseVideo() {

    if (document.getElementById("video").play) {
        document.getElementById("video").pause()

    }

}



// Loop

document.getElementById("Loop").onclick = funcioLoop;



function funcioLoop() {

    if (document.getElementById(ultimBoto).loop == true) { //== Es per comparar
        document.getElementById(ultimBoto).loop = false;
    } else {
        document.getElementById(ultimBoto).loop = true;
    }

}
