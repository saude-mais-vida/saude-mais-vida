var id,finishLoading = false;

function abrirPag(valorUrl,valorId){
    id = valorId
    let url =  valorUrl;
    
    
    

    xmlRequest.open("GET",url,true);    
    xmlRequest.onreadystatechange = mudancaEstado;
    xmlRequest.send(null);

    if (xmlRequest.readyState == 1) {
        document.getElementById(id).innerHTML = "<img src='images/loader.gif'>";
    }

    /*
    //Atualiza posição inicial da página
     $(document).ready(function() { 
        window.location.href='#foo';
     });
    */
    return finishLoading;
    
}

function mudancaEstado(){
    
    if (xmlRequest.readyState == 4){
        document.getElementById(id).innerHTML = xmlRequest.responseText;
    }

}