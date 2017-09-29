function abrirPag(valor){
    
    let url;
    console.log(valor);
    
    if(valor == null){
         url = "home.html";  
    }else{
        url  =  valor.toElement.id;
        url = "artigos/"+url+"/"+url+".html";
    }
    

    xmlRequest.open("GET",url,true);    
    xmlRequest.onreadystatechange = mudancaEstado;
    xmlRequest.send(null);

    if (xmlRequest.readyState == 1) {
        document.getElementById("conteudo_mostrar").innerHTML = "<img src='images/loader.gif'>";
    }

    return url;
    
}

function mudancaEstado(){
    
    if (xmlRequest.readyState == 4){
        document.getElementById("conteudo_mostrar").innerHTML = xmlRequest.responseText;
    }

}