setTimeout(function (){ // tempo para carregar código html
    var a;
    //artigos recentes
        $.getJSON("artigos/infoRecentes.json",function(obj){

           
            
            obj.recentes.forEach(function(atual,cont){

                //variaveis/inicialização
                a = document.querySelector(String("#campo"+(cont+1)));


                a.setAttribute("href",atual.link);
                a.innerHTML = atual.nome;

            });

        });

    
},300);



function widthPlataforma(){
    return document.querySelector('body').clientWidth;
}
